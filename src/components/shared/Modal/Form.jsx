import { useUpdateCarMutation } from "../../../redux/features/car/carApi";

// eslint-disable-next-line react/prop-types
const Form = ({ car, setOpen }) => {
  const [updateCar] = useUpdateCarMutation();
  const {
    _id,
    name,
    brand,
    service_area,
    service_area_to,
    rent_price,
    image_url,
  } = car || {};

  const handelSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const brand = form.brand.value;
    const image_url = form.image.value;
    const service_area = form.from.value;
    const service_area_to = form.to.value;
    const rent_price = form.price.value;
    const carData = {
      name,
      brand,
      service_area,
      service_area_to,
      rent_price,
      image_url,
    };
    updateCar({ _id, carData });
    setOpen(false);
  };
  return (
    <div className="w-full  bg-white p-5 rounded-lg lg:rounded-l-none">
      <form onSubmit={handelSubmit} className=" bg-white rounded">
        <div className="mb-4 md:flex md:justify-between">
          <div className="mb-4 md:mr-2 md:mb-0">
            <label
              className="block mb-2 text-sm font-bold text-gray-700"
              htmlFor="firstName"
            >
              Car Name
            </label>
            <input
              className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
              id="firstName"
              name="name"
              type="text"
              placeholder="Enter Car Name"
              defaultValue={name}
              required
            />
          </div>
          <div className="md:ml-2">
            <label
              className="block mb-2 text-sm font-bold text-gray-700"
              htmlFor="lastName"
            >
              Brand
            </label>
            <input
              className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
              id="lastName"
              type="text"
              name="brand"
              defaultValue={brand}
              required
            />
          </div>
        </div>
        <div className="mb-4">
          <label
            className="block mb-2 text-sm font-bold text-gray-700"
            htmlFor="email"
          >
            Image Url
          </label>
          <input
            className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
            id="img"
            name="image"
            type="url"
            placeholder="Enter Your Car Image Url"
            defaultValue={image_url}
            required
          />
        </div>
        <div className="mb-4 md:flex md:justify-between">
          <div className="mb-4 md:mr-2 md:mb-0">
            <label
              className="block mb-2 text-sm font-bold text-gray-700"
              htmlFor="password"
            >
              Service Area From
            </label>
            <select
              name="from"
              className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow  focus:outline-none focus:shadow-outline"
              required
              defaultValue={service_area}
            >
              <option value="" hidden>
                Please Select
              </option>
              <option>Mirpur</option>
              <option>Gulistan</option>
              <option>Farmgate</option>
            </select>
          </div>
          <div className="mb-4 md:mr-2 md:mb-0">
            <label
              className="block mb-2 text-sm font-bold text-gray-700"
              htmlFor="password"
            >
              Service Area To
            </label>
            <select
              name="to"
              className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow  focus:outline-none focus:shadow-outline"
              required
              defaultValue={service_area_to}
            >
              <option value="" hidden>
                Please Select
              </option>
              <option>Rampura</option>
              <option>Mohakhali</option>
              <option>Bannai</option>
            </select>
          </div>
          <div className="mb-4">
            <label
              className="block mb-2 text-sm font-bold text-gray-700"
              htmlFor="email"
            >
              Rent Price
            </label>
            <input
              className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
              id="img"
              name="price"
              type="number"
              placeholder="price"
              defaultValue={rent_price}
              required
            />
          </div>
        </div>
        <div className="mb-6 text-center">
          <button
            className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Update
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
