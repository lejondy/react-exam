import React from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { Modal, message } from "antd";
import { addLocation } from "features/locations/locationSlice";
import Form from "../Form";

const CreateFormModal = ({ isModalVisible, setIsModalVisible }) => {
  const dispatch = useDispatch();

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handleSave = (data) => {
    dispatch(addLocation(data));
    message.success("Successfully created.");
    setIsModalVisible(false);
  };

  return (
    <Modal
      title="Create location"
      visible={isModalVisible}
      onOk={handleOk}
      onCancel={handleCancel}
      footer={null}
    >
      <Form
        location={""}
        description={""}
        handleCancel={handleCancel}
        onSubmit={handleSave}
      />
    </Modal>
  );
};

CreateFormModal.propTypes = {
  isModalVisible: PropTypes.bool.isRequired,
  setIsModalVisible: PropTypes.func.isRequired,
};

export default CreateFormModal;
