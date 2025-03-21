import React from "react";

const ResumeTemplate: React.FC = () => {
  // Function to change the color theme
  const setColorTheme = (primary: string, secondary: string) => {
    document.documentElement.style.setProperty("--primary-color", primary);
    document.documentElement.style.setProperty("--secondary-color", secondary);
  };

  return (
    <section className="bg-[var(--bg-color)] flex justify-center py-10">
      <div className="w-full max-w-3xl bg-white shadow-lg rounded-lg p-8 border-t-8 border-[var(--primary-color)]">
        {/* Header with Picture */}
        <div className="flex items-center gap-6 p-6 bg-[var(--primary-color)] text-white rounded-t-lg">
          <img
            src="profile.jpg"
            alt="Profile Picture"
            className="w-24 h-24 rounded-full object-cover border-4 border-white"
          />
          <div>
            <h1 className="text-3xl font-bold">John Doe</h1>
            <p className="text-lg">Web Developer | UI/UX Designer</p>
            <p className="text-sm">johndoe@email.com | +123 456 7890 | johndoe.com</p>
          </div>
        </div>

        {/* Summary and Skills */}
        <div className="grid grid-cols-3 gap-4 mt-6">
          {/* Summary */}
          <section className="col-span-1 bg-[var(--bg-color)] p-4 rounded-lg">
            <h2 className="text-lg font-semibold text-[var(--text-color)] border-b pb-2">Summary</h2>
            <p className="text-sm text-gray-600 mt-2">
              Experienced web developer with a passion for designing user-friendly websites and applications.
            </p>
          </section>

          {/* Skills */}
          <section className="col-span-2">
            <h2 className="text-lg font-semibold text-[var(--text-color)] border-b pb-2">Skills</h2>
            <ul className="grid grid-cols-2 gap-2 mt-2 text-gray-600">
              <li className="bg-[var(--bg-color)] p-2 rounded">HTML & CSS</li>
              <li className="bg-[var(--bg-color)] p-2 rounded">JavaScript</li>
              <li className="bg-[var(--bg-color)] p-2 rounded">React.js</li>
              <li className="bg-[var(--bg-color)] p-2 rounded">Tailwind CSS</li>
              <li className="bg-[var(--bg-color)] p-2 rounded">Node.js</li>
              <li className="bg-[var(--bg-color)] p-2 rounded">UI/UX Design</li>
            </ul>
          </section>
        </div>

        {/* Experience */}
        <section className="py-6">
          <h2 className="text-lg font-semibold text-[var(--text-color)] border-b pb-2">Experience</h2>
          <div className="mt-2">
            <h3 className="font-semibold text-[var(--primary-color)]">Frontend Developer - ABC Company</h3>
            <p className="text-sm text-gray-600">Jan 2021 - Present</p>
            <p className="text-sm text-gray-600 mt-1">
              Developed responsive web applications using React.js and Tailwind CSS.
            </p>
          </div>
        </section>

        {/* Education */}
        <section className="py-6">
          <h2 className="text-lg font-semibold text-[var(--text-color)] border-b pb-2">Education</h2>
          <div className="mt-2">
            <h3 className="font-semibold text-[var(--primary-color)]">Bachelor of Science in Computer Science</h3>
            <p className="text-sm text-gray-600">XYZ University, 2017 - 2021</p>
          </div>
        </section>

        {/* Color Palette Selector */}
        <div className="mt-6">
          <h2 className="text-lg font-semibold text-[var(--text-color)]">Choose a Color Theme:</h2>
          <div className="flex gap-2 mt-2">
            <button
              onClick={() => setColorTheme("#F97316", "#FACC15")}
              className="w-8 h-8 bg-orange-500 rounded-full border"
            ></button>
            <button
              onClick={() => setColorTheme("#3B82F6", "#60A5FA")}
              className="w-8 h-8 bg-blue-500 rounded-full border"
            ></button>
            <button
              onClick={() => setColorTheme("#10B981", "#34D399")}
              className="w-8 h-8 bg-green-500 rounded-full border"
            ></button>
            <button
              onClick={() => setColorTheme("#9333EA", "#A855F7")}
              className="w-8 h-8 bg-purple-600 rounded-full border"
            ></button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResumeTemplate;