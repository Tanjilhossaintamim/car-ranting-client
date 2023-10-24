import PropTypes from "prop-types";
const Part = ({ img, title }) => {
  return (
    <div className="flex items-center text-color-gray text-sm space-x-2 w-1/3 mb-3">
      <img src={img} alt="" />
      <span>{title}</span>
    </div>
  );
};
Part.propTypes = {
  img: PropTypes.string,
  title: PropTypes.string,
};

export default Part;
