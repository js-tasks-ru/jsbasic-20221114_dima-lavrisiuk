function sumSalary(salaries) {
  let sum = 0;

  function isNumber(value) {
    return Number.isFinite(value) && typeof value === 'number';
  }

  for (const key in salaries) {
    if (isNumber(salaries[key])) {
      sum += salaries[key];
    }
  }

  return sum;
}
