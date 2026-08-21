(() => {
  const dialog = document.querySelector('[data-project-dialog]');
  if (!dialog || typeof dialog.showModal !== 'function') return;

  const frame = dialog.querySelector('[data-project-frame]');
  const label = dialog.querySelector('[data-project-label]');
  const openLink = dialog.querySelector('[data-project-open]');
  const closeButton = dialog.querySelector('[data-project-close]');

  const close = () => {
    dialog.close();
    frame.removeAttribute('src');
    document.body.classList.remove('project-modal-open');
  };

  document.addEventListener('click', (event) => {
    const link = event.target.closest('a[href="resume.html"], a[href^="project-"][href$=".html"]');
    if (!link || event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;

    if (window.matchMedia('(max-width: 720px)').matches) return;

    event.preventDefault();
    const url = new URL(link.href, window.location.href);
    url.searchParams.set('embed', '1');
    frame.src = url.href;
    label.textContent = link.getAttribute('aria-label') || link.textContent.trim();
    openLink.href = link.href;
    dialog.showModal();
    document.body.classList.add('project-modal-open');
  });

  closeButton.addEventListener('click', close);
  dialog.addEventListener('click', (event) => {
    if (event.target === dialog) close();
  });
  dialog.addEventListener('cancel', (event) => {
    event.preventDefault();
    close();
  });
})();
