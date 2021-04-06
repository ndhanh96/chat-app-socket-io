import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { io } from 'socket.io-client';

const socket = io('http://localhost:3001/');

export default function Chat() {
  const [chatList, setChatList] = useState('');
  const [chatmsg, setChatmsg] = useState([]);
  const name = useSelector((state) => state.users.name);
  const history = useHistory();

  if (!name) {
    history.push('/');
  }

  const setNameForSockIO = async () => {
    if (name) {
      try {
        const response = await axios.post('http://localhost:3001/chat', {
          username: name,
        });
      } catch (error) {
        console.error(error);
      }
    }
  };

  socket.on('incomingmsg', (arg) => {
    if (chatmsg[chatmsg.length - 1] !== arg) {
      console.log(chatmsg[chatmsg.length - 1])
      setChatmsg((oldmsg) => [...oldmsg, arg]);
      
    }
  });

  useEffect(() => {
    setNameForSockIO();
    
    console.log('run effect');
  }, [name]);

  return (
    <>
      <h1>Welcome to chat room {name}</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          socket.emit('chat', chatList);
        }}
      >
        <input value={chatList} onChange={(e) => setChatList(e.target.value)} />
      </form>
      <ul>
        {chatmsg.map((msg) => (
          <li>{msg}</li>
        ))}
      </ul>
    </>
  );
}
