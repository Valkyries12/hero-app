import React from "react";
import { Container, Row, Col } from "reactstrap";
import CardHeroe from "./CardHeroe";

const HeroesContainer = ({ dataHeroes, setSelectedBadHeroes, selectedBadHeroes, setSelectedGoodHeroes, selectedGoodHeroes }) => {
  // console.log("datheroes ",dataHeroes);
  return (
    <Container className="heroes-team-container">
      <Row md="3">
        {dataHeroes ? dataHeroes.map((heroe) => {
          return (
            <Col key={heroe.id}>
              <CardHeroe  heroe={heroe} setSelectedGoodHeroes={setSelectedGoodHeroes} selectedGoodHeroes={selectedGoodHeroes} setSelectedBadHeroes={setSelectedBadHeroes} selectedBadHeroes={selectedBadHeroes}/>
            </Col>
          );
        }) : null}
      </Row>
    </Container>
  );
};

export default HeroesContainer;
