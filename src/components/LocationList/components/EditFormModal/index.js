import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { Modal, message } from "antd";
import { updateLocation } from "features/locations/locationSlice";
import Form from "../Form";

const EditFormModal = ({ isModalVisible, setIsModalVisible, data }) => {
  const dispatch = useDispatch();

  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (data && data[0]) {
      setLocation(data[0].location);
      setDescription(data[0].description);
    }
  }, [data]);

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handleSave = (payload) => {
    if (data && data[0]) {
      dispatch(updateLocation({ ...payload, id: data[0].id }));
      message.success("Successfully updated.");
      setIsModalVisible(false);
    } else {
      throw new Error("data cant be found.");
    }
  };

  return (
    <Modal
      title="Edit location"
      visible={isModalVisible}
      onOk={handleOk}
      onCancel={handleCancel}
      footer={null}
    >
      <Form
        location={location}
        description={description}
        handleCancel={handleCancel}
        onSubmit={handleSave}
      />
    </Modal>
  );
};

EditFormModal.propTypes = {
  isModalVisible: PropTypes.bool.isRequired,
  setIsModalVisible: PropTypes.func.isRequired,
};

export default EditFormModal;
