import React from "react";
import { Link } from "react-router-dom";
// reactstrap components
import {
  Button,
  Collapse,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  UncontrolledTooltip,
} from "reactstrap";


function NavbarAfterLogin() {
  const [navbarColor, setNavbarColor] = React.useState("");
  const [collapseOpen, setCollapseOpen] = React.useState(false);
  React.useEffect(() => {
    const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop > 399 ||
        document.body.scrollTop > 399
      ) {
        setNavbarColor("");
      } else if (
        document.documentElement.scrollTop < 400 ||
        document.body.scrollTop < 400
      ) {
        setNavbarColor(" ");
      }
    };
    window.addEventListener("scroll", updateNavbarColor);
    return function cleanup() {
      window.removeEventListener("scroll", updateNavbarColor);
    };
  });
  return (
    <>
      {collapseOpen ? (
        <div
          id="bodyClick"
          onClick={() => {
            document.documentElement.classList.toggle("nav-open");
            setCollapseOpen(false);
          }}
        />
      ) : null}
      <Navbar className={"fixed-top " + navbarColor} expand="lg" color="warning">
        <Container>
          <div className="navbar-translate">
            <Link to="/index">
            <NavbarBrand
             
              target="_blank"
              id="navbar-brand"
              style={{fontSize:25, fontWeight:'bold'}}
            >
                   {/* <img alt="..." src={require("assets/img/logo2.png").default} style={{width:50,height:50}}></img> */}
              Language Frame
            </NavbarBrand>
            </Link>
            <UncontrolledTooltip target="#navbar-brand">
              Designed by LanguageFrame. 
            </UncontrolledTooltip>
            <button
              className="navbar-toggler navbar-toggler"
              onClick={() => {
                document.documentElement.classList.toggle("nav-open");
                setCollapseOpen(!collapseOpen);
              }}
              aria-expanded={collapseOpen}
              type="button"
            >
              <span className="navbar-toggler-bar top-bar"></span>
              <span className="navbar-toggler-bar middle-bar"></span>
              <span className="navbar-toggler-bar bottom-bar"></span>
            </button>
          </div>
          <Collapse
            className="justify-content-end"
            isOpen={collapseOpen}
            navbar
          >
            <Nav navbar>
              <NavItem>
                <Link
               to="/lecture-page"
                >
                  <i></i>
                  <p style={{fontSize:13,margin:10}}>Dersler </p>
                </Link> </NavItem>
                {/* <NavItem>
                <Link
               to="/lecture-page"
                >
                  <i></i>
                  <p style={{fontSize:13,margin:10}}>Etkinlikler </p>
                </Link> </NavItem> */}
                <NavItem>
                <Link to="/about-page">
                
                  <i></i>
                  <p style={{fontSize:13,margin:10}}>E??itime Devam </p>
                </Link>
                </NavItem>
                <NavItem>
                  <Link to="/lecture-page" >
                 
                <Button
                  className="nav-link btn-neutral"
                  color="error"
                 
                  id="upgrade-to-pro"
                  target="_blank"
                >
                  <i ></i>
                  <p>Profile</p>
                </Button>
                 </Link>
              </NavItem>

              <Link to="/profile-page" >
              <NavItem>
                <Button
                  className="nav-link btn-neutral"
                  color="error"
                  id="upgrade-to-pro"
                  target="_blank"
                >
                  <i ></i>
                  <p>????k????</p>
                </Button>
              </NavItem>
              </Link>
              <NavItem>
                <NavLink
                  href="https://www.facebook.com/CreativeTim?ref=creativetim"
                  target="_blank"
                  id="facebook-tooltip"
                >
                  <i className="fab fa-facebook-square"></i>
                  <p className="d-lg-none d-xl-none">Facebook</p>
                </NavLink>
                <UncontrolledTooltip target="#facebook-tooltip">
                  Like us on Facebook
                </UncontrolledTooltip>
              </NavItem>
              <NavItem>
                <NavLink
                  href="https://www.instagram.com/CreativeTimOfficial?ref=creativetim"
                  target="_blank"
                  id="instagram-tooltip"
                >
                  <i className="fab fa-instagram"></i>
                  <p className="d-lg-none d-xl-none">Instagram</p>
                </NavLink>
                <UncontrolledTooltip target="#instagram-tooltip">
                  Follow us on Instagram
                </UncontrolledTooltip>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavbarAfterLogin;

