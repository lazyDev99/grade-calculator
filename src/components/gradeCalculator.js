import React, { useState } from "react";
import Module from "./module";
import  "./styles.css";

const modules = [
  { name: "Ronforcement Arabe", coefficient: 2 },
  { name: "Renforcement Anglais", coefficient: 1 },  
  { name: "Renforcement francais", coefficient: 1 },
  { name: "traduction Francais-Arabe (Belkacem)", coefficient: 1 }, 
  { name: "traduction Arabe-Francais (Aina)", coefficient: 1 }, 
  { name: "traduction Anglais-Arabe (Benaicha)", coefficient: 1 }, 
  { name: "traduction Arabe-Anglais (Benaicha)", coefficient: 1 }, 
  { name: "traduction Francais-Anglais (Bekhouche)", coefficient: 1 }, 
  { name: "Méthodologie", coefficient: 2 }, 
  { name: "TIC", coefficient: 1 }, 
  { name: "Support numerique", coefficient: 1 }, 
  { name: "Technique du travail univarsitaire", coefficient: 2 }, 
  { name: "La linguistique", coefficient: 2 }, 

];

const GradeCalculator = () => {
  const [grades, setGrades] = useState({});
  const [showGrade, setshowGrade] = useState(false)


  const updateGrade = (name, finalMark, coefficient) => {
    setGrades(prev => ({ ...prev, [name]: { finalMark, coefficient } }));
  };

  const calculateModuleGrade = (tdMark, examMark) => {
    return (tdMark * 0.4) + (examMark * 0.6);
  };
  
  const calculateAverage = () => {
    let totalWeightedMarks = 0;
    let totalCoefficients = 0;

    Object.values(grades).forEach(({ finalMark, coefficient }) => {
      totalWeightedMarks += finalMark * coefficient;
      totalCoefficients += coefficient;
    });

    return totalCoefficients > 0 ? (totalWeightedMarks / totalCoefficients).toFixed(2) : "N/A";
  };

  return (
    <div className="container" >
      <h2 >Grade Calculator</h2>
      {modules.map((mod, index) => (
        <Module key={index} name={mod.name} coefficient={mod.coefficient} onChange={updateGrade} />
      ))}
      
      <button id="btn" onClick={() => {
           setshowGrade(!showGrade)
      }}> Calculate Grade </button> 
       {showGrade ? <h3> <h3>Average Grade: </h3> {calculateAverage()} </h3> : <span> </span> }   
    </div>
  );
};



export default GradeCalculator;
