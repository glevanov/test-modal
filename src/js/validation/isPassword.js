export default (input) => {
  if (typeof input !== 'string') {
    return false;
  }
  return input.length >= 6;
};
