import { useGetBookingsQuery } from "../../redux/features/booking/bookingApi";

const BookingList = () => {
  const {
    data: bookingList,
    isError,
    isLoading,
  } = useGetBookingsQuery(undefined, { refetchOnMountOrArgChange: true });
  let content = null;
  if (isLoading) {
    content = <div>Loading...</div>;
  }
  if (bookingList?.length == 0) {
    content = (
      <div className="text-center text-2xl font-semibold">No Booking Car !</div>
    );
  }
  if (bookingList?.length > 0) {
    console.log(bookingList);
    content = (
      <div className="container mx-auto p-6 font-mono">
        <div className="w-full mb-8 overflow-hidden rounded-lg shadow-lg">
          <div className="w-full overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="text-md font-semibold tracking-wide text-left text-gray-900 bg-gray-100 uppercase border-b border-gray-600">
                  <th className="px-4 py-3">Car Name</th>
                  <th className="px-4 py-3">Destination</th>
                  <th className="px-4 py-3">Rent</th>
                  <th className="px-4 py-3">Booking Date</th>
                </tr>
              </thead>
              <tbody className="bg-white">
                {bookingList.map((list) => {
                  const car = list.car;
                  const {
                    name,
                    brand,
                    image_url,
                    service_area,
                    service_area_to,
                    rent_price,
                  } = car;
                  return (
                    <tr key={list.id} className="text-gray-700">
                      <td className="px-4 py-3 border">
                        <div className="flex items-center text-sm">
                          <div className="relative w-8 h-8 mr-3 rounded-full md:block">
                            <img
                              className="object-cover w-full h-full rounded-full"
                              src={image_url}
                              alt=""
                              loading="lazy"
                            />
                            <div
                              className="absolute inset-0 rounded-full shadow-inner"
                              aria-hidden="true"
                            ></div>
                          </div>
                          <div>
                            <p className="font-semibold text-black">{name}</p>
                            <p className="text-xs text-gray-600">{brand}</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-4 py-3 text-ms font-semibold border">
                        {service_area_to} to {service_area}
                      </td>
                      <td className="px-4 py-3 text-xs border">
                        <span className="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-sm">
                          {" "}
                          &#2547;{rent_price}{" "}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-sm border">
                        {list.bookingDate}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
  if (isError) {
    content = <div>Some thing went wrong !</div>;
  }

  return (
    <section className="min-h-screen">
      <div className="max-w-6xl mx-auto">{content}</div>
    </section>
  );
};

export default BookingList;
