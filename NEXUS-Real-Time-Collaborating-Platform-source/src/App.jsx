import React, { useState } from "react";

const rooms = ["General", "Development", "Design", "Project Team"];

export default function App() {
  const [room, setRoom] = useState("General");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([
    { user: "NEXUS Bot", text: "Welcome to the real-time collaboration space!" },
    { user: "Team Member", text: "Let's start collaborating." }
  ]);

  function sendMessage(e) {
    e.preventDefault();
    if (!message.trim()) return;
    setMessages([...messages, { user: "You", text: message.trim() }]);
    setMessage("");
  }

  return (
    <div className="app">
      <header className="header">
        <div>
          <h1>NEXUS</h1>
          <p>Real-Time Collaborating Platform</p>
        </div>
        <span className="status">● Online</span>
      </header>

      <main className="layout">
        <aside className="sidebar">
          <h3>Collaboration Rooms</h3>
          {rooms.map((item) => (
            <button
              key={item}
              className={room === item ? "room active" : "room"}
              onClick={() => setRoom(item)}
            >
              #{item}
            </button>
          ))}
        </aside>

        <section className="chat">
          <div className="chat-header">
            <div>
              <h2>#{room}</h2>
              <span>Real-time collaboration room</span>
            </div>
            <span className="members">4 members</span>
          </div>

          <div className="messages">
            {messages.map((item, index) => (
              <div className="message" key={index}>
                <strong>{item.user}</strong>
                <p>{item.text}</p>
              </div>
            ))}
          </div>

          <form className="composer" onSubmit={sendMessage}>
            <input
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type a message..."
            />
            <button type="submit">Send</button>
          </form>
        </section>
      </main>

      <footer>
        NEXUS • Secure • Responsive • Scalable
      </footer>
    </div>
  );
}