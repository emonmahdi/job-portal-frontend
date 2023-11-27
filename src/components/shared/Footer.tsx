import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div
        style={{
          background: "#1A1A1A",
          color: "#fff",
        }}
        className="px-12 py-20"
      >
        <div className="container mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {/* Column 1 */}
            <div>
              <h2 className="text-2xl font-bold mb-4">Column 1</h2>
              <ul>
                <li>Link 1</li>
                <li>Link 2</li>
                <li>Link 3</li>
                {/* Add more links as needed */}
              </ul>
            </div>

            {/* Column 2 */}
            <div>
              <h2 className="text-2xl font-bold mb-4">Column 2</h2>
              <ul>
                <li>Link 1</li>
                <li>Link 2</li>
                <li>Link 3</li>
                {/* Add more links as needed */}
              </ul>
            </div>

            {/* Column 3 */}
            <div>
              <h2 className="text-2xl font-bold mb-4">Column 3</h2>
              <ul>
                <li>Link 1</li>
                <li>Link 2</li>
                <li>Link 3</li>
                {/* Add more links as needed */}
              </ul>
            </div>

            {/* Column 4 */}
            <div>
              <h2 className="text-2xl font-bold mb-4">Column 4</h2>
              <ul>
                <li>Link 1</li>
                <li>Link 2</li>
                <li>Link 3</li>
                {/* Add more links as needed */}
              </ul>
            </div>
          </div>
          {/* footer bottom */}
          <div className="py-2">
            <hr />
          </div>
          <div className="text-center my-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h2>
                Hotline Call:{" "}
                <span className="text-[#00A7AC] font-bold">
                  +88-01920939248
                </span>{" "}
              </h2>
            </div>
            <div>
              <h2>
                <Link to="/">JOB BD</Link>
              </h2>
            </div>
            <div>
              <ul className="flex items-center justify-between">
                <li className="hover:text-[#00A7AC]">
                  {" "}
                  <a href="">Privacy Policy</a>{" "}
                </li>
                <li className="hover:text-[#00A7AC]">
                  <a href="">Terms & Conditions</a>{" "}
                </li>
                <li className="hover:text-[#00A7AC]">
                  <a href="">Help Center</a>{" "}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* copyright section */}
      <div className="text-center bg-[#00A7AC] py-2 text-white">
        <p>@Copyright 2023 JOB-BD | Design By Md Emon Mahdi</p>
      </div>
    </>
  );
};

export default Footer;
