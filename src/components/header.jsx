import React, { useContext, useEffect, useState } from "react";
import logoLuxChoronos from "../assets/images/luxury-shop.png";
import cookies from "react-cookies";
import { Link, useNavigate } from "react-router-dom";
import { AppContext } from "../states/AppContext";
import bagIcon from "../assets/images/bag.png";
import signinIcon from "../assets/images/sign-in.png";
import lockIcon from "../assets/images/lock.png";

const Header = () => {
  let user = cookies.load("user");
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const { cartItem, handleLogout } = useContext(AppContext);

  let Authentication = (
    <>
      <Link className="nav-link" to="/signin">
        <img
          src={signinIcon}
          width={15}
          height={15}
          style={{
            border: "white",
            marginTop: "-3px",
            marginRight: "3px",
          }}
        />
        Sign in
      </Link>
    </>
  );

  if (user != null) {
    Authentication = (
      <div className="action" style={{ cursor: "pointer", marginTop: "2px" }}>
        <Link
          className="nav-link dropdown-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <i
            className="zmdi zmdi-account-circle"
            style={{ marginRight: "5px", color: "grey" }}
          />
          <strong style={{ color: "grey" }}>{user.data.username}</strong>
        </Link>
        <div className={menuOpen ? "menu active" : "menu"}>
          <h3>
            {user.data.username}
            <br />
            <span>{user.data.email}</span>
          </h3>
          <ul>
            <li>
              <i class="zmdi zmdi-account-o mt-0 me-2" />
              <Link to="/user/profile">My profile</Link>
            </li>
            <li>
              <i class="zmdi zmdi-lock mt-0 me-2" />
              <Link to="/user/set_password/">Set password</Link>
            </li>
            <li>
              <i class="zmdi zmdi-settings mt-0 me-2" />
              <Link to="/notfound/">Setting</Link>
            </li>
            <li>
              <i class="zmdi zmdi-help mt-0 me-2" />
              <Link to="/notfound/">Help</Link>
            </li>
            <li>
              <fa-icon
                _ngcontent-serverapp-c49=""
                className="ng-fa-icon text-gray-500 me-2"
              >
                <svg
                  style={{ width: "15px", height: "15px", marginRight: "6px" }}
                  role="img"
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fad"
                  data-icon="arrow-right-from-bracket"
                  className="svg-inline--fa fa-arrow-right-from-bracket fa-fw"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <g className="fa-duotone-group">
                    <path
                      className="fa-secondary"
                      fill="currentColor"
                      d="M192 64c0 17.7-14.3 32-32 32L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32z"
                    />
                    <path
                      className="fa-primary"
                      fill="currentColor"
                      d="M502.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-128 128c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L402.7 288 192 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l210.7 0-73.4-73.4c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l128 128z"
                    />
                  </g>
                </svg>
              </fa-icon>
              <Link to="/signin" onClick={handleLogout}>
                Logout
              </Link>
            </li>
          </ul>
        </div>
      </div>
    );
  }

  return (
    <header className="header_section">
      <div
        className="container-fluid "
        style={{ position: "fixed", backgroundColor: "#b5caee", zIndex: "5" }}
      >
        <nav className="navbar navbar-expand-lg custom_nav-container pt-3">
          <Link className="navbar-brand" to="/">
            <img src={logoLuxChoronos} alt="LuxChronos Logo" />
            <span>LuxChronos</span>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <div className="d-flex ml-auto flex-column flex-lg-row align-items-center">
              <ul className="navbar-nav custom_navbar-nav">
                <li className="nav-item active">
                  <Link className="nav-link" to="/about">
                    About <span className="sr-only"></span>
                  </Link>
                </li>
                {/* <li className="nav-item">
                  <Link className="nav-link" to="#">
                    Blog <span className="sr-only"></span>
                  </Link>
                </li> */}
                <li className="nav-item">
                  <Link className="nav-link" to="/category">
                    {" "}
                    Our watches{" "}
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    to="/cart"
                    style={{ display: "flex" }}
                  >
                    <div style={{ position: "relative", marginRight: "5px" }}>
                      <img
                        src={bagIcon}
                        width={15}
                        height={15}
                        style={{
                          border: "white",
                          marginTop: "-3px",
                          marginRight: "3px",
                        }}
                      />
                      <span
                        className=""
                        style={{
                          position: "absolute",
                          top: "-5px",
                          right: "-5px",
                          background: "#fff",
                          borderRadius: "50%",
                          width: "15px",
                          height: "15px",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          color: "black",
                          fontSize: "10px",
                        }}
                      >
                        {cartItem.length}
                      </span>
                    </div>
                    My bag
                  </Link>
                </li>
                <li className="nav-item">{Authentication}</li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
