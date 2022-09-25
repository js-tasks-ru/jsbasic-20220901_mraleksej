function getMinMax(str) {
  // ваш код...
  const result = {};
  str.replace(/\S+/g, (n) => {
    n = +n;
    (!("min" in result) || result.min > n) && (result.min = n);
    (!("max" in result) || result.max < n) && (result.max = n);
  });
  return result;
}
