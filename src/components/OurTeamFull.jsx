import React, { useState } from "react";
import { assets } from "../assets/assets";
import Modal from "./Modal";

const OurTeamFull = () => {
  const [showModal, setShowModal] = useState(false);
  const [showModal1, setShowModal1] = useState(false);
  const [showModal2, setShowModal2] = useState(false);
  const [showModal3, setShowModal3] = useState(false);
  const [showModal4, setShowModal4] = useState(false);
  const [showModal5, setShowModal5] = useState(false);
  const [showModal6, setShowModal6] = useState(false);
  const [showModal7, setShowModal7] = useState(false);
  const [showModal8, setShowModal8] = useState(false);

  return (
    <div className="container mx-auto py-12 lg:px-32 w-full overflow-hidden">
      <h2 className="text-2xl sm:text-4xl font-bold mb-2 text-center">
        Our Team{" "}
        <span className="text-orange-500 underline underline-offset-4 decoration-1 under font-light">
          Meet Them
        </span>
      </h2>
      <p className="text-center text-gray-500 mb-12 md:px-4 px-6 max-w-96 mx-auto">
        Our dedicated team of technocrate are ready to give you the better of
        everything
      </p>
      <h3 className="mb-3 p-2">Executive Team</h3>
      <div className="flex flex-wrap mx-auto justify-center gap-6">
        <div className="w-[320px] shadow-xl rounded p-4">
          <div className="w-52 mx-auto">
            <img
              src={assets.team_img_1}
              alt="Team Image"
              className="mb-4 object-fill"
            />
          </div>
          <div className="text-center">
            <h2 className="text-lg mb-1 text-gray-500 font-bold">
              Chief Executive Officer
            </h2>
            <p className="text-lg mb-1 text-orange-500 font-semibold">
              Razaq Akanbi
            </p>
            <button
              onClick={() => setShowModal(true)}
              className="py-2 px-6 mb-6 mt-4 bg-orange-500 text-white"
            >
              Read More
            </button>
          </div>
        </div>
        <div className="w-[320px] shadow-xl rounded p-4">
          <div className="w-52 mx-auto">
            <img
              src={assets.team_img_1}
              alt="Team Image"
              className="mb-4 object-fill"
            />
          </div>
          <div className="text-center">
            <h2 className="text-lg mb-1 text-gray-500 font-bold">
              Executive Director
            </h2>
            <p className="text-lg mb-1 text-orange-500 font-semibold">
              Amudalat Akanbi
            </p>
            <button
              onClick={() => setShowModal1(true)}
              className="py-2 px-6 mb-6 mt-4 bg-orange-500 text-white"
            >
              Read More
            </button>
          </div>
        </div>
        <div className="w-[320px] shadow-xl rounded p-4">
          <div className="w-52 mx-auto">
            <img
              src={assets.team_img_3}
              alt="Team Image"
              className="mb-4 object-fill"
            />
          </div>
          <div className="text-center">
            <h2 className="text-lg mb-1 text-gray-500 font-bold">
              Non Executive Advisor
            </h2>
            <p className="text-lg mb-1 text-orange-500 font-semibold">
              Ademorin Kuye
            </p>
            <button
              onClick={() => setShowModal2(true)}
              className="py-2 px-6 mb-6 mt-4 bg-orange-500 text-white"
            >
              Read More
            </button>
          </div>
        </div>
      </div>
      <hr className="h-[2px] bg-gray-300 my-10" />

      <h3 className="mb-3 p-2">Leadership Team</h3>

      <div className="flex flex-wrap mx-auto justify-center gap-6">
        <div className="w-[320px] shadow-xl rounded p-4">
          <div className="w-52 mx-auto">
            <img
              src={assets.team_img_4}
              alt="Team Image"
              className="mb-4 object-fill"
            />
          </div>
          <div className="text-center">
            <h2 className="text-lg mb-1 text-gray-500 font-bold">
              Comm. Brand/IT
            </h2>
            <p className="text-lg mb-1 text-orange-500 font-semibold">
              Oluwaseun Onifade
            </p>
            <button
              onClick={() => setShowModal3(true)}
              className="py-2 px-6 mb-6 mt-4 bg-orange-500 text-white"
            >
              Read More
            </button>
          </div>
        </div>
        <div className="w-[320px] shadow-xl rounded p-4">
          <div className="w-52 mx-auto">
            <img
              src={assets.team_img_1}
              alt="Team Image"
              className="mb-4 object-fill"
            />
          </div>
          <div className="text-center">
            <h2 className="text-lg mb-1 text-gray-500 font-bold">
              Metering/Electrification
            </h2>
            <p className="text-lg mb-1 text-orange-500 font-semibold">
              Babajide Alawiye
            </p>
            <button
              onClick={() => setShowModal4(true)}
              className="py-2 px-6 mb-6 mt-4 bg-orange-500 text-white"
            >
              Read More
            </button>
          </div>
        </div>
        <div className="w-[320px] shadow-xl rounded p-4">
          <div className="w-52 mx-auto">
            <img
              src={assets.team_img_6}
              alt="Team Image"
              className="mb-4 object-fill"
            />
          </div>
          <div className="text-center">
            <h2 className="text-lg mb-1 text-gray-500 font-bold">
              Structural Engineer
            </h2>
            <p className="text-lg mb-1 text-orange-500 font-semibold">
              Saheed Olajide
            </p>
            <button
              onClick={() => setShowModal5(true)}
              className="py-2 px-6 mb-6 mt-4 bg-orange-500 text-white"
            >
              Read More
            </button>
          </div>
        </div>
      </div>
      <hr className="h-[2px] bg-gray-300 my-10" />
      <div className="flex flex-wrap mx-auto justify-center gap-6">
        <div className="w-[320px] shadow-xl rounded p-4">
          <div className="w-52 mx-auto">
            <img
              src={assets.team_img_1}
              alt="Team Image"
              className="mb-4 object-fill"
            />
          </div>
          <div className="text-center">
            <h2 className="text-lg mb-1 text-gray-500 font-bold">
              Properties Mgt
            </h2>
            <p className="text-lg mb-1 text-orange-500 font-semibold">
              Olabode Bolarinwa
            </p>
            <button
              onClick={() => setShowModal6(true)}
              className="py-2 px-6 mb-6 mt-4 bg-orange-500 text-white"
            >
              Read More
            </button>
          </div>
        </div>
        <div className="w-[320px] shadow-xl rounded p-4">
          <div className="w-52 mx-auto">
            <img
              src={assets.team_img_1}
              alt="Team Image"
              className="mb-4 object-fill"
            />
          </div>
          <div className="text-center">
            <h2 className="text-lg mb-1 text-gray-500 font-bold">
              Metering/Electrification
            </h2>
            <p className="text-lg mb-1 text-orange-500 font-semibold">
              Babajide Alawiye
            </p>
            <button
              onClick={() => setShowModal7(true)}
              className="py-2 px-6 mb-6 mt-4 bg-orange-500 text-white"
            >
              Read More
            </button>
          </div>
        </div>
        <div className="w-[320px] shadow-xl rounded p-4">
          <div className="w-52 mx-auto">
            <img
              src={assets.team_img_1}
              alt="Team Image"
              className="mb-4 object-fill"
            />
          </div>
          <div className="text-center">
            <h2 className="text-lg mb-1 text-gray-500 font-bold">
              Architect Engineer
            </h2>
            <p className="text-lg mb-1 text-orange-500 font-semibold">
              Badejo Adetimehin
            </p>
            <button
              onClick={() => setShowModal8(true)}
              className="py-2 px-6 mb-6 mt-4 bg-orange-500 text-white"
            >
              Read More
            </button>
          </div>
        </div>
      </div>
      {/*---- Modal content for the teams  -----*/}
      <Modal isVisible={showModal} onClose={() => setShowModal(false)}>
        <div className="p-6">
          <h2 className="text-3xl font-semibold text-gray-900 uppercase mb-1">
            Akanbi Razaq
          </h2>
          <h3 className="text-base font-medium text-gray-700 mb-4">
            Chief Executive Officer
          </h3>
          <p className=" mb-5 font-normal text-gray-500">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum
            minima debitis ipsam. Molestiae eum ab, nostrum facere aliquid
            officiis dolore, magni magnam laboriosam vel, praesentium voluptatem
            delectus veritatis quos ipsam! Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Aperiam aut deleniti modi accusantium
            sequi ipsum dolor, enim consequuntur illum, earum, blanditiis quos
            eius cum autem. Aliquam architecto quas expedita quia!
          </p>
          <p className="mb-5 font-normal text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit consectetur odit nostrum itaque harum accusantium
            dicta aliquam hic necessitatibus deleniti neque, officia est enim,
            quis pariatur, fugit temporibus error facilis! Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Odio quae ab, eos, vero ad,
            expedita sed pariatur alias eum reprehenderit quia voluptates ipsum?
            Inventore non quo cupiditate! Iste, quidem aut? Lorem ipsum dolor
            sit amet consectetur, adipisicing elit. Ipsam est, ratione quos quas
            doloribus distinctio error, voluptas iure, qui neque harum porro
            pariatur. Suscipit quas deleniti, accusantium provident repudiandae
            qui!
          </p>
        </div>
      </Modal>
      <Modal isVisible={showModal1} onClose={() => setShowModal1(false)}>
        <div className="p-6">
          <h2 className="text-3xl font-semibold text-gray-900 uppercase mb-1">
            Amudalat Akanbi
          </h2>
          <h3 className="text-base font-medium text-gray-700 mb-4">
            Executive Director
          </h3>
          <p className=" mb-5 font-normal text-gray-500">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum
            minima debitis ipsam. Molestiae eum ab, nostrum facere aliquid
            officiis dolore, magni magnam laboriosam vel, praesentium voluptatem
            delectus veritatis quos ipsam! Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Aperiam aut deleniti modi accusantium
            sequi ipsum dolor, enim consequuntur illum, earum, blanditiis quos
            eius cum autem. Aliquam architecto quas expedita quia!
          </p>
          <p className="mb-5 font-normal text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit consectetur odit nostrum itaque harum accusantium
            dicta aliquam hic necessitatibus deleniti neque, officia est enim,
            quis pariatur, fugit temporibus error facilis! Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Odio quae ab, eos, vero ad,
            expedita sed pariatur alias eum reprehenderit quia voluptates ipsum?
            Inventore non quo cupiditate! Iste, quidem aut? Lorem ipsum dolor
            sit amet consectetur, adipisicing elit. Ipsam est, ratione quos quas
            doloribus distinctio error, voluptas iure, qui neque harum porro
            pariatur. Suscipit quas deleniti, accusantium provident repudiandae
            qui!
          </p>
        </div>
      </Modal>
      <Modal isVisible={showModal2} onClose={() => setShowModal2(false)}>
        <div className="p-6">
          <h2 className="text-3xl font-semibold text-gray-900 uppercase mb-1">
            Ademorin Kuye
          </h2>
          <h3 className="text-base font-medium text-gray-700 mb-4">
            Non Executive Advisor
          </h3>
          <p className=" mb-5 font-normal text-gray-500">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum
            minima debitis ipsam. Molestiae eum ab, nostrum facere aliquid
            officiis dolore, magni magnam laboriosam vel, praesentium voluptatem
            delectus veritatis quos ipsam! Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Aperiam aut deleniti modi accusantium
            sequi ipsum dolor, enim consequuntur illum, earum, blanditiis quos
            eius cum autem. Aliquam architecto quas expedita quia!
          </p>
          <p className="mb-5 font-normal text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit consectetur odit nostrum itaque harum accusantium
            dicta aliquam hic necessitatibus deleniti neque, officia est enim,
            quis pariatur, fugit temporibus error facilis! Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Odio quae ab, eos, vero ad,
            expedita sed pariatur alias eum reprehenderit quia voluptates ipsum?
            Inventore non quo cupiditate! Iste, quidem aut? Lorem ipsum dolor
            sit amet consectetur, adipisicing elit. Ipsam est, ratione quos quas
            doloribus distinctio error, voluptas iure, qui neque harum porro
            pariatur. Suscipit quas deleniti, accusantium provident repudiandae
            qui!
          </p>
        </div>
      </Modal>
      <Modal isVisible={showModal3} onClose={() => setShowModal3(false)}>
        <div className="p-6">
          <h2 className="text-3xl font-semibold text-gray-900 uppercase mb-1">
            Oluwaseun Onifade
          </h2>
          <h3 className="text-base font-medium text-gray-700 mb-4">
            Comm. Brand/IT
          </h3>
          <p className=" mb-5 font-normal text-gray-500">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum
            minima debitis ipsam. Molestiae eum ab, nostrum facere aliquid
            officiis dolore, magni magnam laboriosam vel, praesentium voluptatem
            delectus veritatis quos ipsam! Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Aperiam aut deleniti modi accusantium
            sequi ipsum dolor, enim consequuntur illum, earum, blanditiis quos
            eius cum autem. Aliquam architecto quas expedita quia!
          </p>
          <p className="mb-5 font-normal text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit consectetur odit nostrum itaque harum accusantium
            dicta aliquam hic necessitatibus deleniti neque, officia est enim,
            quis pariatur, fugit temporibus error facilis! Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Odio quae ab, eos, vero ad,
            expedita sed pariatur alias eum reprehenderit quia voluptates ipsum?
            Inventore non quo cupiditate! Iste, quidem aut? Lorem ipsum dolor
            sit amet consectetur, adipisicing elit. Ipsam est, ratione quos quas
            doloribus distinctio error, voluptas iure, qui neque harum porro
            pariatur. Suscipit quas deleniti, accusantium provident repudiandae
            qui!
          </p>
        </div>
      </Modal>
      <Modal isVisible={showModal4} onClose={() => setShowModal4(false)}>
        <div className="p-6">
          <h2 className="text-3xl font-semibold text-gray-900 uppercase mb-1">
            Babajide Alawiye
          </h2>
          <h3 className="text-base font-medium text-gray-700 mb-4">
            Metering/Electrification
          </h3>
          <p className=" mb-5 font-normal text-gray-500">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum
            minima debitis ipsam. Molestiae eum ab, nostrum facere aliquid
            officiis dolore, magni magnam laboriosam vel, praesentium voluptatem
            delectus veritatis quos ipsam! Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Aperiam aut deleniti modi accusantium
            sequi ipsum dolor, enim consequuntur illum, earum, blanditiis quos
            eius cum autem. Aliquam architecto quas expedita quia!
          </p>
          <p className="mb-5 font-normal text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit consectetur odit nostrum itaque harum accusantium
            dicta aliquam hic necessitatibus deleniti neque, officia est enim,
            quis pariatur, fugit temporibus error facilis! Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Odio quae ab, eos, vero ad,
            expedita sed pariatur alias eum reprehenderit quia voluptates ipsum?
            Inventore non quo cupiditate! Iste, quidem aut? Lorem ipsum dolor
            sit amet consectetur, adipisicing elit. Ipsam est, ratione quos quas
            doloribus distinctio error, voluptas iure, qui neque harum porro
            pariatur. Suscipit quas deleniti, accusantium provident repudiandae
            qui!
          </p>
        </div>
      </Modal>
      <Modal isVisible={showModal5} onClose={() => setShowModal5(false)}>
        <div className="p-6">
          <h2 className="text-3xl font-semibold text-gray-900 uppercase mb-1">
            Saheed Olajide
          </h2>
          <h3 className="text-base font-medium text-gray-700 mb-4">
            Structural Engineer
          </h3>
          <p className=" mb-5 font-normal text-gray-500">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum
            minima debitis ipsam. Molestiae eum ab, nostrum facere aliquid
            officiis dolore, magni magnam laboriosam vel, praesentium voluptatem
            delectus veritatis quos ipsam! Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Aperiam aut deleniti modi accusantium
            sequi ipsum dolor, enim consequuntur illum, earum, blanditiis quos
            eius cum autem. Aliquam architecto quas expedita quia!
          </p>
          <p className="mb-5 font-normal text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit consectetur odit nostrum itaque harum accusantium
            dicta aliquam hic necessitatibus deleniti neque, officia est enim,
            quis pariatur, fugit temporibus error facilis! Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Odio quae ab, eos, vero ad,
            expedita sed pariatur alias eum reprehenderit quia voluptates ipsum?
            Inventore non quo cupiditate! Iste, quidem aut? Lorem ipsum dolor
            sit amet consectetur, adipisicing elit. Ipsam est, ratione quos quas
            doloribus distinctio error, voluptas iure, qui neque harum porro
            pariatur. Suscipit quas deleniti, accusantium provident repudiandae
            qui!
          </p>
        </div>
      </Modal>
      <Modal isVisible={showModal6} onClose={() => setShowModal6(false)}>
        <div className="p-6">
          <h2 className="text-3xl font-semibold text-gray-900 uppercase mb-1">
            Ademorin Kuye
          </h2>
          <h3 className="text-base font-medium text-gray-700 mb-4">
            Non Executive Advisor
          </h3>
          <p className=" mb-5 font-normal text-gray-500">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum
            minima debitis ipsam. Molestiae eum ab, nostrum facere aliquid
            officiis dolore, magni magnam laboriosam vel, praesentium voluptatem
            delectus veritatis quos ipsam! Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Aperiam aut deleniti modi accusantium
            sequi ipsum dolor, enim consequuntur illum, earum, blanditiis quos
            eius cum autem. Aliquam architecto quas expedita quia!
          </p>
          <p className="mb-5 font-normal text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit consectetur odit nostrum itaque harum accusantium
            dicta aliquam hic necessitatibus deleniti neque, officia est enim,
            quis pariatur, fugit temporibus error facilis! Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Odio quae ab, eos, vero ad,
            expedita sed pariatur alias eum reprehenderit quia voluptates ipsum?
            Inventore non quo cupiditate! Iste, quidem aut? Lorem ipsum dolor
            sit amet consectetur, adipisicing elit. Ipsam est, ratione quos quas
            doloribus distinctio error, voluptas iure, qui neque harum porro
            pariatur. Suscipit quas deleniti, accusantium provident repudiandae
            qui!
          </p>
        </div>
      </Modal>
      <Modal isVisible={showModal7} onClose={() => setShowModal7(false)}>
        <div className="p-6">
          <h2 className="text-3xl font-semibold text-gray-900 uppercase mb-1">
            Ademorin Kuye
          </h2>
          <h3 className="text-base font-medium text-gray-700 mb-4">
            Non Executive Advisor
          </h3>
          <p className=" mb-5 font-normal text-gray-500">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum
            minima debitis ipsam. Molestiae eum ab, nostrum facere aliquid
            officiis dolore, magni magnam laboriosam vel, praesentium voluptatem
            delectus veritatis quos ipsam! Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Aperiam aut deleniti modi accusantium
            sequi ipsum dolor, enim consequuntur illum, earum, blanditiis quos
            eius cum autem. Aliquam architecto quas expedita quia!
          </p>
          <p className="mb-5 font-normal text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit consectetur odit nostrum itaque harum accusantium
            dicta aliquam hic necessitatibus deleniti neque, officia est enim,
            quis pariatur, fugit temporibus error facilis! Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Odio quae ab, eos, vero ad,
            expedita sed pariatur alias eum reprehenderit quia voluptates ipsum?
            Inventore non quo cupiditate! Iste, quidem aut? Lorem ipsum dolor
            sit amet consectetur, adipisicing elit. Ipsam est, ratione quos quas
            doloribus distinctio error, voluptas iure, qui neque harum porro
            pariatur. Suscipit quas deleniti, accusantium provident repudiandae
            qui!
          </p>
        </div>
      </Modal>
      <Modal isVisible={showModal8} onClose={() => setShowModal8(false)}>
        <div className="p-6">
          <h2 className="text-3xl font-semibold text-gray-900 uppercase mb-1">
            Ademorin Kuye
          </h2>
          <h3 className="text-base font-medium text-gray-700 mb-4">
            Non Executive Advisor
          </h3>
          <p className=" mb-5 font-normal text-gray-500">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum
            minima debitis ipsam. Molestiae eum ab, nostrum facere aliquid
            officiis dolore, magni magnam laboriosam vel, praesentium voluptatem
            delectus veritatis quos ipsam! Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Aperiam aut deleniti modi accusantium
            sequi ipsum dolor, enim consequuntur illum, earum, blanditiis quos
            eius cum autem. Aliquam architecto quas expedita quia!
          </p>
          <p className="mb-5 font-normal text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit consectetur odit nostrum itaque harum accusantium
            dicta aliquam hic necessitatibus deleniti neque, officia est enim,
            quis pariatur, fugit temporibus error facilis! Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Odio quae ab, eos, vero ad,
            expedita sed pariatur alias eum reprehenderit quia voluptates ipsum?
            Inventore non quo cupiditate! Iste, quidem aut? Lorem ipsum dolor
            sit amet consectetur, adipisicing elit. Ipsam est, ratione quos quas
            doloribus distinctio error, voluptas iure, qui neque harum porro
            pariatur. Suscipit quas deleniti, accusantium provident repudiandae
            qui!
          </p>
        </div>
      </Modal>
    </div>
  );
};

export default OurTeamFull;
