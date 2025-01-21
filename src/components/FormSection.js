import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateResume } from "../redux/resumeSlice";

const FormSection = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    education: "",
    experience: "",
    skills: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateResume(formData));
  };

  return (
    <form className="form-section" onSubmit={handleSubmit}>
      <input name="name" placeholder="Name" onChange={handleChange} />
      <input name="email" placeholder="Email" onChange={handleChange} />
      <input name="phone" placeholder="Phone" onChange={handleChange} />
      <textarea name="education" placeholder="Education" onChange={handleChange}></textarea>
      <textarea name="experience" placeholder="Experience" onChange={handleChange}></textarea>
      <textarea name="skills" placeholder="Skills" onChange={handleChange}></textarea>
      <button type="submit">Generate Resume</button>
    </form>
  );
};

export default FormSection;
