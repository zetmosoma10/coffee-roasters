interface Props {
  inputName: string;
  inputValue: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  checked: boolean;
  label: {
    name: string;
    text: string;
  };
}

const Input = ({
  inputName,
  inputValue,
  label,
  checked,
  handleChange,
}: Props) => {
  return (
    <div className="flex items-center space-x-1 md:space-x-0">
      <input
        onChange={handleChange}
        value={inputValue}
        type="radio"
        name={inputName}
        id={inputValue}
        checked={checked}
        className="hidden custom-radio"
      />
      <label className="custom-radio-label-container" htmlFor={inputValue}>
        <div
          className="custom-radio-label bg-[#F4F1EB] hover:bg-[#FDD6BA] focus:bg-[#FDD6BA] text-dark_grey
           focus:text-light_cream p-6 rounded-lg cursor-pointer transition-all duration-250"
        >
          <span className="font-bold font-fraunces text-2xl ">
            {label.name}
          </span>
          <p className="text-sm lg:text-base mt-2 lg:mt-6">{label.text}</p>
        </div>
      </label>
    </div>
  );
};

export default Input;
