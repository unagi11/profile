(() => {
  const profile = document.querySelector('.hero-photo');
  if (!profile) return;

  const run = () => {
    const existing = document.querySelector('.easter-egg');
    if (existing) existing.remove();

    const character = document.createElement('img');
    character.src = 'assets/favicon.gif';
    character.alt = '';
    character.className = 'easter-egg';
    character.style.top = `${Math.random() * 50 + 25}%`;
    document.body.appendChild(character);
    requestAnimationFrame(() => character.classList.add('run'));
    character.addEventListener('animationend', () => character.remove(), { once: true });
  };

  profile.addEventListener('click', run);
  profile.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      run();
    }
  });
})();
