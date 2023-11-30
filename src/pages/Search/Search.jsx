import { useSearchParams } from "react-router-dom";
import { useGetSearchCarQuery } from "../../redux/features/car/carApi";
import Skeleton from "../../components/shared/ui/Skeleton";
import CarCard from "../../components/shared/CarCard/CarCard";

const Search = () => {
  const [searchParams] = useSearchParams();
  const url = `?from=${searchParams.get("from")}&to=${searchParams.get("to")}`;
  const { data, isLoading } = useGetSearchCarQuery(url);

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
  if (data?.cars?.length == 0) content = <h1 className="text-xl font-bold">No Car Found !</h1>;
  if (data?.cars?.length > 0) {
    content = data.cars.map((car) => (
      <CarCard key={car._id} car={car} isRentButton={true} />
    ));
  }
  document.title = `Dreams Rent |Search`;

  return (
    <section className="py-20 bg-[#F2F7F6]">
      <div
        className="max-w-6xl mx-auto grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 place-content-center px-4 lg:px-0"
        data-aos="fade-up"
      >
        {content}
      </div>
    </section>
  );
};

export default Search;
