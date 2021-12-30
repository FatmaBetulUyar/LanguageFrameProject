/*eslint-disable*/
import React from "react";
import { Link } from "react-router-dom";

// reactstrap components
import { Container } from "reactstrap";

// core components

function DefaultFooter() {
  return (
    <>
      <footer className="footer footer-default">
        <Container>
          <nav>
            <ul>
              <Link to="/about-page" style={{marginRight:10}}>
                <li>Hakkımızda</li>{" "}
              </Link>
              <Link to="/contact-page">
              <li>
                  İletişim
              </li>
              </Link>
            </ul>
          </nav>
          <div className="copyright" id="copyright" >
            © {new Date().getFullYear()}, Language Frame
            {/* <a
              href="https://www.invisionapp.com?ref=nukr-default-footer"
              target="_blank"
            >
              Invision
            </a>
            . Coded by{" "}
            <a
              href="https://www.creative-tim.com?ref=nukr-default-footer"
              target="_blank"
            >
              LF Tim
            </a> */}
            .
          </div>
        </Container>
      </footer>
    </>
  );
}

export default DefaultFooter;
