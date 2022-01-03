function hasToken() {
  //   console.log(window.localStorage.getItem("token") ? true : false);
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
      if(!isNaN(stat[key])) {
        resultObj[key] =  parseInt(resultObj[key]) + parseInt(stat[key]);
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
  console.log("el promedio de statsSumObj es: ", result);
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
