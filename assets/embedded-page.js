(() => {
  if (new URLSearchParams(window.location.search).has('embed')) {
    document.body.classList.add('is-embedded');
  }
})();
