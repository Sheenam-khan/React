import React, { useEffect, useState } from "react";
import Form from "antd/es/form";
import Input from "antd/es/input";
import Button from "antd/es/button";
import { connect } from "react-redux";
import * as actions from "../../Redux/postMessage";
import PropTypes from "prop-types";

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};

const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};

const FormComponent = ({ ...props }) => {
  const [form] = Form.useForm();
  const [values, setValues] = useState("");
  useEffect(() => {
    if (props.currentId != 0) {
      setValues({
        ...props.postMessageList.find((x) => x._id == props.currentId),
      });
    }
  }, [props.currentId]);
  
  console.log(props.record);
  const onFinish = (values) => {
    console.log("Success:", values);
    const onSuccess = () => {
      props.record = "";
      onReset();
    };

    if (props.currentId == undefined)
      props.createPostMessage(values, onSuccess);
    else props.updatePostMessage(props.currentId, values, onSuccess);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const onReset = () => {
    form.resetFields();
    setValues("");
  };

  const onFill = () => {
    form.setFieldsValue({
      title: "Seenam Bee",
      message: "bhopal",
    });
  };

  return (
    <Form
      {...layout}
      form={form}
      name="control-hooks"
      initialValues={props.record || ""}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        label="Title"
        name="title"
        rules={[
          {
            required: true,
            message: "Please input your username!",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Message"
        name="message"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input.TextArea />
      </Form.Item>

      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
        <Button htmlType="button" onClick={onReset}>
          Reset
        </Button>
        <Button type="link" htmlType="button" onClick={onFill}>
          Fill form
        </Button>
      </Form.Item>
    </Form>
  );
};

const mapStateToProps = (state) => ({
  postMessageList: state.postMessage.list,
});

const mapActionToProps = {
  createPostMessage: actions.create,
  updatePostMessage: actions.update,
};

FormComponent.propTypes = {
  createPostMessage: PropTypes.func,
  updatePostMessage: PropTypes.func,
  postMessageList: PropTypes.array,
};
export default connect(mapStateToProps, mapActionToProps)(FormComponent);
