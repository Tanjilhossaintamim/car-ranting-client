import Heading from "../../../components/shared/Heading/Heading";
import ServiceImg from "../../../assets/services-icon-01.svg";
import RightImg from "../../../assets/service-right.svg";
import Work from "./Work";

const HowItWork = () => {
  return (
    <section className="pt-5 lg:py-28 bg-[#FCFBFB]">
      <div className="mt-10">
        <Heading
          title="How It Works"
          description="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
        />
        <div className="z-10">
          <div
            className="max-w-6xl mx-auto flex items-center flex-wrap justify-between relative"
            data-aos="fade-up"
          >
            <Work
              title="1. Choose Locations"
              img={ServiceImg}
              description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
              color={"#127384"}
            />
            <Work
              title="2. Pick-Up Locations"
              img={ServiceImg}
              description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
              color={"#FF9307"}
            />
            <Work
              title="3. Book your Car"
              img={ServiceImg}
              description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
              color={"#212529"}
            />
          </div>
          <img
            src={RightImg}
            alt=""
            className="absolute right-0 top-[800px] z-0 lg:top-[600px]"
          />
        </div>
      </div>
    </section>
  );
};

export default HowItWork;
