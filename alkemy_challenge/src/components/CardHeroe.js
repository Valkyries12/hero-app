import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardBody,
  CardTitle,
  Button,
  Alert,
  Popover,
  PopoverHeader,
  PopoverBody,
} from "reactstrap";

const CardHeroe = ({ heroe, selectedHeroes, setSelectedHeroes }) => {
  const [isFull, setIsFull] = useState(null);
  const [popoverOpen, setPopoverOpen] = useState(false);

  const handleAddHero = (heroe, e) => {
    e.preventDefault();
    const alignmentCounter = countAlignment(selectedHeroes);
    renderTooManyHeroesWarning(heroe, alignmentCounter);

    if (selectedHeroes.length < 6 && isNotRepeated(heroe)) {
      // console.log(alignmentCounter)
      if (heroe.biography.alignment === "good" && alignmentCounter.good < 3) {
        setSelectedHeroes((prevState) => [...selectedHeroes, heroe]);
      }
      if (heroe.biography.alignment === "bad" && alignmentCounter.bad < 3) {
        setSelectedHeroes((prevState) => [...selectedHeroes, heroe]);
      }
    }
  };


  const renderTooManyHeroesWarning = (heroe, counterAlignment) => {
    if (heroe.biography.alignment === "good" && counterAlignment.good === 3) {
      setIsFull("Muchos heroes buenos");
    }
    if (heroe.biography.alignment === "bad" && counterAlignment.bad === 3) {
      setIsFull("Muchos heroes malos");
    }
    setTimeout(() => {
      setIsFull(null);
    }, 1500);
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
          <CardTitle className="text-center card-heroe-name" tag="h6">
            {heroe.name}
          </CardTitle>
        </CardBody>
        <img alt={heroe.name} src={heroe.image.url} width="100%" />
        <CardBody className="cardbody">
          {isFull && <Alert color="danger">{isFull}</Alert>}
          <div className="button-container">
            <Link to={`/details/${heroe.id}`}>
              <Button color="primary" outline>
                Detalles
              </Button>
            </Link>
            <Button
              color="success"
              outline
              onClick={(e) => handleAddHero(heroe, e)}
            >
              Agregar
            </Button>
          </div>
        </CardBody>
      </Card>
      
    </div>
  );
};

export default CardHeroe;
