import React from "react";
import { Container, Row, Col } from "reactstrap";
import CardHeroe from "./CardHeroe";

const HeroesContainer = ({
  dataHeroes,
  setSelectedBadHeroes,
  selectedBadHeroes,
  setSelectedGoodHeroes,
  selectedHeroes,
  setSelectedHeroes,
}) => {
  // console.log("datheroes ",dataHeroes);
  return (
    <Container className="heroes-team-container">
      <Row md="3">
        {dataHeroes
          ? dataHeroes.map((heroe) => {
              return (
                <Col key={heroe.id}>
                  {/* <CardHeroe  heroe={heroe} setSelectedGoodHeroes={setSelectedGoodHeroes} selectedGoodHeroes={selectedGoodHeroes} setSelectedBadHeroes={setSelectedBadHeroes} selectedBadHeroes={selectedBadHeroes}/> */}
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
