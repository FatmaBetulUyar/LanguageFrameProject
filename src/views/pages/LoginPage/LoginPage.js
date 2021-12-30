import React from "react";

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Col,
} from "reactstrap";

// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import TransparentFooter from "components/Footers/TransparentFooter.js";
import SignUp from "views/index-sections/SignUp";

function LoginPage() {


  return (
    <div>
       <ExamplesNavbar />
         <SignUp></SignUp>
    </div>
    
  );
}

export default LoginPage;
