import React, { useEffect, useState } from "react";
import { makeAverageStats, sumStats } from "../utils";

const PowerStats = ({ selectedHeroes }) => {
  const [avgPowerstats, setAvgPowerstats] = useState(null);
  

  useEffect(() => {
   
    if (selectedHeroes.length <= 6) {
      const powerstatsArr = []
      selectedHeroes.map(hero => {
        powerstatsArr.push(hero.powerstats)
      })
      setAvgPowerstats(makeAverageStats(selectedHeroes, sumStats(powerstatsArr)))
    }
  }, [selectedHeroes]);


  return (
    avgPowerstats &&
    <div>
      <p className="HeroesTeam__PowerStats-title">Powerstats</p>
      <p className="HeroesTeam__PowerStats-detail">Combat: {avgPowerstats.combat}%</p>
      <p className="HeroesTeam__PowerStats-detail">Intelligence: {avgPowerstats.intelligence}%</p>
      <p className="HeroesTeam__PowerStats-detail">Power: {avgPowerstats.power}%</p>
      <p className="HeroesTeam__PowerStats-detail">Durability: {avgPowerstats.durability}%</p>
      <p className="HeroesTeam__PowerStats-detail">Speed: {avgPowerstats.speed}%</p>
      <p className="HeroesTeam__PowerStats-detail">Strength: {avgPowerstats.strength}%</p>
    </div>
  );
};

export default PowerStats;
