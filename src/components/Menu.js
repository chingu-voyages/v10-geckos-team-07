import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';

const handleOnChange = e => {
  //let search value = e.target.value
};

const handleOnClick = e => {
  //let e.target.value = "button value"
};

const Menu = () => {
  return (
    <>
      <Navbar bg='light' variant='light'>
        <Navbar.Brand href='#home'>Navbar</Navbar.Brand>
        <Form inline>
          <FormControl
            type='text'
            placeholder='Search'
            className='mr-sm-2'
            onChange={e => handleOnChange(e)}
          />
          <Button variant='outline-info' onClick={e => handleOnClick()}>
            Search
          </Button>
        </Form>
        <Nav className='mr-auto'>
          <Nav.Link href='#home'>Become a Host</Nav.Link>
          <Nav.Link href='#saved'>Saved</Nav.Link>
          <Nav.Link href='#trips'>Trips</Nav.Link>
          <Nav.Link href='#messages'>Messages</Nav.Link>
          <Nav.Link href='#help'>Help</Nav.Link>
        </Nav>
      </Navbar>
    </>
  );
};
export default Menu;
