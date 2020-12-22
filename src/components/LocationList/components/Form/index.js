import "./styles.css";
import React from "react";
import PropTypes from "prop-types";
import { Space } from "antd";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
  location: yup.string().trim().required("location is required"),
  description: yup.string().trim().required("description is required"),
});

const Form = ({ onSubmit, location, description, handleCancel }) => {
  const { register, handleSubmit, reset, errors } = useForm({
    resolver: yupResolver(schema),
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="form-control">
        <label htmlFor="location">Location</label>
        <input
          id="location"
          defaultValue={location}
          name="location"
          placeholder="Location"
          ref={register}
        />
        {errors.location && (
          <p className="helper-text">{errors.location.message}</p>
        )}
      </div>
      <div className="form-control">
        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          defaultValue={description}
          name="description"
          placeholder="Description"
          ref={register}
        />
        {errors.description && (
          <p className="helper-text">{errors.description.message}</p>
        )}
      </div>
      <div className="form-btn-control">
        <Space>
          <button type="submit" className="ant-btn ant-btn-primary">
            save
          </button>
          <button
            type="button"
            className="ant-btn ant-btn-secondary"
            onClick={() => {
              reset({ location: "", description: "" });
              handleCancel();
            }}
          >
            cancel
          </button>
        </Space>
      </div>
    </form>
  );
};

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  location: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  handleCancel: PropTypes.func.isRequired,
};

export default Form;
