import { Link } from "react-router-dom";

const Login = () => {
  return (
    <section className="bg-[#FCFBFB] min-h-[50vh] py-20 flex justify-center items-center">
      <div className="max-w-[635px] w-full mx-auto flex justify-center rounded-md items-center px-4 lg:px-0">
        <div className="bg-white shadow-sm w-full rounded-md p-7">
          <h1 className="text-[28px] font-bold">Sign In</h1>
          <form className="flex flex-col space-y-4 mt-8">
            <div className="flex flex-col space-y-2">
              <label htmlFor="email" className="font-semibold text-[#2f2f2f]">
                Email <small className="text-red-600">*</small>
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="bg-[#fcfbfb] p-3 border border-[#f4f4f4] rounded-md text-sm text-color-black-1 outline-none focus:bg-white"
              />
            </div>
            <div className="flex flex-col space-y-2">
              <label htmlFor="email" className="font-semibold text-[#2f2f2f]">
                Password <small className="text-red-600">*</small>
              </label>
              <input
                type="password"
                name="password"
                id="email"
                className="bg-[#fcfbfb] p-3 border border-[#f4f4f4] rounded-md text-sm text-color-black-1 outline-none focus:bg-white"
              />
            </div>
            

            
            <input
              type="submit"
              value="Sign In"
              className="bg-color-black-1 py-2 text-white font-semibold rounded-md cursor-pointer"
            />
          </form>
          <p className="text-center mt-3 text-color-gray">
            Don&apos;t have an Account?{" "}
            <Link to="/signup" className="text-color-pest hover:underline">
              sign up
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Login;
