import React from "react";
import { Container, Row, Col } from "reactstrap";
import CardTeamHero from "./CardTeamHero";
import TeamInfo from "./TeamInfo";
import PowerStats from "./PowerStats";

const HeroesTeam = ({
  //selectedGoodHeroes,
  //setSelectedGoodHeroes,
  //selectedBadHeroes,
  //setSelectedBadHeroes,
  selectedHeroes,
  setSelectedHeroes,
}) => {
  // const RenderGoodHeroes = () => {};

  // const RenderBadHeroes = () => {};

  return (
    <Container className="heroes-team-container">
      {selectedHeroes.length > 0 ? (
        <>
          <Row>
            <Col>
              <TeamInfo />
            </Col>
            <Col>
              <PowerStats />
            </Col>
          </Row>
          <Row>
            {selectedHeroes.map((hero) => {
                return (
                  <Col key={hero.id}>
                    <CardTeamHero
                      hero={hero}
                      setSelectedHeroes={setSelectedHeroes}
                      selectedHeroes={selectedHeroes}
                    />
                  </Col>
                );
            })}
          </Row>
        </>
      ) : (
        <p className="no-heroes-text">No hay heroes enlistados</p>
      )}
    </Container>
  );
};
export default HeroesTeam;
