import React from "react";
import { Container, Row, Col } from "reactstrap";
import CardTeamHero from "./CardTeamHero";
import TeamInfo from "./TeamInfo";
import PowerStats from "./PowerStats";

const HeroesTeam = ({ selectedGoodHeroes, selectedBadHeroes }) => {
  return (
    <Container className="heroes-team-container">
      {selectedGoodHeroes.length > 0 || selectedBadHeroes.length > 0 ? (
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
            {selectedGoodHeroes.map((hero) => {
              console.log("dentro de heroe team ", hero);
              return (
                <Col key={hero.id}>
                  <CardTeamHero hero={hero} />
                </Col>
              );
            })}
          </Row>
          <Row>
            {selectedBadHeroes.map((hero) => {
              console.log("dentro de heroe team ", hero);
              return (
                <Col key={hero.id}>
                  <CardTeamHero hero={hero} />
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
