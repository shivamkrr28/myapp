import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, increment2, update, fetchapi } from './features/counter/counterSlice';

import { useLocation } from 'react-router-dom';

function Home(props){

    const count = useSelector((state)=>state.counter.value);
    
    const mystore = useSelector((state)=>state.counter0);
   
    console.log("mystore=>",mystore);

    const userapi = useSelector((state)=>state.counter.userapidata);

    // console.log(JSON.stringify(userapi));

    const dispatch = useDispatch();

    // const location = useLocation();
    // console.log("location=>",location);
    
    return (
        <>
                {/* <h1>Component</h1> */}
                {/* {JSON.stringify(userapi)} */}
                <h1>{count}</h1>
                <button onClick={()=>dispatch({type: 'counter/increment', payload: 1})}>Increment</button>
                <button onClick={()=>dispatch({type: 'counter/decrement', payload: 1})}>Decrement</button>
                <button onClick={()=>dispatch(fetchapi())}>Click</button>
                <br></br>
                <button onClick={()=>dispatch({type: 'counter/increment2', payload: 1})}>IncrementCountValue</button>
<br />
                <h1>{mystore}</h1>
               

                

        </>     
       
    ); 
}

export default Home;