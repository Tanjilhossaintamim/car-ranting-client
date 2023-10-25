import { useFormik } from "formik";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { signInSchema } from "../../utils/schema";
import { useLoginMutation } from "../../redux/features/authenication/authenicationApi";
import { useEffect } from "react";
import toast from "react-hot-toast";
import LoadingBtn from "../../components/shared/ui/LoadingBtn";

const Login = () => {
  const [login, { error, isError, isSuccess, isLoading }] = useLoginMutation();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (isError) {
      const key = Object.keys(error?.data)[0];
      const message = error?.data[key];
      toast.error(message);
    } else if (isSuccess) {
      toast.success("successfully logged in !");
      navigate(location.state ? location.state : "/");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isError, isSuccess, navigate]);
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        email: "",
        password: "",
      },
      validationSchema: signInSchema,
      onSubmit: (values) => {
        login({ email: values.email, password: values.password });
      },
    });
  return (
    <section className="bg-[#FCFBFB] min-h-[50vh] py-20 flex justify-center items-center">
      <div className="max-w-[635px] w-full mx-auto flex justify-center rounded-md items-center px-4 lg:px-0">
        <div className="bg-white shadow-sm w-full rounded-md p-7">
          <h1 className="text-[28px] font-bold">Sign In</h1>
          <form
            className="flex flex-col space-y-4 mt-8"
            onSubmit={handleSubmit}
          >
            <div className="flex flex-col space-y-2">
              <label htmlFor="email" className="font-semibold text-[#2f2f2f]">
                Email <small className="text-red-600">*</small>
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="bg-[#fcfbfb] p-3 border border-[#f4f4f4] rounded-md text-sm text-color-black-1 outline-none focus:bg-white"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {touched.email && errors.email && (
                <small className="text-red-500">{errors.email}</small>
              )}
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
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {touched.password && errors.password && (
                <small className="text-red-500">{errors.password}</small>
              )}
            </div>
            {isLoading ? (
              <LoadingBtn />
            ) : (
              <input
                type="submit"
                value="Sign In"
                className="bg-color-black-1 py-2 text-white font-semibold rounded-md cursor-pointer"
              />
            )}
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
