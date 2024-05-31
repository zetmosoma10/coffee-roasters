import Button from "../components/Button";

const Hero = () => {
  return (
    <div className="max-container rounded-[10px] hero flex items-center justify-center md:justify-start text-light_cream py-24 md:py-28">
      <div
        className="text-center md:text-left mx-6 md:ml-14 md:mr-0 lg:ml-20
        md:max-w-[410px] lg:max-w-[500px]"
      >
        <h1 className="font-bold  text-4xl  lg:text-7xl lg:leading-[72px] ">
          Great coffee made simple.
        </h1>
        <p className="text-sm opacity-80 mt-6 lg:mt-8">
          Start your mornings with the world’s best coffees. Try our expertly
          curated artisan coffees from our best roasters delivered directly to
          your door, at your schedule.
        </p>
        <Button className="mt-10 lg:mt-14">Create your plan</Button>
      </div>
    </div>
  );
};

export default Hero;
