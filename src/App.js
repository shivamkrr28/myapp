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

  const [name, setName] = useState("chudail");

  const [like, setLike] = useState(0);

  const [pass, setPass] = useState(0);

  // useEffect(()=>{
  //  console.log("ayushi developer"); 
  // },[like]);

  return (
    <UserContext.Provider value={{val1:text}}>
    <Navbar />  


    <br />
    <button onClick={()=>setLike(!like)}>{like==0?"Dislike":"Liked"}</button>
    <button onClick={()=>setName("Ayushi")}>getName</button>
    
      

    <br/>
    <input type={pass==0?"password":"text"} /> <button onClick={()=>setPass(!pass)}>{pass == 0?"show":"hide"}</button>

    <h1>{name}</h1>
   
    <UsersList name={name} />
    </UserContext.Provider>

  );
};

export default App;