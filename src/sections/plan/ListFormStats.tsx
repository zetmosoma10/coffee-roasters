const ListFormStats = () => {
  return (
    <ul className="hidden lg:block font-fraunces font-bold text-grey text-2xl divide-y divide-grey max-w-[255px]">
      <li className="pb-6">
        <p>
          <span className="mr-2">01</span>Preferences
        </p>
      </li>
      <li className="py-6">
        <p>
          <span className="mr-2">02</span>Bean Type
        </p>
      </li>
      <li className="py-6">
        <p>
          <span className="mr-2">03</span>Quantity
        </p>
      </li>
      <li className="py-6">
        <p>
          <span className="mr-2">04</span>Grind Option
        </p>
      </li>
      <li className="py-6">
        <p>
          <span className="mr-2">05</span>Deliveries
        </p>
      </li>
    </ul>
  );
};

export default ListFormStats;
