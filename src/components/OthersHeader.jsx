import React from "react";

const OthersHeader = ({ contentHeader }) => {
  return (
    <div
      className="w-full h-[32rem] overflow-hidden"
      style={{
        backgroundImage: "url('/header_1.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="bg-gradient-to-r from-black/75 to-black/80 h-screen flex items-center justify-center mx-auto">
        <h2 className="text-white md:text-6xl text-2xl font-extrabold mb-14">
          {contentHeader}
        </h2>
      </div>
    </div>
  );
};

export default OthersHeader;
