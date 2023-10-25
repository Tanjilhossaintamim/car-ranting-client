const Skeleton = () => {
  return (
    <div
      className="group/card bg-white rounded-md p-4 cursor-pointer transition-all "
      data-aos="zoom-in"
    >
      <div className="relative overflow-hidden rounded-md h-60 bg-color-pest skeleton"></div>
      <div className="mt-2 border-b pb-3">
        <h1 className="group-hover/card:text-color-pest font-semibold text-color-black-1 text-xl  transition-all py-8 rounded-md skeleton"></h1>
        
      </div>
      
    </div>
  );
};

export default Skeleton;
