export default function MeetingControls({ sendMessage, input, setInput }) {
    return (
        <div>
            <input value={input} onChange={(e) => setInput(e.target.value)} />
            <button onClick={sendMessage}>Send</button>
        </div>
    );
}