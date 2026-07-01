// ── 월말정산 로직 ──

const SECTIONS = ['s-intro','s-watch','s-chat','s-badword','s-ban','s-donation'];
let currentIdx = 0;

/* ── 섹션 이동 ── */
function goTo(idx) {
  document.querySelectorAll('.s-section').forEach(el => el.classList.remove('active'));
  document.querySelectorAll('.s-nav-dot').forEach((d, i) => d.classList.toggle('active', i === idx));
  const el = document.getElementById(SECTIONS[idx]);
  if (el) el.classList.add('active');
  currentIdx = idx;
  if (idx === 1) renderList('watch');
  if (idx === 2) renderList('chat');
  if (idx === 3) renderQuiz('badword');
  if (idx === 4) renderQuiz('ban');
  if (idx === 5) initDonation();
}

/* ── 유틸 ── */
function fmt(min) {
  const h = Math.floor(min / 60), m = min % 60;
  return h > 0 ? `${h}시간 ${m}분` : `${m}분`;
}
function rankBadge(cur, prev) {
  if (!prev) return '';
  const d = prev - cur;
  if (d > 0) return `<span class="s-rank-badge up">▲${d}</span>`;
  if (d < 0) return `<span class="s-rank-badge down">▼${Math.abs(d)}</span>`;
  return `<span class="s-rank-badge same">─</span>`;
}
function gifEl(src, cls, alt) {
  return `<img class="${cls}" src="${src}" alt="${alt}" onerror="this.style.background='#2a1c44';this.removeAttribute('src')">`;
}

/* ════════════════════════
   리스트 렌더 (참여시간·채팅수)
════════════════════════ */
function renderList(type) {
  const isWatch = type === 'watch';
  const listEl = document.getElementById(`${type}-list`);
  if (listEl.dataset.done) return;
  listEl.dataset.done = '1';

  const items = isWatch ? SETTLEMENT_DATA.watchTime : SETTLEMENT_DATA.chatCount;
  const hl    = new Set(isWatch ? SETTLEMENT_DATA.watchTimeHighlight : SETTLEMENT_DATA.chatCountHighlight);

  listEl.innerHTML = items.map((p, i) => {
    const rank = i + 1;
    const rc   = rank <= 3 ? `r${rank}` : '';
    const val  = isWatch ? fmt(p.time) : `${p.count.toLocaleString()}회`;
    return `
    <div class="s-list-item ${hl.has(p.name) ? 'hl' : ''}" style="animation-delay:${i*70}ms">
      <span class="s-rank-num ${rc}">${rank}</span>
      ${gifEl(p.gif, 's-list-gif', p.name)}
      <div class="s-list-info">
        <div class="s-list-name">${p.name}</div>
        <div class="s-list-value">${val}</div>
      </div>
      ${rankBadge(rank, p.prevRank)}
    </div>`;
  }).join('');
}

/* ════════════════════════
   퀴즈 렌더 (금칙어·채팅금지)
   — 3등부터 카드 순서 표시
   — 이름·횟수 모두 가려놓고 클릭 공개
════════════════════════ */
function renderQuiz(type) {
  const wrapId = `${type}-quiz`;
  const wrap   = document.getElementById(wrapId);
  if (wrap.dataset.done) return;
  wrap.dataset.done = '1';

  const data = type === 'badword' ? SETTLEMENT_DATA.badWord : SETTLEMENT_DATA.chatBan;
  // 3→2→1 순서로 표시
  const sorted = [...data].sort((a, b) => b.rank - a.rank);

  wrap.innerHTML = sorted.map((p, i) => {
    const isTop = p.rank === 1;
    return `
    <div class="s-quiz-card ${isTop ? 'top-card' : ''}" id="${wrapId}-card-${p.rank}"
         style="transition-delay:${i*180}ms" data-name="${p.name}" data-count="${p.count}" data-gif="${p.gif}">
      ${gifEl(p.gif, 's-quiz-gif masked', p.name)}
      <div class="s-quiz-meta">
        <div class="s-quiz-rank-label">${p.rank}등</div>
        <div class="s-quiz-name hidden" id="${wrapId}-name-${p.rank}">? ? ? ? ?</div>
        <div class="s-quiz-count hidden" id="${wrapId}-count-${p.rank}">? ?회</div>
      </div>
      <button class="s-reveal-btn" onclick="revealCard('${wrapId}',${p.rank})">공개 ✦</button>
    </div>`;
  }).join('');

  requestAnimationFrame(() => {
    wrap.querySelectorAll('.s-quiz-card').forEach(c => c.classList.add('vis'));
  });
}

