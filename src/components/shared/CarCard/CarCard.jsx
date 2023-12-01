import { HiStar } from "react-icons/hi";
import { CiLocationOn } from "react-icons/ci";
import { AiFillDelete, AiFillEdit, AiOutlineCalendar } from "react-icons/ai";
import autoimg from "../../../assets/car-parts-01.svg";
import meterimg from "../../../assets/car-parts-02.svg";
import fuelimg from "../../../assets/car-parts-03.svg";
import powerimg from "../../../assets/car-parts-04.svg";
import loveimg from "../../../assets/car-parts-05.svg";
import sitimg from "../../../assets/car-parts-06.svg";
import Part from "./Part";
import PropTypes from "prop-types";
import { usePlaceBookingMutation } from "../../../redux/features/booking/bookingApi";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import Swal from "sweetalert2";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useDeleteCarMutation } from "../../../redux/features/car/carApi";
import FormDialog from "../Modal/Modal";
const CarCard = ({ car, isRentButton, isDeleteButton = false }) => {
  const { is_loggedin } = useSelector((state) => state.auth);
  const [placeBooking, { isSuccess, isError, error }] =
    usePlaceBookingMutation();
  const [deleteCar] = useDeleteCarMutation();
  const navigate = useNavigate();
  const {
    _id,
    name,
    brand,
    service_area,
    service_area_to,
    rent_price,
    image_url,
  } = car || {};
  // modal funtion
  const [open, setOpen] = useState(false);
  const handelBooking = async () => {
    const { value: phone } = await Swal.fire({
      title: "Give Your Phone Number",
      input: "number",
      inputLabel: "Enter Your Phone Number",
      inputPlaceholder: "your active cell phone number",
      showCancelButton: true,
      showLoaderOnConfirm: true,
    });
    if (phone) {
      const bookingInfo = { car_id: _id, phone: phone };
      if (is_loggedin) {
        placeBooking(bookingInfo);
      } else {
        toast.error("you are not logged in");
        navigate("/login");
      }
    }
  };
  useEffect(() => {
    if (isError) {
      const key = Object.keys(error?.data)[0];
      const message = error?.data[key];
      toast.error(message);
    } else if (isSuccess) {
      // toast.success("car booked successfully !");
      Swal.fire({
        title: "Success !",
        icon: "success",
        text: "Car Booked Successfully !",
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isError, isSuccess]);
  const handelDelete = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteCar(_id);
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });
      }
    });
  };
  return (
    <div
      className="group/card bg-white rounded-md p-4 cursor-pointer transition-all"
      data-aos="zoom-in"
    >
      <div className="relative overflow-hidden rounded-md">
        <img
          src={image_url}
          alt=""
          className="w-full h-60 object-center hover:scale-110 transition-all duration-700 rounded-md object-cover"
        />
        <h1 className="absolute top-5 left-5 bg-white rounded-md px-3 py-1 text-color-gray">
          {brand}
        </h1>
      </div>
      <div className="mt-2 border-b pb-3">
        <h1 className="group-hover/card:text-color-pest font-semibold text-color-black-1 text-xl  transition-all">
          {name}
        </h1>
        <div className="flex items-center">
          {Array.from({ length: 5 }, (v) => v).map((star, i) => (
            <span key={i} className="text-[#FF9307]">
              <HiStar />
            </span>
          ))}
          &nbsp;<span className="text-color-gray">(5.0)</span>
        </div>
      </div>
      <div className="py-2 flex justify-between items-center flex-wrap">
        <Part title="Auto" img={autoimg} />
        <Part title="22 KM" img={meterimg} />
        <Part title="Petrol" img={fuelimg} />
        <Part title="Power" img={powerimg} />
        <Part title="2018" img={loveimg} />
        <Part title="5 Persons" img={sitimg} />
      </div>
      <div className="flex justify-between items-center py-2 px-2 rounded-md bg-[#F2F7F6]">
        <span className="flex items-center space-x-1 text-base text-color-gray">
          <CiLocationOn />
          <span>
            {service_area} to {service_area_to}
          </span>
        </span>
        <span className="text-2xl font-bold text-[#ff0000]">
          &#2547; {rent_price}
        </span>
      </div>
      {isRentButton && (
        <button
          className="py-2 w-full bg-color-black-1 text-white mt-4 rounded-md flex justify-center items-center space-x-2 font-semibold text-base group-hover/card:bg-color-pest transition-all"
          onClick={handelBooking}
        >
          <AiOutlineCalendar /> <span>Rent Now</span>
        </button>
      )}
      {isDeleteButton && (
        <div className="flex items-center space-x-4">
          <button
            className="py-2 w-1/2 bg-green-600 text-white mt-4 rounded-md flex justify-center items-center space-x-2 font-semibold text-base  transition-all"
            onClick={() => setOpen(true)}
          >
            <AiFillEdit /> <span>Edit</span>
          </button>
          <button
            className="py-2 w-1/2 bg-red-600 text-white mt-4 rounded-md flex justify-center items-center space-x-2 font-semibold text-base  transition-all"
            onClick={handelDelete}
          >
            <AiFillDelete /> <span>Delete</span>
          </button>
        </div>
      )}
      <FormDialog open={open} car={car} setOpen={setOpen} />
    </div>
  );
};
CarCard.propTypes = {
  car: PropTypes.object,
  isRentButton: PropTypes.bool,
  isDeleteButton: PropTypes.bool,
};
export default CarCard;
