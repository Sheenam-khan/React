import React from "react";
import ModalComponent from "../Modal/ModalComponent";
import Button from "antd/es/button";
import { DeleteOutlined } from "@ant-design/icons";

let onDelete;
export const callBack = (handle) => {
  onDelete = handle;
};
export const columns = [
  {
    title: "Title",
    dataIndex: "title",
    key: "title",
  },
  {
    title: "Message",
    dataIndex: "message",
    key: "message",
  },

  {
    title: "Action",
    dataIndex: "action",
    key: "action",
    render: (action, record, rowIndex) => (
      <span>
        <ModalComponent
          title="update"
          record={record}
          index={rowIndex}
          currentId={record._id}
        >
          {/* <FormComponent type="update" record={record} index={rowIndex} /> */}
        </ModalComponent>
        <Button
          icon={<DeleteOutlined />}
          type="danger"
          onClick={() => onDelete(record._id)}
        />
      </span>
    ),
  },
];
