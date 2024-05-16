import React, { useState } from "react";

function File(){

    const[file,setFile] = useState("");

    function uploadFiles(e){
        console.log("uploading...",e.target);
        setFile();
    }

    return(
        <>
        <h5>File Component</h5>
        <input type="file" />
        <button onClick={uploadFiles}>Upload</button>
        </>
    );
}

export default File;