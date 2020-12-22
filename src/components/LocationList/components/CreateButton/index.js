import "./styles.css";
import React, { useState } from "react";
import { Button } from "antd";
import CreateFormModal from "../CreateFormModal";

const CreateButton = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  return (
    <>
      <div className="btn-create">
        <Button onClick={() => setIsModalVisible(!isModalVisible)}>
          Create
        </Button>
      </div>
      <CreateFormModal
        isModalVisible={isModalVisible}
        setIsModalVisible={setIsModalVisible}
      />
    </>
  );
};

export default CreateButton;
