import HowItWorkDark from "../sections/plan/HowItWorkDark";
import OrderCoffee from "../sections/plan/OrderCoffee";
import PlanHero from "../sections/plan/PlanHero";

const Plan = () => {
  return (
    <div className="max-container">
      <PlanHero />
      <div className="mt-28 md:mt-36 lg:mt-40">
        <HowItWorkDark />
      </div>
      <div className="my-28 md:my-36 lg:my-40">
        <OrderCoffee />
      </div>
    </div>
  );
};

export default Plan;
