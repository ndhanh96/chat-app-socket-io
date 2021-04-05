import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';

export default function Chat() {
  const name = useSelector((state) => state.users.name);
  const history = useHistory();

  if (!name) {
    history.push('/');
  }

  return <h1>Welcom to chat room {name}</h1>;
}
