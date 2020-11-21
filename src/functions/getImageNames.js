const getImageNames = () => {
  const r = require.context('../assets', false, /\.(jpg|png)$/);

  const importAll = (r) => r.keys().map(file => file.match(/[^\/]+$/)[0]);

  return importAll(r);
}

export default getImageNames;