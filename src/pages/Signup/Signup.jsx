import { useFormik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import { userSchema } from "../../utils/schema";
import { useSignUpMutation } from "../../redux/features/authenication/authenicationApi";
import { useEffect } from "react";
import toast from "react-hot-toast";
import LoadingBtn from "../../components/shared/ui/LoadingBtn";

const Signup = () => {
  const [signUp, { data, isLoading, isError, error, isSuccess }] =
    useSignUpMutation();
  const navigate = useNavigate();

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        email: "",
        password: "",
        confirmpassword: "",
        owner: false,
      },
      validationSchema: userSchema,
      onSubmit: (values) => {
        const userData = {
          email: values.email,
          password: values.password,
          is_owner: values.owner,
        };
        handelSignup(userData);
      },
    });

  useEffect(() => {
    if (isError) {
      const key = Object.keys((error && error.data) || { name: "tamim" })[0];
      const message = error?.data[key][0];
      toast.error(message);
    } else if (isSuccess) {
      toast.success("account created successfully!");
      navigate("/login");
    }
  }, [isError, error, isSuccess, data, navigate]);
  const handelSignup = (userData) => {
    signUp(userData);
  };
  return (
    <section className="bg-[#FCFBFB] min-h-[50vh] py-20 flex justify-center items-center">
      <div className="max-w-[635px] w-full mx-auto flex justify-center rounded-md items-center px-4 lg:px-0">
        <div className="bg-white shadow-sm w-full rounded-md p-7">
          <h1 className="text-[28px] font-bold">Sign Up</h1>
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
                onBlur={handleBlur}
                onChange={handleChange}
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
                id="password"
                className="bg-[#fcfbfb] p-3 border border-[#f4f4f4] rounded-md text-sm text-color-black-1 outline-none focus:bg-white"
                value={values.password}
                onBlur={handleBlur}
                onChange={handleChange}
              />
              {touched.password && errors.password && (
                <small className="text-red-500">{errors.password}</small>
              )}
            </div>
            <div className="flex flex-col space-y-2">
              <label htmlFor="email" className="font-semibold text-[#2f2f2f]">
                Confirm Password <small className="text-red-600">*</small>
              </label>
              <input
                type="password"
                name="confirmpassword"
                id="cpassword"
                className="bg-[#fcfbfb] p-3 border border-[#f4f4f4] rounded-md text-sm text-color-black-1 outline-none focus:bg-white"
                value={values.confirmpassword}
                onBlur={handleBlur}
                onChange={handleChange}
              />
              {touched.confirmpassword && errors.confirmpassword && (
                <small className="text-red-500">{errors.confirmpassword}</small>
              )}
            </div>

            <div className="flex items-center space-x-1">
              <input
                type="checkbox"
                name="owner"
                className="p-1"
                onChange={handleChange}
                checked={values.owner}
              />
              <label htmlFor="check" className="text-color-black-1">
                create account as a owner
              </label>
            </div>
            {isLoading ? (
              <LoadingBtn />
            ) : (
              <input
                type="submit"
                value="Sign UP"
                disabled={isLoading}
                className="bg-color-black-1 py-2 text-white font-semibold rounded-md cursor-pointer"
              />
            )}
          </form>
          <p className="text-center mt-3 text-color-gray">
            Already have an Account?{" "}
            <Link to="/login" className="text-color-pest hover:underline">
              sign in
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Signup;
