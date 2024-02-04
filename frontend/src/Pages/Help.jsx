import React, { useState } from 'react';
import './Help.css';
import axios from 'axios';

function Help() {
  const [messages, setMessages] = useState([
    { text: 'Hello! How can I assist you today?', sender: 'bot' }
  ]);
  const [inputValue, setInputValue] = useState('');

  const sendMessage = async () => {
    if (inputValue.trim() === '') return;

    const requestBody = {
      "inputs": inputValue
    };

    const headers = {
      // 'Authorization': 'Bearer 3PrkrKr-FXuG9OhsumfKHAxAW0iJpz-pp6H_qHBS',
      // 'Content-Type': 'application/json',
      // 'Access-Control-Allow-Origin':'*',
      // "Access-Control-Allow-Methods": "GET,HEAD,POST,OPTIONS",
      // "Access-Control-Max-Age": "86400",
      Authorization: "Bearer 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" 
    };

    try {
      const response = await axios.post('https://api-inference.huggingface.co/models/tiiuae/falcon-7b-instruct', requestBody, { headers });

      // Update messages with bot response
      setMessages(prevMessages => [
        ...prevMessages,
        { text: response.data.messages[0].content, sender: 'bot' }
      ]);

      setInputValue('');
    } catch (error) {
      console.error('Error sending message:', error);
      // Handle error as needed
    }
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div className="chat-container">
      <div className="messages-container">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`message ${message.sender === 'bot' ? 'bot' : 'user'}`}
          >
            {message.text}
          </div>
        ))}
      </div>
      <div className="input-container">
        <input
          type="text"
          placeholder="Type your message..."
          value={inputValue}
          onChange={handleInputChange}
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
}

export default Help;
