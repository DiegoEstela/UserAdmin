import React, {useEffect, useState} from "react";
import getAllUser from "../../api/services/services";

function AdminView() {
  const [users, setUsers] = useState()
  
  function updateUser(){
    getAllUser()
    .then((data)=>{
      setUsers(data)
    })
    .catch((err)=>{
      console.log("error en actualizar users", err)
    })
  }

  useEffect(()=>{
    updateUser()
   
  },[])
  
  return (
    <div>
      <h1> Admin View</h1>
      
      <button>Agregar Usuario</button>
      <table>
        <thead>
          <tr>
            <th>User</th>
            <th>Rol</th>
            <th>vistas</th>
          </tr>
        </thead>
        <tbody>  
          {users && users.map((user, index)=> (
            <tr key={index}> 
            <td>{user.email}</td>
            <td>{user.rol}</td>
            <td>{user.vistas}</td>
            <td>
              <button>Editar</button>
              <button>Eliminar</button>
  
            </td>
            
            </tr>
          
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AdminView;
