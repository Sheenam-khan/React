import 'antd/dist/antd.css'
import React, { useState } from "react";
import Form from 'antd/es/form'
import Button from 'antd/es/button'
import Input from 'antd/es/input';
import { UserOutlined } from '@ant-design/icons';
 

const AddUserForm = props => {
  const initialFormState = { id: null, name: "", username: "" };
  const [user, setUser] = useState(initialFormState);

  const handleInputChange = event => {
    const { name, value } = event.target;

    setUser({ ...user, [name]: value });
    console.log(user)
  };

  return (
    <form
      onSubmit={event => {
        event.preventDefault();
        if (!user.name || !user.username) return;
        props.addUser(user);
        console.log(user)
        setUser(initialFormState);
      }}
    >
      <label>Name</label>
      <div style={{ marginBottom: 16 }}>
        <Input
        prefix={<UserOutlined />} 
      size="small"
        type="text"
        name="name"
        value={user.name}
        onChange={handleInputChange}
      /></div>

      <label>Username</label>
         <div style={{ marginBottom: 16 }}><Input
       size="small"
        type="text"
        name="username"
        value={user.username}
        prefix={<UserOutlined />} 
        onChange={handleInputChange}
      />
      </div>
      <button>Add new user</button>
    </form>
  );
};

export default AddUserForm;
