import AboutInfo from "../sections/about/AboutInfo";
import CommitmentCard from "../sections/about/CommitmentCard";
import Headquarters from "../sections/about/Headquarters";
import QualityCard from "../sections/about/QualityCard";

const About = () => {
  return (
    <>
      <AboutInfo />
      <div className="mt-32 mb-44 md:mt-36 md:mb-36 lg:mt-40 lg:mb-44">
        <CommitmentCard />
      </div>
      <div>
        <QualityCard />
      </div>
      <div className="mt-32 mb-32 md:mt-36 md:mb-36 lg:mt-40 lg:mb-40">
        <Headquarters />
      </div>
    </>
  );
};

export default About;
