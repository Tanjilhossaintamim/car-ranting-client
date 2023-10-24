import PropTypes from "prop-types";
const Work = ({ img, title, description, color }) => {
  return (
    <div className="lg:w-1/4 mb-4 lg:mb-0 text-center">
      <div
        className={`w-24 h-24 mx-auto rounded-full  flex justify-center items-center`}
        style={{ border: `2px dashed ${color}` }}
      >
        <div className={`p-2 rounded-full`} style={{ backgroundColor: color }}>
          <img src={img} alt="" />
        </div>
      </div>
      <div className="mt-4">
        <h1 className="text-2xl font-bold text-[#111]">{title}</h1>
        <p className="text-base text-color-gray mt-3">{description}</p>
      </div>
    </div>
  );
};
Work.propTypes = {
  img: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  color: PropTypes.string,
};
export default Work;
