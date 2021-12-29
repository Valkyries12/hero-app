import React from "react";
import { Link } from "react-router-dom";
import { Card, CardBody, CardLink, CardText, CardTitle } from "reactstrap";

const CardHeroe = ({ heroe, setSelectedGoodHeroes, selectedGoodHeroes, setSelectedBadHeroes, selectedBadHeroes }) => {

  const handleClick = (heroe) => {
    const alignment = heroe.biography.alignment;
    console.log("good heroes nº ", selectedGoodHeroes.length)
    alignment === "good" && selectedGoodHeroes.length <= 3
      ? setSelectedGoodHeroes(prevState => [...selectedGoodHeroes, heroe])
      : setSelectedBadHeroes(prevState => [...selectedBadHeroes, heroe])
  }

  return (
    <div>
      <Card>
        <CardBody>
          <CardTitle tag="h5">{heroe.name}</CardTitle>
        </CardBody>
        <img
          alt={heroe.name}
          src={heroe.image.url}
          width="100%"
        />
        <CardBody>
          <CardText>
            {

            }
          </CardText>
          <Link to={`/details/${heroe.id}`}>Detalles</Link>
          {/* <CardLink onClick={() => setSelectedHeroes(prevState => [...selectedHeroes, heroe])} href="#">Agregar Heroe</CardLink> */}
          <CardLink onClick={() => handleClick(heroe)} href="#">Agregar Heroe</CardLink>
        </CardBody>
      </Card>
    </div>
  );
};

export default CardHeroe;
