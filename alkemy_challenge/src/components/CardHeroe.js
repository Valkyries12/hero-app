import React from "react";
import { Link } from "react-router-dom";
import { Card, CardBody, CardLink, CardText, CardTitle } from "reactstrap";

const CardHeroe = ({
  heroe,
  selectedHeroes,
  setSelectedHeroes
}) => {
  const handleAddHero = (heroe) => {
    if(selectedHeroes.length < 6) {
      const alignmentCounter = countAlignment(selectedHeroes);
      console.log(alignmentCounter)
      if(heroe.biography.alignment === "good" && alignmentCounter.good < 3) {
        setSelectedHeroes(prevState => [...selectedHeroes, heroe]);
      }
      if(heroe.biography.alignment === "bad" && alignmentCounter.bad < 3) {
        setSelectedHeroes(prevState => [...selectedHeroes, heroe]);
      }
    }
  };

  const countAlignment = (heroes) => {
    let counterGood = 0;
    let counterBad = 0;
    heroes.map(hero => {
      if(hero.biography.alignment === "good") {
        counterGood += 1;
      }
      if(hero.biography.alignment === "bad") {
        counterBad += 1;
      }
    })

    return {
      good: counterGood,
      bad: counterBad
    }
  }

  return (
    <div>
      <Card>
        <CardBody>
          <CardTitle tag="h5">{heroe.name}</CardTitle>
        </CardBody>
        <img alt={heroe.name} src={heroe.image.url} width="100%" />
        <CardBody>
          <CardText>{}</CardText>
          <Link to={`/details/${heroe.id}`}>Detalles</Link>
          {/* <CardLink onClick={() => setSelectedHeroes(prevState => [...selectedHeroes, heroe])} href="#">Agregar Heroe</CardLink> */}
          <CardLink onClick={() => handleAddHero(heroe)} href="#">
            Agregar Heroe
          </CardLink>
        </CardBody>
      </Card>
    </div>
  );
};

export default CardHeroe;
