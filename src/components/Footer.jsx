import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaYoutube } from 'react-icons/fa';
import kapilLogo from "../assets/kapilLogo.png";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <img src={kapilLogo} alt="Company Logo" className="h-12" />
          <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded mr-20">
            Contact Us
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h2 className="text-lg font-semibold mb-4">Company</h2>
            <ul>
              <li><Link to="#" className="hover:underline">About Us</Link></li>
              <li><Link to="#" className="hover:underline">Country Sites</Link></li>
              <li><Link to="#" className="hover:underline">ESG</Link></li>
              <li><Link to="#" className="hover:underline">Investors</Link></li>
              <li><Link to="#" className="hover:underline">Newsroom</Link></li>
              <li><Link to="#" className="hover:underline">Partner Ecosystem</Link></li>
            </ul>
          </div>
          
          <div>
            <h2 className="text-lg font-semibold mb-4">Resources</h2>
            <ul>
              <li><Link to="#" className="hover:underline">Blog</Link></li>
              <li><Link to="#" className="hover:underline">Case Studies</Link></li>
              <li><Link to="#" className="hover:underline">Events</Link></li>
              <li><Link to="#" className="hover:underline">Podcasts</Link></li>
              <li><Link to="#" className="hover:underline">White Papers</Link></li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-4">Support</h2>
            <ul>
              <li><Link to="#" className="hover:underline">Accessibility</Link></li>
              <li><Link to="#" className="hover:underline">Cookie Management</Link></li>
              <li><Link to="#" className="hover:underline">Privacy Policy</Link></li>
              <li><Link to="#" className="hover:underline">Terms of Use</Link></li>
              <li><Link to="#" className="hover:underline">Careers</Link></li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-4">Follow Us</h2>
            <ul className="flex space-x-4">
              <li><Link to="#" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><FaFacebookF /></Link></li>
              <li><Link to="#" target="_blank" rel="noopener noreferrer" aria-label="Twitter"><FaTwitter /></Link></li>
              <li><Link to="#" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FaLinkedinIn /></Link></li>
              <li><Link to="#" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><FaInstagram /></Link></li>
              <li><Link to="#" target="_blank" rel="noopener noreferrer" aria-label="YouTube"><FaYoutube /></Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-8 text-center">
          <p>© {new Date().getFullYear()} Your Company. All rights reserved.</p>
          <p className="mt-2">
            <Link to="#" className="text-gray-400 hover:text-white mx-2">Privacy Policy</Link> | 
            <Link to="#" className="text-gray-400 hover:text-white mx-2">Terms of Service</Link> | 
            <Link to="#" className="text-gray-400 hover:text-white mx-2">Sitemap</Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
