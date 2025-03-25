import React from "react";

const ResumeTemplate: React.FC = () => {
  // Card Data
  const cards = [
    {
      id: 1,
      imageSrc: "/src/assets/1.jpg", // Replace with your actual image paths
      title: "Classical",
      buttonText: "View Details",
      buttonColor: "#F97316",
      buttonLink: "/Templates/template1.html" // Path to the HTML template for Classical
    },
    {
      id: 2,
      imageSrc: "/src/assets/2.jpg", // Replace with your actual image paths
      title: "Professional",
      buttonText: "View Details",
      buttonColor: "#3B82F6",
      buttonLink: "/Templates/template2.html" // Path to the HTML template for Professional
    },
    {
      id: 3,
      imageSrc: "/src/assets/3.jpg", // Replace with your actual image paths
      title: "Minimalist",
      buttonText: "View Details",
      buttonColor: "#10B981",
      buttonLink: "/Templates/template3.html" // Path to the HTML template for Minimalist
    },
    {
      id: 4,
      imageSrc: "/src/assets/4.jpg", // Replace with your actual image paths
      title: "Sidebar",
      buttonText: "View Details",
      buttonColor: "#9333EA",
      buttonLink: "/Templates/template4.html" // Path to the HTML template for Sidebar
    },
    // Add more cards as needed
  ];

  return (
    <section className="bg-[var(--bg-color)] flex justify-center py-10">
      <div className="w-full max-w-6xl bg-transparent shadow-lg rounded-lg p-8 border-t-8 border-[var(--primary-color)]">
        {/* Card List Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {cards.map((card) => (
            <div
              key={card.id}
              className="card shadow-lg rounded-lg overflow-hidden bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200 p-4"
            >
              <img
                src={card.imageSrc}
                alt={card.title}
                className="w-full h-64 object-cover rounded-lg"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-[var(--text-color)]">{card.title}</h3>
                <button
                  onClick={() => window.location.href = card.buttonLink} // Use navigate for navigation
                  className="mt-4 w-full py-2 rounded-lg text-white"
                  style={{ backgroundColor: card.buttonColor }}
                >
                  {card.buttonText}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResumeTemplate;
