import React from "react";
import HeroSection from "../components/HeroSection";
import StartsCard from "../components/StartsCard";

const Home = () => {
  return (
    <div className="p-8">
      <HeroSection />
      <StartsCard />
      <StartsCard />
      <StartsCard />
    </div>
  );
};

export default Home;
