import  Input  from 'antd/es/input';
import { UserOutlined } from '@ant-design/icons'
import React from 'react'

function Form() {
    return (
        <div>
          
  <Input size="large"  prefix={<UserOutlined />} />
    <br />
    <br />
    <Input prefix={<UserOutlined />} />
    <br />
    <br />
    <Input size="small"  prefix={<UserOutlined />} />
  </div>
    )
}

export default Form









