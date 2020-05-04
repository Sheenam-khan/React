import 'antd/dist/antd.css'
import React, { useState } from "react";
// import UserTable from "./Component3/tables/UserTable";
import AddUserForm from "./Component3/forms/AddUserForm";
import EditUserForm from "./Component3/forms/EditUserForm";
import UserTable from "./Component3/tables/UserTable";

const App = () => {
  const usersData = [
    { id: 1, name: "AAA", username: "aiueo" },
    { id: 2, name: "BBB", username: "kakikukeko" },
    { id: 3, name: "CCC", username: "sasisuseso" },
    { id: 4, name: "AAA", username: "aiueo" },
    { id: 5, name: "BBB", username: "kakikukeko" },
    { id: 6, name: "CCC", username: "sasisuseso" },
    { id: 7, name: "AAA", username: "aiueo" },
    { id: 8, name: "BBB", username: "kakikukeko" },
    { id: 9, name: "CCC", username: "sasisuseso" },
    { id: 10, name: "AAA", username: "aiueo" },
    { id: 11, name: "BBB", username: "kakikukeko" },
    { id: 12, name: "CCC", username: "sasisuseso" },
    { id: 13, name: "CCC", username: "sasisuseso" },
    { id: 14, name: "AAA", username: "aiueo" },
    { id: 15, name: "BBB", username: "kakikukeko" },
    { id: 16, name: "CCC", username: "sasisuseso" },
    { id: 17, name: "AAA", username: "aiueo" },
    { id: 18, name: "BBB", username: "kakikukeko" },
    { id: 19, name: "CCC", username: "sasisuseso" },
    { id: 20, name: "AAA", username: "aiueo" },
  ];
 
  const [users, setUsers] = useState(usersData);

 
  const addUser = user => {
    console.log(user)
    user.id = users.length + 1;
    setUsers([...users, user]);
  };
 
  const deleteUser = id => {
    setUsers(users.filter(user => user.id !== id));
  };
 
  const [editing, setEditing] = useState(false);
  const initialFormState = { id: null, name: "", username: "" };
  

  const [currentUser, setCurrentUser] = useState(initialFormState);

   const editRow = user => {
    setEditing(true);
    setCurrentUser({ id: user.id, name: user.name, username: user.username });
  };

  
  const updateUser = (id, updateUser) => {
    setEditing(false);
    setUsers(users.map(user => (user.id === id ? updateUser : user)));
  };

  return (
    <div className="container">
      <h1>CRUD App with Hooks</h1>
      <div className="flex-row">
        <div className="flex-large">
          {editing ? (
            <div>
              <h2>Eidt User</h2>
              <EditUserForm
                editing={editing}
                setEditing={setEditing}
                currentUser={currentUser}
                updateUser={updateUser}
              />
            </div>
          ) : (
            <div>
              <h2>Add User</h2>
              <AddUserForm addUser={addUser} />
            </div>
          )}
        </div>
        <div className="flex-large">
          <h2>View users</h2>

          <UserTable users={users} deleteUser={deleteUser} editRow={editRow} />
        </div>
      </div>
    </div>
  );
};
export default App;
