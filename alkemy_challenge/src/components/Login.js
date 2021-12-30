import React, { useState } from "react";
import {
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  Container,
  Row,
  Col,
} from "reactstrap";
import { useFormik } from "formik";
import { getLoginAccess } from "../services/apiCall";
import { hasToken } from "../utils";

const initialValues = {
  email: "",
  password: "",
};


const validate = (values) => {
  let errors = {};

  if (!values.password) {
    errors.password = "Required";
  }

  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email format";
  }

  return errors;
};

const Login = ({ setIsLogged }) => {
  const [errorMsj, setErrorMsj] = useState(null);

  const formik = useFormik({
    initialValues,
    validate,
    onSubmit: async () => {
      const token = await getLoginAccess(formik.values.email, formik.values.password);
      if (!token.includes("Error")) {
        window.localStorage.setItem("token", token);
        setIsLogged(hasToken());
        setErrorMsj(null);
      }
      setErrorMsj(token);
    },
  });


  return (
    <Container>
      <Form onSubmit={formik.handleSubmit}>
        <Row>
          <Col md="4">
            <FormGroup>
              <Label for="email">Email</Label>
              <Input
                id="email"
                name="email"
                placeholder="Ingresa tu email"
                type="email"
                onChange={formik.handleChange}
                value={formik.values.email}
                onBlur={formik.handleBlur}
              />
              {formik.touched.email && formik.errors.email ? (
                <div className="error">{formik.errors.email}</div>
              ) : null}
            </FormGroup>
          </Col>
        </Row>

        <Row>
          <Col md="4">
            <FormGroup>
              <Label for="password">Password</Label>
              <Input
                id="password"
                name="password"
                placeholder="Ingresa tu password"
                type="password"
                onChange={formik.handleChange}
                value={formik.password}
                onBlur={formik.handleBlur}
              />
              {formik.touched.password && formik.errors.password ? (
                <div className="error">{formik.errors.password}</div>
              ) : null}
            </FormGroup>
          </Col>
        </Row>

        <Row>
          <Col>
            <Button type="submit">Submit</Button>
          </Col>
          {errorMsj && <div className="error">{errorMsj}</div>}
        </Row>
      </Form>
    </Container>
  );
};

export default Login;
