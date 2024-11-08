
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import KapilLogo from "../assets/kapilLogo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [isInsightsDropdownOpen, setIsInsightsDropdownOpen] = useState(false);
  const [isPartnersDropdownOpen, setIsPartnersDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleServicesDropdown = () => {
    setIsServicesDropdownOpen(!isServicesDropdownOpen);
  };
   
   const toggleInsightsDropdown = () => {
    setIsInsightsDropdownOpen(!isInsightsDropdownOpen);
  };

  const togglePartnersDropdown = () => {
    setIsPartnersDropdownOpen(!isPartnersDropdownOpen);
  };

  return (
    <nav className="bg-white text-gray-800 p-4 flex items-center justify-between fixed w-full shadow-md z-50">
      <div className="flex items-center ml-12">
        <img src={KapilLogo} alt="Kapil Technologies Logo" className="h-10 mr-3" />
      </div>
      <div className="hidden md:flex space-x-10 mr-16">
        <NavLink 
          to="/" 
          className="relative group hover:text-red-500 transition duration-300 font-semibold"
          activeClassName="text-red-500"
        >
          Home
          <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-red-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
        </NavLink>

        {/* Services Dropdown */}
        <div className="relative group" onMouseEnter={toggleServicesDropdown} onMouseLeave={toggleServicesDropdown}>
          <NavLink 
            to="/services" 
            className="relative group hover:text-red-500 transition duration-300 font-semibold"
          >
            Services
            <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-red-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
          </NavLink>
          {isServicesDropdownOpen && (
            <div className="absolute left-0 ml-4  mt-2 w-[900px] transform -translate-x-[45%] bg-white shadow-lg rounded-lg z-50 p-2 pl-4 flex flex-col">
              <div className='ml-4'>
                  <h2 className="font-bold text-lg mb-2">Enterprise Technologies and Services</h2>
              <ul className="flex flex-wrap justify-between">
                {['SAP', 'Infor', 'Odoo', 'Digital', 'Oracle', 'Microsoft', 'AWS', 'Google Cloud'].map(item => (
                  <li key={item} className="w-[48%] mb-2">
                  <NavLink to={`/services/${item.toLowerCase()}`} className="block p-1 hover:bg-gray-100 ">{item}</NavLink>
                  </li>
                ))}
              </ul>
            </div>
              <div className='ml-4'>
                <h3 className="font-bold text-lg mt-2">Other Services</h3>
              <ul className="flex flex-wrap justify-between">
                {['Application Development', 'IT Staffing Services', 'Testing Services', 'Technology Training Services'].map(item => (
                  <li key={item} className="w-[48%] mb-2">
                  <NavLink to={`/services/${item.toLowerCase()}`} className="block p-1  hover:bg-gray-100">{item}</NavLink>
                  </li>
                ))}
              </ul>
              </div>
              <div className='ml-4'>
                 <h3 className="font-bold text-lg mt-2">Products</h3>
              <ul className="flex flex-wrap justify-between ">
                {['Finsta', 'Odoo', 'Hexabuild', 'IFCA'].map(item => (
                  <li key={item} className="w-[48%] mb-2 ">
                  <NavLink to={`/services/${item.toLowerCase()}`} className="block p-1 hover:bg-gray-100 ">{item}</NavLink>
                  </li>
                ))}
              </ul>
             </div>
            </div>
          )}
        </div>

        {/* Insights Dropdown */}
        <div className="relative group" onMouseEnter={toggleInsightsDropdown} onMouseLeave={toggleInsightsDropdown}>
          <NavLink 
            to="/insights" 
            className="relative group hover:text-red-500 transition duration-300 font-semibold"
          >
            Insights
            <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-red-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
          </NavLink>
          {isInsightsDropdownOpen && (
            <div className="absolute transform -translate-x-[30%] mt-2 w-[250px] bg-white shadow-lg rounded-lg z-50 p-4 flex flex-wrap transition-all duration-300 ease-in-out">
              <ul className="flex flex-col ">
                {['About Us', 'Leadership', 'Customer Stories', 'Webinars', 'Blog'].map(item => (
                  <li key={item} className="mb-2 hover:bg-gray-100">
                  <NavLink to={`/insights/${item.toLowerCase()}`} className="block p-2 ">{item}</NavLink>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Partners Dropdown */}
        <div className="relative group" onMouseOver={togglePartnersDropdown} onMouseOut={togglePartnersDropdown}>
          <button onClick={togglePartnersDropdown} className="hover:text-red-500 transition duration-300 font-semibold">
            Partners & Alliances
            <span className={`ml-[8px] transform ${isPartnersDropdownOpen ? 'rotate-[180deg]' : ''}`}></span>
             <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-red-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
          </button>
          {isPartnersDropdownOpen && (
            <div className="absolute left-[50%] transform -translate-x-[50%] mt-2 w-[300px] bg-white shadow-lg rounded-lg z-50 p-4 flex flex-col">
              {/* <h2 className="font-bold text-lg mb-2">Our Partners</h2> */}
              <ul className="flex flex-wrap justify-between">
                {['Allies', 'Sponsors'].map(item => (
                  <li key={item} className="w-full mb-2">
                    <NavLink to={`/partners/${item.toLowerCase()}`} className="block px-[16px] py-[8px] hover:bg-gray-100">{item}</NavLink>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Career Link */}
        <NavLink to="/career" 
                 className="relative group hover:text-red-500 transition duration-300 font-semibold" 
                 activeClassName="text-red-500">
          Career
          <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-red-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
        </NavLink>

        {/* Contact Us Link */}
        <NavLink to="/contact" 
                 className="relative group hover:text-red-500 transition duration-300 font-semibold" 
                 activeClassName="text-red-500">
          Contact Us
          <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-red-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
        </NavLink>

      </div>

      {/* Hamburger Menu for Mobile */}
      <div className="md:hidden flex items-center"> 
        <button onClick={toggleMenu} aria-label="Toggle Menu">
          {isOpen ? '✖' : '☰'}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-[64px] left-[0] right-[64px] bg-white p-[16px] md:hidden shadow-lg rounded-lg">
          {/* Mobile Links */}
          {['/', '/services', '/insights', '/career', '/contact'].map((path, index) => (
            <NavLink key={index} to={path} onClick={toggleMenu}
                     className={`block py-[8px] hover:text-red-500 transition duration-[200ms]`}>
              {path === '/' ? 'Home' : path.replace('/', '').charAt(0).toUpperCase() + path.slice(2)}
            </NavLink>
          ))}
          
          {/* Partners Dropdown in Mobile */}
          <button onClick={togglePartnersDropdown}
                  className={`block w-full text-left py-[8px] hover:text-red-500 transition duration-[200ms]`}>
            Partners 
            <span className={`ml-[8px] transform ${isPartnersDropdownOpen ? 'rotate-[180deg]' : ''}`}>▼</span>
          </button>
          {isPartnersDropdownOpen && (
            <div className="mt-[8px] bg-white shadow-lg rounded-lg">
              {['Allies', 'Sponsors'].map(item => (
                <NavLink key={item} to={`/partners/${item.toLowerCase()}`} onClick={toggleMenu}
                         className={`block px-[16px] py-[8px] hover:bg-gray-[100]`}>
                  {item}
                </NavLink>
              ))}
            </div>
          )}
        </div>
      )}
    </nav>
  );
}

export default Navbar;