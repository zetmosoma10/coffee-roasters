interface Props {
  coffeeData: {
    preferences: string;
    beanType: string;
    quantity: string;
    grindOption: string;
    deliveries: string;
  };
}

const OrderSummary = ({ coffeeData }: Props) => {
  return (
    <div
      className="bg-dark_grey text-light_cream rounded-[10px] py-8 px-6 
        md:py-7 md:px-10 lg:px-16"
    >
      <span className="block text-sm lg:text-base opacity-50 uppercase">
        Order Summary
      </span>
      <h4 className="font-bold text-2xl pt-2">
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
    </div>
  );
};

export default OrderSummary;
