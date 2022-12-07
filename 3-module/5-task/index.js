function getMinMax(str) {
  let arr = str
    .split(' ')
    .filter(e => isFinite(e))
    .map(e => Number(e));

  return {
    min: Math.min(...arr),
    max: Math.max(...arr),
  };
}
