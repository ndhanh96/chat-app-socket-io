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

import { setName } from './usersSlice';

export default function Users() {
  const [username, setUserName] = useState('');
  const history = useHistory();
  const name = useSelector((state) => state.users.name);
  const dispatch = useDispatch();
  
  if (name && !username) {
    dispatch(setName(''))
  }

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(setName(username))
          history.push('/chat')
        }}
      >
        <input value={username} onChange={(e) => setUserName(e.target.value)} />
      </form>
      {name}
    </div>
  );
}
