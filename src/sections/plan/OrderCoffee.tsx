import { useState } from "react";
import { coffeeQuestions } from "../../constance";
import OrderSummary from "./OrderSummary";
import Input from "./Input";
import Button from "../../components/Button";
import Modal from "./Modal";

const OrderCoffee = () => {
  const [questionsData, setQuestionsData] = useState(coffeeQuestions);
  const [coffeeData, setCoffeeData] = useState({
    preferences: "",
    beanType: "",
    quantity: "",
    grindOption: "",
    deliveries: "",
  });

  const handleToggle = (index: number) => {
    return setQuestionsData((prevQuestionsData) => {
      return prevQuestionsData.map((question, indx) =>
        indx === index ? { ...question, isOpen: !question.isOpen } : question
      );
    });
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setCoffeeData({
      ...coffeeData,
      [name]: value,
    });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(coffeeData);
  };

  return (
    <div className="max-container grid border border-red-500">
      <div className="fixed top-[100px] left-0 right-0 bottom-[0]  mx-auto max-w-[540px]">
        <Modal coffeeData={coffeeData} />
      </div>
      <form onSubmit={handleSubmit} className="m-10 border">
        {questionsData.map((item, index) => (
          <div key={item.question} className="mb-24 md:mb-[100px] lg:mb-20">
            <div
              onClick={() => handleToggle(index)}
              className="flex items-center justify-between gap-4"
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
        <div className="flex justify-center lg:justify-end mt-14 md:mt-10">
          <Button type="button">Create your plan</Button>
        </div>
      </form>
    </div>
  );
};

export default OrderCoffee;