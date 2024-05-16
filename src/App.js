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

// console.log("rendering...");
// 10>
// alpha num
// lower Char
// upper Char
// no combinat aa,AA,22


  return (
    <UserContext.Provider value={{val1:text}}>
    <Navbar />  
    {/* <Testform /> */}
    {/* <React1 /> */}
    <br />

    {/* <span>---Task---</span> */}
    <br />
    {/* <Task /> */}
    {/* <Home /> */}
    <UsersList />
    </UserContext.Provider>

  );
};

export default App;