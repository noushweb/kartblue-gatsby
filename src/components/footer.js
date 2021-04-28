import { StaticImage } from "gatsby-plugin-image"
import React from "react"
const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footerwraper">
          <div className="addressdiv">
            <StaticImage
              src="../images/logo.jpg"
              alt="kartblue logo"
              className="addressdivlogo"
            />
            <p>MiZone </p>
            <p>Mangattuparamba</p>
            <p>Kannur – 670562</p>
          </div>
          <div className="sm">
            <p>Telephone: +91 79949 80402 </p>
            <p>
              <a href="mailto:contact@kartblue.com">contact@kartblue.com</a>
            </p>
            <ul>
              <li>
                <a href="https://www.facebook.com/kartblue">
                  <StaticImage
                    src="../images/facebook.svg"
                    alt="facbook icon"
                    className="smimg"
                    placeholder="tracedSVG"
                  />
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/kartblue_consult/">
                  <StaticImage
                    src="../images/instagram.svg"
                    alt="instagram icom"
                    className="smimg"
                    placeholder="tracedSVG"
                  />
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/company/kartblue/">
                  <StaticImage
                    src="../images/linkedin.svg"
                    alt="linkedin icon"
                    className="smimg"
                    placeholder="tracedSVG"
                  />
                </a>
              </li>
              <li>
                <a href="https://twitter.com/Kartblueconsult?s=08">
                  <StaticImage
                    src="../images/twitter.svg"
                    alt="twitter icon"
                    className="smimg"
                    placeholder="tracedSVG"
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="copyrite container">
        Copyright © 2021, Kartblue.com All rights reserved.
      </div>
    </footer>
  )
}

export default Footer
