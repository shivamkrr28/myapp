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
    <button> Change of branch Main</button>
    <button> Change of branch S02</button>
    <br />

    <h1>S01 change</h1>

    {/* <Task /> */}
    {/* <Home /> */}
    <h1>S02 text</h1>
    <UsersList />
    <h1>main change</h1>
    </UserContext.Provider>

  );
};

export default App;