import { AiOutlineSearch } from "react-icons/ai";
const CarPicker = () => {
  return (
    <div className="lg:w-3/4 mx-auto bg-white shadow flex items-center rounded-md py-9 lg:absolute top-3/4 right-40">
      <form className="w-full lg:w-auto mx-auto flex flex-col lg:flex-row items-center justify-center space-y-4 lg:space-y-0 lg:justify-between lg:space-x-10 flex-wrap">
        <div className="flex flex-col space-y-1 w-3/4 lg:w-auto">
          <p className="text-sm font-bold text-color-black">Destination From</p>
          <div className="bg-[#FCFBFB]  border border-[#f4f4f4] rounded">
            <select
              name="from"
              id=""
              className="px-10 py-2 bg-[#FCFBFB] text-color-black"
              required
            >
              <option value="" hidden>
                Please select
              </option>
              <option>Mirpur</option>
              <option>Farmgate</option>
              <option>Mohakhali</option>
              <option>Banani</option>
            </select>
          </div>
        </div>
        <div className="flex flex-col space-y-1 w-3/4 lg:w-auto">
          <p className="text-sm font-bold text-color-black">Destination To</p>
          <div className="bg-[#FCFBFB]  border border-[#f4f4f4] rounded">
            <select
              name="to"
              id=""
              className="px-10 py-2 bg-[#FCFBFB] text-color-black"
              required
            >
              <option value="" hidden>
                Please select
              </option>
              <option>Mirpur</option>
              <option>Farmgate</option>
              <option>Mohakhali</option>
              <option>Banani</option>
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
