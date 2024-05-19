import React, { useState, useEffect, useRef, createContext, useContext, useCallback } from 'react';
import "./App.css";
import Navbar from './Navbar.js';
import File from './File.js';
import Task from './Task.js';
import Home from './Home.js';
import react_img from './react_img.jpg';

export const UserContext = createContext();

const App = () => {
  // const [userid, setUserid] = useState('');
  // const [pass, setPass] = useState('');

  let userid = useRef(null);
  let pass = useRef(null);

  function savebtn(event){

    event.preventDefault();

    console.log("useref=>",userid.current.value);
    console.log("pass=>",pass.current.value);

    let id = userid.current.value;
    let ps = pass.current.value;

    // console.log("pass=>",pass);

    if(id==''){
      alert("userid empty!");
      return false;
    }

    if(ps==''){
      alert("pass empty!");
      return false;
    }
    
    alert("submitted!");

  }
  return (
    <UserContext.Provider value={{val1:"test"}}>     
    <Navbar />  
   <br />
   <br />
   <br />
   <img src={react_img} style={{width:"100%", height:"200px"}} className="" alt="logo" />
   {/* <form>
    Userid :<input type="text" ref={userid}  /><br />
    Password :<input type="password" ref={pass} /><br />
    <button onClick={savebtn}>Submit</button>
   </form> */}
    </UserContext.Provider>

  );
};

export default App;
