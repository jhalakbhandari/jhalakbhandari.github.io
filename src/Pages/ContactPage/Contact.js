import { Container, Row, Col } from "react-bootstrap";
import React from "react";
import { contactConfig } from "../../content-config.js";
import Swal from "sweetalert2";
import emailjs from "emailjs-com";
import Layout from "../../Layout/Layout.js";
function Contact() {
  const SERVICE_ID = "service_b05lmlr";
  const TEMPLATE_ID = "template_edrnvws";
  const USER_ID = "qTQ_rS5PVsCpuPrek";
  const handleOnSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID).then(
      (result) => {
        console.log(result);
        Swal.fire({
          icon: "success",
          title: "Message Sent Successfully",
        });
      },
      (error) => {
        console.log(error.text);
        Swal.fire({
          icon: "error",
          title: "Ooops,something went wrong.",
          text: error.text,
        });
      }
    );
    e.target.reset();
  };
  return (
    <Layout>
      <Container>
        <Row className="mb-5 mt-3 ">
          <Col lg="8">
            <h1 className="display-4 mb-4">Contact Me</h1>
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="5" className="mb-5">
            <h3 className="color_sec py-4">Get in touch</h3>
            <address>
              <strong>Email: bhandari.jhalak2018@gmail.com</strong>
              <br />
              <br />
              <p>
                <strong>Phone: +91-9315999541</strong>
              </p>
            </address>
            <p>{contactConfig.description}</p>
          </Col>
          <Col lg="7" className="d-flex align-items-center">
            <form
              className="contact_form w-100 pb-56"
              id="myForm"
              onSubmit={handleOnSubmit}
            >
              <Row className="pb-4">
                <Col lg="6" className="form-group pb-4">
                  <input
                    className="form-control"
                    id="user_name"
                    name="user_name"
                    placeholder="name"
                    type="text"
                  ></input>
                </Col>
                <Col lg="6" className="form-group ">
                  <input
                    className="form-control rounded-0"
                    id="user_email"
                    name="user_email"
                    placeholder="Email"
                    type="email"
                  ></input>
                </Col>
              </Row>
              <textarea
                className="form-control rounded-0"
                id="message"
                name="message"
                placeholder="Message"
                rows="5"
              ></textarea>
              <br />
              <Row lg="12" className="form-group pl-2 w-25">
                <button
                  className="btn ac-btn bg-black text-white "
                  type="submit"
                >
                  Send
                </button>
              </Row>
            </form>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
}

export default Contact;
