import { useEffect, useState } from "react";
import { coffeeQuestions } from "../../constance";
import OrderSummary from "./OrderSummary";
import Input from "./components/Input";
import Button from "../../components/Button";
import ListFormStats from "./components/ListFormStats";
import Modal from "./components/Modal";

interface Question {
  question: string;
  icon: string;
  isOpen: boolean;
  answers: {
    type: string;
    answer: {
      name: string;
      text: string;
    };
  }[];
}

type CoffeeDataKeys =
  | "preferences"
  | "beanType"
  | "quantity"
  | "grindOption"
  | "deliveries";

interface CoffeeDataType {
  preferences: string;
  beanType: string;
  quantity: string;
  grindOption: string;
  deliveries: string;
}

const OrderCoffee = () => {
  const [modalToggle, setModalToggle] = useState<boolean>(false);
  const [questionsData, setQuestionsData] =
    useState<Question[]>(coffeeQuestions);
  const [coffeeData, setCoffeeData] = useState<CoffeeDataType>({
    preferences: "",
    beanType: "",
    quantity: "",
    grindOption: "",
    deliveries: "",
  });

  const setModalOn = () => {
    setModalToggle(true);
  };

  const setModalOff = () => {
    setModalToggle(false);
  };

  const resetFormData = () => {
    setCoffeeData({
      preferences: "",
      beanType: "",
      quantity: "",
      grindOption: "",
      deliveries: "",
    });
  };

  useEffect(() => {
    if (modalToggle) document.body.classList.add("disable-scroll");
    if (!modalToggle) document.body.classList.remove("disable-scroll");
  }, [modalToggle]);

  const handleToggle = (index: number) => {
    return setQuestionsData((prevQuestionsData) => {
      return prevQuestionsData.map((question, indx) =>
        indx === index ? { ...question, isOpen: !question.isOpen } : question
      );
    });
  };

  const validateForm = () => {
    const coffeeValues = Object.values(coffeeData);
    const checkFalsyValues = coffeeValues.some((item) => item === "");
    return checkFalsyValues;
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setCoffeeData({
      ...coffeeData,
      [name]: value,
    } as CoffeeDataType);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <div className="max-container">
      {modalToggle && (
        <div className="absolute modal top-0 left-0 w-full h-full">
          <Modal
            resetFormData={resetFormData}
            setModalOff={setModalOff}
            coffeeData={coffeeData}
          />
        </div>
      )}
      <div className=" grid lg:grid-custom gap-x-10">
        <ListFormStats coffeeData={coffeeData} />
        <form onSubmit={handleSubmit}>
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
                <div className="flex flex-col md:flex-row items-start space-y-3 md:space-y-0 md:space-x-6 mt-8">
                  {item.answers.map((data) => (
                    <Input
                      key={data.answer.name}
                      handleChange={handleChange}
                      inputName={data.type}
                      inputValue={data.answer.name}
                      checked={
                        coffeeData[data.type as CoffeeDataKeys] ===
                        data.answer.name
                      }
                      label={data.answer}
                    />
                  ))}
                </div>
              )}
            </div>
          ))}
          <OrderSummary coffeeData={coffeeData} />
          <div className="flex justify-center lg:justify-end mt-14 md:mt-10">
            <Button
              disabled={validateForm()}
              onClick={setModalOn}
              type="button"
            >
              Create your plan
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default OrderCoffee;
