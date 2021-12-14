const REGULAR_EXPRESSIONS = {
  name: /^([a-zA-Z]+\s?){2}?$/,
  email: /^[a-zA-Z0-9._-]+@[a-zA-z0-9._-]+\.[a-zA-Z]+$/,
  phoneNumber:
    /^(\+\d{2})?[\s\-]?(\d{3})[\s\-]?(\d{2,3})[\s\-]?(\d{2})[\s\-]?(\d{2})$/,
};

export { REGULAR_EXPRESSIONS };
