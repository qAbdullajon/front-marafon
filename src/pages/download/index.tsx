import { Table } from "antd";
import axios from "axios";
import { useState } from "react";

const Download = () => {
  const [data, setData] = useState([]);
  const getUser = async () => {
    try {
      const users = await axios.get("https://marafon-service-starter.onrender.com/api/get-post");
      setData(users.data);
    } catch (error) {
      console.log(error);
    }
  };
  getUser();

  const columns = [
    {
      title: "ID",
      key: "id",
      render: (_: any, __: any, i: number) => i + 1,
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
      title: "Image",
      key: "image",
      render: (_: any, record: any) => (
        <a target="_blank" href={record?.image}>
          {record.image}
        </a>
      ),
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
