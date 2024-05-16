import { useCallback, useState } from 'react';
import './App.css';
import Child from './Child';
const Testing = () =>{
    
    const [counter,setCounter] = useState("some");

    console.log("parent working...");

    const learning = useCallback(()=>{
      //  console.log("learning fun is working...");
    },[counter]);

    const save =()=>{
      setCounter(5);
    }

    console.log("some value==>",counter);

  return (
    <div>
        <h2>Testing Component </h2>
        {/* <h2>{countNum}</h2> */}       
        <button onClick={save}>Click
           </button>
           <h2> {counter} </h2>
           {/* <Child param={learning} /> */}
    </div>
  );

}

export default Testing;
