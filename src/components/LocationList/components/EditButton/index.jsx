
import React, { useState  } from "react";
import PropTypes from "prop-types";
import { Button, Modal } from "antd";
import EditFormModal from "../EditFormModal";
import { findLocationById } from "./helpers";


const EditButton = ({ id }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
 
  const [data, setData] = useState({
      id: null,
      location: '',
      description: '',
  })
 
  return (
    <>
        <Button onClick={async () =>{
            try {
              const data = await findLocationById(id)
              if (data.length) {
                setData(data)
                setIsModalVisible(!isModalVisible)
              } else {
                Modal.error({
                  title: 'Unable to find the data in server',
                  content: 'Please report this error',
                });
              }
            } catch (error) {
              return error.response;
            }
        }}>
          Edit
        </Button>
      
      <EditFormModal
        isModalVisible={isModalVisible}
        setIsModalVisible={setIsModalVisible}
        data={data}
      />
    </>
  );
};

EditButton.propTypes = {
  id: PropTypes.string.isRequired,
};

export default EditButton;
