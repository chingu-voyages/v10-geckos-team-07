import React,  { useState, render } from "react";
import { Modal, Button } from "react-bootstrap";

function SignUp() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <p onClick={handleShow}>
        Sign up
      </p>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Welcome to geckos-team-07!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Button variant="outline-secondary" size="lg" block onClick={handleClose}>
            Sign up with Google
          </Button>
          <p className="horizon-line">OR</p>
          <Button variant="warning" size="lg" block onClick={handleClose}>
            Sign up with e-mail
          </Button>
          </Modal.Body>
        <Modal.Footer>
        Already have an  account? Log in
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default SignUp;
