import blockloading from "../assets/block-loading.gif";

const Loader = () => {
  return (
    <div className="w-full h-screen overflow-hidden bg-gray-950 flex items-center justify-center">
      <img src={blockloading} alt="loader" className="w-[120px]" />
    </div>
  );
};

export default Loader;
