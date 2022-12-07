function hideSelf() {
  document
    .querySelector('.hide-self-button')
    .addEventListener('click', (event) => {
      event.currentTarget.hidden = true;
  }, { once: true });
}
