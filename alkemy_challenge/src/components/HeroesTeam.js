import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import CardTeamHero from "./CardTeamHero";
import TeamInfo from "./TeamInfo";
import PowerStats from "./PowerStats";

const HeroesTeam = ({ selectedHeroes, setSelectedHeroes }) => {
  // const [powerStats, setPowerStats] = useState([]);

  // useEffect(() => {
  //   selectedHeroes.map((hero) => {
  //     if (powerStats.length < 3) {
  //       setPowerStats((prevState) => [...powerStats, hero.powerstats]);
  //     }
  //   });
  // }, [selectedHeroes]);

  return (
    <Container className="heroes-team-container">
      {selectedHeroes.length > 0 ? (
        <>
          <Row>
            <Col>
              <TeamInfo />
            </Col>
            <Col>
              {/* <PowerStats powerStats={powerStats}/> */}
              <PowerStats selectedHeroes={selectedHeroes}/>
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
