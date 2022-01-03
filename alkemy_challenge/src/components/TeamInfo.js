import React, {useState, useEffect} from "react";
import { makeAverageStats, sumStats } from "../utils";

const TeamInfo = ({ selectedHeroes }) => {
  const [avgStats, setAvgStats] = useState(null);

  useEffect(() => {
   
    if (selectedHeroes.length <= 6) {
      const statsArr = []
      selectedHeroes.map(hero => {
        statsArr.push(hero.appearance)
      })
      setAvgStats(makeAverageStats(selectedHeroes, sumStats(statsArr)))
    }
  }, [selectedHeroes]);
  return ( avgStats &&
    <div>
      <p className="HeroesTeam__TeamInfo-title">Your Team</p>
      <p className="HeroesTeam__TeamInfo-detail">
        Team Weight Average: {avgStats.weight} kg
      </p>
      <p className="HeroesTeam__TeamInfo-detail">
        Team height Average: {avgStats.height} cm
      </p>
    </div>
  );
};

export default TeamInfo;
