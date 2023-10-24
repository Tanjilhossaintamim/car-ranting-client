import PropTypes from "prop-types";
const Card = ({ img, title, description, color }) => {
  return (
    <div className="p-4 bg-white shadow rounded-md" data-aos="zoom-in">
      <div
        className="py-6 flex justify-center items-center rounded-md"
        style={{ backgroundColor: color }}
      >
        <img src={img} alt="" />
      </div>
      <div className="mt-3 text-center">
        <h1 className="text-xl font-bold text-center text-color-black-1">
          {title}
        </h1>
        <p className="text-sm text-color-gray my-3">{description}</p>
      </div>
    </div>
  );
};
Card.propTypes = {
  img: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  color: PropTypes.string,
};

export default Card;
