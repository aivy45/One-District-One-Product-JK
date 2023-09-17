import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <h2 className="text-center">
        All rights are reserved &copy; Akshun Verma
      </h2>
      <h4 className="text-center">
        In this application only famous products of each district of Jammu &
        Kashmir UT are available, so that it boost the local farmers/workers.{" "}
      </h4>

      <p className="text-center mt-2">
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/policy">Privacy Policy</Link>
      </p>
    </div>
  );
};

export default Footer;
