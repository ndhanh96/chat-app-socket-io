import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
} from 'react-router-dom';
import '../style/Home.scss'

import { setName } from './usersSlice';

export default function Users() {
  const [username, setUserName] = useState('');
  const history = useHistory();
  const name = useSelector((state) => state.users.name);
  const dispatch = useDispatch();

  if (name && !username) {
    dispatch(setName(''));
  }

  return (
    <div className='nameInputBox'>
      
      <form
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(setName(username));
          history.push('/chat');
        }}
        className='nameInputForm'
      >
        <h1>Type your name to chat</h1>
        <input className='nameInput' value={username} onChange={(e) => setUserName(e.target.value)} placeholder='your name goes here...'/>
      </form>
      {name}
    </div>
  );
}
