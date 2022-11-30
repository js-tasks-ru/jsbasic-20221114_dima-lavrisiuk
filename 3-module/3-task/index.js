function camelize(str) {
  return str
    .split('-')
    .map((e, i) => i ? e[0].toUpperCase() + e.slice(1) : e)
    .join('');
}
