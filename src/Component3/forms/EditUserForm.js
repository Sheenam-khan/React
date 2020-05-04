import React, { useState, useEffect } from "react";
import Input from 'antd/es/input';
const EditUserForm = props => {
  const [user, setUser] = useState(props.currentUser);

  useEffect(
    () => {
      setUser(props.currentUser);
    },
    [props]
  );

  const handleInputChange = event => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  return (
    <form
      onSubmit={event => {
        event.preventDefault();
        props.updateUser(user.id, user);
      }}
    >
      <label>Name</label>
      <Input
      size="small"
        type="text"
        name="name"
        value={user.name}
        onChange={handleInputChange}
      />
      <br></br>
      <br></br>
      <label>Username</label>
      <Input
      size="small"
        type="text"
        name="username"
        value={user.username}
        onChange={handleInputChange}
      />
      <br></br>
      <br></br>
      <button>Update user</button>
      <button
        onClick={() => props.setEditing(false)}
        className="button muted-button"
      >
        Cancel
      </button>
    </form>
  );
};

export default EditUserForm;
