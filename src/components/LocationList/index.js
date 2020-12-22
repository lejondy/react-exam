import React, { useState } from "react";
import { Table, Space } from "antd";
import CreateButton from "./components/CreateButton";
import EditButton from "./components/EditButton";
import DeleteButton from "./components/DeleteButton";
import { useSelector } from "react-redux";

const LocationList = () => {
  const [pageSize, setPageSize] = useState(10);
  const locations = useSelector((state) => state.locations);

  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Location",
      dataIndex: "location",
      key: "location",
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
    },

    {
      title: "operation",
      dataIndex: "operation",
      render: (text, record) => {
        return (
          <Space size="middle">
            <EditButton id={record.id} />
            <DeleteButton id={record.id} location={record.location} />
          </Space>
        );
      },
    },
  ];

  const data = locations.map((r) => {
    return {
      key: r.id,
      id: r.id,
      location: r.location,
      description: r.description,
    };
  });

  return (
    <div>
      <CreateButton />
      <Table
        columns={columns}
        dataSource={data}
        pagination={{
          pageSize,
          showSizeChanger: true,
          onShowSizeChange: (current, size) => setPageSize(size),
        }}
      />
    </div>
  );
};

export default LocationList;
