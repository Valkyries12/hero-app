import React from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardBody,
  CardLink,
  CardText,
  CardTitle,
  Button,
} from "reactstrap";

const CardHeroe = ({ heroe, selectedHeroes, setSelectedHeroes }) => {
  const handleAddHero = (heroe, e) => {
    e.preventDefault();
    if (selectedHeroes.length < 6 && isNotRepeated(heroe)) {
      const alignmentCounter = countAlignment(selectedHeroes);
      // console.log(alignmentCounter)
      if (heroe.biography.alignment === "good" && alignmentCounter.good < 3) {
        setSelectedHeroes((prevState) => [...selectedHeroes, heroe]);
      }
      if (heroe.biography.alignment === "bad" && alignmentCounter.bad < 3) {
        setSelectedHeroes((prevState) => [...selectedHeroes, heroe]);
      }
    }
  };

  const isNotRepeated = (heroe) => {
    let aux = true;
    selectedHeroes.map((hero) => {
      if (hero.id === heroe.id) {
        aux = false;
      }
    });
    return aux;
  };

  const countAlignment = (heroes) => {
    let counterGood = 0;
    let counterBad = 0;
    heroes.map((hero) => {
      if (hero.biography.alignment === "good") {
        counterGood += 1;
      }
      if (hero.biography.alignment === "bad") {
        counterBad += 1;
      }
    });

    return {
      good: counterGood,
      bad: counterBad,
    };
  };

  return (
    <div className="card-hero">
      <Card>
        <CardBody>
          <CardTitle className="text-center" tag="h6">{heroe.name}</CardTitle>
        </CardBody>
        <img alt={heroe.name} src={heroe.image.url} width="100%" />
        <CardBody className="cardbody">
          {/* <CardText>{}</CardText> */}
          <Link to={`/details/${heroe.id}`}>
            <Button color="primary" outline>Detalles</Button>
          </Link>
          <Button color="success" outline onClick={(e) => handleAddHero(heroe, e)}>
            Agregar
          </Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default CardHeroe;
