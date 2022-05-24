import React, { useEffect, useState } from 'react'
import logo from './logo.svg';
import './App.css';
import io from 'socket.io-client';
import { print } from './Accessories/LogFormatting';
import Chat from './Components/Chat';

function App() {

  const [socket] = useState(() => io(':8000'));

  useEffect( () => {
    print('Is this thing on?');
    socket.on('Welcome', data => console.log(data));
    return () => socket.disconnect(true);
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <main>
        <h1>Stick that in your socket!</h1>
      </main>
      <Chat />
    </div>
  );
}

export default App;
