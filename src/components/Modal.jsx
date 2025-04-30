import React from "react";

const Modal = ({ isVisible, onClose, children }) => {
  if (!isVisible) return null;

  const handleClose = (e) => {
    if (e.target.id === "wrapper") onClose();
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm z-50 flex justify-center items-center"
      id="wrapper"
      onClick={handleClose}
    >
      <div className="md:w-[620px] w-[90%] md:mx-auto flex flex-col">
        <div
          className="text-white text-xl place-self-end cursor-pointer"
          onClick={() => onClose()}
        >
          X
        </div>
        <div className="bg-white p-2">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
