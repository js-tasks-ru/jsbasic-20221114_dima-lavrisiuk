function toggleText() {
  const $ = (selector) => document.querySelector(selector);

  $('.toggle-text-button')
    .addEventListener('click', () => $('#text').toggleAttribute('hidden'));
}
