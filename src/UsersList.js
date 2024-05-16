import { Today } from "@mui/icons-material";
import React, { useEffect, useState } from "react";

function UsersList(){

    const [users, setUsers] = useState([]);

    async function getUsersList(){
        let api = await fetch('https://dummyjson.com/products');
        let result = await api.json();
        console.log("result=>",result);
        setUsers(result.products);
    }

   // getUsersList();

    useEffect(()=>{
      getUsersList();
    },[]);
    return(
        <>
		<button> Add user</button>
        <table>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Title</th>
                    <th>Brand</th>
                    <th>Category</th>
                    <th colspan="2">
                        Action
                    </th>
                </tr>
            </thead>
            <tbody>
            {
            users.map((item)=>{
              return(
                <>
                  <tr>
                        <td>{item.id}</td>
                        <td>{item.title}</td>
                        <td>{item.brand}</td>
                        <td>{item.category}</td>
                        <td>
                        <button>Edit</button>
                        </td>
                        <td>
                        <button>Delete</button>
                        </td>
                  </tr>
                </>
              );

              })
            }
           
            </tbody>
        </table>
        </>
    );

}

export default UsersList;