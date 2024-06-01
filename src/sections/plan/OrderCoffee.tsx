import { useState } from "react";
import { coffeeQuestions } from "../../constance";
import Input from "./Input";

const OrderCoffee = () => {
  const [questionsData, setQuestionsData] = useState(coffeeQuestions);
  const [coffeeData, setCoffeeData] = useState({
    drinkType: "",
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
          <div key={item.question}>
            <div
              onClick={() => handleToggle(index)}
              className="flex items-center justify-between"
            >
              <h3 className="font-bold text-grey text-2xl md:text-3xl lg:text-4xl cursor-pointer">
                {item.question}
              </h3>
              <img src={item.icon} alt="" />
            </div>
            {item.isOpen && (
              <div className="flex items-center space-x-3">
                {item.answers.map((data) => (
                  <Input
                    key={data.answer}
                    handleChange={handleChange}
                    inputName={data.type}
                    inputValue={data.answer}
                    checked={coffeeData.drinkType === data.answer}
                  />
                ))}
              </div>
            )}
          </div>
        ))}
      </form>
    </div>
  );
};

export default OrderCoffee;
