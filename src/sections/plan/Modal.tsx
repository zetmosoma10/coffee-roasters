import Button from "../../components/Button";

interface Props {
  coffeeData: {
    preferences: string;
    beanType: string;
    quantity: string;
    grindOption: string;
    deliveries: string;
  };
  setModalOff: () => void;
  resetFormData: () => void;
}

const Modal = ({ coffeeData, setModalOff, resetFormData }: Props) => {
  const handleClick = () => {
    setModalOff();
    resetFormData();
  };

  return (
    <div
      className="max-container rounded-[10px] overflow-hidden  bg-white 
      fixed top-[100px] left-0 right-0  mx-auto max-w-[540px]"
    >
      <header className="bg-dark_grey text-light_cream py-7 px-6">
        <h2 className="font-bold text-3xl">Order Summary</h2>
      </header>
      <div className="mt-10 md:mt-14 px-6 pb-6 md:px-14 md:pb-14">
        <h4 className="font-bold text-2xl pt-2 text-grey">
          “I drink my coffee as{" "}
          <span className="text-dark_cyan">
            {coffeeData.preferences ? coffeeData.preferences : "___"}
          </span>
          , with a{" "}
          <span className="text-dark_cyan">
            {coffeeData.beanType ? coffeeData.beanType : "___"}
          </span>{" "}
          type of bean.{" "}
          <span className="text-dark_cyan">
            {coffeeData.quantity ? coffeeData.quantity : "___"}
          </span>{" "}
          ground ala{" "}
          <span className="text-dark_cyan">
            {coffeeData.grindOption ? coffeeData.grindOption : "___"}
          </span>
          , sent to me{" "}
          <span className="text-dark_cyan">
            {coffeeData.deliveries ? coffeeData.deliveries : "___"}
          </span>
          .”
        </h4>
        <p className="text-sm lg:text-base pt-2 opacity-80">
          Is this correct? You can proceed to checkout or go back to plan
          selection if something is off. Subscription discount codes can also be
          redeemed at the checkout.
        </p>
        <div className="mt-6 space-x-4">
          <span className="font-fraunces font-bold text-2xl lg:text-3xl ">
            $14.00 / mo
          </span>
          <Button onClick={handleClick} className="py-4 px-7" type="button">
            Checkout
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
