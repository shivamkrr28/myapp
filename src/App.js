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
      <h1>S01 text</h1>
    <Navbar />  

    {/* <Testform /> */}
    {/* <React1 /> */}
    <br />

    {/* <span>---Task---</span> */}
    <br />
    <h1>S01 change</h1>
    {/* <Task /> */}
    {/* <Home /> */}
    <UsersList />
    </UserContext.Provider>

  );
};

export default App;
