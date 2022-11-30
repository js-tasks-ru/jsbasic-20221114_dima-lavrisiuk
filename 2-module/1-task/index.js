function sumSalary(salaries) {
  let sum = 0;

  const isNumber = value => Number.isFinite(value);

  for (const key in salaries) {
    if (isNumber(salaries[key])) {
      sum += salaries[key];
    }
  }

  return sum;
}
