import React from "react";
import {Link} from 'react-router-dom';

function Navbar() {
  return (
    <header>
      <div className="container">
        <div className="inner-content">
          <div className="brand">
            <Link to="/">Movies2Watch</Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
