(() => {
  const embeds = document.querySelectorAll('iframe[data-video-src]');

  embeds.forEach((iframe) => {
    const embedUrl = iframe.dataset.videoSrc;
    if (!embedUrl) return;

    if (window.location.protocol !== 'file:') {
      iframe.src = embedUrl;
      return;
    }

    const videoId = embedUrl.split('/embed/')[1]?.split(/[?&]/)[0];
    if (!videoId) return;

    const link = document.createElement('a');
    link.className = 'video-fallback';
    link.href = `https://youtu.be/${videoId}`;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    link.setAttribute('aria-label', `${iframe.title || '프로젝트 영상'} — YouTube에서 보기`);

    const thumbnail = document.createElement('img');
    thumbnail.src = `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`;
    thumbnail.alt = '';
    thumbnail.loading = 'lazy';

    const label = document.createElement('span');
    label.textContent = 'YouTube에서 영상 보기 \u2197';

    link.append(thumbnail, label);
    iframe.replaceWith(link);
  });
})();
