import { useRef, useState } from "react";

function Task(){

  const [data, setData] = useState({});
  const [count, setCount] = useState(null);
  const [btn, setBtn] = useState(true);  
  
  const [name, setName] = useState("chudail");

  const [like, setLike] = useState(0);

  const [pass, setPass] = useState(0);

  function getStatus(){
    return "hello ji";
  }

     const [text, setText] = useState(true);

     const [task, setTask] = useState([]);

      let inpref=useRef();

      function addTask(){
        let val = inpref.current.value;
        let obj = {name:val}
        setTask([...task,obj]);

        console.log("obj=>",val);

        inpref.current.value='';
      }
      
      function closeTask(elem){
        let data =  task.filter(item=> item.name!==elem);

        setTask(data);
          console.log("items=>",task);

      }

    return (
        <>   
        <br />
        <input type="text" ref={inpref} />
        <button onClick={addTask}>Add Task</button>
        {
          
          task.map((items)=>(
             <>
                  {/* <span>{items.id}</span> */}
                  <ul>
                    <li><span>{items.name} <button onClick={()=>closeTask(items.name)}>Close</button></span> </li>
                  </ul>                  
             </>
             
          ))
        }

        <br />
        <button onClick={()=>setLike(!like)}>{like==0?"Dislike":"Liked"}</button>
        <br/>
        <button onClick={()=>setName("Ayushi")}>getName</button>
        <br/>
        <input type={pass==0?"password":"text"} /> <button onClick={()=>setPass(!pass)}>{pass == 0?"show":"hide"}</button>
        <br/>

        {/* <h1>{name}</h1> */}

        </>
    );

}

export default Task;