import React from "react";

const PowerStats = ({ powerStats }) => {
  const makeAverage = (stats) => {
    //hacer generico como para que se utilice tanto con powerstats como con peso y altura. Que devuelva un objeto dependiendo la cantidad de cosas enviadas?
  }

  return (
    <div>
      <p className="HeroesTeam__PowerStats-title">Your Team</p>
      <p className="HeroesTeam__PowerStats-detail">
        Combat: 170%
      </p>
      <p className="HeroesTeam__PowerStats-detail">
        Inteligence: 162%
      </p>
      <p className="HeroesTeam__PowerStats-detail">
        Power: 92%
      </p>
      <p className="HeroesTeam__PowerStats-detail">
        Durability: 87%
      </p>
      <p className="HeroesTeam__PowerStats-detail">
        Speed: 82%
      </p>
      <p className="HeroesTeam__PowerStats-detail">
        Strength: 81%
      </p>
    </div>
  );
};

export default PowerStats;
