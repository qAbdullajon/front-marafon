import { Table } from "antd";
import axios from "axios";
import { useState } from "react";

const Download = () => {
  const [data, setData] = useState([]);
  const GetUser = async () => {
    const data = await axios.get("https://marafon-service-starter.onrender.com/api/get-post");
    console.log(data);
  };
  GetUser();

  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Phone",
      dataIndex: "phone",
      key: "phone",
    },
    {
      title: "Tarif",
      dataIndex: "tarif",
      key: "tarif",
    },
    {
      title: "Created At",
      dataIndex: "createdAt",
      key: "createdAt",
    },
  ];

  return (
    <div>
      <Table columns={columns} dataSource={data || []} rowKey="id" />
    </div>
  );
};

export default Download;
