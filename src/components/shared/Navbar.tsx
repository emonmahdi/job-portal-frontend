import { MenuOutlined, CloseOutlined } from "@ant-design/icons";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import Button from "../UI/Button";

const Navbar = () => {
  const navItems = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "About",
      link: "/",
    },
    {
      name: "Jobs",
      link: "/",
    },
    {
      name: "Blog",
      link: "/",
    },
    {
      name: "Contact",
      link: "/",
    },
  ];

  const [open, setOpen] = useState(false);

  return (
    <div className="shadow-md w-full left-0 top-0">
      <div className="md:flex items-center justify-between py-4 md:px-10 px-7">
        {/* Logo */}
        <div className="logo font-bold flex items-center">
          <h2>JOB-BD </h2>
        </div>
        <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute right-8 top-2 cursor-pointer md:hidden"
        >
          {open ? <CloseOutlined /> : <MenuOutlined />}
        </div>
        {/* Nav Items */}
        <div>
          <ul
            className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static  bg-blue-100 lg:bg-transparent md:bg-transparent md:z-auto left-0 w-full md-w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
              open
                ? "top-14 opacity-100"
                : "top-[-490px] md:opacity-100 opacity-0"
            }`}
          >
            {navItems.map((link) => (
              <li className="md:ml-8 text-[16px] md:my-0 my-7 hover:text-[#00A7AC]">
                <NavLink to={link.link}>{link.name}</NavLink>
              </li>
            ))}
            <div className="md:hidden">
              <Button>Sign In</Button>
              <Button>Post Job</Button>
            </div>
          </ul>
        </div>
        {/* Buttons */}
        <div className="hidden md:block">
          <Button>Sign In</Button>
          <Button>Post Job</Button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
