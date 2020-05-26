import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  deleteEmployee,
  addEmployee,
  editEmployee,
} from "../Redux/actions/Action";
import { Row, Col } from 'antd';

import ShowTable from "../component/TableComponent/ShowTable";
import ShowModal from "../component/ModalComponent/ShowModal";
import ShowForm from "../component/FormBuilder/ShowForm";
import { callBack,editCallBack ,columns } from "./List/Columns";
import { fields } from "../pages/List/FormFields";
 import ShowSlider from '../component/MenuComponent'
import Autoset from "../component/Avatar";
 

const App = (props) => {
  console.log(props);

  const dispatch = useDispatch();
  const { employees } = useSelector((state) => state.employees);

  const editEmployeeData = (data) => {
    console.log("eddition", data);
    dispatch(editEmployee(data));
  };
  
  const addEmployeeData = (data) => {
    console.log("addition", data);
    dispatch(addEmployee(data));
  };
 
  editCallBack(editEmployeeData)

  const deleteEmployeeData = (id) => {
    dispatch(deleteEmployee(id));
  };
  callBack(deleteEmployeeData);

  return (
    <Row>
      {/* <Col span={6}>
      <ShowSlider/>
      </Col> */}
    
    <Autoset/>
  
<Col span={24}>

      <ShowModal title="add" >
        <ShowForm
          fields={fields}
          key={2}
          addEmployeeData={addEmployeeData}
        
        />
      </ShowModal>
         <ShowTable datas={employees} columns={columns} />
      </Col>
      </Row>
      
  
  );
};

export default App;
