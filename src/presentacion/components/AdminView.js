import React, { useEffect, useState } from "react";
import getAllUser from "../../api/services/services";
import {deleteUser} from "../../api/services/CreateUser"
import { Modal, Button, Icon, Title} from "@umahealth/occipital-ui";
import ModalSingUp from "./ModalSingUp/ModalSingUp";


function AdminView() {
  const [users, setUsers] = useState();
  const [modal, setModal] = useState();

  function updateUser() {
    getAllUser()
      .then((data) => {
        setUsers(data);
      })
      .catch((err) => {
        console.log("error en actualizar users", err);
      });
  }

  useEffect(() => {
    updateUser();
  }, []);

  return (
    <div>
      <h1> Admin View</h1>

      <Button 
      size="large"
      action={()=> setModal(true)}
      >add user</Button>
      <table>
        <thead>
          <tr>
            <th>User</th>
            <th>Rol</th>
            <th>Vistas</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>
          {users &&
            users.map((user, index) => (
              <tr key={index}>
                <td>{user.email}</td>
                <td>{user.rol}</td>
                <td>{user.vistas}</td>
                <td>
                  <Icon color="primary" name="pencil" size="sm" />
                  <Icon color="primary" name="trash" color="error" size="sm" action={deleteUser(user)}/>
                  
                </td>
              </tr>
            ))}
        </tbody>
      </table>
      {modal && <Modal width="50%"
          onClose={() => setModal(false)}
        >
          <ModalSingUp/>
      </Modal>}
      
    </div>
  );
}

export default AdminView;
