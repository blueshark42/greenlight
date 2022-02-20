import React from "react";
import { Form, Button } from "react-bootstrap";

import Footer from "../Components/Footer";
import Header from "../Components/Header";
import TextField from "../Components/TextField";

function Contact() {
  return (
    <>
      <Header />

      <TextField title="Contact"></TextField>

      <Form style={{ margin: "0 30vw" }}>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="john.doe@email.com" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Your message</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>

        <Form.Group controlId="formFileMultiple" className="mb-3">
          <Form.Label>
            <span style={{ fontStyle: "italic" }}>Optional:</span> Upload
            relevant files
          </Form.Label>
          <Form.Control type="file" multiple />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      <Footer />
    </>
  );
}

export default Contact;
