import { Table } from "antd";

const ShowTable = ({ datas, columns }) => {
  console.log(datas, columns);
  
  const data = datas.map((employee, index) => {
    employee.key = index;
    return employee;
  });

  return <Table style={{marginLeft:40,width:"50%",}}columns={columns} pagination ={{pageSize: 5  }}   dataSource={data} />;
};

export default ShowTable;
