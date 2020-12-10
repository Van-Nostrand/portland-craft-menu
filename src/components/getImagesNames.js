const getImagesNames = () => {
  const r = require.context('../assets', false, /\.jpg$/);

  //return an array list of filenames (with extension)
  const importAll = (r) => r.keys().map(file => file.match(/[^\/]+$/)[0]);

  return importAll(r);
}

export default getImagesNames;