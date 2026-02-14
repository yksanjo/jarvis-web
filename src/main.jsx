import React from 'react';
import ReactDOM from 'react-dom/client';

function App() {
  return (
    <div style={{ padding: '20px' }}>
      <h1 style={{ color: '#58A6FF', marginBottom: '20px' }}>🤖 Jarvis Web</h1>
      <p style={{ color: '#8B949E' }}>Your Personal AI Assistant</p>
      <div style={{ marginTop: '20px', display: 'grid', gap: '15px', maxWidth: '300px' }}>
        <button style={btnStyle}>📋 Tasks</button>
        <button style={btnStyle}>📅 Calendar</button>
        <button style={btnStyle}>💬 Chat</button>
        <button style={btnStyle}>⚙️ Settings</button>
      </div>
    </div>
  );
}

const btnStyle = {
  padding: '15px',
  background: '#161B22',
  border: '1px solid #30363D',
  borderRadius: '8px',
  color: '#F0F6FC',
  fontSize: '16px',
  cursor: 'pointer',
  textAlign: 'left',
};

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
