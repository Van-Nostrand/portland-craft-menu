// export default (imageName, img) => {
//   console.log(imageName);
//   import(
//     /* webpackMode: "lazy-once" */
//     `../assets/${imageName}`
//   )
//   .then(src => img.current.src = src.default)
//   .catch(err => console.error(err));
// }

const lazyLoadImage = (imageName, img) => {
  import(
    /* webpackMode: "lazy-once" */
    `../assets/${imageName}`
  )
  .then(src => img.src = src.default)
  .catch(err => console.error(err));
};

export default lazyLoadImage;
