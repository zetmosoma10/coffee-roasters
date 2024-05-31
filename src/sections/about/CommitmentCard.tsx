import mobileImg from "../../assets/about/mobile/image-commitment.jpg";
import tabletImg from "../../assets/about/tablet/image-commitment.jpg";
import desktopImg from "../../assets/about/desktop/image-commitment.jpg";

const CommitmentCard = () => {
  return (
    <div className="grid md:grid-cols-2 items-center gap-y-12 gap-x-12 max-w-[1110px] mx-auto">
      <picture className="block">
        <source media="(max-width: 767px)" srcSet={mobileImg} />
        <source
          media="(min-width: 768px and max-width: 1023px)"
          srcSet={tabletImg}
        />
        <source media="(min-width: 1024px)" srcSet={desktopImg} />
        <img className="w-full rounded-lg" src={desktopImg} alt="" />
      </picture>
      <div className="text-center md:text-left">
        <h2 className="font-bold text-3xl lg:text-4xl">Our commitment</h2>
        <p className="text-sm lg:text-base opacity-80 mt-7">
          We’re built on a simple mission and a commitment to doing good along
          the way. We want to make it easy for you to discover and brew the
          world’s best coffee at home. It all starts at the source. To locate
          the specific lots we want to purchase, we travel nearly 60 days a year
          trying to understand the challenges and opportunities in each of these
          places. We collaborate with exceptional coffee growers and empower a
          global community of farmers through with well above fair-trade
          benchmarks. We also offer training, support farm community
          initiatives, and invest in coffee plant science. Curating only the
          finest blends, we roast each lot to highlight tasting profiles
          distinctive to their native growing region.
        </p>
      </div>
    </div>
  );
};

export default CommitmentCard;
