const AddCar = () => {
  return (
    <section className="py-10 bg-gray-400">
      {/* <!-- component --> */}
      <div className=" bg-gray-400">
        {/* <!-- Container --> */}
        <div className="container mx-auto">
          <div className="flex justify-center px-6 my-12">
            {/* <!-- Row --> */}
            <div className="w-full xl:w-3/4 lg:w-11/12 flex">
              {/* <!-- Col --> */}
              <div
                className="w-full h-auto bg-gray-400 hidden lg:block lg:w-5/12 bg-cover object-cover rounded-l-lg"
                style={{
                  background:
                    "url(https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNhcnN8ZW58MHx8MHx8fDA%3D)",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                }}
              ></div>
              {/* <!-- Col --> */}
              <div className="w-full lg:w-7/12 bg-white p-5 rounded-lg lg:rounded-l-none">
                <h3 className="pt-4 text-2xl text-center">Add Car</h3>
                <form className="px-8 pt-6 pb-8 mb-4 bg-white rounded">
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
                        placeholder="Brand Name"
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
                        name="from"
                        className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow  focus:outline-none focus:shadow-outline"
                        required
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
                        name="pice"
                        type="number"
                        placeholder="price"
                        required
                      />
                    </div>
                  </div>
                  <div className="mb-6 text-center">
                    <button
                      className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                      type="submit"
                    >
                      Add Car
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AddCar;
