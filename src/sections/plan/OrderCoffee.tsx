import { useState } from "react";
import downArrow from "../../assets/plan/desktop/icon-arrow.svg";
import Input from "./Input";

const OrderCoffee = () => {
  const [open, setOpen] = useState(false);
  const [coffeeData, setCoffeeData] = useState({
    drinkType: "",
  });
  console.log(coffeeData);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setCoffeeData({
      ...coffeeData,
      [name]: value,
    });
  };

  const handleToggle = () => {
    setOpen(!open);
  };

  return (
    <div className="max-container grid ">
      <form className="m-10">
        <div>
          <div
            onClick={handleToggle}
            className="flex items-center justify-between"
          >
            <h3 className="font-bold text-grey text-2xl md:text-3xl lg:text-4xl cursor-pointer">
              How do you drink your coffee?
            </h3>
            <img src={downArrow} alt="" />
          </div>
          {open && (
            <div className="flex items-center space-x-3">
              <Input
                handleChange={handleChange}
                inputName="drinkType"
                inputValue="capsule"
                checked={coffeeData.drinkType === "capsule"}
              />
              <Input
                handleChange={handleChange}
                inputName="drinkType"
                inputValue="filter"
                checked={coffeeData.drinkType === "filter"}
              />
              <Input
                handleChange={handleChange}
                inputName="drinkType"
                inputValue="expresso"
                checked={coffeeData.drinkType === "expresso"}
              />
            </div>
          )}
        </div>
      </form>
    </div>
  );
};

export default OrderCoffee;
