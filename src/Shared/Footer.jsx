
import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-base-100 border-t border-gray-200 text-base-content py-10 px-6 md:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">

        {/* Company Info */}
        <aside className="space-y-3">
          <div className="flex items-center gap-2">
            <svg
              width="40"
              height="40"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              fillRule="evenodd"
              clipRule="evenodd"
              className="fill-blue-600"
            >
              <path d="M22.672 15.226..."></path>
            </svg>
            <span className="text-lg font-bold">JobPortal</span>
          </div>
          <p className="text-sm text-gray-600">
            Empowering talent & opportunities since 2024.
          </p>
          <div className="flex gap-3 text-blue-600 text-lg">
            <FaFacebookF />
            <FaTwitter />
            <FaInstagram />
            <FaLinkedinIn />
          </div>
        </aside>

        {/* Services */}
        <nav>
          <h6 className="footer-title text-gray-700">Services</h6>
          <ul className="space-y-2 text-sm text-gray-500">
            <li><a className="hover:text-blue-600 transition">Branding</a></li>
            <li><a className="hover:text-blue-600 transition">Design</a></li>
            <li><a className="hover:text-blue-600 transition">Marketing</a></li>
            <li><a className="hover:text-blue-600 transition">Advertisement</a></li>
          </ul>
        </nav>

        {/* Company */}
        <nav>
          <h6 className="footer-title text-gray-700">Company</h6>
          <ul className="space-y-2 text-sm text-gray-500">
            <li><a className="hover:text-blue-600 transition">About us</a></li>
            <li><a className="hover:text-blue-600 transition">Contact</a></li>
            <li><a className="hover:text-blue-600 transition">Jobs</a></li>
            <li><a className="hover:text-blue-600 transition">Press kit</a></li>
          </ul>
        </nav>

        {/* Legal */}
        <nav>
          <h6 className="footer-title text-gray-700">Legal</h6>
          <ul className="space-y-2 text-sm text-gray-500">
            <li><a className="hover:text-blue-600 transition">Terms of use</a></li>
            <li><a className="hover:text-blue-600 transition">Privacy policy</a></li>
            <li><a className="hover:text-blue-600 transition">Cookie policy</a></li>
          </ul>
        </nav>
      </div>

      {/* Bottom line */}
      <div className="text-center text-sm text-gray-400 mt-10">
        © {new Date().getFullYear()} JobPortal. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
