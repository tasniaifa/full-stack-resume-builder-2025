import React, { useState } from "react";
import Progress from "./Progress";
import { Personal, Education, Work } from "./Form";
import { FaUser, FaGraduationCap, FaBriefcase } from "react-icons/fa"; // Icons added

function MultiSteps() {
  return <Multi />;
}

function Multi() {
  const [steps, setSteps] = useState<number>(1);
  const totalSteps: number = 3;

  function handlePrev() {
    if (steps > 1) setSteps((prevSteps) => prevSteps - 1);
  }

  function handleNext() {
    if (steps < totalSteps) setSteps((prevSteps) => prevSteps + 1);
  }

  const renderSteps = () => {
    switch (steps) {
      case 1:
        return <Personal />;
      case 2:
        return <Education />;
      case 3:
        return <Work />;
      default:
        return null;
    }
  };

  return (
    <div className="container">
      {/* Progress Bar */}
      <div className="progress-container">
        <div className="progress-bar">
          <div
            className="progress-fill"
            style={{ width: `${(steps - 1) * 50}%` }} // Dynamic width
          ></div>
        </div>

        {/* Step Circles with Icons */}
        <div className="step-indicators">
          <div className={`circle ${steps >= 1 ? "active" : ""}`}>
            <FaUser /> <span>1</span>
          </div>
          <div className={`circle ${steps >= 2 ? "active" : ""}`}>
            <FaGraduationCap /> <span>2</span>
          </div>
          <div className={`circle ${steps >= 3 ? "active" : ""}`}>
            <FaBriefcase /> <span>3</span>
          </div>
        </div>
      </div>

      <div>{renderSteps()}</div>

      {/* Buttons */}
      <div className="btns">
        <button className={`${steps <= 1 ? "disabled" : "btn"}`} onClick={handlePrev}>
          Previous
        </button>
        <button className={`${steps >= 3 ? "disabled" : "btn"}`} onClick={handleNext}>
          Next
        </button>
        <button className={`${steps >= 3 ? "btn" : "disabled"}`} onClick={handleNext}>
          Submit
        </button>
      </div>
    </div>
  );
}

export default MultiSteps;
