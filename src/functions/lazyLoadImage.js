const lazyLoadImage = (imageName, img) => {
  console.log("IMAGENAME");
  console.log(imageName);
  import(
    /* webpackMode: "lazy-once" */
    `../assets/${imageName}`
  )
  .then(src => img.src = src.default)
  .catch(err => console.error(err));
};

export default lazyLoadImage;