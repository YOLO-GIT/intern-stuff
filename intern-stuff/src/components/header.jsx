import { Avatar, Dropdown, Navbar } from "flowbite-react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import Logo from "../assets/logo.png";
import React from "react";
import { motion } from "framer-motion";

const dropdownVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
};

const Header = () => {
  return (
    <Navbar fluid className="bg-slate-300">
      <Navbar.Brand href="https://github.com/YOLO-GIT/intern-stuff">
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Praktikal Archive
        </span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Dropdown
          arrowIcon={false}
          inline
          label={<Avatar alt="YOLO-GIT" img={Logo} rounded />}
        >
          <motion.div
            initial="hidden"
            animate="visible"
            variants={dropdownVariants}
          >
            <Dropdown.Header>
              <span className="block text-sm">YOLO-GIT</span>
              <span className="block truncate text-sm font-medium">
                gityolo7@gmail.com
              </span>
            </Dropdown.Header>
            <Dropdown.Item>My Github</Dropdown.Item>
            <Dropdown.Item>My Portfolio</Dropdown.Item>
            <Dropdown.Item>My Tiktok (Coming Soon)</Dropdown.Item>
          </motion.div>
        </Dropdown>

        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "nav-link-active text-blue-600"
              : "nav-link text-gray-600"
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/documents"
          className={({ isActive }) =>
            isActive
              ? "nav-link-active text-blue-600"
              : "nav-link text-gray-600"
          }
        >
          List
        </NavLink>
        <NavLink
          to="/contoh_slide"
          className={({ isActive }) =>
            isActive
              ? "nav-link-active text-blue-600"
              : "nav-link text-gray-600"
          }
        >
          Contoh Slide
        </NavLink>
        <NavLink
          to="/contoh_nota"
          className={({ isActive }) =>
            isActive
              ? "nav-link-active text-blue-600"
              : "nav-link text-gray-600"
          }
        >
          Contoh Nota
        </NavLink>
        <NavLink
          to="/about_us"
          className={({ isActive }) =>
            isActive
              ? "nav-link-active text-blue-600"
              : "nav-link text-gray-600"
          }
        >
          About Us
        </NavLink>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
