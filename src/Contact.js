import React, { useState } from 'react';
import { useSelector } from 'react-redux';


function Contact(props){

 
    // console.log("callback working...",props.getstatus);
    // console.log("counter...",props.counter);
    const apidata = useSelector((state)=>state.counter.value);
    // console.log("contact=>",apidata);
    return (
        <>
            <h1>Contact Component</h1>


        </>        
    ); 
}

export default Contact;