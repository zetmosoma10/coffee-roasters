import CardWhyChooseUs from "../components/CardWhyChooseUs";
import { whyChooseUsData } from "../constance";

const WhyChooseUs = () => {
  return (
    <div className="max-container text-light_cream bg-dark_grey rounded-lg pt-16 pb-52  relative">
      <div className="text-center max-w-[540px] mx-auto mb-16 md:mb-[70px]">
        <h2 className="font-bold text-3xl lg:text-10">Why choose us?</h2>
        <p className="text-sm lg:text-base opacity-80 mt-6">
          A large part of our role is choosing which particular coffees will be
          featured in our range. This means working closely with the best coffee
          growers to give you a more impactful experience on every level.
        </p>
      </div>
      <div
        className="grid lg:grid-cols-3 gap-y-6 gap-x-8 w-[85%] mx-auto absolute 
         left-0 right-0 top-[50%] md:top-[55%]"
      >
        {whyChooseUsData.map((card) => (
          <CardWhyChooseUs
            key={card.header}
            icon={card.icon}
            header={card.header}
            text={card.text}
          />
        ))}
      </div>
    </div>
  );
};

export default WhyChooseUs;
