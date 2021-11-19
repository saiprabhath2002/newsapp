import React, { Component } from "react";
import {Link} from "react-router-dom";
export class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg fixed-top navbar-light bg-light">
          <div className="container-fluid">
            <a className="navbar-brand" to="#">
              HOME
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" to="#">
                    about
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" to="#">
                    Contact us
                  </a>
                </li>
                <Link className="nav-link active" aria-current="page" to="/business">business</Link>
                <Link className="nav-link active" aria-current="page" to="/entertainment">entertainment</Link>
                <Link className="nav-link active" aria-current="page" to="/general">general</Link>
                <Link className="nav-link active" aria-current="page" to="/health">health</Link>
                <Link className="nav-link active" aria-current="page" to="/technology">technology</Link>
                <Link className="nav-link active" aria-current="page" to="/sports">sports</Link>
                

              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
