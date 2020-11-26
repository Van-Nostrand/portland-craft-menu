export default (imageName, img) => {
  import(
    /* webpackMode: "lazy" */
    `../assets/${imageName}`
  )
  .then(src => img.src = src.default)
  .catch(err => console.error(err));
}