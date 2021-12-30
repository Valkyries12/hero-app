import React, { useState } from "react";
import HeroesTeam from "./HeroesTeam";

import Search from "./Search";
import HeroesContainer from "./HeroesContainer";

const Home = () => {
  const [dataHeroes, setDataHeroes] = useState([]);
  const [selectedHeroes, setSelectedHeroes] = useState([]);

  return (
    <div>
      <HeroesTeam
        selectedHeroes={selectedHeroes}
        setSelectedHeroes={setSelectedHeroes}
      />
      <Search setDataHeroes={setDataHeroes} />
      <HeroesContainer
        dataHeroes={dataHeroes}
        selectedHeroes={selectedHeroes}
        setSelectedHeroes={setSelectedHeroes}
      />
    </div>
  );
};

export default Home;
