interface Props {
  icon: string;
  header: string;
  text: string;
}

const CardWhyChooseUs = ({ icon, header, text }: Props) => {
  return (
    <div
      className="flex flex-col items-center gap-14  md:flex-row md:items-center 
      md:gap-12 lg:flex-col bg-dark_cyan text-light_cream py-12 px-3 md:py-10 md:px-12 
       rounded-lg"
    >
      <img src={icon} alt="" />
      <div className="text-center md:text-left lg:text-center w-[75%] lg:w-full">
        <h3 className="font-bold text-2xl">{header}</h3>
        <p className="text-sm  lg:text-base mt-6 md:mt-4 ">{text}</p>
      </div>
    </div>
  );
};

export default CardWhyChooseUs;
