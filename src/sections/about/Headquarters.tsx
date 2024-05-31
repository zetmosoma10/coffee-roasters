import { headquartersData } from "../../constance";

const Headquarters = () => {
  return (
    <div className="text-center md:text-left">
      <h3 className="font-bold text-2xl text-grey">Our headquarters</h3>
      <div className="grid md:grid-cols-3 gap-y-20 gap-x-10  mt-[72px]">
        {headquartersData.map((data) => (
          <div
            className="flex flex-col items-center md:items-start"
            key={data.name}
          >
            <img src={`${data.img}`} alt="" />
            <span className="block font-fraunces font-bold text-3xl mt-11">
              {data.name}
            </span>
            <ul className="text-sm lg:text-base mt-5 space-y-2">
              {data.address.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Headquarters;
