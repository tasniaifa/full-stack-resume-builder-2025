// src/Pages/Home.tsx
import HeroImage1 from "../assets/HeroImage1.png"; // Replace with your actual image paths
import HeroImage2 from "../assets/HeroImage2.png";
import HeroImage3 from "../assets/HeroImage3.png";
import HeroImage4 from "../assets/HeroImage4.png"
import HeroImage5 from "../assets/HeroImage5.png"
import HeroImage6 from "../assets/HeroImage6.png"

const Home = () => {
  return (
    <div className="min-h-screen">
      <img src={HeroImage1} alt="Hero 1" className="w-full h-screen object-cover" />
      <img src={HeroImage2} alt="Hero 2" className="w-full h-screen object-cover" />
      <img src={HeroImage3} alt="Hero 3" className="w-full h-screen object-cover" />
      <img src={HeroImage4} alt="Hero 4" className="w-full h-screen object-cover" />
      <img src={HeroImage5} alt="Hero 5" className="w-full h-screen object-cover" />
      <img src={HeroImage6} alt="Hero 6" className="w-full h-screen object-cover" />
    </div>
  );
};

export default Home;
