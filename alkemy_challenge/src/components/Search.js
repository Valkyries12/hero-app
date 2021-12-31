import React, { useState } from "react";
import {
  Row,
  Col,
  Container,
  Form,
  FormGroup,
  Input,
  Button,
} from "reactstrap";
import { getHeroeInfo } from "../services/apiCall";

const Search = ({ setDataHeroes }) => {
    const [heroeName, setHeroeName] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const handleChange = (e) => {
        setHeroeName(e.target.value);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrorMessage("");
        const heroes = await getHeroeInfo(heroeName);
        if(heroes.data.error) {
            setErrorMessage(heroes.data.error);
        }
        setDataHeroes(heroes.data.results);
        
    }

  return (
    <Container>
      <Form>
        <Row>
          <Col md="4">
            <FormGroup>
              <Input
                id="search"
                name="search"
                placeholder="Buscar heroe"
                type="search"
                onChange={(e) => handleChange(e)}
                value={heroeName}
              />
            </FormGroup>
          </Col>
          <Col>
            <Button type="submit" color="primary" onClick={(e) => handleSubmit(e)}>Buscar</Button>
          </Col>
        </Row>
        { errorMessage && <p className="error">No se encontró el heroe solicitado</p>}
      </Form>
    </Container>
  );
};

export default Search