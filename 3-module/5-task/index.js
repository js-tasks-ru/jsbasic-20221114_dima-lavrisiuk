function getMinMax(str) {
  return str
    .split(' ')
    .filter(e => isFinite(e))
    .map(e => Number(e))
    .reduce((obj, e) => {
      return {
        max: (e > obj.max) ? e : obj.max,
        min: (e < obj.min) ? e : obj.min,
      };
    }, { min: Infinity, max: -Infinity });
}
