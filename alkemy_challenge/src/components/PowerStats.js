import React, { useEffect, useState } from "react";
import { makeAverageStats, sumStats } from "../utils";

const PowerStats = ({ /*powerStats,*/ selectedHeroes }) => {
  const [avgPowerstats, setAvgPowerstats] = useState(null);
  

  useEffect(() => {
   
    if (selectedHeroes.length <= 3) {
      const powerstatsArr = []
      selectedHeroes.map(hero => {
        powerstatsArr.push(hero.powerstats)
      })
      console.log("array powerstats es: ", powerstatsArr )
      setAvgPowerstats(makeAverageStats(selectedHeroes, sumStats(powerstatsArr)))
    }
  }, [selectedHeroes]);


  return (
    <div>
      <p className="HeroesTeam__PowerStats-title">Your Team</p>
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
