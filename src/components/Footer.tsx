import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white rounded-lg shadow-sm m-4 dark:bg-gray-900">
      <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2025-26{" "}
          <a href="https://iamvishalkumar.in" className="hover:underline">
            iamvishalkumar.in
          </a>
          . All Rights Reserved.
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
         
          <li>
            <a href="#contact" className="hover:underline me-4 md:me-6">
             Contact
            </a>
          </li>
          <li>
            <a href="#about" className="hover:underline me-4 md:me-6">
              About
            </a>
          </li>
          <li>
            <a href="/Vishal_Kumar_Resume.pdf" className="hover:underline">
               Download Resume
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
