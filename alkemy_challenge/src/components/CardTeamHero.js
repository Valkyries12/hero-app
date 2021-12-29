import React from "react";
// import { Link } from "react-router-dom";
import { Card, CardBody, CardLink, CardText, CardTitle } from "reactstrap";

const CardTeamHero = ({ hero }) => {
  return (
    <div className="card-team-hero">
      <Card>
        <CardBody>
          <CardTitle tag="h5">{hero.name}</CardTitle>
        </CardBody>
        <img
          alt={hero.name}
          src={hero.image.url}
          width="100%"
        />
        <CardBody>
          <CardText>
            {

            }
          </CardText>
          <CardLink href="#">Eliminar Heroe</CardLink>
        </CardBody>
      </Card>
    </div>
  );
};

export default CardTeamHero;