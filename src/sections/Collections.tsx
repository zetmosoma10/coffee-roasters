import { collectionData } from "../constance";

const Collections = () => {
  return (
    <div className=" text-center sm:text-left lg:text-center">
      <h2
        className="font-bold text-center tracking-wide   text-3xl sm:text-8xl lg:text-[150px] bg-clip-text 
      text-transparent gradient-text sm:mb-[-30px] whitespace-nowrap"
      >
        our collection
      </h2>
      <div className="grid gap-y-10 space-y-6 lg:space-y-0 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {collectionData.map((card) => (
          <div
            key={card.header}
            className="grid sm:grid-cols-2 lg:grid-cols-1 items-center "
          >
            <img className="w-full" src={card.img} />
            <div>
              <h3 className="text-2xl lg:text-3xl font-bold">{card.header}</h3>
              <p className=" text-sm lg:text-base mt-4">{card.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Collections;
