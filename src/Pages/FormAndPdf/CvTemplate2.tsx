import React from "react";

interface CVTemplateProps {
    formData: {
      personal: {
        firstName: string;
        lastName: string;
        email: string;
        image: File | null;
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
  const navigateToMultistepsForm = () => {
    window.location.href = "/multistepsform";
  };

  const setColorTheme = (primary: string, secondary: string) => {
    document.documentElement.style.setProperty("--primary-color", primary);
    document.documentElement.style.setProperty("--secondary-color", secondary);
  };

  return (
    <div className="bg-gray-100 flex justify-center py-10">
      <div className="w-full max-w-4xl bg-white shadow-lg rounded-lg flex overflow-hidden">
        {/* Sidebar */}
        <div className="w-1/3 bg-blue-900 text-white p-6 flex flex-col items-center">
          {formData.personal.image ? (
            <img
              src={URL.createObjectURL(formData.personal.image)}
              alt="Profile"
              className="w-32 h-32 rounded-full object-cover border-4 border-white"
            />
          ) : (
            <div className="w-32 h-32 bg-gray-300 rounded-full border-4 border-white flex items-center justify-center">
              No Image
            </div>
          )}
          <h1 className="text-2xl font-bold mt-4">
            {formData.personal.firstName} {formData.personal.lastName}
          </h1>
          <p className="text-lg">Web Developer</p>
          <div className="mt-6 w-full">
            <h2 className="text-lg font-semibold border-b pb-2">Contact</h2>
            <p className="text-sm mt-2">📧 {formData.personal.email}</p>
            <p className="text-sm">📞 {formData.personal.phone}</p>
          </div>
        </div>

        {/* Main Content */}
        <div className="w-2/3 p-8">
          <section>
            <h2 className="text-xl font-semibold text-gray-700 border-b pb-2">About Me</h2>
            <p className="text-sm text-gray-600 mt-2">{formData.personal.softSkills}</p>
          </section>

          {/* Color Palette Selector and Button */}
          <div className="mt-6 flex justify-between items-center">
            <div>
              <h2 className="text-lg font-semibold text-gray-700">Choose a Color Theme:</h2>
              <div className="flex gap-2 mt-2">
                <button onClick={() => setColorTheme("#1E3A8A", "#3B82F6")} className="w-8 h-8 bg-blue-800 rounded-full border"></button>
                <button onClick={() => setColorTheme("#10B981", "#34D399")} className="w-8 h-8 bg-green-500 rounded-full border"></button>
                <button onClick={() => setColorTheme("#F97316", "#FACC15")} className="w-8 h-8 bg-orange-500 rounded-full border"></button>
                <button onClick={() => setColorTheme("#4B0082", "#A855F7")} className="w-8 h-8 bg-purple-700 rounded-full border"></button>
              </div>
            </div>
            <button onClick={navigateToMultistepsForm} className="py-2 px-4 bg-purple-700 text-white rounded-lg">
              Create Resume
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CVTemplate;
