import { useEffect, useState } from "react";
import { motion } from "framer-motion";
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
  const [showModal9, setShowModal9] = useState(false);

  useEffect(() => {
    if (
      showModal ||
      showModal1 ||
      showModal2 ||
      showModal3 ||
      showModal4 ||
      showModal5 ||
      showModal6 ||
      showModal7 ||
      showModal8 ||
      showModal9
    ) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [
    showModal,
    showModal1,
    showModal2,
    showModal3,
    showModal4,
    showModal5,
    showModal6,
    showModal7,
    showModal8,
    showModal9,
  ]);

  return (
    <motion.div className="container mx-auto py-12 md:px-28 px-6 w-full overflow-hidden">
      <h2 className="text-2xl sm:text-4xl font-bold mb-2 text-center">
        Our Team{" "}
        <span className="text-orange-500 underline underline-offset-4 decoration-1 under font-light">
          Meet Them
        </span>
      </h2>
      <p className="text-center text-gray-500 mb-12 md:px-4 px-6 max-w-96 mx-auto">
        Our dedicated team of technocrate are ready to give you the best of
        everything
      </p>
      <h3 className="pl-6 uppercase">Executive Team</h3>
      <div className="flex md:flex-row flex-col mx-auto w-full justify-start p-6 mt-5 gap-6">
        <div className="md:w-[320px] w-full shadow-xl ">
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
        <div className="md:w-[320px] w-full shadow-xl">
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
        <div className="md:w-[320px] w-full shadow-xl">
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

      <h3 className="pl-6 uppercase">Leadership Team</h3>

      <div className="flex md:flex-row flex-col mx-auto justify-start p-6 mt-5 gap-6">
        <div className="md:w-[320px] w-full shadow-xl">
          <div className="w-52 mx-auto">
            <img
              src={assets.team_img_4}
              alt="Team Image"
              className="mb-4 object-fill"
            />
          </div>
          <div className="text-center">
            <h2 className="text-lg mb-1 text-gray-500 font-bold">
              Structural Engineer
            </h2>
            <p className="text-lg mb-1 text-orange-500 font-semibold">
              Saheed Olabode
            </p>
            <button
              onClick={() => setShowModal3(true)}
              className="py-2 px-6 mb-6 mt-4 bg-orange-500 text-white"
            >
              Read More
            </button>
          </div>
        </div>
        <div className="md:w-[320px] w-full shadow-xl">
          <div className="w-52 mx-auto">
            <img
              src={assets.team_img_1}
              alt="Team Image"
              className="mb-4 object-fill"
            />
          </div>
          <div className="text-center">
            <h2 className="text-lg mb-1 text-gray-500 font-bold">
              Architectural Engineer
            </h2>
            <p className="text-lg mb-1 text-orange-500 font-semibold">
              Badejo Adetimehin
            </p>
            <button
              onClick={() => setShowModal4(true)}
              className="py-2 px-6 mb-6 mt-4 bg-orange-500 text-white"
            >
              Read More
            </button>
          </div>
        </div>
        <div className="md:w-[320px] w-full shadow-xl">
          <div className="w-52 mx-auto">
            <img
              src={assets.team_img_1}
              alt="Team Image"
              className="mb-4 object-fill"
            />
          </div>
          <div className="text-center">
            <h2 className="text-lg mb-1 text-gray-500 font-bold">
              Electrical Engineer
            </h2>
            <p className="text-lg mb-1 text-orange-500 font-semibold">
              Ridwan Yusuf
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

      <div className="flex flex-wrap mx-auto justify-start p-4 gap-6">
        <div className="w-[320px] shadow-xl">
          <div className="w-52 mx-auto">
            <img
              src={assets.team_img_1}
              alt="Team Image"
              className="mb-4 object-fill"
            />
          </div>
          <div className="text-center">
            <h2 className="text-lg mb-1 text-gray-500 font-bold">
              Mechanical Engineer
            </h2>
            <p className="text-lg mb-1 text-orange-500 font-semibold">
              Babajide Alawiye
            </p>
            <button
              onClick={() => setShowModal6(true)}
              className="py-2 px-6 mb-6 mt-4 bg-orange-500 text-white"
            >
              Read More
            </button>
          </div>
        </div>
        <div className="w-[320px] shadow-xl">
          <div className="w-52 mx-auto">
            <img
              src={assets.team_img_1}
              alt="Team Image"
              className="mb-4 object-fill"
            />
          </div>
          <div className="text-center">
            <h2 className="text-lg mb-1 text-gray-500 font-bold">
              Quantity Surveyor
            </h2>
            <p className="text-lg mb-1 text-orange-500 font-semibold">
              Abdulsalam Babatunde
            </p>
            <button
              onClick={() => setShowModal7(true)}
              className="py-2 px-6 mb-6 mt-4 bg-orange-500 text-white"
            >
              Read More
            </button>
          </div>
        </div>
        <div className="w-[320px] shadow-xl">
          <div className="w-52 mx-auto">
            <img
              src={assets.team_img_5}
              alt="Team Image"
              className="mb-4 object-fill"
            />
          </div>
          <div className="text-center">
            <h2 className="text-lg mb-1 text-gray-500 font-bold">
              Brand Comm./IT
            </h2>
            <p className="text-lg mb-1 text-orange-500 font-semibold">
              Oluwaseun Onifade
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

      <hr className="h-[2px] bg-gray-300 my-10" />

      <div className="flex flex-wrap mx-auto justify-start p-4 gap-6">
        <div className="w-[320px] shadow-xl">
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
              onClick={() => setShowModal9(true)}
              className="py-2 px-6 mb-6 mt-4 bg-orange-500 text-white"
            >
              Read More
            </button>
          </div>
        </div>
        {/* <div className="w-[320px] shadow-xl p-4">
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
        <div className="w-[320px] shadow-xl p-4">
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
        </div> */}
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
          <p className=" mb-4 font-normal text-justify text-gray-500">
            Razaq Akanbi is the Chief Executive Officer of Araz Development
            Company Limited. He holds a BSc Accounting from Olabisi Onabanjo
            University, Ago Iwoye, Ogun State of Nigeria. He is a member of many
            professional bodies including but not limited to Nigeria Institute
            of Chartered Accountants of Nigeria ICAN (since 2005), Chartered
            Institute of Management and Chartered Institute of Taxation in
            Nigeria and has amassed over 25 years of experience in the real
            estate and construction industry.
          </p>
          <p className="mb-4 font-normal text-justify text-gray-500">
            His wide variety of skills and knowledge have enabled him to manage
            a multi-disciplinary tasks involved in a typical construction
            project that combine personnel, equipment, materials, and activities
            and unparallel ability to read and interpret
            architectural/engineering drawings and specifications; understanding
            and complying with numerous local and state building codes, legal
            requirements, and construction standards; understanding and
            adherence to a variety of construction contract conditions and
            requirements; efficiently estimating cost and scheduling all or a
            part of a project; and the performance of management duties required
            to effectively coordinate and communicate with all members of the
            construction process.
          </p>
          <p className="mb-4 font-normal text-justify text-gray-500">
            As the CEO with cognate experience at managerial level in the
            construction industry, Mr. Akanbi has utilized skills and knowledge,
            acquired through education and experience, to put together a very
            formidable project management and execution team while he busies
            himself with the important management decision making as it relates
            to the execution of all or a portion of a construction project. Mr.
            Akanbi and his team have ensured that Araz Development Company
            Limited has become a active player in almost every ongoing
            transformational project across all aspects of our business
            activities, particularly project management within the industry.
          </p>
          <p className="mb-4 font-normal text-justify text-gray-500">
            Given his experience, commitment and dexterity which Mr. Akanbi
            brought into the day-to-day operations of the company, it was not a
            surprise that Araz Development Company Limited is gradually emerging
            model for a great corporate culture, inspired leadership and perfect
            working relationship between staff across all levels top the envy of
            competitors. His leadership has set a course for company strategy
            through the development and implement operational policies and a
            strategic plan to create an environment that promotes great
            performance and positive morale.
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
          <p className=" mb-4 font-normal text-justify text-gray-500">
            Akanbi Amudalat holds Bachelor of Science, Business Administration
            from Olabisi Onabanjo University, Ago-Iwoye, Ogun State, and Master
            of Business Administration in Human Resource Management from Ladoke
            Akintola University of Technology, Ogbomosho. She became an
            Executive Director of Araz Development Company Limited after over
            two decades experience in the real estate business experience.
            Today, she has been championing progressive and diversified real
            estate investment by individuals and corporate entities.
          </p>
          <p className="mb-4 font-normal text-justify text-gray-500">
            Over the years, Akanbi Amudalat has developed strong ability in
            areas such as general supervision of construction-related projects,
            meeting and providing clients with update about progress of
            progress, efficient determination and allocation of manpower
            requirements, setting achievable goals and deadlines, budgets
            reviews, coordination of the schedules of subcontractors, projects
            monitoring, managing schedules of work and delegating tasks to
            senior colleagues and their teams and overseeing all aspects of a
            project’s development, from planning and design to execution and
            completion.
          </p>
          <p className="mb-4 font-normal text-justify text-gray-500">
            It is therefore not a surprise that she has been saddled with such
            duties and she has always delivered to the satisfaction of the board
            and clients.
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
          <p className=" mb-4 font-normal text-justify text-gray-500">
            Ademorin Aliu Kuye studied law at the University of Ife (Now Obafemi
            Awolowo University), Ile Ife and was later called to bar in 1989. He
            served at various capacities in the private and public sectors. He
            was Principal Counsel at Adekanola Kuye & Co, for many years during
            which he represented many blue-chip companies in multi-million
            dollars litigation and arbitration as well as Company Secretary.
          </p>
          <p className="mb-4 font-normal text-justify text-gray-500">
            He later began active involvement in public service when he was in
            2003 appointed the Executive Secretary, Shomolu Local Government,
            then elected as the Executive Chairman of the Local Government and
            the Secretary-General, Conference of Lagos Sate Local Government
            Chairmen, (Conference 57) at the same period. He joined the Fashola
            Administration on July 4, 2011 as the Honourable Commissioner for
            Local Government.
          </p>
          <p className="mb-4 font-normal text-justify text-gray-500">
            After his two decades meritorious public service, he joined Araz
            Development Company Limited as a Non-Executive Advisor with the
            mission of using his technical expertise to give back to the
            society.
          </p>
          <p className="mb-4 font-normal text-justify text-gray-500">
            His contribution in the areas of providing legal guidance which
            limits legal disputes and quick resolution of issues before
            degenerating into dispute settlement; assisting and overseeing the
            meticulous preparation and vetting of vendor contracts, ensuring
            adherence to the legal rules and regulations at every stage of
            project implementation, helping clients perfect titles, providing
            commercially sensible and cost-effective legal advice for
            construction contracts management among others have been responsible
            for the excellent relationship between the company on one hand and
            its clients and/or subcontractors on the other hand.
          </p>
        </div>
      </Modal>
      <Modal isVisible={showModal3} onClose={() => setShowModal3(false)}>
        <div className="p-6">
          <h2 className="text-3xl font-semibold text-gray-900 uppercase mb-1">
            Saheed Olabode
          </h2>
          <h3 className="text-base font-medium text-gray-700 mb-4">
            Structural Engineer
          </h3>
          <p className=" mb-4 font-normal text-justify text-gray-500">
            Saheed Olabode is a COREN certified Civil and Environmental Engineer
            and a distinguish alumni of University of Lagos. He plays a vital
            role in the planning, design, supervision, and implementation of a
            construction project for the structures to be materialized. Since he
            joined Araz Development Company Limited as an experienced hand in
            the construction industry. He has played vital roles in the
            planning, design, supervision, and implementation of many of
            construction projects undertaken by this company. Having horned his
            skills in designs, feasibility, economics, strength, and integrity
            of the structures during his stints with some of the best
            construction giants in the industry, he has succeeded in putting
            together a team can be considered the backbone of this company
            because their capacity to keep the project safe and sound from
            design to completion can almost be taken for granted.
          </p>
          <p className="mb-4 font-normal text-justify text-gray-500">
            The Engineering Team under his leadership has excellent record in
            terms of planning and proper coordination with the architects and
            MEP engineers in the design and analysis of the projects as well as
            securing an authority approval of the project to the project
            implementation and completion.  Saheed Olabode is one of the reasons
            Araz Development Company Limited has continued to get repeated
            patronage and referrals from old clients who found our property safe
            an sound in all aspects without exception.
          </p>
        </div>
      </Modal>
      <Modal isVisible={showModal4} onClose={() => setShowModal4(false)}>
        <div className="p-6">
          <h2 className="text-3xl font-semibold text-gray-900 uppercase mb-1">
            Badejo Adetimehin
          </h2>
          <h3 className="text-base font-medium text-gray-700 mb-4">
            Architectural Engineer
          </h3>
          <p className=" mb-4 font-normal text-justify text-gray-500">
            Badejo Adetimehin is an expert in Architecture & Design with
            Bachelor and Master’s degrees from graduate of University of Lagos
            with more than vast construction experience in Nigeria. Within the
            last two decades, he was part of some the most iconic real estate
            designs and developments such as Adiva Housing Estate, TSL
            Maintenance Shed,
          </p>
          <p className="mb-4 font-normal text-justify text-gray-500">
            Lagos Island Pedestrian Bridges, Mikano Sales Outlet in Victoria
            Island, TSL Logistics HQ at Ilupeju, Origin Group HQ at Surulere,
            Terrace Building Development at Yaba, King’s College PTA Building,
            Eco-friendly Timbre Building, Event Centre Development at Gbagada
            etc.
          </p>
          <p className="mb-4 font-normal text-justify text-gray-500">
            Badejo Adetimehin’s excellent understanding of the need dynamics of
            the collaboration between an architectural engineer and civil and
            structural engineers has ensured technical difficulties are
            non-existent while the building's structural integrity is never
            compromised. He takes his role as an Architect as been more than
            simply the design process of a structure but extend to making
            critical contributions at every step of a project, including in the
            aspects of greater energy efficiency by designing buildings that
            utilise natural lighting and ventilation while minimizing heating
            and cooling requirements.
          </p>
          <p className="mb-4 font-normal text-justify text-gray-500">
            Our clients are assured that our architectural designs are done with
            a notion or idea to realise their dreams thanks to the exemplary
            leadership role of Badejo Adetimehin and this has been instrumental
            in Araz Development Company Limited maintaining a high-quality
            standard in real estate delivery and a place at the high end of
            Nigeria’s real estate market. 
          </p>
        </div>
      </Modal>
      <Modal isVisible={showModal5} onClose={() => setShowModal5(false)}>
        <div className="p-6">
          <h2 className="text-3xl font-semibold text-gray-900 uppercase mb-1">
            Ridwan Yusuf
          </h2>
          <h3 className="text-base font-medium text-gray-700 mb-4">
            Electrical Engineer
          </h3>
          <p className=" mb-4 font-normal text-justify text-gray-500">
            A competent electrical, telecoms and information technology
            personnel with an excellent track of record of successfully
            completing safe and cost-effective projects from the concept and
            detail of the design through to implementation, testing and
            handover. As a COREN and NSE certified member, Ridwan Yusuf
            possesses in- depth expertise in design and drafting activities
            associated with Electrical & Telecommunication Engineering as
            applicable to building services design.
          </p>
          <p className="mb-4 font-normal text-justify text-gray-500">
            His knowledge of engineering, physics, engineering mathematics, and
            materials science principles to design, analyze, manufacture, and
            maintain electrical systems has been instrumental in Araz
            Development Company Limited becoming an industry leader in
            construction and project management.
          </p>
          <p className="mb-4 font-normal text-justify text-gray-500">
            Our Electrical Engineering department has never been the same since
            Ridwan Yusuf took over its mantle of leadership as it has played a
            crucial role in almost every facet of our modern construction.
            From heating, ventilation, and air conditioning (HVAC) systems to
            plumbing and fire protection, mechanical engineers, Ridwan Yusuf is
            now the brain behind the systems that ensure our building
            functionality, safety, and sustainability. In the evolving
            construction industry, and he has never rested on his oars in
            ensuing our projects are energy-efficient, sustainable, and
            technologically advanced solutions grows.
          </p>
        </div>
      </Modal>
      <Modal isVisible={showModal6} onClose={() => setShowModal6(false)}>
        <div className="p-6">
          <h2 className="text-3xl font-semibold text-gray-900 uppercase mb-1">
            Babajide Alawiye
          </h2>
          <h3 className="text-base font-medium text-gray-700 mb-4">
            Mechanical Engineer
          </h3>
          <p className=" mb-4 font-normal text-justify text-gray-500">
            Babajide holds a Bachelor of Science Degree and Ordinary National
            Diploma in Mechanical Engineering from the University of Lagos
            (2002) and Yaba College of Technology (1998) respectively.
          </p>
          <p className="mb-4 font-normal text-justify text-gray-500">
            Prior to joining Araz Development Company Limited, he has become a
            household name for pioneering the use of Active RFID (Radio
            Frequency Identification) technology for Inventory and Asset
            Management in Nigeria with Toyota Nigeria Limited in 2008 and the
            design and installation of High Voltage Automatic Voltage regular
            under the Ikeja Electric network as a quick fix, low-cost solution
            to Low voltage issues caused by long distance of communities and
            consumer from the transmission sub-station.
          </p>
          <p className="mb-4 font-normal text-justify text-gray-500">
            His co-founding of Electronic Intuition Systems (EIS) Nigeria
            Limited and Qwerty System Solutions Limited which provides Turnkey
            Information Communication Technology, Extra Low Voltage and
            Electrical Power Engineering Solution/Services across all sectors of
            the economy was part of the reasons his decision to join this team
            was highly welcome.
          </p>
          <p className="mb-4 font-normal text-justify text-gray-500">
            A resourceful entrepreneur and electrical engineer, Ismail was a
            rising star in the era when the need to bridge legacy solutions in
            the power sector with modern technology for management of electrical
            power system has become imperative. Ismail has indeed carved a niche
            in the industry.
          </p>
        </div>
      </Modal>
      <Modal isVisible={showModal7} onClose={() => setShowModal7(false)}>
        <div className="p-6">
          <h2 className="text-3xl font-semibold text-gray-900 uppercase mb-1">
            Abdulsalam Babatunde
          </h2>
          <h3 className="text-base font-medium text-gray-700 mb-4">
            Quantity Surveyor
          </h3>
          <p className=" mb-4 font-normal text-justify text-gray-500">
            Abdulsalam Babatunde is a register surveyor in Nigeria(SURCON), also
            a register member of Nigeria Institute of Surveyor(MNIS) and he was
            a graduate of Great Yaba College of Technology in surveying and
            geo-informatics and Professional Diploma in surveying and
            geo-infomatics with over a decade in leadership and technical
            experience across the full spectrum of surveying applications -
            engineering cadastral, hydrographic, geodetic, GIS and remote
            sensing
          </p>
          <p className="mb-4 font-normal text-justify text-gray-500">
            Abdulsalam proven track record in managing high-impact projects,
            delivering strategic spatial solution have fostering partnerships
            with govenment bodies and corporate stakeholders making his sort
            after qualified quantity surveyor, other expertised includes
            boundary Survey, topographical Survey, Dispute Survey, Land
            Management, Highway Survey and Volume Computation
          </p>
          <p className="mb-4 font-normal text-justify text-gray-500">
            Abdulsalam since Joining Araz Development Company Limited he had
            been able to provide strategic leadership and direction for the
            company operations in environmental spatial solutions, Construction
            Management and Geotechnical Services, also by oversee project
            planning, execution and delivery by ensuring compliance with the
            industry standards, client requirements and regulatory frameworks.
            He had also be able to develop and implement operational policies,
            procedures and quality control measures to optimize service delivery
            and operational efficiency
          </p>
        </div>
      </Modal>
      <Modal isVisible={showModal8} onClose={() => setShowModal8(false)}>
        <div className="p-6">
          <h2 className="text-3xl font-semibold text-gray-900 uppercase mb-1">
            Oluwaseun Onifade
          </h2>
          <h3 className="text-base font-medium text-gray-700 mb-4">
            Brand Comm./IT
          </h3>
          <p className=" mb-4 font-normal text-justify text-gray-500">
            Oluwaseun Onifade is a graduate from Olabisi Onabanjo University and
            has since acquired series of qualifications in management and
            Information Communication Technology from several institutions.
          </p>
          <p className="mb-4 font-normal text-justify text-gray-500">
            He is someone who believes that branding in the construction
            industry goes beyond aesthetics—it’s about establishing a business
            as a trusted, reliable partner for clients’ needs. He has devoted a
            substantial time to creating a strong brand which represents the
            values, quality and expertise that this company brings to every
            project. In a sector where trust and reliability are paramount, the
            nature of branding developed under the leadership of Oluwaseun
            Onifade is one that prioritized delivery on contracts such that the
            company as a leader in the industry where word-of-mouth
            recommendations are essential but has been severely abused by
            practitioners.
          </p>
          <p className="mb-4 font-normal text-justify text-gray-500">
            By making up-to-date information about projects and investments
            accessible at all time, Araz Development has become a strong brand
            which generate repeat business, attract new clients and have
            business a competitive edge. As an IT specialist, he had ensured
            that the creation of a working database for clients, tenants and
            other stakeholders for strategic, effective and simple resulted
            oriented operations in the field.
          </p>
          <p className="mb-4 font-normal text-justify text-gray-500">
            His leadership of the Information Technology and Communication team
            since 2017 has been instrumental to the positive brand of Araz
            Development Company Limited.
          </p>
        </div>
      </Modal>
      <Modal isVisible={showModal9} onClose={() => setShowModal9(false)}>
        <div className="p-6">
          <h2 className="text-3xl font-semibold text-gray-900 uppercase mb-1">
            Olabode Bolarinwa
          </h2>
          <h3 className="text-base font-medium text-gray-700 mb-4">
            Properties Mgt
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
            Inventore non quo cupiditate! Iste, quidem aut? Lorem ipsum sit amet
            consectetur, adipisicing elit. Ipsam est, ratione quos doloribus
            distinctio error, voluptas iure, qui neque harum porro pariatur.
            Suscipit quas deleniti, accusantium provident repudiandae
          </p>
        </div>
      </Modal>
    </motion.div>
  );
};

export default OurTeamFull;
