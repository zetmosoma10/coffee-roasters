import Collections from "../sections/home/Collections";
import Hero from "../sections/home/Hero";
import HowItWork from "../sections/home/HowItWork";
import WhyChooseUs from "../sections/home/WhyChooseUs";

const Home = () => {
  return (
    <div className="max-container">
      <Hero />
      <div className="mt-[120px] md:mt-[98px] lg:mt-[136px]">
        <Collections />
      </div>
      <div className="mt-[120px] md:mt-[144px] lg:mt-[200px]">
        <WhyChooseUs />
      </div>
      <div className="mt-[950px] mb-[120px] md:mb-[144px] md:mt-[450px] lg:mt-[200px] lg:mb-[200px]">
        <HowItWork />
      </div>
    </div>
  );
};

export default Home;
