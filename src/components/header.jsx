import { Avatar, Dropdown, Navbar } from "flowbite-react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import Logo from "../assets/logo.png";
import React from "react";
import { motion } from "framer-motion";
import PALogo from "../../logo.webp";

const dropdownVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
};

const Header = () => {
  return (
    <Navbar fluid className="bg-slate-900">
      <Navbar.Brand href="https://github.com/YOLO-GIT/intern-stuff">
        <img src={PALogo} className="w-8 h-8" />
        <span className="self-center whitespace-nowrap text-2xl font-semibold text-white">
          Praktikal Archive
        </span>
      </Navbar.Brand>
      <div className="flex md:order-2 z-50">
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
            <Dropdown.Item href="https://github.com/YOLO-GIT">
              My Github
            </Dropdown.Item>
            <Dropdown.Item href="https://yolo-git.github.io/My-First-Portfolio/">
              My Portfolio
            </Dropdown.Item>
            <Dropdown.Item href="https://www.tiktok.com/@espionageextreme">
              My Tiktok
            </Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item as="a" href="unused.html">
              Logout
            </Dropdown.Item>
          </motion.div>
        </Dropdown>

        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "text-center font-semibold sm:border-none sm:text-sm border-b-2 border-t-2 border-gray-600 text-xl p-1 nav-link-active text-blue-600"
              : "text-center font-semibold sm:border-none sm:text-sm border-b-2 border-t-2 border-gray-600 text-xl p-1 nav-link text-white"
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/documents"
          className={({ isActive }) =>
            isActive
              ? "text-center font-semibold sm:border-none sm:text-sm border-b-2 border-gray-600 text-xl p-1 nav-link-active text-blue-600"
              : "text-center font-semibold sm:border-none sm:text-sm border-b-2 border-gray-600 text-xl p-1 nav-link text-white"
          }
        >
          List
        </NavLink>
        <NavLink
          to="/contoh_slide"
          className={({ isActive }) =>
            isActive
              ? "text-center font-semibold sm:border-none sm:text-sm border-b-2 border-gray-600 text-xl p-1 nav-link-active text-blue-600"
              : "text-center font-semibold sm:border-none sm:text-sm border-b-2 border-gray-600 text-xl p-1 nav-link text-white"
          }
        >
          Contoh Slide
        </NavLink>
        <NavLink
          to="/contoh_nota"
          className={({ isActive }) =>
            isActive
              ? "text-center font-semibold sm:border-none sm:text-sm border-b-2 border-gray-600 text-xl p-1 nav-link-active text-blue-600"
              : "text-center font-semibold sm:border-none sm:text-sm border-b-2 border-gray-600 text-xl p-1 nav-link text-white"
          }
        >
          Contoh Nota
        </NavLink>
        <NavLink
          to="/about_us"
          className={({ isActive }) =>
            isActive
              ? "text-center font-semibold sm:border-none sm:text-sm border-b-2 border-gray-600 text-xl p-1 nav-link-active text-blue-600"
              : "text-center font-semibold sm:border-none sm:text-sm border-b-2 border-gray-600 text-xl p-1 nav-link text-white"
          }
        >
          About Us
        </NavLink>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
