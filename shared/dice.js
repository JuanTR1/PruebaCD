const config = window.DICE_CONFIG;
const faceAngles = [[-17, 0], [-17, -90], [-17, 90], [-107, 0], [-17, 180], [73, 0]];

const cube = document.querySelector('#cube');
const rollButton = document.querySelector('#rollButton');
const grid = document.querySelector('#cardsGrid');
const result = document.querySelector('#result');
const resultImage = document.querySelector('#resultImage');
const resultTitle = document.querySelector('#resultTitle');
const resultText = document.querySelector('#resultText');
const language = document.querySelector('#language');

let current = 0;
let baseX = -17;
let baseY = 28;
let dragX = 0;
let dragY = 0;
let isDragging = false;
let startX = 0;
let startY = 0;
const flipped = new Set();

const baseUi = {
  es: { action: 'TU ACCIÓN', flip: 'Ver reto', back: 'Volver' },
  en: { action: 'YOUR ACTION', flip: 'See challenge', back: 'Back' },
  it: { action: 'LA TUA AZIONE', flip: 'Vedi sfida', back: 'Indietro' },
  fr: { action: 'TON ACTION', flip: 'Voir le défi', back: 'Retour' },
  pt: { action: 'SUA AÇÃO', flip: 'Ver desafio', back: 'Voltar' },
  ar: { action: 'عملك اليوم', flip: 'عرض الرسالة', back: 'رجوع' },
  am: { action: 'TU ACCIÓN', flip: 'Ver reto', back: 'Volver' },
};

function lang() {
  return language ? language.value : (config.defaultLang || 'es');
}

function visibleCode(option) {
  return (option.textContent || option.label || option.value || '').trim().slice(0, 2).toLowerCase();
}

function setInitialLanguage() {
  if (!language) return;
  const requested = (new URLSearchParams(location.search).get('lang') || localStorage.getItem('livingPeaceSelectorLang') || config.defaultLang || 'es').toLowerCase();
  const options = [...language.options];
  const byLabel = options.find(option => visibleCode(option) === requested);
  const byValue = options.find(option => option.value === requested && visibleCode(option) === requested);
  const match = byLabel || byValue;
  if (match) language.value = match.value;
}

function pick(value, fallback = '') {
  if (value && typeof value === 'object') return value[lang()] || value[config.defaultLang || 'es'] || value.es || Object.values(value)[0] || fallback;
  return value || fallback;
}

function ui(key) {
  const custom = config.ui && config.ui[lang()] && config.ui[lang()][key];
  return custom || (baseUi[lang()] && baseUi[lang()][key]) || baseUi.es[key];
}


function setText(selector, value) {
  if (!value) return;
  const el = document.querySelector(selector);
  if (el) el.textContent = value;
}

function setHtml(selector, value) {
  if (!value) return;
  const el = document.querySelector(selector);
  if (el) el.innerHTML = value;
}

function applyStaticUi() {
  const active = config.ui && config.ui[lang()] ? config.ui[lang()] : null;
  if (!active) return;
  if (active.pageTitle) document.title = active.pageTitle;
  setText('header .brand strong', active.brandTitle);
  setText('header .brand small', active.brandSub);
  setText('.back-link span', active.back);
  const selector = document.querySelector('.language-picker select');
  if (selector && active.languageLabel) selector.setAttribute('aria-label', active.languageLabel);
  setText('.hero .eyebrow', active.eyebrow);
  setHtml('.hero h1', active.title);
  setText('.hero .intro', active.intro);
  if (active.roll && rollButton) {
    const icon = rollButton.querySelector('i');
    rollButton.textContent = '';
    if (icon) rollButton.appendChild(icon);
    rollButton.append(' ' + active.roll);
  }
  const discover = document.querySelector('.discover');
  if (discover && active.discover) discover.innerHTML = active.discover;
  setText('.result small', active.resultKicker);
  setText('.values .section-head .eyebrow', active.sixFaces);
  setText('.values .section-head h2', active.valuesTitle);
  setText('.values .section-head > p', active.valuesIntro);
  setText('.closing blockquote', active.quote);
  setText('.closing p', active.closingWords);
}

function faceData(i) {
  const face = config.faces[i];
  return {
    image: pick(face.image),
    title: pick(face.title),
    short: pick(face.short),
    message: pick(face.message),
  };
}

function updateCubeImages() {
  cube.querySelectorAll('img[data-face]').forEach(img => {
    img.src = faceData(Number(img.dataset.face)).image;
    img.draggable = false;
  });
}

