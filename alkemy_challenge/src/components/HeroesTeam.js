import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import CardTeamHero from "./CardTeamHero";
import TeamInfo from "./TeamInfo";
import PowerStats from "./PowerStats";

const HeroesTeam = ({ selectedHeroes, setSelectedHeroes }) => {
  
  return (
    <Container className="heroes-team-container">
      {selectedHeroes.length > 0 ? (
        <>
          <Row>
            <Col className="text-center">
              <TeamInfo selectedHeroes={selectedHeroes} />
            </Col>
            <Col className="text-center">
              <PowerStats selectedHeroes={selectedHeroes}/>
            </Col>
          </Row>
          <Row md="3" xs="2">
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
        <p className="no-heroes-text text-center">No hay heroes enlistados</p>
      )}
    </Container>
  );
};
export default HeroesTeam;
