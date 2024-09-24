const flatten = function(arr) {
  let flattenedArr = [];
  for (const element of arr) {
    if (Array.isArray(element)) {
      for (const subElement of element) {
        flattenedArr.push(subElement);
      }
    } else {
      flattenedArr.push(element);
    }
  }
  return flattenedArr;
};

module.exports = flatten;