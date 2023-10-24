import Banner from "../Banner/Banner";
import CarPicker from "../CarPicker/CarPicker";
import HowItWork from "../HowItWork/HowItWork";
import PopularCar from "../PopularLCar/PopularCar";

const Home = () => {
  return (
    <div>
      <Banner />
      <CarPicker />
      <HowItWork />
      <PopularCar />
    </div>
  );
};

export default Home;
