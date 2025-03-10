export default function ChatBox({ messages }) {
    return (
        <div>
            <h2>Chat Transcript</h2>
            {messages.map((msg, idx) => (
                <p key={idx}>{msg}</p>
            ))}
        </div>
    );
}