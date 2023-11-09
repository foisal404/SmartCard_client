import HeroIng from "../../src/assets/Image/cards_iii.png";
import { Button } from "@material-tailwind/react";

const HeroSection = () => {
  return (
    <div className="h-[100vh] p-10 md:p-20 bg-[#3D23A2]">
      <div className="flex flex-col md:flex-row  justify-center items-center">
        {/* <p className="text-red-500 text-center font-bold">Smart Business Card</p>
                <h2 className="text-white text-7xl py-6 text-center">"SCard" is Pulling the humble <br /> business card straight into <br /> the 21th century.</h2> */}
        <div className="pt-20 lg:p-20 md:w-1/2">
          <p className="text-white  text-2xl lg:text-4xl font-thin">
            Making Everyday Life Easier
          </p>
          <h2 className="text-white text-base md:text-lg lg:text-xl py-6 text-justify">
            SCard is a pioneer in contactless smart card applications, and has
            now become an integral part of everyday life in Bangladesh.
          </h2>
          <div className="flex flex-wrap gap-2 justify-center">
            <Button className="bg-white text-purple-800">Get Your SCard</Button>
            <Button className="bg-transparent border-2">Find out More</Button>
          </div>
        </div>
        <div className="lg:p-20 py-10 md:w-1/2">
          <img src={HeroIng} alt="" className="w-11/12 mx-auto" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
