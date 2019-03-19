export const getRandom = () => {
  return fetch(`${process.env.API_URL}`)
    .then(res => res.json());
};
