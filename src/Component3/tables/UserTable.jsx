
import 'antd/dist/antd.css'
import React from "react";
import  Table  from 'antd/es/table'
import  Button from 'antd/es/button';
import { EditOutlined } from '@ant-design/icons';
import { DeleteOutlined } from '@ant-design/icons';
 


const UserTable = props => {


const columns = [
  {
    title: 'ID',
    dataIndex: 'id', 
    render: text => <a>{text}</a>,
  },
  {
    title: 'Name',
    dataIndex: 'name',
  },
  {
    title: ' User Name',
    dataIndex: 'username',
  },
  {title:'Actions',
  dataIndex:'action',
  render:(action,record)=>{
 
     console.log(action,record)
      return (
        <>
<Button   type="primary"  onClick={()=>props.editRow(record)}  icon={<EditOutlined/>} /> | <Button  type="danger" onClick={()=>props.deleteUser(record.id)} icon={<DeleteOutlined/>}   /> 
        </>
      )
    }
  }
];
return (
  <div>
   <Table    
  columns={columns}
  dataSource={props.users.map(
      user=>{
          return user
      }
  )}
 
/>   
  </div>

  // <table>
  //   <thead>
  //     <tr>
  //       <th>Name</th>
  //       <th>Username</th>
  //       <th>Actions</th>
  //     </tr>
  //   </thead>
  //   <tbody>
  //     {props.users.length > 0 ? (
  //       props.users.map(user => (
  //         <tr key={user.id}>
  //           <td>{user.name}</td>
  //           <td>{user.username}</td>
  //           <td>
  //             <button
  //               className="button muted-button"
  //               onClick={() => props.editRow(user)}
  //             >
  //               Edit
  //             </button>
  //             <button
  //               className="button muted-button"
  //               onClick={() => props.deleteUser(user.id)}
  //             >
  //               Delete
  //             </button>
  //           </td>
  //         </tr>
  //       ))
  //     ) : (
  //       <tr>
  //         <td colSpan={3}>No users</td>
  //       </tr>
  //     )}
  //   </tbody>
  // </table>
)}

export default UserTable;
