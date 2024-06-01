import { useState } from "react";
import { coffeeQuestions } from "../../constance";
import OrderSummary from "./OrderSummary";
import Input from "./Input";

const OrderCoffee = () => {
  const [questionsData, setQuestionsData] = useState(coffeeQuestions);
  const [coffeeData, setCoffeeData] = useState({
    preferences: "",
    beanType: "",
    quantity: "",
    grindOption: "",
    deliveries: "",
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setCoffeeData({
      ...coffeeData,
      [name]: value,
    });
  };

  const handleToggle = (index: number) => {
    return setQuestionsData((prevQuestionsData) => {
      return prevQuestionsData.map((question, indx) =>
        indx === index ? { ...question, isOpen: !question.isOpen } : question
      );
    });
  };

  return (
    <div className="max-container grid ">
      <form className="m-10">
        {questionsData.map((item, index) => (
          <div key={item.question} className="mb-24 md:mb-[100px] lg:mb-20">
            <div
              onClick={() => handleToggle(index)}
              className="flex items-center justify-between"
            >
              <h3 className="font-bold text-grey text-2xl md:text-3xl lg:text-4xl cursor-pointer">
                {item.question}
              </h3>
              <img
                className={`${item.isOpen && "rotate-180"}`}
                src={item.icon}
                alt=""
              />
            </div>
            {item.isOpen && (
              <div className="flex items-center space-x-3">
                {item.answers.map((data) => (
                  <Input
                    key={data.answer}
                    handleChange={handleChange}
                    inputName={data.type}
                    inputValue={data.answer}
                    checked={coffeeData[data.type] === data.answer}
                  />
                ))}
              </div>
            )}
          </div>
        ))}
        <OrderSummary coffeeData={coffeeData} />
      </form>
    </div>
  );
};

export default OrderCoffee;
