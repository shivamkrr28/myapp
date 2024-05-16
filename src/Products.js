import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

function Products(){

    const userapi = useSelector((state)=>state.counter.userapidata);

    console.log(JSON.stringify(userapi));

    let params = useParams();
    console.log("params=>",params);

    return (
        <>
                <h1>Products Component</h1>
        </>
       
    ); 
}

export default Products;