import React, { useState } from "react";
import Module from "./module";
import  "./styles.css";

const modules = [   
  { name: "Renforcement Arabe", coefficient: 2 },
  { name: "Renforcement Anglais (Bekhouche)", coefficient: 1 },  
  { name: "Renforcement francais (Belkacem)", coefficient: 1 },
  { name: "Traduction Francais-Arabe (Belkacem)", coefficient: 1 }, 
  { name: "Traduction Arabe-Francais (Aina)", coefficient: 1 }, 
  { name: "Traduction Anglais-Arabe (Benaicha)", coefficient: 1 }, 
  { name: "Traduction Arabe-Anglais (Benaicha)", coefficient: 1 }, 
  { name: "Traduction Francais-Anglais (Bkhouche)", coefficient: 1 }, 
  { name: "Méthodologie", coefficient: 2 }, 
  { name: "TIC", coefficient: 1 }, 
  { name: "Support numérique", coefficient: 1 }, 
  { name: "Technique du travail univarsitaire (Attachi)", coefficient: 2 }, 
  { name: "La linguistique", coefficient: 2 }, 

];   

const GradeCalculator = () => {
  const [grades, setGrades] = useState({});
  const [showGrade, setshowGrade] = useState(false)


  const updateGrade = (name, finalMark, coefficient) => {
    setGrades(prev => ({ ...prev, [name]: { finalMark, coefficient } }));
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
      <h2 id="mainHeader" >Grade Calculator</h2>
      {modules.map((mod, index) => (
        <Module key={index} name={mod.name} coefficient={mod.coefficient} onChange={updateGrade} />
      ))}
      
      <button id="btn" onClick={() => {
           setshowGrade(!showGrade)
      }}> Calculate Grade </button> 
       {showGrade ? (
       <h3>
       Average Grade:{" "}
       <span style={{ color: calculateAverage() >= 10 ? "green" : "red" }}>
         {calculateAverage()}
       </span>
     </h3>
       ) : <></>
      }  
      
       
        
    </div>
  );
};



export default GradeCalculator;
