import React, { useRef } from "react";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/common-section/CommonSection";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
const Register = () => {
  const signpNameRef = useRef();
  const signpEmailRef = useRef();
  const signupPasswordRef = useRef();
  const submitHandler = (e) => {
    e.preventDafault();
  };
  return (
    <Helmet title="Signup ">
      <CommonSection title="Signup" />
      <section>
        <Container>
          <Row>
            <Col lg="6" md="6" sm="12" className="m-auto text-center">
              <form className="form mb-5" onSubmit={submitHandler}>
                <div className="form__group">
                  <input
                    type="text"
                    placeholder="Full name"
                    ref={signpNameRef}
                  />
                </div>
                <div className="form__group">
                  <input type="email" placeholder="Email" ref={signpEmailRef} />
                </div>
                <div className="form__group">
                  <input
                    type="password"
                    placeholder="Password"
                    ref={signupPasswordRef}
                  />
                </div>
                <button className="addTOCart__btn">Sign Up</button>
              </form>
              <Link to={"/login"} className="text-decoration-none">
                Already have an account ? Login
              </Link>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Register;
