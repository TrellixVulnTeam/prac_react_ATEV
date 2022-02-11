import React from 'react';
import Counter from './Counter';
import './App.css';
import { Button } from 'antd';
import Message from "./Message";
import Profile from "./Profile";

function App() {
  return (
     <div>
       <Message></Message>
       <Profile></Profile>
       <Counter></Counter>
     </div>
  );
}

export default App;

