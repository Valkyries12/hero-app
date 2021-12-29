const axios = require("axios");

function getHeroeInfo (name) {
  const key = "996194767599076";
    return axios.get(
      `https://www.superheroapi.com/api.php/${key}/search/${name}`
    )
    .then( function(response) {
      // console.log(response)
      return response;
    })
    .catch(function (error) {
      console.log(error)
    })
  
}

function getHeroeInfoById (id) {
  const key = "996194767599076";
    return axios.get(
      `https://www.superheroapi.com/api.php/${key}/${id}`
    )
    .then( function(response) {
      // console.log(response)
      return response;
    })
    .catch(function (error) {
      console.log(error)
    })
  
}

function getLoginAccess (user, password) {
    return axios.post(
      `http://challenge-react.alkemy.org/?email=${user}&password=${password}`
    )
    .then( function(response) {
      if (response.statusText === "OK") {
        // console.log("todo ok")
        return response.data.token
      } 
    })
    .catch(function (error) {
      console.log("impriminedo error ",error)
      const errorCode = error.response.status
      const msj = errorCode === 401 ? "Error: invalid username or password" : "Error something went wrong. Please try again"
      return msj
    })
  }

// const getHeroeInfo = async () => {
//    const key = "996194767599076";
//    try {
//      const response = await axios.get(`https://www.superheroapi.com/api.php/${key}/search/batman`)
//     //  console.log(response)
//      return response
//    } catch (error) {
//      console.log(error)
//    }

// }

export { getHeroeInfo, getLoginAccess, getHeroeInfoById };
