import Heading from "../../../components/shared/Heading/Heading";
import CarCard from "../../../components/shared/CarCard/CarCard";
import { useGetCarsQuery } from "../../../redux/features/car/carApi";
import Skeleton from "../../../components/shared/ui/Skeleton";
import { useState } from "react";

const PopularCar = () => {
  const [page, setPage] = useState(1);
  const { data, isLoading } = useGetCarsQuery(page);
  console.log(data);
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
  if (data?.results?.length > 0) {
    content = data.results.map((car) => <CarCard key={car.id} car={car} />);
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
      <div className="flex justify-end items-center space-x-4 mr-10 mt-6">
        {data?.next && (
          <button
            className="bg-green-500 text-white px-4 py-2 rounded"
            onClick={() => setPage((prev) => prev + 1)}
          >
            Next
          </button>
        )}
        {data?.previous && (
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded"
            onClick={() => setPage((prev) => prev - 1)}
          >
            Previous
          </button>
        )}
      </div>
    </section>
  );
};

export default PopularCar;
