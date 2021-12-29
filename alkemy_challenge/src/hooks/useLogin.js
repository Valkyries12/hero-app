import { useState } from "react";
import axios from "axios";

const useLogin = (user, password) => {
  const [token, setToken] = useState(null);
  const [errorApi, setErrorApi] = useState(null);

  axios
    .post(
      `http://challenge-react.alkemy.org/?email=${user}&password=${password}`
    )
    .then(function (response) {
      if (response.statusText === "OK") {
        // console.log("todo ok")
        // return response.data.token;
        setToken(response.data.token);
      } else {
        // return response.error;
        setErrorApi(response.data.error);
      }
    })
    .catch(function (error) {
      console.log("impriminedo error ", error);
    //   return "Oops something went wrong. Please try again";
        setErrorApi("Oops something went wrong. Please try again");
    })
    .finally(() => {
        return { token, errorApi }
    }) 

    

    
};

export default useLogin;

// function getLoginAccess (user, password) {
//     return axios.post(
//       `http://challenge-react.alkemy.org/?email=${user}&password=${password}`
//     )
//     .then( function(response) {
//       if (response.statusText === "OK") {
//         // console.log("todo ok")
//         return response.data.token
//       } else {
//         return response.error
//       }
//     })
//     .catch(function (error) {
//       console.log("impriminedo error ",error)
//       return "Oops something went wrong. Please try again"
//     })
//   }
