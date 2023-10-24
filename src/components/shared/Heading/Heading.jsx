import Headingbg from "../../../assets/title-head.png";
import PropTypes from "prop-types";
const Heading = ({ title, description }) => {
  return (
    <div className="text-center mb-14 bg-transparent" data-aos="zoom-in">
      <h1 className="text-[32px] text-[#111] font-extrabold">{title}</h1>
      <p
        className="py-4"
        style={{ background: `url(${Headingbg}) no-repeat center` }}
      ></p>
      <p className="max-w-[439px] text-base text-color-gray mx-auto">
        {description}
      </p>
    </div>
  );
};
Heading.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
};

export default Heading;
