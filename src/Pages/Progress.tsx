import React from "react";
import "./index.css"
interface ProgressProps {
  totalSteps: number;
  steps: number;
  className?: string; // Make it optional
}

const Progress: React.FC<ProgressProps> = ({ totalSteps, steps, className }) => {
  const progress = ((steps - 1) / (totalSteps - 1)) * 100;

  return (
    <div
      className={className} // Apply className dynamically
      style={{
        height: "4px",
        background: "#ddd",
        width: "100%",
        transition: "all 0.4s ease-in",
      }}
    >
      <div
        style={{
          height: "4px",
          background: "#43766c",
          width: `${progress}%`,
          transition: "all 0.4s ease-in",
        }}
      ></div>
    </div>
  );
};

export default Progress;
