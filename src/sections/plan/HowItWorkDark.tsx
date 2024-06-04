import { dataProcedure } from "../../constance";

const HowItWorkDark = () => {
  return (
    <div
      className="plan-steps-card text-light_cream text-center md:text-left
        rounded-[10px] py-20 md:py-24 "
    >
      <div className="max-container grid gap-y-14 md:gap-x-6 md:grid-cols-3 mt-[80px]">
        {dataProcedure.map((card) => (
          <div key={card.step} className=" md:max-w-[225px]">
            <span className="block font-fraunces font-bold text-pale_orange text-7xl ">
              {card.step}
            </span>
            <h3 className="text-3xl lg:text-4xl font-bold mt-6 ">
              {card.header}
            </h3>
            <p className=" text-sm lg:text-base mt-5">{card.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowItWorkDark;
