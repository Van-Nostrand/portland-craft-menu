export default (imageName, img) => {
  import(
    /* webpackMode: "lazy-once" */
    `../assets/${imageName}`
  )
  .then(src => img.current.src = src.default)
  .catch(err => console.error(err));
}