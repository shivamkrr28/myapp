import React, { useEffect, useState } from "react";
import axios from "axios";

function UseFetch(api){

    const[data, setdata] = useState("");
  
    useEffect(()=>{
        
      async function getdata(api){
            let items = await axios.get(api);
          //  let result = await items.data;
            console.log("result=>",items);
            setdata(items);
      }
      getdata(api);       
    },[]);

    return [data];

}

export default UseFetch;