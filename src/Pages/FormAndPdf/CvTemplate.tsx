import React, { useRef } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

interface CVTemplateProps {
  formData: {
    personal: {
      firstName: string;
      lastName: string;
      email: string;
      phone: string;
      address: string;
      city: string;
      zipCode: string;
      softSkills: string;
    };
    education: {
      degree: string;
      institution: string;
      city: string;
      startDate: string;
      endDate: string;
      description: string;
    };
    work: {
      jobTitle: string;
      company: string;
      city: string;
      startDate: string;
      endDate: string;
      description: string;
    };
  };
}

const CVTemplate: React.FC<CVTemplateProps> = ({ formData }) => {
  const pdfRef = useRef<HTMLDivElement>(null);

  const downloadPDF = () => {
    const input = pdfRef.current;
    if (!input) return;

    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4");
      const imgWidth = 210; // A4 width in mm
      const imgHeight = (canvas.height * imgWidth) / canvas.width;

      pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight);
      pdf.save("resume.pdf");
    });
  };

  return (
    <div className="flex flex-col items-center">
      {/* PDF Content */}
      <div ref={pdfRef} className="bg-white shadow-lg p-6 max-w-3xl border-t-8 border-orange-500">
        {/* Header */}
        <div className="flex items-center gap-4 bg-orange-500 text-white p-4 rounded-t-lg">
          <div className="flex-1">
            <h1 className="text-3xl font-bold">{formData.personal.firstName} {formData.personal.lastName}</h1>
            <p className="text-lg">{formData.work.jobTitle} at {formData.work.company}</p>
            <p className="text-sm">{formData.personal.email} | {formData.personal.phone} | {formData.personal.city}</p>
          </div>
        </div>

        {/* Sections */}
        <div className="p-4">
          {/* Summary */}
          <section>
            <h2 className="text-lg font-semibold text-gray-700 border-b pb-2">Summary</h2>
            <p className="text-sm text-gray-600 mt-2">{formData.personal.softSkills}</p>
          </section>

          {/* Skills */}
          <section className="mt-4">
            <h2 className="text-lg font-semibold text-gray-700 border-b pb-2">Skills</h2>
            <ul className="grid grid-cols-2 gap-2 mt-2 text-gray-600">
              <li className="bg-gray-100 p-2 rounded">HTML & CSS</li>
              <li className="bg-gray-100 p-2 rounded">JavaScript</li>
              <li className="bg-gray-100 p-2 rounded">React.js</li>
              <li className="bg-gray-100 p-2 rounded">Tailwind CSS</li>
            </ul>
          </section>

          {/* Education */}
          <section className="mt-4">
            <h2 className="text-lg font-semibold text-gray-700 border-b pb-2">Education</h2>
            <p className="text-sm font-semibold text-orange-500">{formData.education.degree}</p>
            <p className="text-sm text-gray-600">{formData.education.institution} ({formData.education.startDate} - {formData.education.endDate})</p>
          </section>

          {/* Work Experience */}
          <section className="mt-4">
            <h2 className="text-lg font-semibold text-gray-700 border-b pb-2">Work Experience</h2>
            <p className="text-sm font-semibold text-orange-500">{formData.work.jobTitle}</p>
            <p className="text-sm text-gray-600">{formData.work.company} | {formData.work.city}</p>
            <p className="text-sm text-gray-600">{formData.work.startDate} - {formData.work.endDate}</p>
          </section>
        </div>
      </div>

      {/* Download Button */}
      <button onClick={downloadPDF} className="mt-4 bg-orange-500 text-white py-2 px-4 rounded">
        Download CV as PDF
      </button>
    </div>
  );
};

export default CVTemplate;
