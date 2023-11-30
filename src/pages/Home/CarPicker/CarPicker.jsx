import { AiOutlineSearch } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
const CarPicker = () => {
  const navigate = useNavigate();
  const handelPickCar = (e) => {
    e.preventDefault();
    const from = e.target.from.value;
    const to = e.target.to.value;
    navigate(`/destination?from=${from}&to=${to}`);
  };
  return (
    <div
      className="lg:w-3/4 mx-auto bg-white shadow flex items-center rounded-md py-9 lg:absolute top-3/4 right-40 z-30"
      data-aos="fade-up"
    >
      <form
        onSubmit={handelPickCar}
        className="w-full lg:w-auto mx-auto flex flex-col lg:flex-row items-center justify-center space-y-4 lg:space-y-0 lg:justify-between lg:space-x-10 flex-wrap"
      >
        <div className="flex flex-col space-y-1 w-3/4 lg:w-auto">
          <p className="text-sm font-bold text-color-black">Destination From</p>
          <div className="bg-[#FCFBFB]  border border-[#f4f4f4] rounded">
            <select
              name="from"
              className="px-10 py-2 bg-[#FCFBFB] text-color-black"
              required
            >
              <option value="" hidden>
                Please select
              </option>

              <option>Mirpur</option>
              <option>Gulistan</option>
              <option>Farmgate</option>
            </select>
          </div>
        </div>
        <div className="flex flex-col space-y-1 w-3/4 lg:w-auto">
          <p className="text-sm font-bold text-color-black">Destination To</p>
          <div className="bg-[#FCFBFB]  border border-[#f4f4f4] rounded">
            <select
              name="to"
              className="px-10 py-2 bg-[#FCFBFB] text-color-black"
              required
            >
              <option value="" hidden>
                Please select
              </option>
              <option>Rampura</option>
              <option>Mohakhali</option>
              <option>Bannai</option>
            </select>
          </div>
        </div>
        <div className="flex flex-col space-y-1 w-3/4 lg:w-auto">
          <p className="text-sm font-bold text-color-black">Date</p>
          <div className="bg-[#FCFBFB]  border border-[#f4f4f4] rounded">
            <input
              type="date"
              name="date"
              required
              className="px-10 py-2 bg-[#FCFBFB] text-color-black"
            />
          </div>
        </div>
        <div className="flex flex-col items-center lg:mt-10">
          <div className="bg-[#FCFBFB]  border border-[#f4f4f4] rounded">
            <button type="submit" className="signup">
              <AiOutlineSearch />
              Search
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CarPicker;
