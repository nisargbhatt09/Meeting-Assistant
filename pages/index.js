// import { useState } from 'react';
// import io from 'socket.io-client';

// const socket = io("ws://localhost:8000/ws/demo-meeting");

// export default function Meeting() {
//     const [messages, setMessages] = useState([]);
//     const [input, setInput] = useState("");

//     socket.on("message", (data) => {
//         setMessages((prev) => [...prev, JSON.parse(data)]);
//     });

//     const sendMessage = () => {
//         socket.send(input);
//         setInput("");
//     };

//     return (
//         <div>
//             <h1>Meeting Assistant</h1>
//             <div>
//                 {messages.map((msg, idx) => (
//                     <p key={idx}>{msg.transcript}</p>
//                 ))}
//             </div>
//             <input value={input} onChange={(e) => setInput(e.target.value)} />
//             <button onClick={sendMessage}>Send</button>
//         </div>
//     );
// }

import { useState, useEffect } from 'react';
import io from 'socket.io-client';
import axios from 'axios';

const socket = io("ws://localhost:8000/ws/demo-meeting");

export default function Meeting() {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState("");
    const [summary, setSummary] = useState("");

    useEffect(() => {
        socket.on("message", (data) => {
            const parsedData = JSON.parse(data);
            setMessages((prev) => [...prev, parsedData.transcript]);
            setSummary(parsedData.summary);
        });
    }, []);

    const sendMessage = () => {
        socket.send(input);
        setInput("");
    };

    return (
        <div>
            <h1>Meeting Assistant</h1>
            <div>
                <h2>Transcript:</h2>
                {messages.map((msg, idx) => (
                    <p key={idx}>{msg}</p>
                ))}
            </div>
            <div>
                <h2>Summary:</h2>
                <p>{summary}</p>
            </div>
            <input value={input} onChange={(e) => setInput(e.target.value)} />
            <button onClick={sendMessage}>Send</button>
        </div>
    );
}