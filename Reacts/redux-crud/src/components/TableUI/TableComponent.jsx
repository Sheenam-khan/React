import Table from "antd/es/table";
import React, { useEffect, useState} from "react";
import { connect } from "react-redux";
import * as actions from "../../Redux/postMessage";
import PropTypes from "prop-types";
import {columns, callBack} from './TableColumn';

const onSelectChange = (selectedRowKeys, selectedRows) => {
  console.log(
    `selectedRowKeys: ${selectedRowKeys}`,
    "selectedRows: ",
    selectedRows
  );
};

const TableComponent = ({ ...props }) => {
  console.log(props);

  const [currentId, setCurrentId] = useState(0);

  useEffect(() => {
    props.fetchAllPostMessages();
  }, []); //DidMount

  const handle = (id) => {
    console.log(id);
    const onSuccess = () => {};
    props.deletePostMessage(id, onSuccess);
  };
  callBack(handle)

  console.log(currentId);
 

  const rowSelection = {
    onChange: onSelectChange,
  };

  const data=props.postMessageList.map(
    (record,index)=>{ 
      record.key = index
      return record
    })

 
    return (
      <div>
   
        <Table
         
          rowSelection={rowSelection}
          columns={columns}
          dataSource={data}
          pagination={{ position: "bottomRight", pageSize: 5 }}
        />
      </div>
    );
 
  };
  

  const mapStateToProps = (state) => ({
    postMessageList: state.postMessage.list,
  });
  
  const mapActionToProps = {
    fetchAllPostMessages: actions.fetchAll,
    deletePostMessage: actions.Delete,
  };

TableComponent.propTypes = {
 data:PropTypes.object,
 column:PropTypes.array,
 callBack:PropTypes.func
};
export default connect(mapStateToProps, mapActionToProps)(TableComponent);
