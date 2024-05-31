import mobileImg from "../../assets/about/mobile/image-quality.jpg";
import tabletImg from "../../assets/about/tablet/image-quality.jpg";
import desktopImg from "../../assets/about/desktop/image-quality.jpg";

const QualityCard = () => {
  return (
    <div className="relative quality-img bg-dark_grey text-light_cream  rounded-[10px] ">
      <div
        className="relative bottom-20 grid lg:grid-cols-2 w-[90%] 
        mx-auto gap-y-16 lg:gap-x-14 text-center lg:text-left mb-10 lg:mb-0"
      >
        <picture className=" order-1 lg:order-2 block">
          <source media="(max-width: 767px)" srcSet={mobileImg} />
          <source
            media="(min-width: 768px and max-width: 1023px)"
            srcSet={tabletImg}
          />
          <source media="(min-width: 1024px)" srcSet={desktopImg} />
          <img className="w-full rounded-[10px]" src={mobileImg} alt="" />
        </picture>
        <div className="order-2 lg:order-1 self-center lg:mt-16">
          <h2 className="font-bold text-3xl lg:text-4xl">
            {" "}
            Uncompromising quality
          </h2>
          <p className="text-sm lg:text-base opacity-80 mt-6">
            Although we work with growers who pay close attention to all stages
            of harvest and processing, we employ, on our end, a rigorous quality
            control program to avoid over-roasting or baking the coffee dry.
            Every bag of coffee is tagged with a roast date and batch number.
            Our goal is to roast consistent, user-friendly coffee, so that
            brewing is easy and enjoyable.
          </p>
        </div>
      </div>
    </div>
  );
};

export default QualityCard;
