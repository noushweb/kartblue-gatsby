import React, { useState } from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Header = () => {
  const [show, setShow] = useState(false)
  return (
    <header>
      <div className="container">
        <nav className="navbar">
          <div className="nav-center">
            <div className="nav-header">
              <Link to="/">
                <StaticImage
                  src="../images/logo.svg"
                  alt="kartblue logo"
                  className="mainlogo"
                />
              </Link>
              <button className="nav-btn" onClick={() => setShow(!show)}>
                <StaticImage
                  src="../images/menu.svg"
                  alt="menuicon"
                  className="burgericon"
                />
              </button>
            </div>
            <div className={show ? "nav-links show-links" : "nav-links"}>
              <Link
                to="/"
                className="nav-link"
                activeClassName="active-link"
                onClick={() => setShow(false)}
              >
                home
              </Link>
              <Link
                to="#about"
                className="nav-link"
                activeClassName="active-link"
                onClick={() => setShow(false)}
              >
                about
              </Link>
              <Link
                to="#services"
                className="nav-link"
                activeClassName="active-link"
                onClick={() => setShow(false)}
              >
                Services
              </Link>
              <Link
                to="#contact"
                className="nav-link"
                activeClassName="active-link"
                onClick={() => setShow(false)}
              >
                Contact
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Header
