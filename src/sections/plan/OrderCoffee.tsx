import { useState } from "react";
import downArrow from "../../assets/plan/desktop/icon-arrow.svg";

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
              <div className="flex items-center space-x-1">
                <input
                  onChange={handleChange}
                  value="capsule"
                  type="radio"
                  name="drinkType"
                  id="capsule"
                  checked={coffeeData.drinkType === "capsule"}
                />
                <label htmlFor="capsule">Capsule</label>
              </div>
              <div className="flex items-center space-x-1">
                <input
                  onChange={handleChange}
                  value="filter"
                  type="radio"
                  name="drinkType"
                  id="filter"
                  checked={coffeeData.drinkType === "filter"}
                />
                <label htmlFor="filter">Filter</label>
              </div>
              <div className="flex items-center space-x-1">
                <input
                  onChange={handleChange}
                  value="expresso"
                  type="radio"
                  name="drinkType"
                  id="expresso"
                  checked={coffeeData.drinkType === "expresso"}
                />
                <label htmlFor="expresso">Expresso</label>
              </div>
            </div>
          )}
        </div>
      </form>
    </div>
  );
};

export default OrderCoffee;
