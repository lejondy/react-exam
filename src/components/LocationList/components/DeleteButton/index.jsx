
import React  from "react";
import PropTypes from "prop-types";
import { Button, Modal, message } from "antd";
import { deleteLocationById } from "./helpers";
import { useDispatch } from "react-redux";
import { fetchAllLocations } from "features/locations/locationSlice";
const { confirm } = Modal;

const DeleteButton = ({ id, location }) => {
  const dispatch = useDispatch();

  return (
    <>
        <Button onClick={()=> {
            confirm({
                title: `Are you sure you want to delete this location?`,
                content: `${location}`,
                onOk() {
                    deleteLocationById(id)
                    .then(res => {
                        message.success('Deleted successfully')
                        dispatch(fetchAllLocations());
                    })
                    .catch(err  => console.log(`Error ${err}`))
                },
                
              });
        }}>
          Delete
        </Button>
    </>
  );
};

DeleteButton.propTypes = {
  id: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
};

export default DeleteButton;
