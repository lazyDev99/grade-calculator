import React, { useState, useEffect } from "react";
import "./styles.css"

const Module = ({ name, coefficient, onChange }) => {
  const [tdMark, setTdMark] = useState();
  const [examMark, setExamMark] = useState();

  useEffect(() => {
    handleChange(tdMark, examMark);
  }, [tdMark, examMark]); // Runs every time tdMark or examMark changes
  
  const handleTDChange = (e) => {
    const newTdMark = parseFloat(e.target.value) || 0;
    setTdMark(newTdMark); // Update state first
    handleChange(newTdMark, examMark); // Pass the latest values
  };
  
  const handleExamChange = (e) => {
    const newExamMark = parseFloat(e.target.value) || 0;
    setExamMark(newExamMark);
    handleChange(tdMark, newExamMark); // Pass the latest values
  };

  const handleChange = () => {
    const finalMark = (tdMark * 0.4) + (examMark * 0.6);
    //    console.log(finalMark);
    onChange(name, finalMark, coefficient);
    console.log(tdMark, examMark);
  };  
 
 

  return (
    <div>
      <h3>{name} </h3>
      <label >TD Mark: </label>
      <input  type="number" value={tdMark} onChange={handleTDChange} />
      
      <label>Exam Mark: </label>
      <input type="number" value={examMark} onChange={handleExamChange} />
    </div>
  );
};

export default Module;
