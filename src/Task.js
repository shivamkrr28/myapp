import { useRef, useState } from "react";

function Task(){

    
  const [data, setData] = useState({});
  const [count, setCount] = useState(null);
  const [btn, setBtn] = useState(true);
  
  console.log("<==>");
  console.log("curet state=>",count);

  // async function showPost(){
  //   let apiurl = 'https://dummyjson.com/products/1';

  //   let api = await fetch(apiurl);
  //   let res = await api.json();
  //   // console.log("res=>",res);  
  //   setData(res);
  //   console.log("data=>",data);   
  // }  

  function getStatus(){
    return "hello ji";
  }

  // function updatestate(){

  //   setCount(prev => prev + 1);

  //   // setCount(count + 1);

    
  // console.log("prevous state=>",count);

  // }

  // const [color, setColor] = useState("");
     const [text, setText] = useState(true);
    //  const [pass, setPass] = useState(true);
    // const [like, setLike] = useState(true);

    const [task, setTask] = useState([]);

  // const countries = [
  //   { name: "United States", states: ["California", "New York", "Texas"] },
  //   { name: "India", states: ["Karnataka", "Maharastra", "Uttar Pradesh"] },
  //   { name: "Mexico", states: ["Mexico City", "Guadalajara", "Monterrey"] },
  // ];

  const colors = ['black','red','yellow','green','pink','blue'];

  // function changeText(e){
  //   if(e.target.value.length>5){
  //       setText(false); 
  //   }else{
  //     setText(true); 
  //   }
  // }


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

          {/* {
            task.map((item)=>{
             return <span>{item.name}</span>
            })
          } */}

        {/* <button onClick={()=>setLike(!like)}>{like == true ? "Liked":"Like"}</button>  */}
    
        {/* Text : <input type={pass == true ? "password" : "text"} />
        <button onClick={()=>setPass(!pass)}>{pass == true ? "Show":"Hide"} Password</button> */}

        {/* Text : <input type="text" onChange={changeText} />
        <button disabled={text}>Submit</button> */}
        {/* <span style={{color:color}}>Shivam Kr</span> */}
        <br/>
        {/* {
          colors.map((item)=>{
              return <>                           
                      <button onClick={()=>setColor(item)}>{item}</button>                            
              </>
          })
        } */}

        {/* <select>
                {
                    countries.map((item)=>{
                        return <>                           
                                <option>{item.name}</option>                            
                        </>
                    })
                }
        </select>

        <select>
        <option>Select State</option>  
                {
                    countries.map((item)=>{
                        return <>                           
                                <option>State1</option>                            
                        </>
                    })
                }
        </select> */}

        </>
    );

}

export default Task;