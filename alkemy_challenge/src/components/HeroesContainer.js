import React from "react";
import { Container, Row, Col } from "reactstrap";
import CardHeroe from "./CardHeroe";

const HeroesContainer = ({
  dataHeroes,
  selectedHeroes,
  setSelectedHeroes,
}) => {
  return (
    <Container className="heroes-team-container">
      <Row md="3">
        {dataHeroes
          ? dataHeroes.map((heroe) => {
              return (
                <Col key={heroe.id}>
                  <CardHeroe
                    heroe={heroe}
                    selectedHeroes={selectedHeroes}
                    setSelectedHeroes={setSelectedHeroes}
                  />
                </Col>
              );
            })
          : null}
      </Row>
    </Container>
  );
};

export default HeroesContainer;
