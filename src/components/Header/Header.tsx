import "@/components/Header/Header.css";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "assets/logo.png";

export default function Header() {
  const [navOpen, setNavOpen] = useState(false);
  const toggleNav = () => setNavOpen((s) => !s);

  return (
    <div className="navbar-section">
      <div className="navbar-title">
        <Link to="/">
          <div className="navbar-brand">
            <img src={logo} alt="Logo Vietinnotech" className="navbar-logo" />
            <div className="navbar-company-name">CÔNG TY CỔ PHẦN VIETINNOTECH</div>
          </div>
        </Link>
      </div>

      {/* Desktop */}
      <ul className="navbar-items">
        <li>
          <Link to="/san-pham/phong-hoc-omo" className="navbar-links">
            Giải pháp OMO
          </Link>
        </li>
        <li>
          <Link to="/phan-mem-omo" className="navbar-links">
            Phần Mềm OMO
          </Link>
        </li>
        <li>
          <Link to="/lien-he" className="navbar-links">
            Liên Hệ
          </Link>
        </li>
      </ul>

      {/* Mobile */}
      <div className={navOpen ? "mobile-navbar open-nav" : "mobile-navbar"}>
        <div onClick={toggleNav} className="mobile-navbar-close">
          <FontAwesomeIcon icon={faXmark} className="hamb-icon" />
        </div>

        <ul className="mobile-navbar-links">
          <li>
            <Link onClick={toggleNav} to="/san-pham/phong-hoc-omo">
              Giải pháp OMO
            </Link>
          </li>
          <li>
            <Link onClick={toggleNav} to="/phan-mem-omo">
              Phần Mềm OMO
            </Link>
          </li>
          <li>
            <Link onClick={toggleNav} to="/lien-he">
              Liên Hệ
            </Link>
          </li>
        </ul>
      </div>

      {/* Hamburger Icon */}
      <div className="mobile-nav">
        <FontAwesomeIcon icon={faBars} onClick={toggleNav} className="hamb-icon" />
      </div>
    </div>
  );
}
