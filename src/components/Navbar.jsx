import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <div className="mr-5 p-3">Navbar</div>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/bar">
                  AllCharts
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/colorpicker">
                  ColorPicker
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/anothercomponent">
                  AnotherComponent
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/stepper">
                  StepperComponent
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/loading">
                  Skeleton
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/gridlayout">
                  GridLayout
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
