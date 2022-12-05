function toggleText() {
  const $ = e => document.querySelector(e);

  $('.toggle-text-button')
    .addEventListener('click', () => $('#text').toggleAttribute('hidden'));
}
