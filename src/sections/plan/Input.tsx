interface Props {
  inputName: string;
  inputValue: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  checked: boolean;
}

const capitalizeFirstLetter = (string: string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

const Input = ({ inputName, inputValue, checked, handleChange }: Props) => {
  return (
    <div className="flex items-center space-x-1">
      <input
        onChange={handleChange}
        value={inputValue}
        type="radio"
        name={inputName}
        id={inputValue}
        checked={checked}
      />
      <label htmlFor={inputValue}>{capitalizeFirstLetter(inputValue)}</label>
    </div>
  );
};

export default Input;
