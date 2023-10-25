import { useParams } from "react-router-dom";
import { useGetSearchCarQuery } from "../../redux/features/car/carApi";
import Skeleton from "../../components/shared/ui/Skeleton";
import CarCard from "../../components/shared/CarCard/CarCard";

const Search = () => {
  const { name } = useParams();
  const { data, isLoading } = useGetSearchCarQuery(name);
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
      
      <div
        className="max-w-6xl mx-auto grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 place-content-center px-4 lg:px-0"
        data-aos="fade-up"
      >
        {content}
      </div>
      {/* <div className="flex justify-end items-center space-x-4 mr-10 mt-6">
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
      </div> */}
    </section>
  );
};

export default Search;
