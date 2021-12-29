function hasToken() {
//   console.log(window.localStorage.getItem("token") ? true : false);
  return window.localStorage.getItem("token") ? true : false;
}

function removeToken() {
  window.localStorage.clear();
}

export { hasToken, removeToken };
