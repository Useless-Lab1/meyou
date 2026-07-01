// 다른 페이지 리소스를 백그라운드에서 미리 로드
(function () {
  const PAGES = {
    'index.html': {
      css: ['css/index.css'],
      js:  ['js/index.js'],
      imgs: [
        'assets/index/hero-main.png',
        'assets/index/card-ladder-preview.png',
        'assets/index/card-pinball-preview.png',
        'assets/index/card-reaction-preview.png',
      ],
    },
    'ladder.html': {
      css: ['css/ladder.css'],
      js:  ['js/ladder.js'],
      imgs: [
        'assets/ladder/ladder-bg.png',
        'assets/ladder/hero-character-scene.png',
        'assets/ladder/ladder-cover.png',
        'assets/ladder/meyou-center-halfbody.png',
      ],
    },
    'pinball.html': {
      css: ['css/pinball.css'],
      js:  ['js/pinball.js'],
      imgs: [
        'assets/pinball/cat-left.png',
        'assets/pinball/cat-right.png',
        'assets/pinball/pb-corner.png',
      ],
    },
    'reaction.html': {
      css: ['css/reaction.css'],
      js:  ['js/reaction.js'],
      imgs: [
        'assets/reaction/aegyo-hero.png',
        'assets/reaction/roast-hero.png',
      ],
    },
  };

  const loaded = new Set();

  function preload(page) {
    if (loaded.has(page)) return;
    loaded.add(page);
    const a = PAGES[page];
    if (!a) return;

    a.css.forEach(href => {
      const l = document.createElement('link');
      l.rel = 'prefetch'; l.as = 'style'; l.href = href;
      document.head.appendChild(l);
    });
    a.js.forEach(href => {
      const l = document.createElement('link');
      l.rel = 'prefetch'; l.as = 'script'; l.href = href;
      document.head.appendChild(l);
    });
    a.imgs.forEach(src => {
      const img = new Image();
      img.src = src;
    });
  }

  // 네비 링크 hover 시 즉시 로드
  document.addEventListener('mouseover', e => {
    const link = e.target.closest('a[href]');
    if (!link) return;
    const page = link.getAttribute('href').split('/').pop().split('?')[0];
    if (PAGES[page]) preload(page);
  });

  // 페이지 로드 후 유휴 시간에 나머지 페이지 백그라운드 로드
  const current = location.pathname.split('/').pop() || 'index.html';
  const idle = window.requestIdleCallback
    ? cb => requestIdleCallback(cb, { timeout: 3000 })
    : cb => setTimeout(cb, 2500);

  idle(() => {
    Object.keys(PAGES).forEach(page => {
      if (page !== current) preload(page);
    });
  });
})();
