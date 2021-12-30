import React, { useState } from "react";
import HeroesTeam from "./HeroesTeam";

import Search from "./Search";
import HeroesContainer from "./HeroesContainer";

const Home = () => {
  const [dataHeroes, setDataHeroes] = useState([]);
  // const [selectedGoodHeroes, setSelectedGoodHeroes] = useState([]);
  // const [selectedBadHeroes, setSelectedBadHeroes] = useState([]);
  const [selectedHeroes, setSelectedHeroes] = useState([]);

  return (
    <div>
      <HeroesTeam
        // selectedGoodHeroes={selectedGoodHeroes}
        // setSelectedGoodHeroes={setSelectedGoodHeroes}
        // selectedBadHeroes={selectedBadHeroes}
        // setSelectedBadHeroes={setSelectedBadHeroes}
        selectedHeroes={selectedHeroes}
        setSelectedHeroes={setSelectedHeroes}
      />
      <Search setDataHeroes={setDataHeroes} />
      <HeroesContainer
        dataHeroes={dataHeroes}
        selectedHeroes={selectedHeroes}
        setSelectedHeroes={setSelectedHeroes}
        // setSelectedGoodHeroes={setSelectedGoodHeroes}
        // selectedGoodHeroes={selectedGoodHeroes}
        // setSelectedBadHeroes={setSelectedBadHeroes}
        // selectedBadHeroes={selectedBadHeroes}
      />
    </div>
  );
};

export default Home;
