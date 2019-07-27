import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import { Link } from "react-router-dom";

import SingUp from "./SignUp";
import SignIn from "./SignIn";


const handleOnChange = e => {
  //let search value = e.target.value
};

const handleOnClick = e => {
  //let e.target.value = "button value"
};

const Menu = () => {
  return (
    <>
      <Navbar bg="light" variant="light">
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Form inline>
          <FormControl
            type="text"
            placeholder="Search"
            className="mr-sm-2"
            onChange={e => handleOnChange(e)}
          />
          <Button variant="outline-info" onClick={e => handleOnClick()}>
            Search
          </Button>
        </Form>
        <Nav className="mr-auto">
          <Nav.Link> <Link to="/">Become a host</Link></Nav.Link>
          <Nav.Link> <Link to="/saved">Saved</Link></Nav.Link>
          <Nav.Link> <Link to="/trips/">Trips</Link></Nav.Link>
          <Nav.Link > <Link to="/messages/">Messages</Link></Nav.Link>
          <Nav.Link > <Link to="/help/">Help</Link></Nav.Link>
          <Nav.Link ><SingUp /></Nav.Link>
          <Nav.Link ><SignIn /> </Nav.Link>
        </Nav>

      </Navbar>
    </>
  );
};
export default Menu;
