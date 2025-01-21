import React from "react";
import { useSelector } from "react-redux";
 
const ResumePreview = () => {
  const resume = useSelector((state) => state.resume);
 
  return (
    <div className="resume-preview">
      <h2>{resume.name}</h2>
      <p>Email: {resume.email}</p>
      <p>Phone: {resume.phone}</p>
      <h3>Education</h3>
      <p>{resume.education}</p>
      <h3>Experience</h3>
      <p>{resume.experience}</p>
      <h3>Skills</h3>
      <p>{resume.skills}</p>
    </div>
  );
};
 
export default ResumePreview;