function applyCubeTransform() {
  cube.style.transform = `rotateX(${baseX + dragX}deg) rotateY(${baseY + dragY}deg)`;
}

function setCubeAngles(x, y, { resetDrag = true } = {}) {
  baseX = x;
  baseY = y;
  if (resetDrag) {
    dragX = 0;
    dragY = 0;
  }
  applyCubeTransform();
}

function commitDragOffset() {
  baseX += dragX;
  baseY += dragY;
  dragX = 0;
  dragY = 0;
  applyCubeTransform();
}

function enableCubeDrag() {
  const target = cube.closest('.scene') || cube;

  target.addEventListener('pointerdown', event => {
    if (rollButton.disabled) return;
    event.preventDefault();
    isDragging = true;
    startX = event.clientX;
    startY = event.clientY;
    cube.style.transition = 'transform .08s linear';
    target.classList.add('dragging');
    if (target.setPointerCapture) target.setPointerCapture(event.pointerId);
  });

  target.addEventListener('pointermove', event => {
    if (!isDragging) return;
    dragY = (event.clientX - startX) * 0.42;
    dragX = -(event.clientY - startY) * 0.34;
    applyCubeTransform();
  });

  function endDrag(event) {
    if (!isDragging) return;
    isDragging = false;
    commitDragOffset();
    cube.style.transition = '';
    target.classList.remove('dragging');
    if (target.releasePointerCapture) target.releasePointerCapture(event.pointerId);
  }

  target.addEventListener('dragstart', event => event.preventDefault());
  target.addEventListener('pointerup', endDrag);
  target.addEventListener('pointercancel', endDrag);
  target.addEventListener('lostpointercapture', () => {
    if (!isDragging) return;
    isDragging = false;
    commitDragOffset();
    cube.style.transition = '';
    target.classList.remove('dragging');
  });
}

function renderCards() {
  grid.innerHTML = config.faces.map((face, i) => {
    const data = faceData(i);
    return `<button class="card ${i === current ? 'active' : ''} ${flipped.has(i) ? 'flipped' : ''}" data-index="${i}" type="button" aria-pressed="${flipped.has(i)}"><span class="card-inner"><span class="card-face card-front"><span class="card-image"><img src="${data.image}" alt="${data.title}" loading="lazy"></span><span class="card-copy"><span class="number">0${i + 1}</span><h3>${data.title}</h3><p>${data.short}</p></span><span class="flip"><span>${ui('flip')}</span><b>↻</b></span></span><span class="card-face card-back"><span><span class="number">${ui('action')}</span><h3>${data.title}</h3><p>${data.message}</p></span><span class="flip"><span>${ui('back')}</span><b>↺</b></span></span></span></button>`;
  }).join('');

  grid.querySelectorAll('.card').forEach(card => card.addEventListener('click', () => toggleCard(Number(card.dataset.index))));
}

function showFace(i) {
  current = i;
  setCubeAngles(...faceAngles[i]);
  result.classList.add('changing');
  setTimeout(() => {
    const data = faceData(i);
    resultImage.src = data.image;
    resultImage.alt = data.title;
    resultTitle.textContent = data.title;
    resultText.textContent = data.message;
    result.classList.remove('changing');
  }, 170);
  renderCards();
}

function toggleCard(i) {
  flipped.has(i) ? flipped.delete(i) : flipped.add(i);
  showFace(i);
}

function roll() {
  rollButton.disabled = true;
  dragX = 0;
  dragY = 0;
  const next = Math.floor(Math.random() * 6);
  const x = 720 + Math.floor(Math.random() * 3) * 360;
  const y = 720 + Math.floor(Math.random() * 3) * 360;
  cube.style.transform = `rotateX(${x}deg) rotateY(${y}deg)`;
  setTimeout(() => {
    showFace(next);
    rollButton.disabled = false;
  }, 1050);
}

function changeLanguage() {
  document.documentElement.lang = visibleCode(language && language.selectedOptions[0] ? language.selectedOptions[0] : { textContent: lang() }) || lang();
  localStorage.setItem('livingPeaceSelectorLang', document.documentElement.lang);
  applyStaticUi();
  updateCubeImages();
  showFace(current);
}

setInitialLanguage();
enableCubeDrag();
rollButton.addEventListener('click', roll);
if (language) language.addEventListener('change', changeLanguage);
changeLanguage();
updateCubeImages();
renderCards();
