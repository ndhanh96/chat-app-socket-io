import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { io } from 'socket.io-client';
const socket = io('http://localhost:3001/');

export default function Chat() {
  const [chatList, setChatList] = useState('');
  const [receivemsg, SetReceivemsg] = useState([]);
  const [chatmsg, setChatmsg] = useState([]);
  const name = useSelector((state) => state.users.name);
  const history = useHistory();

  if (!name) {
    history.push('/');
  }

  socket.on('serverSent', (arg) => {
    // console.log(arg)
    SetReceivemsg(arg);
  });

  useEffect(() => {
    // setChatmsg(receivemsg);
    console.log(receivemsg);
    // console.log(chatmsg);
    setChatmsg(oldmsg => [...oldmsg, receivemsg])
    console.log(chatmsg)
  }, [receivemsg]);

  return (
    <>
      <h1>Welcome to chat room {name}</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();

          socket.emit('clientSent', { name: name, msg: chatList });
          setChatList('');
        }}
      >
        <input value={chatList} onChange={(e) => setChatList(e.target.value)} />
      </form>
      <ul>
        {chatmsg.map((msg) => (
          <li>{`${msg[0]}: ${msg[1]}`}</li>
        ))}
      </ul>
    </>
  );
}
