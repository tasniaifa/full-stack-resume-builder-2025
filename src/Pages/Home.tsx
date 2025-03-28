import HeroImage1 from "../assets/HeroImage1.png";
import HeroImage2 from "../assets/HeroImage2.png";
import HeroImage3 from "../assets/HeroImage3.png";
import HeroImage4 from "../assets/HeroImage4.png";
import HeroImage5 from "../assets/HeroImage5.png";
import HeroImage6 from "../assets/HeroImage6.png";

const Home = () => {
  return (
    <div className="min-h-screen">
      <img src={HeroImage1} alt="Hero 1" className="w-full h-screen object-cover" />
      <img src={HeroImage2} alt="Hero 2" className="w-full h-screen object-cover" />
      <img src={HeroImage3} alt="Hero 3" className="w-full h-screen object-cover" />
      <img src={HeroImage4} alt="Hero 4" className="w-full h-screen object-cover" />
      <img src={HeroImage5} alt="Hero 5" className="w-full h-screen object-cover" />
      <img src={HeroImage6} alt="Hero 6" className="w-full h-screen object-cover" />

      {/* Add Button Below */}
      <div className="fixed bottom-10 left-1/2 transform -translate-x-1/2 z-50">
  <MyButton />
</div>

    </div>
  );
};

import { useNavigate } from "react-router-dom";

// Button Component
export const MyButton = () => {
  const navigate = useNavigate();

  return (
    <button 
      onClick={() => navigate("/MultiStepsForm")}  
      className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
    >
      Create New Resume Now!
    </button>
  );
};

export default Home;
