from fastapi import FastAPI, WebSocket, Depends
from pydantic import BaseModel
from typing import List
import ollama
import json

app = FastAPI()

@app.get("/")
def home():
    return {"message": "Welcome to the Meeting Assistant API!"}

# In-memory storage for demo
meetings = {}

def summarize_meeting(content: str):
    response = ollama.chat("summarize", content)
    return response["summary"]

@app.post("/start_meeting/")
def start_meeting(meeting_id: str):
    meetings[meeting_id] = {"transcript": "", "summary": ""}
    return {"message": "Meeting started", "meeting_id": meeting_id}

@app.websocket("/ws/{meeting_id}")
async def websocket_endpoint(websocket: WebSocket, meeting_id: str):
    await websocket.accept()
    while True:
        data = await websocket.receive_text()
        meetings[meeting_id]["transcript"] += data + "\n"
        meetings[meeting_id]["summary"] = summarize_meeting(meetings[meeting_id]["transcript"])
        await websocket.send_text(json.dumps(meetings[meeting_id]))

@app.get("/meeting_summary/{meeting_id}")
def get_meeting_summary(meeting_id: str):
    return meetings.get(meeting_id, {"message": "Meeting not found"})