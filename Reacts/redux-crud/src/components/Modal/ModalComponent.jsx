import React, { useState } from "react";
import Modal from "antd/es/modal";
import Button from "antd/es/button";
import FormComponent from "../FormBuilder/FormComponent";
import { EditOutlined } from "@ant-design/icons";
import PropTypes from "prop-types";

const ModalComponent = ({ ...props }) => {
  const [visible, setVisible] = useState(false);

  console.log(props.currentId, props);
  const showModal = () => {
    setVisible(true);
  };

  const handleOk = (e) => {
    console.log(e);
    setVisible(false);
  };

  const handleCancel = (e) => {
    console.log(e);
    setVisible(false);
  };

  const { title } = props;
  return (
    <div style={{ marginBottom: 16 }}>
      <Button
        type="primary"
        onClick={showModal}
        icon={title === "update" ? <EditOutlined /> : ""}
      >
        {title === "update" ? "" : title}
      </Button>
      <Modal
        title={`${title} modal `}
        visible={visible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <FormComponent currentId={props.currentId} record={props.record} />
      </Modal>
    </div>
  );
};

ModalComponent.propTypes = {
  title: PropTypes.string,
};

export default ModalComponent;
