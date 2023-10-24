import Heading from "../../../components/shared/Heading/Heading";
import CarCard from "../../../components/shared/CarCard/CarCard";

const PopularCar = () => {
  return (
    <section className="py-20 bg-[#F2F7F6]">
      <Heading
        title="Explore Most Popular Cars"
        description="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
      />
      <div className="max-w-6xl mx-auto grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 place-content-center px-4 lg:px-0" data-aos="fade-up">
        <CarCard />
        <CarCard />
        <CarCard />
        <CarCard />
        <CarCard />
        <CarCard />
      </div>
    </section>
  );
};

export default PopularCar;
