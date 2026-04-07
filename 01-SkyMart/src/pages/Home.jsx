import HeroSection from "../components/HeroSection";
import StartsCard from "../components/StartsCard";
import Section from "../components/Section";
import { useRouteLoaderData } from "react-router";

const Home = () => {
  const product = useRouteLoaderData("root")
  return (
    <div className="">
      <HeroSection />
      <StartsCard />
      <Section product={product}/>
    </div>
  );
};

export default Home;
