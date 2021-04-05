import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { io } from 'socket.io-client';
const socket = io('http://localhost:3001/');

export default function Chat() {
  const [chatList, setChatList] = useState('');
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

  useEffect(() => {
    setNameForSockIO();
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
    </>
  );
}
