import React, { useState, useEffect, createContext, useContext, useCallback } from 'react';
import "./App.css";
import Navbar from './Navbar.js';
import File from './File.js';
import Testform from './Testform.js';
import Task from './Task.js';
import React1 from './React1.js';
import Home from './Home.js';
import UsersList from './UsersList.js';

export const UserContext = createContext();

const App = () => {
  const [text, setText] = useState([]);

  return (
    <UserContext.Provider value={{val1:text}}>
    <Navbar />  

    {/* <Testform /> */}
    {/* <React1 /> */}
    <br />

    <button> Change of branch S02</button>

    {/* <span>---Task---</span> */}
    <br />
    <button> Change2 with branch S02</button>
    {/* <Task /> */}
    {/* <Home /> */}
    <h1>S02 text</h1>
    <UsersList />
    </UserContext.Provider>

  );
};

export default App;