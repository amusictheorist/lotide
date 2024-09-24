const tail = function(arr) {
  let arrTail = arr
  if (arr.length <= 1) {
    return [];
  }
  return arrTail.slice(1);
};

module.exports = tail;