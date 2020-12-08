import './App.css';
import Chat from './components/Chat/Chat';
import Sidebar from './components/Sidebar/Sidebar';
import Pusher from 'pusher-js';
import React, { useEffect, useState } from 'react';
import axios from './axios';

function App() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    axios.get('/messages/sync').then((response) => {
      setMessages(response.data);
    });
  }, []);

  useEffect(() => {
    Pusher.logToConsole = true;

    const pusher = new Pusher('aa0f301a21b25380fc83', {
      cluster: 'eu',
    });

    const channel = pusher.subscribe('messages');
    channel.bind('inserted', function (data) {
      alert(JSON.stringify(data));
    });
  }, []);

  console.log(messages);

  return (
    <div className="app">
      <div className="app__body">
        <Sidebar />
        <Chat />
      </div>
    </div>
  );
}

export default App;
