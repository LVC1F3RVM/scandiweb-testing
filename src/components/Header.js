import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex pa1 justify-between nowrap orange">
      <div className="flex flex-fixed black">
        <Link to="/" className="Home">
          <div className="fw7 mr1">Home</div>
        </Link>
        <Link to="/" className="Home">
          home
        </Link>
        <div className="ml1">|</div>
        <Link to="/all" className="All">
          all
        </Link>
        <div className="ml1">|</div>
        <Link to="/tech" className="Tech">
          tech
        </Link>
        <div className="ml1">|</div>
        <Link to="/clothes" className="Tech">
          clothes
        </Link>
      </div>
    </div>
  );
};

export default Header;
