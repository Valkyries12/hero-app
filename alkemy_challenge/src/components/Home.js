import React, { useState } from "react";
import HeroesTeam from "./HeroesTeam";

import Search from "./Search";
import HeroesContainer from "./HeroesContainer";

const Home = () => {
  const [dataHeroes, setDataHeroes] = useState([]);
  const [selectedGoodHeroes, setSelectedGoodHeroes] = useState([]);
  const [selectedBadHeroes, setSelectedBadHeroes] = useState([]);
  
  

  return (
    <div>
      <HeroesTeam selectedGoodHeroes={selectedGoodHeroes} selectedBadHeroes={selectedBadHeroes} />
      <Search setDataHeroes={setDataHeroes} />
      <HeroesContainer
        dataHeroes={dataHeroes}
        setSelectedGoodHeroes={setSelectedGoodHeroes}
        selectedGoodHeroes={selectedGoodHeroes}
        setSelectedBadHeroes={setSelectedBadHeroes}
        selectedBadHeroes={selectedBadHeroes}
      />
    </div>
  );
};

export default Home;
