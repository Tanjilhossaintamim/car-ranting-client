import Heading from "../../../components/shared/Heading/Heading";
import CarCard from "../../../components/shared/CarCard/CarCard";
import { useGetCarsQuery } from "../../../redux/features/car/carApi";
import Skeleton from "../../../components/shared/ui/Skeleton";
import { useState } from "react";
import ResponsivePagination from "react-responsive-pagination";

const PopularCar = () => {
  const [currentPage, setcurrentPage] = useState(1);
  const { data, isLoading } = useGetCarsQuery(currentPage);
  const totalPage = Math.ceil(data?.totalCar / 6);

  let content = null;
  if (isLoading) {
    content = (
      <>
        <Skeleton />
        <Skeleton />
        <Skeleton />
        <Skeleton />
        <Skeleton />
        <Skeleton />
      </>
    );
  }
  if (data?.cars?.length > 0) {
    content = data.cars.map((car) => (
      <CarCard key={car._id} car={car} isRentButton={true} />
    ));
  }
  return (
    <section className="py-20 bg-[#F2F7F6]">
      <Heading
        title="Explore Most Popular Cars"
        description="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
      />
      <div
        className="max-w-6xl mx-auto grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 place-content-center px-4 lg:px-0"
        data-aos="fade-up"
      >
        {content}
      </div>
      {data?.cars?.length > 0 && (
        <div className="mt-10">
          <ResponsivePagination
            total={totalPage}
            current={currentPage}
            onPageChange={(page) => setcurrentPage(page)}
          />
        </div>
      )}
    </section>
  );
};

export default PopularCar;
