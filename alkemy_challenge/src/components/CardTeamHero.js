import React from "react";
import {
  Card,
  CardBody,
  CardLink,
  CardText,
  CardTitle,
  Button,
} from "reactstrap";

const CardTeamHero = ({ hero, setSelectedHeroes, selectedHeroes }) => {
  const handleRemoveHero = (hero, e) => {
    e.preventDefault();
    const filterHeroById = selectedHeroes.filter(
      (heroe) => heroe.id !== hero.id
    );
    setSelectedHeroes(filterHeroById);
  };

  return (
    <div className="card-hero">
      <Card>
        <CardBody>
          <CardTitle className="text-center card-heroe-name" tag="h6">{hero.name}</CardTitle>
        </CardBody>
        <img alt={hero.name} src={hero.image.url} width="100%" />
        <CardBody className="text-center">
          <CardText>{}</CardText>
          <CardLink onClick={(e) => handleRemoveHero(hero, e)} href="">
            <Button color="danger" outline>Eliminar</Button>
          </CardLink>
        </CardBody>
      </Card>
    </div>
  );
};

export default CardTeamHero;
