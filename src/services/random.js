export const getRandom = () => {
  return fetch('https://backendrunb.herokuapp.com/random')
    .then(res => res.json());
};
