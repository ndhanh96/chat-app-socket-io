import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { io } from 'socket.io-client';
const socket = io('http://localhost:3001/');

export default function Chat() {
  const [myMsg, setmyMsg] = useState('');
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
    if (receivemsg.length > 0) {
      setChatmsg((oldmsg) => [...oldmsg, receivemsg]);
    }
    
  }, [receivemsg]);

  return (
    <>
      <h1>Welcome to chat room {name}</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if(myMsg) {
            socket.emit('clientSent', { name: name, msg: myMsg });
            setChatmsg((oldmsg) => [...oldmsg, [name, myMsg, Date.parse(new Date())]]);
          }
          setmyMsg('');
        }}
      >
        <input value={myMsg} onChange={(e) => setmyMsg(e.target.value)} />
      </form>
      {chatmsg.length !== 0 ? (
        <ul>
          {chatmsg.map((msg) => (
            <li key={msg[2]} >{`${msg[0]}: ${msg[1]}`}</li>
          ))}
        </ul>
      ) : (
        ''
      )}
    </>
  );
}
