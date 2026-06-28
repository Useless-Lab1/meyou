document.addEventListener('DOMContentLoaded', function() {

    // Snow particles
    const snow = document.getElementById('snow');
    if (snow) {
      for (let i = 0; i < 22; i++) {
        const f = document.createElement('span');
        const size = 2 + Math.random() * 3.5;
        f.style.cssText = `position:absolute;border-radius:50%;background:rgba(255,255,255,${0.35+Math.random()*0.55});box-shadow:0 0 ${5+Math.random()*8}px rgba(180,220,255,0.85);width:${size}px;height:${size}px;left:${Math.random()*100}%;animation:snowfall ${7+Math.random()*9}s linear ${-Math.random()*12}s infinite;`;
        snow.appendChild(f);
      }
    }

    const DATA = window.MEYOU_DATA;
    // Shuffle aegyo
    for (let i = DATA.aegyo.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [DATA.aegyo[i], DATA.aegyo[j]] = [DATA.aegyo[j], DATA.aegyo[i]];
    }
    const state = { view: 'home', roastQuery: '', aegyoQuery: '' };

    function esc(v) {
      return String(v).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&#039;');
    }

    function route(view) {
      state.view = view;
      document.body.dataset.view = view;
      document.querySelectorAll('.section').forEach(s => s.classList.toggle('active', s.id === view));
      document.querySelectorAll('.tab').forEach(t => t.classList.toggle('active', t.dataset.route === view));
      history.replaceState(null, '', '#' + view);
      if (view === 'roast' || view === 'aegyo') renderGrid(view);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    function filteredItems(mode) {
      const q = (mode === 'roast' ? state.roastQuery : state.aegyoQuery).trim().toLowerCase();
      return DATA[mode].map((item, index) => ({ item, index })).filter(({ item }) =>
        !q || (item.keyword + ' ' + item.text).toLowerCase().includes(q)
      );
    }

    function renderGrid(mode) {
      const grid = document.getElementById(mode + 'Grid');
      const items = filteredItems(mode);
      if (!items.length) { grid.innerHTML = '<div class="empty">검색 결과 없음</div>'; return; }
      grid.innerHTML = items.map(({ item, index }) => {
        const no = String(index + 1).padStart(2, '0');
        const safeText = esc(item.text).replace(/\n/g, '<br>');
        return `<article class="card" data-mode="${mode}" data-index="${index}"><div class="card-header"><span class="card-num">${no}</span><span class="card-keyword">${esc(item.keyword)}</span><span class="card-lines"></span><span class="card-toggle">+</span></div><div class="card-body"><div class="card-body-inner"><p>${safeText}</p><button class="copy-btn" data-mode="${mode}" data-index="${index}">복사</button></div></div></article>`;
      }).join('');
      grid.querySelectorAll('.card').forEach(card => {
        card.addEventListener('click', () => {
          const wasOpen = card.classList.contains('open');
          grid.querySelectorAll('.card.open').forEach(c => c.classList.remove('open'));
          if (!wasOpen) card.classList.add('open');
        });
      });
      grid.querySelectorAll('.copy-btn').forEach(btn => {
        btn.addEventListener('click', e => {
          e.stopPropagation();
          const idx = Number(btn.dataset.index);
          const m = btn.dataset.mode;
          const item = DATA[m][idx];
          const text = `${String(idx+1).padStart(2,'0')}. ${item.keyword}\n\n${item.text}`;
          navigator.clipboard.writeText(text).catch(() => {
            const a = document.createElement('textarea');
            a.value = text; document.body.appendChild(a); a.select(); document.execCommand('copy'); a.remove();
          });
          btn.textContent = '복사됨!'; btn.classList.add('copied');
          showToast('복사 완료');
          setTimeout(() => { btn.textContent = '복사'; btn.classList.remove('copied'); }, 1500);
        });
      });
    }

    function showToast(msg) {
      const t = document.getElementById('toast');
      t.textContent = msg; t.classList.add('show');
      setTimeout(() => t.classList.remove('show'), 1300);
    }

    function closeAll(mode) {
      document.querySelectorAll('#' + mode + 'Grid .card.open').forEach(c => c.classList.remove('open'));
    }

    function randomOpen(mode) {
      const items = filteredItems(mode);
      if (!items.length) return;
      const picked = items[Math.floor(Math.random() * items.length)];
      renderGrid(mode);
      requestAnimationFrame(() => {
        const card = document.querySelector('#' + mode + 'Grid .card[data-index="' + picked.index + '"]');
        if (!card) return;
        closeAll(mode);
        card.classList.add('open');
        const rect = card.getBoundingClientRect();
        window.scrollTo({ top: Math.max(0, window.scrollY + rect.top - 80), behavior: 'smooth' });
      });
    }

    // Route clicks
    document.querySelectorAll('[data-route]').forEach(el => {
      el.addEventListener('click', e => {
        const v = el.dataset.route;
        if (v) { e.preventDefault(); route(v); }
      });
    });

    document.getElementById('roastSearch').addEventListener('input', e => { state.roastQuery = e.target.value; renderGrid('roast'); });
    document.getElementById('aegyoSearch').addEventListener('input', e => { state.aegyoQuery = e.target.value; renderGrid('aegyo'); });
    document.getElementById('roastRandom').addEventListener('click', () => randomOpen('roast'));
    document.getElementById('aegyoRandom').addEventListener('click', () => randomOpen('aegyo'));
    document.getElementById('roastClose').addEventListener('click', () => closeAll('roast'));
    document.getElementById('aegyoClose').addEventListener('click', () => closeAll('aegyo'));

    const start = (location.hash || '#home').replace('#', '');
    route(['home','roast','aegyo'].includes(start) ? start : 'home');
  
});