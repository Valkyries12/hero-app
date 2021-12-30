import React from "react";
import { Card, CardBody, CardLink, CardText, CardTitle } from "reactstrap";

const CardTeamHero = ({ hero, setSelectedHeroes, selectedHeroes }) => {
  const handleRemoveHero = (hero) => {
    const filterHeroById = selectedHeroes.filter(heroe =>
      heroe.id !== hero.id
    )
    setSelectedHeroes(filterHeroById);
  }

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
          <CardLink onClick={() => handleRemoveHero(hero)} href="#">Eliminar Heroe</CardLink>
        </CardBody>
      </Card>
    </div>
  );
};

export default CardTeamHero;