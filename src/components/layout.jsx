import luxury from "../assets/images/icon-luxury.svg";
import sedans from "../assets/images/icon-sedans.svg";
import suvs from "../assets/images/icon-suvs.svg";
const LayoutColumns = () => {
  return (
    <div className="lg:grid lg:grid-cols-3 lg:w-[920px] lg:h-[500px] sm:flex sm:flex-col sm:h-[1330px] sm:w-[325px]">
      <div className="bg-brightOrange w-full h-full border lg:rounded-l-lg border-transparent sm:rounded-t-lg lg:rounded-tr-none sm:m">
        <div className="m-11 text-left">
          <img src={sedans} alt="sedans logo" className="mb-9" />
          <p className="text-4xl font-bigShouldersDisplay text-veryTransparentWhite mb-9">
            SEDANS
          </p>
          <p className="text-lg font-lexandDeca text-transparentWhite font-medium mb-[60px]">
            Choose a sedan for its affordability and excellent fuel economy.
            Ideal for cruising in the city or on your next road trip.
          </p>
          <button className="w-[145px] border rounded-full border-transparent bg-white text-brightOrange hover:bg-brightOrange hover:text-white hover:border-2 hover:border-white p-3">
            Learn More
          </button>
        </div>
      </div>
      <div className="bg-darkCyan w-full h-full">
        <div className="m-11 text-left">
          <img src={suvs} alt="sedans logo" className="mb-9" />
          <p className="text-4xl font-bigShouldersDisplay text-veryTransparentWhite mb-9">
            SUVS
          </p>
          <p className="text-lg font-lexandDeca text-transparentWhite font-medium mb-[60px]">
            Take an SUV for its spacious interior, power, and versatility.
            Perfect for your next family vacation and off-road adventures.
          </p>
          <button className="w-[145px] border rounded-full border-transparent bg-white text-darkCyan hover:bg-darkCyan hover:text-white hover:border-2 hover:border-white p-3">
            Learn More
          </button>
        </div>
      </div>
      <div className="bg-veryDarkCyan w-full h-full border lg:rounded-r-lg border-transparent sm:rounded-b-lg lg:rounded-bl-none">
        <div className="m-11 text-left">
          <img src={luxury} alt="sedans logo" className="mb-9" />
          <p className="text-4xl font-bigShouldersDisplay text-veryTransparentWhite mb-9">
            Luxury
          </p>
          <p className="text-lg font-lexandDeca text-transparentWhite font-medium mb-[60px]">
            Cruise in the best car brands without the bloated prices. Enjoy the
            enhanced comfort of a luxury rental and arrive in style.
          </p>
          <button className="w-[145px] border rounded-full border-transparent bg-white text-veryDarkCyan hover:bg-veryDarkCyan hover:text-white hover:border-2 hover:border-white p-3">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default LayoutColumns;
