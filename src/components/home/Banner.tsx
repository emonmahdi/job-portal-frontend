import {
  CarryOutOutlined,
  UsergroupAddOutlined,
  AreaChartOutlined,
  SafetyCertificateOutlined,
  SearchOutlined,
  AppstoreAddOutlined,
} from "@ant-design/icons";

import bannerImg from "./../../assets/banner.jpg";

const bannerStyle = {
  background: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${bannerImg})`,
  backgroundPosition: "center center",
  height: "100vh",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundAttachment: "fixed",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  maxWidth: "100%",
  color: "#fff",
  overflow: "hidden",
};

const Banner = () => {
  return (
    <div style={bannerStyle}>
      <div className="header-content text-center">
        <h1 className="lg:text-6xl md:text-3xl sm:text-xl text-white font-bold">
          Your Career’s <span style={{ color: "#00A7AC" }}>Opportunity.</span>
        </h1>
        <p>
          2400 Peoples are daily search in this portal, 100 user added job
          portal!
        </p>
        {/* header bottom icons categories */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:p-4 sm:p-8 mt-12">
          {/* single item */}
          <div className="flex items-center mr-8 mb-4">
            <div
              style={{
                border: "3px solid #00A7AC",
                transform: "rotate(0deg)",
                borderRadius: "5px",
              }}
              className="lg:p-4 md:p-4"
            >
              <p style={{ transform: "rotate(0deg)" }}>
                <CarryOutOutlined className="lg:text-4xl md:text-2xl" />
              </p>
            </div>
            <div className="ml-6">
              <h4 className="text-2xl">Live Jobs</h4>
              <p
                style={{
                  color: "#00A7AC",
                  fontWeight: "bold",
                  fontSize: "28px",
                }}
              >
                300+
              </p>
            </div>
          </div>
          {/* single item */}
          <div className="flex items-center mr-8 mb-4">
            <div
              style={{
                border: "3px solid #00A7AC",
                transform: "rotate(0deg)",
                borderRadius: "5px",
              }}
              className="lg:p-4 md:p-4"
            >
              <p style={{ transform: "rotate(0deg)" }}>
                <UsergroupAddOutlined className="text-4xl md:text-2xl" />
              </p>
            </div>
            <div className="ml-6">
              <h4 className="text-2xl">Employees</h4>
              <p
                style={{
                  color: "#00A7AC",
                  fontWeight: "bold",
                  fontSize: "28px",
                }}
              >
                800+
              </p>
            </div>
          </div>
          {/* single item */}
          <div className="flex items-center mr-8 mb-4">
            <div
              style={{
                border: "3px solid #00A7AC",
                transform: "rotate(0deg)",
                borderRadius: "5px",
              }}
              className="lg:p-4 md:p-4"
            >
              <p style={{ transform: "rotate(0deg)" }}>
                <AreaChartOutlined className="text-4xl md:text-2xl" />
              </p>
            </div>
            <div className="ml-6">
              <h4 className="text-2xl">Companies</h4>
              <p
                style={{
                  color: "#00A7AC",
                  fontWeight: "bold",
                  fontSize: "28px",
                }}
              >
                100+
              </p>
            </div>
          </div>
          {/* single item */}
          <div className="flex items-center mr-8 mb-4">
            <div
              style={{
                border: "3px solid #00A7AC",
                transform: "rotate(0deg)",
                borderRadius: "5px",
              }}
              className="lg:p-4 md:p-4"
            >
              <p style={{ transform: "rotate(0deg)" }}>
                <SafetyCertificateOutlined className="text-4xl md:text-2xl" />
              </p>
            </div>
            <div className="ml-6">
              <h4 className="text-2xl">New Jobs</h4>
              <p
                style={{
                  color: "#00A7AC",
                  fontWeight: "bold",
                  fontSize: "28px",
                }}
              >
                200+
              </p>
            </div>
          </div>
        </div>
        {/* input search  */}
        <div className="bg-white mt-8 text-black py-4 px-2 rounded  flex items-center justify-evenly">
          {/* single input */}
          <div className="bg-gray-50 px-4 flex items-center w-100% border-2 border-[#00A7AC] rounded">
            <div>
              <span>
                <SearchOutlined className="text-[#00A7AC] text-2xl border-r-2 border-[#00A7AC] pr-4" />
              </span>
            </div>
            <div>
              <input
                type="text"
                className="text-black py-4 px-4 outline-none bg-gray-50"
                placeholder="Search Job Title..."
              />
            </div>
          </div>
          {/* single input */}
          <div className="bg-gray-50 px-4 flex items-center w-100% border-2 border-[#00A7AC] rounded">
            <div>
              <span>
                <AppstoreAddOutlined className="text-[#00A7AC] text-2xl border-r-2 border-[#00A7AC] pr-4" />
              </span>
            </div>
            <div>
              <select
                id="currency"
                name="currency"
                className="text-black  py-4 px-4 outline-none w-100% bg-gray-50"
              >
                <option>UI/UX</option>
                <option>React Developer</option>
                <option>JavaScript Developer</option>
                <option>Frontend Developer</option>
                <option>Full Stack Developer</option>
                <option>Mern Stack Developer</option>
              </select>
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="bg-[#00A7AC] py-4 px-8 text-white rounded"
            >
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
