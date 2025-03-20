import { useState } from "react";
import Progress from "../Progress";
import { Personal, Education, Work } from "../Form";
import { FaUser, FaGraduationCap, FaBriefcase } from "react-icons/fa";
import "../index.css"
import { MyFormPDF } from "./MyFormPDF";

// Define data interfaces
interface PersonalData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  zipCode: string;
  softSkills: string;
}

interface EducationData {
  degree: string;
  institution: string;
  city: string;
  startDate: string;
  endDate: string;
  description: string;
}

interface WorkData {
  jobTitle: string;
  company: string;
  city: string;
  startDate: string;
  endDate: string;
  description: string;
}

export interface FormData {
  personal: PersonalData;
  education: EducationData;
  work: WorkData;
}

function MultiSteps() {
  return <Multi />;
}

function Multi() {
  const [steps, setSteps] = useState<number>(1);

  //Define Form Data

  const [formData, setFormData] = useState<FormData>({

    personal: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      address: '',
      city: '',
      zipCode: '',
      softSkills: ''
    },
    education: {
      degree: '',
      institution: '',
      city: '',
      startDate: '',
      endDate: '',
      description: ''
    },
    work: {
      jobTitle: '',
      company: '',
      city: '',
      startDate: '',
      endDate: '',
      description: ''
    }
  });

  const totalSteps: number = 3;

  const updatePersonal = (data: PersonalData) => {
    setFormData(prev => ({ ...prev, personal: data }));
  };

  const updateEducation = (data: EducationData) => {
    setFormData(prev => ({ ...prev, education: data }));
  };

  const updateWork = (data: WorkData) => {
    setFormData(prev => ({ ...prev, work: data }));
  };

  function handlePrev() {
    if (steps > 1) setSteps((prevSteps) => prevSteps - 1);
  }

  function handleNext() {
    if (steps < totalSteps) setSteps((prevSteps) => prevSteps + 1);
  }

  const renderSteps = () => {
    switch (steps) {
      case 1:
        return <Personal updatePersonal={updatePersonal} personalData={formData.personal} />;
      case 2:
        return <Education updateEducation={updateEducation} educationData={formData.education} />;
      case 3:
        return <Work updateWork={updateWork} workData={formData.work} />;
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

        {steps === totalSteps && (
          <MyFormPDF formData={formData} />
        )}
      </div>
    </div>
  );
}

export default MultiSteps;
