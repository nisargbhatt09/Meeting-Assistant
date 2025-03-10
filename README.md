# Meeting Assistant

A real-time meeting transcription and summarization tool that provides instant meeting summaries using AI.

## Features

- Real-time meeting transcription
- Automatic meeting summarization using Ollama
- WebSocket-based live updates
- Meeting history and summary retrieval
- Modern React-based frontend
- FastAPI backend with PostgreSQL storage

## Prerequisites

- Python 3.8+
- Node.js 14+
- PostgreSQL
- Ollama

## Setup

### Backend Setup

1. Navigate to the backend directory:
```bash
cd backend
```

2. Install Python dependencies:
```bash
pip install fastapi uvicorn sqlalchemy psycopg2-binary ollama websockets
```

3. Configure the database:
   - Create a PostgreSQL database
   - Update the `DATABASE_URL` in `backend/database.py` with your credentials:
   ```python
   DATABASE_URL = "postgresql://user:password@localhost/dbname"
   ```

4. Start the backend server:
```bash
uvicorn main:app --reload
```

### Frontend Setup

1. Navigate to the frontend directory:
```bash
cd frontend
```

2. Install Node.js dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

## Usage

1. Access the application at `http://localhost:3000`
2. Start a new meeting session
3. Begin speaking or typing in the meeting
4. View real-time transcription and AI-generated summaries
5. Access meeting summaries later using the meeting ID

## API Endpoints

- `GET /` - Home endpoint
- `POST /start_meeting/` - Start a new meeting session
- `WebSocket /ws/{meeting_id}` - Real-time meeting updates
- `GET /meeting_summary/{meeting_id}` - Retrieve meeting summary

## Project Structure

```
meeting-assistant/
├── backend/
│   ├── main.py         # FastAPI application
│   └── database.py     # Database models and configuration
├── frontend/
│   ├── pages/
│   │   ├── index.js    # Main meeting page
│   │   └── summary.js  # Meeting summary page
│   └── utils/
│       └── api.js      # API utilities
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## License

This project is licensed under the MIT License. 
