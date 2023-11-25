import {
  CarryOutOutlined,
  UsergroupAddOutlined,
  AreaChartOutlined,
  SafetyCertificateOutlined,
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
  width: "100%",
  color: "#fff",
};

const Banner = () => {
  return (
    <div style={bannerStyle}>
      <div className="header-content text-center">
        <h1 className="text-6xl text-white font-bold">
          Your Career’s <span style={{ color: "#00A7AC" }}>Opportunity.</span>
        </h1>
        <p>
          2400 Peoples are daily search in this portal, 100 user added job
          portal!
        </p>
        {/* header bottom icons categories */}
        <div className="flex mt-12">
          {/* single item */}
          <div className="flex items-center justify-between mr-8">
            <div
              style={{
                border: "3px solid #00A7AC",
                padding: "15px",
                transform: "rotate(0deg)",
                borderRadius: "5px",
              }}
            >
              <p style={{ transform: "rotate(0deg)" }}>
                <CarryOutOutlined className="text-4xl" />
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
          <div className="flex items-center justify-between mr-8">
            <div
              style={{
                border: "3px solid #00A7AC",
                padding: "15px",
                transform: "rotate(0deg)",
                borderRadius: "5px",
              }}
            >
              <p style={{ transform: "rotate(0deg)" }}>
                <UsergroupAddOutlined className="text-4xl" />
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
          <div className="flex items-center justify-between mr-8">
            <div
              style={{
                border: "3px solid #00A7AC",
                padding: "15px",
                transform: "rotate(0deg)",
                borderRadius: "5px",
              }}
            >
              <p style={{ transform: "rotate(0deg)" }}>
                <AreaChartOutlined className="text-4xl" />
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
          <div className="flex items-center justify-between mr-8">
            <div
              style={{
                border: "3px solid #00A7AC",
                padding: "15px",
                transform: "rotate(0deg)",
                borderRadius: "5px",
              }}
            >
              <p style={{ transform: "rotate(0deg)" }}>
                <SafetyCertificateOutlined className="text-4xl" />
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
      </div>
    </div>
  );
};

export default Banner;
