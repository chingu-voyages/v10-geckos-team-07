import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import SignUp from './SignUp'

function SignIn() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <p onClick={handleShow}>Log In</p>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Welcome to geckos-team-07!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Button
            variant="outline-secondary"
            size="lg"
            block
            onClick={handleClose}
          >
            Log in with Google
          </Button>
          <p className="horizon-line">OR</p>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group controlId="formBasicChecbox">
              <Form.Check type="checkbox" label="Remember me" />
            </Form.Group>
            <Button variant="warning" size="lg" block type="submit">
              Log in
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer> <p> Don’t have an account?<SignUp /></p></Modal.Footer>
      </Modal>
    </>
  );
}

export default SignIn;
