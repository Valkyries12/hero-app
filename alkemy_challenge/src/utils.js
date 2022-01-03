function hasToken() {
  return window.localStorage.getItem("token") ? true : false;
}

function removeToken() {
  window.localStorage.clear();
}

const sumStats = (stats) => {
  //devuelve la suma de los valores de las propiedades del obj
  const resultObj = createStatsObj(stats);

  stats.map((stat) => {
    for (let key in stat) {
      if (key === "height" || key === "weight") {
        const arrStat = stat[key][1].split("");
        const result = arrStat.filter(value => value == parseInt(value)).join("");
        resultObj[key] = parseInt(resultObj[key]) + parseInt(result)
      } else {
        if(!isNaN(stat[key])) {
          resultObj[key] =  parseInt(resultObj[key]) + parseInt(stat[key]);
        }
      }
    }
  });
  return resultObj;
};

const makeAverageStats = (statsArr, statsSumObj) => {
  // devuelve el promedio de los valores de cada propiedaad del obj
  const result = statsSumObj;
  for (let key in statsSumObj) {
    result[key] = Math.round(statsSumObj[key] / statsArr.length);
  }
  return result
};

const createStatsObj = (stats) => {
  //devuelve un objeto a partir de las propiedades de otro
  const statsObj = {};
  for (let key in stats[0]) {
    statsObj[key] = 0;
  }
  return statsObj;
};

export { hasToken, removeToken, sumStats, makeAverageStats, createStatsObj };
