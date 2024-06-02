interface Props {
  coffeeData: {
    preferences: string;
    beanType: string;
    quantity: string;
    grindOption: string;
    deliveries: string;
  };
}

const ListFormStats = ({ coffeeData }: Props) => {
  return (
    <ul className="hidden lg:block font-fraunces font-bold text-grey text-2xl divide-y divide-grey max-w-[255px]">
      <li className="pb-6">
        <p>
          <span
            className={`mr-2 ${coffeeData.preferences && "text-dark_cyan"}`}
          >
            01
          </span>
          <span className={`${coffeeData.preferences && "text-dark_grey"}`}>
            Preferences
          </span>
        </p>
      </li>
      <li className="py-6">
        <p>
          <span className={`mr-2 ${coffeeData.beanType && "text-dark_cyan"}`}>
            02
          </span>
          <span className={`${coffeeData.beanType && "text-dark_grey"}`}>
            Bean Type
          </span>
        </p>
      </li>
      <li className="py-6">
        <p>
          <span className={`mr-2 ${coffeeData.quantity && "text-dark_cyan"}`}>
            03
          </span>
          <span className={`${coffeeData.quantity && "text-dark_grey"}`}>
            Quantity
          </span>
        </p>
      </li>
      <li className="py-6">
        <p>
          <span
            className={`mr-2 ${coffeeData.grindOption && "text-dark_cyan"}`}
          >
            04
          </span>
          <span className={`${coffeeData.grindOption && "text-dark_grey"}`}>
            Grind Option
          </span>
        </p>
      </li>
      <li className="py-6">
        <p>
          <span className={`mr-2 ${coffeeData.deliveries && "text-dark_cyan"}`}>
            05
          </span>
          <span className={`${coffeeData.deliveries && "text-dark_grey"}`}>
            Deliveries
          </span>
        </p>
      </li>
    </ul>
  );
};

export default ListFormStats;
