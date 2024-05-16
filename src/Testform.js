import { useState } from "react";
import vote_img from './vote.avif';

function Testform(){

    const [userid,setUserid] = useState("");
    const [pass,setPass] = useState("");

    const[file,setFile] = useState("");

    function uploadFiles(e){
        console.log("uploading...",e.target.files);
        setFile(e.target.files[0]);
        //return false;
        e.preventDefault();
    }



    function saveForm(){       
        if(userid==""){
            alert("userid is blank!");
         //   return false;
        }
        if(pass==""){
            alert("password is blank!");
            return false;
        }

    }

    console.log("+++++");

    return(
        <>
        {/* React JS Form */}
        <br />
        <br />
        <form>
            File Upload: <input type="file" multiple onChange={uploadFiles}/>
            {
                file!=''? <img src={URL.createObjectURL(file)} style={{width:"200px", height:"100px"}} /> : ""
            }            
            <br />
            Username : <input type="text" onChange={(e)=>setUserid(e.target.value)} /><br />
            Password : <input type="password"  onChange={(e)=>setPass(e.target.value)}/>  <br />
            <button onClick={saveForm}>Login</button>
        </form>
        </>
    );
}

export default Testform;