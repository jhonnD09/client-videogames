const validate = (indication) => {
  const regex = /[a-zA-Z0-9\s]+$/;
  const errors = {};
  if (indication.name.length > 0 && !regex.test(indication.name)) {
    errors.name = "Invalid name";
  }
  if (indication.name === "") {
    errors.name = "fill in the name";
  }
  if (indication.rating > 5) {
    errors.rating = "Exceed rating score limit";
  }
  if (indication.rating < 0) {
    errors.rating = "The rating cannot be less than 0";
  }
  if (indication.description === "") {
    errors.description = "The description cannot be empty";
  }
  if (indication.background_image === "") {
    errors.background_image = "The image cannot be empty";
  }
  if (indication.released === "") {
    errors.released = "The released cannot be empty";
  }

  return errors;
};
export default validate;
