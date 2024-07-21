import { Avatar, Dropdown, Navbar } from "flowbite-react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import Logo from "../assets/logo.png";
import React from "react";

const Header = () => {
  return (
    <Navbar fluid>
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
          <Dropdown.Header>
            <span className="block text-sm">YOLO-GIT</span>
            <span className="block truncate text-sm font-medium">
              gityolo7@gmail.com
            </span>
          </Dropdown.Header>
          <Dropdown.Item>My Github</Dropdown.Item>
          <Dropdown.Item>My Portfolio</Dropdown.Item>
          <Dropdown.Item>My Tiktok (Coming Soon)</Dropdown.Item>
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
        <Navbar.Link href="#">Contoh Slide</Navbar.Link>
        <Navbar.Link href="#">Contoh Nota</Navbar.Link>
        <Navbar.Link href="#">About me</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
