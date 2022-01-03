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
      console.log("array stats es: ", statsArr )
      setAvgStats(makeAverageStats(selectedHeroes, sumStats(statsArr)))
    }
  }, [selectedHeroes]);
  return ( avgStats &&
    <div>
      <p className="HeroesTeam__TeamInfo-title">Your Team</p>
      <p className="HeroesTeam__TeamInfo-detail">
        Team Weight Average: {avgStats.weight[1]} kg
      </p>
      <p className="HeroesTeam__TeamInfo-detail">
        Team height Average: {avgStats.height[1]} cm
      </p>
    </div>
  );
};

export default TeamInfo;
