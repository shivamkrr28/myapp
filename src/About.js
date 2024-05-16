import React from 'react';
import { useNavigate } from 'react-router-dom';

function About(){

    const id=5;
    const name ='shivam';
    const navigate = useNavigate();

    function navigateFun(){
        navigate('/',{state:{car:id,name:name}});
    }

    return (
        <>
                <h1>About Component</h1>

                <button onClick={navigateFun}>Go to Home</button>
        </>
        
    ); 
}

export default About;