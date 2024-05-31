import Button from "../components/Button";
import { dataProcedure } from "../constance";

const HowItWork = () => {
  return (
    <section className="text-center md:text-left ">
      <h2 className="text-grey text-2xl">How it works</h2>
      <div className="grid gap-y-14 md:grid-cols-3 mt-[80px]">
        {dataProcedure.map((card) => (
          <div key={card.step} className=" md:max-w-[225px]">
            <span className="block font-fraunces font-bold text-pale_orange text-7xl ">
              {card.step}
            </span>
            <h3 className="text-3xl lg:text-4xl text-dark_grey font-bold mt-6 ">
              {card.header}
            </h3>
            <p className="text-dark_grey text-sm lg:text-base mt-5">
              {card.text}
            </p>
          </div>
        ))}
      </div>
      <Button className="mt-16">Create your plan</Button>
    </section>
  );
};

export default HowItWork;