function revealCard(wrapId, rank) {
  const card     = document.getElementById(`${wrapId}-card-${rank}`);
  const nameEl   = document.getElementById(`${wrapId}-name-${rank}`);
  const countEl  = document.getElementById(`${wrapId}-count-${rank}`);
  const gifEl_   = card.querySelector('.s-quiz-gif');
  const btn      = card.querySelector('.s-reveal-btn');
  const isTop    = rank === 1;

  const name  = card.dataset.name;
  const count = card.dataset.count;
  const gif   = card.dataset.gif;

  // GIF 언마스크
  gifEl_.classList.remove('masked');
  gifEl_.src = gif;

  // 이름·횟수 공개
  nameEl.textContent  = name;
  countEl.textContent = `${Number(count).toLocaleString()}회`;
  nameEl.classList.remove('hidden');
  countEl.classList.remove('hidden');

  btn.remove();

  // 1등 임팩트
  if (isTop) {
    card.classList.add('top-revealed');
    nameEl.classList.add('top-revealed-name');
    countEl.classList.add('top-revealed-count');

    // 화면 플래시
    const flash = document.createElement('div');
    flash.className = 'reveal-flash';
    document.body.appendChild(flash);
    flash.addEventListener('animationend', () => flash.remove());

    confetti(100);
  }
}

/* ════════════════════════
   후원 시상 (3→2→1)
════════════════════════ */
let awardStep = 0;

function initDonation() {
  awardStep = 0;
  // 카드·시상대 리셋
  [1,2,3].forEach(r => {
    const card = document.getElementById(`award-card-${r}`);
    if (card) card.classList.remove('show');
    const pd = document.querySelector(`.pd-${r}`);
    if (pd) pd.classList.remove('lit');
  });

  // 데이터 주입
  SETTLEMENT_DATA.donation.forEach(p => {
    const card = document.getElementById(`award-card-${p.rank}`);
    if (!card) return;
    card.querySelector('.award-gif').src  = p.gif;
    card.querySelector('.award-name').textContent = p.name;
  });

  updateAwardBtn();
}

const AWARD_ORDER = [3, 2, 1]; // 공개 순서

function revealNextAward() {
  if (awardStep >= 3) { initDonation(); return; }
  const rank = AWARD_ORDER[awardStep];
  awardStep++;

  const card = document.getElementById(`award-card-${rank}`);
  const pd   = document.querySelector(`.pd-${rank}`);
  if (card) card.classList.add('show');
  if (pd)   pd.classList.add('lit');

  if (rank === 1) confetti(120);

  updateAwardBtn();
}

function updateAwardBtn() {
  const btn = document.getElementById('award-btn');
  if (!btn) return;
  if (awardStep === 0) btn.textContent = '🥉 3등 공개!';
  else if (awardStep === 1) btn.textContent = '🥈 2등 공개!';
  else if (awardStep === 2) btn.textContent = '🥇 1등 공개!';
  else btn.textContent = '🔄 다시보기';
}

/* ════════════════════════
   폭죽
════════════════════════ */
function confetti(n = 70) {
  const colors = ['#ffd700','#ffe880','#ff6b6b','#a8e6cf','#c9b1ff','#ffffff','#ffb347'];
  for (let i = 0; i < n; i++) {
    const el = document.createElement('div');
    el.className = 'confetti';
    const size = 7 + Math.random() * 9;
    el.style.cssText = `
      left: ${Math.random() * 100}vw;
      top: -16px;
      width: ${size}px;
      height: ${size}px;
      background: ${colors[Math.floor(Math.random() * colors.length)]};
      border-radius: ${Math.random() > 0.5 ? '50%' : '2px'};
      animation-duration: ${1.8 + Math.random() * 1.8}s;
      animation-delay: ${Math.random() * 0.7}s;
    `;
    document.body.appendChild(el);
    el.addEventListener('animationend', () => el.remove());
  }
}

/* ════════════════════════
   별빛 배경 캔버스
════════════════════════ */
function initBg() {
  const canvas = document.getElementById('bg-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  canvas.width  = window.innerWidth;
  canvas.height = window.innerHeight;

  const stars = Array.from({length: 120}, () => ({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    r: 0.4 + Math.random() * 1.4,
    a: Math.random(),
    speed: 0.003 + Math.random() * 0.007,
  }));

  // 그라디언트 배경
  const grad = ctx.createRadialGradient(
    canvas.width/2, canvas.height*0.35, 0,
    canvas.width/2, canvas.height*0.35, canvas.width * 0.8
  );
  grad.addColorStop(0, '#130c28');
  grad.addColorStop(0.5, '#08050f');
  grad.addColorStop(1, '#04020e');

  function draw() {
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    stars.forEach(s => {
      s.a += s.speed;
      const alpha = 0.3 + 0.7 * Math.abs(Math.sin(s.a));
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255,240,200,${alpha})`;
      ctx.fill();
    });

    // 금빛 안개 블러 원
    const fog = ctx.createRadialGradient(
      canvas.width/2, canvas.height*0.5, 0,
      canvas.width/2, canvas.height*0.5, canvas.width * 0.55
    );
    fog.addColorStop(0, 'rgba(180,130,30,0.06)');
    fog.addColorStop(1, 'transparent');
    ctx.fillStyle = fog;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    requestAnimationFrame(draw);
  }
  draw();
}

/* ── 초기화 ── */
document.addEventListener('DOMContentLoaded', () => {
  initBg();
  const d = SETTLEMENT_DATA;
  document.getElementById('intro-year-title').textContent = `${d.year}년 ${d.month}월`;
  goTo(0);
});
