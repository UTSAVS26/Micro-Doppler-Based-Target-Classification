import React, { useState, useEffect } from "react";
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import logo from "../assets/logo.png";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 200;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav
      className={`w-full text-white px-4 fixed top-0 left-0 flex items-center justify-between z-10 bg-[#1C1C1C] ${scrolled ? "bg-[1C1C1C] transition-all" : ""}`}
      style={{ height: '70px' }} // Set the height of the navbar
    >
      <Link to="/" className="flex items-center">
        <img src={logo} alt="logo" className="w-[50px] h-[50px] rounded-full border-2 border-white" />
        <span className="text-white font-bold text-xl ml-4">AeroScan</span>
      </Link>
      <div className="flex-grow flex items-center justify-center">
        <ul className={`fixed md:static top-0 left-0 w-full h-full md:h-auto bg-[1C1C1C] flex flex-col md:flex-row items-center md:items-center justify-center transform ${menuOpen ? "translate-x-0" : "-translate-x-full"} transition-transform duration-300 ease-in-out md:transform-none md:transition-none z-10`}>
          <NavItem to="/overview" text="Home" isActive={location.pathname === '/overview'} />
          <NavItem to="/features" text="Features" isActive={location.pathname === '/features'} />
          <NavItem to="/dashboard" text="Dashboard" isActive={location.pathname === '/dashboard'} />
          <NavItem to="/contributors" text="Contributors" isActive={location.pathname === '/contributors'} />
          <NavItem to="/howitworks" text="How it Works" isActive={location.pathname === '/howitworks'} />
          <NavItem to="/contact" text="Contact Us" isActive={location.pathname === '/contact'} />
        </ul>
      </div>
      <div className="flex items-center space-x-2">
        <Link to="/login" className="text-white px-4 py-2 rounded-full bg-orange-600 hover:bg-[#FFFFFF] hover:text-orange-600 active:bg-[#4a4b5d] transition duration-300">Login</Link>
        <Link to="/signup" className="text-orange-600 border border-gray-800 px-4 py-2 rounded-full bg-[#101010] hover:bg-[#FFFFFF] hover:text-orange-600 active:bg-[#4a4b5d] transition duration-300">Signup</Link>
      </div>
      <button
        className="text-white text-2xl md:hidden z-20"
        onClick={toggleMenu}
      >
        {menuOpen ? <FaTimes /> : <FaBars />}
      </button>
    </nav>
  );
};

const NavItem = ({ to, text, isActive }) => {
  return (
    <li className="list-none m-2">
      <Link to={to} className={`text-white p-2 font-bold rounded-lg inline-flex items-center justify-center hover:bg-[#7c7d8b] hover:text-[#ccc] ${isActive ? 'border-b-2 border-white' : ''} transition-transform duration-300 transform hover:scale-105 hover:shadow-lg active:shadow-md active:scale-95`}>
        {text}
      </Link>
    </li>
  );
};

export default Navbar;