import BannerImg from "../../../assets/banner.jpg";
import CarImg from "../../../assets/car-right.png";
import { FaThumbsUp } from "react-icons/fa";
import { BsArrowRightShort } from "react-icons/bs";
const Banner = () => {
  return (
    <>
      <section
        style={{
          background: `url(${BannerImg})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "right",
          backgroundSize: "cover",
          padding: "100px 0",
        }}
        className="hidden lg:block"
      >
        <div className="w-11/12 mx-auto flex items-center justify-between">
          <div className="lg:w-3/4 flex flex-col space-y-3">
            {/* top heading */}
            <div className="bg-white rounded-3xl py-3 w-fit px-6 text-color-black">
              <h1 className="flex items-center">
                <span className="mr-2 text-color-orange">
                  <FaThumbsUp />
                </span>
                100% Trusted car rental platform in the World
              </h1>
            </div>
            <div>
              <h1 className="text-6xl font-black text-color-black-1 leading-tight">
                Find Your Best <br />
                <span className="text-color-orange">Dream Car for Rental</span>
              </h1>
            </div>
            <p className="text-lg text-[#878787]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&apos;s standard dummy
              text ever since the 1500s
            </p>
            <button className="border-2 border-color-black-1 w-36 px-2 py-1 rounded text-base font-medium flex items-center justify-between hover:bg-color-orange hover:border-color-orange hover:text-white transition-colors">
              View all Cars <BsArrowRightShort />
            </button>
          </div>
          <div className="hidden lg:block">
            <img src={CarImg} alt="" className="w-3/4" />
          </div>
        </div>
      </section>

      {/* mobile view  */}
      <section className="lg:hidden bg-[#F5F7F6] flex justify-center items-center px-4 py-6">
        <div className="lg:w-3/4 flex flex-col space-y-3 mt-8">
          {/* top heading */}
          <div className="bg-white rounded-3xl py-3 w-fit px-6 text-color-black">
            <h1 className="flex items-center">
              <span className="mr-2 text-color-orange">
                <FaThumbsUp />
              </span>
              100% Trusted car rental platform in the World
            </h1>
          </div>
          <div>
            <h1 className="text-4xl font-black text-color-black-1 leading-tight">
              Find Your Best <br />
              <span className="text-color-orange">Dream Car for Rental</span>
            </h1>
          </div>
          <p className="text-sm text-[#878787]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&apos;s standard dummy
            text ever since the 1500s
          </p>
          <button className="border-2 border-color-black-1 w-32 px-2 py-1 rounded text-base font-medium flex items-center justify-between hover:bg-color-orange hover:border-color-orange hover:text-white transition-colors">
            View all Cars <BsArrowRightShort />
          </button>
        </div>
      </section>
    </>
  );
};

export default Banner;
