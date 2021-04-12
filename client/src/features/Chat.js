import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { io } from 'socket.io-client';
import '../style/Chat.scss';
const socket = io('https://randomass.xyz/');

export default function Chat() {
  const [myMsg, setmyMsg] = useState('');
  const [receivemsg, SetReceivemsg] = useState([]);
  const [chatmsg, setChatmsg] = useState([]);
  const msgview  = useRef(null);
  const name = useSelector((state) => state.users.name);
  const history = useHistory();

  if (!name) {
    history.push('/');
  }

  const scrollToMsg = () => {
    msgview.current.scrollIntoView();
  };

  socket.on('serverSent', (arg) => {
    // console.log(arg)
    SetReceivemsg(arg);
  });

  useEffect(() => {
    if (receivemsg.length > 0) {
      setChatmsg((oldmsg) => [...oldmsg, receivemsg]);
    }
  }, [receivemsg]);

  useEffect(() => {
    if (chatmsg.length > 0) {
      let hashName = chatmsg[chatmsg.length - 1][2];
      scrollToMsg();
      console.log(hashName);
    } 
  }, [chatmsg]);

  return (
    <div className='chatBox'>
      <h1>Welcome to chat room {name}</h1>
      <ul>
        {chatmsg.length !== 0
          ? chatmsg.map((msg) => (
              <li ref={msgview} id={msg[2]} key={msg[2]}>
                {' '}
                <span className='sender'>{msg[0]}</span> {`: ${msg[1]}`}
              </li>
            ))
          : ''}
      </ul>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (myMsg) {
            socket.emit('clientSent', { name: name, msg: myMsg });
            setChatmsg((oldmsg) => [
              ...oldmsg,
              [name, myMsg, Date.parse(new Date())],
            ]);
          }
          setmyMsg('');
        }}
      >
        <input
            value={myMsg}
          onChange={(e) => setmyMsg(e.target.value)}
        />
        <button type='submit'>Send</button>
      </form>
    </div>
  );
}
