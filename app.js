// ── PRELOADED PLAYERS FROM EXCEL ──────────────
const PRELOADED_PLAYERS = [{"id":"1accncl7kh","name":"O. Linnér","num":"1","pos":"POR","photo":null,"added":"2025-01-01T00:00:00.000Z","nationality":"SUE","calidad":"Cedido","posRaw":"POR"},{"id":"qv4n19l5nb","name":"A. Sol Ortiz","num":"2","pos":"POR","photo":null,"added":"2025-01-01T00:00:00.000Z","nationality":"ESP","calidad":"Suplente 1","posRaw":"POR"},{"id":"dwckdj8ndx","name":"I. Lorea Vergara","num":"3","pos":"POR","photo":null,"added":"2025-01-01T00:00:00.000Z","nationality":"ESP","calidad":"Titular","posRaw":"POR"},{"id":"pvsb6jb3d4","name":"V. Miranda","num":"4","pos":"POR","photo":null,"added":"2025-01-01T00:00:00.000Z","nationality":"ECU","calidad":"Filial","posRaw":"POR"},{"id":"38oemglta7","name":"A. Sola","num":"4","pos":"DEF","photo":null,"added":"2025-01-01T00:00:00.000Z","nationality":"ESP","calidad":"Suplente 1","posRaw":"DFD"},{"id":"h9by04czqs","name":"M. Navarro","num":"5","pos":"DEF","photo":null,"added":"2025-01-01T00:00:00.000Z","nationality":"ESP","calidad":"Titular","posRaw":"DFD"},{"id":"ngeq9zeib4","name":"B. Velazquez","num":"991","pos":"DEF","photo":null,"added":"2025-01-01T00:00:00.000Z","nationality":"COL","calidad":"Filial","posRaw":"DFD"},{"id":"csad7wjgwx","name":"O. Bello","num":"992","pos":"DEF","photo":null,"added":"2025-01-01T00:00:00.000Z","nationality":"COL","calidad":"Filial","posRaw":"DFD"},{"id":"picz4qssc8","name":"K. Afrani","num":"6","pos":"DEF","photo":null,"added":"2025-01-01T00:00:00.000Z","nationality":"GHA","calidad":"Cedido","posRaw":"DFC"},{"id":"prvx9ntx3b","name":"A. Gabarrón Gil","num":"7","pos":"DEF","photo":null,"added":"2025-01-01T00:00:00.000Z","nationality":"ESP","calidad":"Suplente 2","posRaw":"DFC"},{"id":"lp7rdjifo6","name":"L. Tetteh","num":"8","pos":"DEF","photo":null,"added":"2025-01-01T00:00:00.000Z","nationality":"GHA","calidad":"Reserva","posRaw":"DFC"},{"id":"iv0sj60qbu","name":"A. Jara Fernández","num":"9","pos":"DEF","photo":null,"added":"2025-01-01T00:00:00.000Z","nationality":"ESP","calidad":"Suplente 1","posRaw":"DFC"},{"id":"dqrz2bf72x","name":"P. Nolaskoain","num":"10","pos":"DEF","photo":null,"added":"2025-01-01T00:00:00.000Z","nationality":"ESP","calidad":"Titular","posRaw":"DFC"},{"id":"3vwedhx5r3","name":"U. Nuñez","num":"11","pos":"DEF","photo":null,"added":"2025-01-01T00:00:00.000Z","nationality":"ESP","calidad":"Titular","posRaw":"DFC"},{"id":"200lhnyhsy","name":"A. Pedroza","num":"12","pos":"DEF","photo":null,"added":"2025-01-01T00:00:00.000Z","nationality":"ESP","calidad":"Titular","posRaw":"DFI"},{"id":"zijfprhzmp","name":"C. Muñoz Muñoz","num":"13","pos":"DEF","photo":null,"added":"2025-01-01T00:00:00.000Z","nationality":"ESP","calidad":"Suplente 2","posRaw":"DFI"},{"id":"d7t91lf7qa","name":"A. Lopez","num":"14","pos":"DEF","photo":null,"added":"2025-01-01T00:00:00.000Z","nationality":"ESP","calidad":"Reserva","posRaw":"DFI"},{"id":"dr985dnch4","name":"C. Varas herrera","num":"15","pos":"DEF","photo":null,"added":"2025-01-01T00:00:00.000Z","nationality":"ESP","calidad":"Cedido","posRaw":"DFI"},{"id":"2vlasvnmgy","name":"M. Roca","num":"16","pos":"MED","photo":null,"added":"2025-01-01T00:00:00.000Z","nationality":"ESP","calidad":"Titular","posRaw":"MCD"},{"id":"517g8uem2l","name":"A. Miranda","num":"17","pos":"MED","photo":null,"added":"2025-01-01T00:00:00.000Z","nationality":"COL","calidad":"Reserva","posRaw":"MCD"},{"id":"319zkfcd0c","name":"J. Mathis","num":"19","pos":"MED","photo":null,"added":"2025-01-01T00:00:00.000Z","nationality":"CAN","calidad":"Filial","posRaw":"MCD"},{"id":"0x224zwtwl","name":"A. Segura","num":"998","pos":"MED","photo":null,"added":"2025-01-01T00:00:00.000Z","nationality":"ECU","calidad":"Filial","posRaw":"MCD"},{"id":"myaa2v4elf","name":"C. Rousset","num":"999","pos":"MED","photo":null,"added":"2025-01-01T00:00:00.000Z","nationality":"FRA","calidad":"Filial","posRaw":"MCD"},{"id":"ytqe3m6q7a","name":"J. Osede Prieto","num":"18","pos":"MED","photo":null,"added":"2025-01-01T00:00:00.000Z","nationality":"ESP","calidad":"Suplente 1","posRaw":"MC"},{"id":"fdi1h0xuvu","name":"P. Fraser","num":"18","pos":"MED","photo":null,"added":"2025-01-01T00:00:00.000Z","nationality":"CAN","calidad":"Filial","posRaw":"MC"},{"id":"xdwwdy8owp","name":"E. Granero","num":"19","pos":"MED","photo":null,"added":"2025-01-01T00:00:00.000Z","nationality":"MEX","calidad":"Reserva","posRaw":"MC"},{"id":"baq14n070r","name":"W. Cameron","num":"20","pos":"MED","photo":null,"added":"2025-01-01T00:00:00.000Z","nationality":"EEUU","calidad":"Reserva","posRaw":"MC"},{"id":"0l3vk1ujc6","name":"N. Mendez","num":"21","pos":"MED","photo":null,"added":"2025-01-01T00:00:00.000Z","nationality":"ESP","calidad":"Titular","posRaw":"MC"},{"id":"zm3dap3kc6","name":"M. Adolfo","num":"22","pos":"MED","photo":null,"added":"2025-01-01T00:00:00.000Z","nationality":"ESP","calidad":"Reserva","posRaw":"MC"},{"id":"n9i1itkjys","name":"M. Merquelanz","num":"23","pos":"MED","photo":null,"added":"2025-01-01T00:00:00.000Z","nationality":"ESP","calidad":"Reserva","posRaw":"MC"},{"id":"cind6t0s77","name":"U. Vencedor","num":"24","pos":"MED","photo":null,"added":"2025-01-01T00:00:00.000Z","nationality":"ESP","calidad":"Reserva","posRaw":"MC"},{"id":"ayyeh1whxe","name":"V. Camarasa","num":"25","pos":"MED","photo":null,"added":"2025-01-01T00:00:00.000Z","nationality":"ESP","calidad":"Suplente 2","posRaw":"MC"},{"id":"5dyvw95z5x","name":"B. Clarke","num":"26","pos":"MED","photo":null,"added":"2025-01-01T00:00:00.000Z","nationality":"EEUU","calidad":"Cedido","posRaw":"MC"},{"id":"a11ekn838s","name":"J. Hurtado","num":"27","pos":"MED","photo":null,"added":"2025-01-01T00:00:00.000Z","nationality":"ESP","calidad":"Reserva","posRaw":"MI"},{"id":"kn4h1gt9pf","name":"Galvan","num":"28","pos":"MED","photo":null,"added":"2025-01-01T00:00:00.000Z","nationality":"ESP","calidad":"Suplente 2","posRaw":"MI"},{"id":"cyq8p3urys","name":"J. Cabral","num":"37","pos":"EXT","photo":null,"added":"2025-01-01T00:00:00.000Z","nationality":"CAB","calidad":"Titular","posRaw":"EI"},{"id":"k1uxe858jb","name":"M. Planas","num":"993","pos":"EXT","photo":null,"added":"2025-01-01T00:00:00.000Z","nationality":"ESP","calidad":"Filial","posRaw":"EI"},{"id":"ghn8lxfqgm","name":"C. Miguel","num":"994","pos":"EXT","photo":null,"added":"2025-01-01T00:00:00.000Z","nationality":"ESP","calidad":"Filial","posRaw":"EI"},{"id":"muj6xb46kc","name":"A. Vicente Robles","num":"29","pos":"MED","photo":null,"added":"2025-01-01T00:00:00.000Z","nationality":"ESP","calidad":"Suplente 1","posRaw":"MCO"},{"id":"u8okmmqocf","name":"N. Amiri","num":"30","pos":"MED","photo":null,"added":"2025-01-01T00:00:00.000Z","nationality":"ALE","calidad":"Titular","posRaw":"MCO"},{"id":"i0rslc8wep","name":"M. Blanco","num":"30","pos":"MED","photo":null,"added":"2025-01-01T00:00:00.000Z","nationality":"ESP","calidad":"Filial","posRaw":"MCO"},{"id":"ko5ve171mb","name":"J. Mboula","num":"31","pos":"EXT","photo":null,"added":"2025-01-01T00:00:00.000Z","nationality":"ESP","calidad":"Titular","posRaw":"ED"},{"id":"7pop1zl2tu","name":"Brahim","num":"32","pos":"EXT","photo":null,"added":"2025-01-01T00:00:00.000Z","nationality":"ESP","calidad":"Suplente 1","posRaw":"ED"},{"id":"ykpn9ge1jw","name":"I. Muñoz","num":"33","pos":"EXT","photo":null,"added":"2025-01-01T00:00:00.000Z","nationality":"ESP","calidad":"Cedido","posRaw":"ED"},{"id":"0p24w0y6y8","name":"P. Mosquero","num":"995","pos":"MED","photo":null,"added":"2025-01-01T00:00:00.000Z","nationality":"ESP","calidad":"Filial","posRaw":"MD"},{"id":"tnx56ductl","name":"A. Benitez","num":"996","pos":"EXT","photo":null,"added":"2025-01-01T00:00:00.000Z","nationality":"ESP","calidad":"Filial","posRaw":"ED"},{"id":"aqf1go3ma2","name":"M. Reina","num":"997","pos":"EXT","photo":null,"added":"2025-01-01T00:00:00.000Z","nationality":"ESP","calidad":"Filial","posRaw":"ED"},{"id":"5o57v49jk6","name":"J. Puado","num":"34","pos":"DEL","photo":null,"added":"2025-01-01T00:00:00.000Z","nationality":"ESP","calidad":"Titular","posRaw":"DC"},{"id":"p3xlojrq97","name":"B. Garcés","num":"35","pos":"DEL","photo":null,"added":"2025-01-01T00:00:00.000Z","nationality":"ESP","calidad":"Suplente 1","posRaw":"DC"},{"id":"xsqwrq971p","name":"M. Daramy","num":"36","pos":"DEL","photo":null,"added":"2025-01-01T00:00:00.000Z","nationality":"SIE","calidad":"Cedido","posRaw":"DC"}];

// ══════════════════════════════════════════════
//  SCOUTMGR PRO — app.js
// ══════════════════════════════════════════════

// ── STATS DEFINITION ──────────────────────────
const STATS_DEF = [
  { key: 'calif',          label: 'Calificación',              mult: false, type: 'float', section: 'General' },
  { key: 'goles',          label: 'Goles',                     mult: false, type: 'int',   section: 'Ataque' },
  { key: 'tiros_pct',      label: 'Tiros %',                   mult: false, type: 'float', section: 'Ataque' },
  { key: 'tiros_puerta',   label: 'Tiros a puerta',            mult: true,  type: 'int',   section: 'Ataque' },
  { key: 'tiros_desv',     label: 'Tiros desviados',           mult: true,  type: 'int',   section: 'Ataque' },
  { key: 'prec_pases',     label: 'Precisión pases %',         mult: false, type: 'float', section: 'Pases' },
  { key: 'asistencias',    label: 'Asistencias',               mult: false, type: 'int',   section: 'Pases' },
  { key: 'pases_c_ok',     label: 'Pases cortos completados',  mult: true,  type: 'int',   section: 'Pases' },
  { key: 'pases_m_ok',     label: 'Pases medios completados',  mult: true,  type: 'int',   section: 'Pases' },
  { key: 'pases_l_ok',     label: 'Pases largos completados',  mult: true,  type: 'int',   section: 'Pases' },
  { key: 'pases_c_fail',   label: 'Pases cortos fallados',     mult: true,  type: 'int',   section: 'Pases' },
  { key: 'pases_m_fail',   label: 'Pases medios fallados',     mult: true,  type: 'int',   section: 'Pases' },
  { key: 'pases_l_fail',   label: 'Pases largos fallados',     mult: true,  type: 'int',   section: 'Pases' },
  { key: 'pases_clave',    label: 'Pases clave',               mult: true,  type: 'int',   section: 'Pases' },
  { key: 'centros_ok',     label: 'Centros exitosos',          mult: true,  type: 'int',   section: 'Pases' },
  { key: 'centros_fail',   label: 'Centros fallados',          mult: true,  type: 'int',   section: 'Pases' },
  { key: 'regates_clave',  label: 'Regates clave',             mult: true,  type: 'int',   section: 'Regate/Dribble' },
  { key: 'faltas_rec',     label: 'Faltas recibidas',          mult: true,  type: 'int',   section: 'Regate/Dribble' },
  { key: 'regates_1v1',    label: 'Regates 1 a 1 exitosos',    mult: true,  type: 'int',   section: 'Regate/Dribble' },
  { key: 'entradas_pct',   label: 'Porcentaje de entradas %',  mult: false, type: 'float', section: 'Defensa' },
  { key: 'entradas_perd',  label: 'Entradas perdidas',         mult: true,  type: 'int',   section: 'Defensa' },
  { key: 'entradas_gan',   label: 'Entradas ganadas',          mult: true,  type: 'int',   section: 'Defensa' },
  { key: 'faltas',         label: 'Faltas cometidas',          mult: true,  type: 'int',   section: 'Defensa' },
  { key: 'penales',        label: 'Penales concedidos',        mult: false, type: 'int',   section: 'Defensa' },
  { key: 'interceptac',    label: 'Interceptaciones',          mult: true,  type: 'int',   section: 'Defensa' },
  { key: 'bloqueos',       label: 'Bloqueos',                  mult: true,  type: 'int',   section: 'Defensa' },
  { key: 'fuera_lugar',    label: 'Fuera de lugar',            mult: true,  type: 'int',   section: 'Defensa' },
  { key: 'posesion_gan',   label: 'Posesión ganada',           mult: true,  type: 'int',   section: 'Defensa' },
  { key: 'despejes',       label: 'Despejes',                  mult: true,  type: 'int',   section: 'Defensa' },
  { key: 'cab_gan',        label: 'Cabezazos ganados',         mult: true,  type: 'int',   section: 'Aéreo' },
  { key: 'cab_perd',       label: 'Cabezazos perdidos',        mult: true,  type: 'int',   section: 'Aéreo' },
];

const MULT = 8;

// ── RANKING WEIGHTS BY POSITION ───────────────
const RANK_CONFIG = {
  DEL: {
    label: '⚽ Mejores Delanteros',
    max: 3,
    keys: ['goles', 'regates_1v1', 'faltas_rec', 'pases_clave'],
    weights: [4, 2, 1, 2],
    labels: ['Goles', 'Reg.1v1', 'F.Rec', 'P.Clave'],
  },
  EXT: {
    label: '🏃 Mejores Extremos',
    max: 2,
    keys: ['asistencias', 'goles', 'regates_1v1', 'faltas_rec', 'pases_clave'],
    weights: [3, 3, 2, 1, 2],
    labels: ['Asist.', 'Goles', 'Reg.1v1', 'F.Rec', 'P.Clave'],
  },
  MED: {
    label: '🎯 Mejores Mediocampistas',
    max: 4,
    keys: ['pases_l_ok', 'posesion_gan', 'interceptac', 'centros_ok', 'pases_m_fail'],
    weights: [2, 3, 3, 1, -2],
    labels: ['P.Larg.OK', 'Pos.Gan', 'Intcpt', 'Centros', 'P.Med.Fail'],
  },
  DEF: {
    label: '🛡️ Mejores Defensas Laterales',
    max: 2,
    keys: ['entradas_perd', 'penales', 'pases_l_ok', 'fuera_lugar', 'cab_perd'],
    weights: [-3, -4, 2, 1, -2],
    labels: ['Ent.Perd', 'Pen.Con', 'P.Larg.OK', 'Fuera L.', 'Cab.Perd'],
  },
  POR: {
    label: '🧤 Mejor Portero',
    max: 1,
    keys: ['despejes', 'pases_l_ok', 'cab_gan', 'posesion_gan'],
    weights: [3, 2, 2, 2],
    labels: ['Despejes', 'P.Larg.OK', 'Cab.Gan', 'Pos.Gan'],
  },
};

// ── STATE ─────────────────────────────────────
let state = {
  config: { team: '', season: '' },
  players: [],       // { id, name, num, pos, photo }
  rivals: [],        // string[]
  jornadas: [],      // full match records
  currentStats: {},  // key => raw input value
  currentPlayerId: null,
  pendingStats: {},  // playerId => { stats }
};

// ── PERSISTENCE ───────────────────────────────
function save() {
  try { localStorage.setItem('scoutmgr', JSON.stringify(state)); } catch(e) {}
}
function load() {
  try {
    const raw = localStorage.getItem('scoutmgr');
    if (raw) state = JSON.parse(raw);
  } catch(e) {}
}

// ── INIT ──────────────────────────────────────
function init() {
  // Load saved state first
  try {
    const raw = localStorage.getItem('scoutmgr');
    if (raw) state = JSON.parse(raw);
  } catch(e) {}

  // Always seed players if plantilla is empty (covers content:// and file:// protocols)
  if (!state.players || state.players.length === 0) {
    state.players = JSON.parse(JSON.stringify(PRELOADED_PLAYERS));
    try { localStorage.setItem('scoutmgr', JSON.stringify(state)); } catch(e) {}
  }

  updateHeaderTeam();
  document.getElementById('headerDate').textContent = new Date().toLocaleDateString('es-CO', { day:'2-digit', month:'short', year:'numeric' });

  // Restore config fields
  if (state.config.team) {
    document.getElementById('config-team').value = state.config.team;
    document.getElementById('team-home').value = state.config.team;
    document.getElementById('score-home-name').textContent = state.config.team;
  }
  if (state.config.season) document.getElementById('config-season').value = state.config.season;

  renderPlayerList();
  renderRivalsSelect();
  renderPlayerSelect();
  renderHistorial();
  renderResumen();
}

// ── TAB SWITCH ────────────────────────────────
function switchTab(id) {
  document.querySelectorAll('.tab-content').forEach(t => t.classList.remove('active'));
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  const idx = ['tab-registro','tab-resumen','tab-historial','tab-config'].indexOf(id);
  document.querySelectorAll('.tab-btn')[idx].classList.add('active');

  if (id === 'tab-resumen') renderResumen();
  if (id === 'tab-historial') renderHistorial();
}

// ── MODAL ─────────────────────────────────────
function openModal(id) { document.getElementById(id).classList.add('open'); }
function closeModal(id) { document.getElementById(id).classList.remove('open'); }
document.querySelectorAll('.modal-overlay').forEach(m => {
  m.addEventListener('click', e => { if (e.target === m) m.classList.remove('open'); });
});

// ── TOAST ─────────────────────────────────────
function showToast(msg, duration = 2200) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), duration);
}

// ── CONFIG ────────────────────────────────────
function saveConfig() {
  state.config.team = document.getElementById('config-team').value.trim();
  state.config.season = document.getElementById('config-season').value.trim();
  document.getElementById('team-home').value = state.config.team;
  document.getElementById('score-home-name').textContent = state.config.team || 'Local';
  updateHeaderTeam();
  save();
}
function saveHomeTeam() {
  state.config.team = document.getElementById('team-home').value.trim();
  document.getElementById('config-team').value = state.config.team;
  document.getElementById('score-home-name').textContent = state.config.team || 'Local';
  updateHeaderTeam();
  save();
}
function updateHeaderTeam() {
  const t = state.config.team || 'Sin equipo';
  document.getElementById('headerTeam').textContent = t;
}

// ── JUGADORES ─────────────────────────────────
function uid() { return Date.now().toString(36) + Math.random().toString(36).slice(2); }

let tempPhoto = null;
function previewPhoto(e) {
  const file = e.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = ev => {
    tempPhoto = ev.target.result;
    const btn = document.getElementById('photo-preview');
    btn.innerHTML = `<img src="${tempPhoto}" alt="foto"/>`;
  };
  reader.readAsDataURL(file);
}

function addPlayer() {
  const name = document.getElementById('player-name').value.trim();
  const num  = document.getElementById('player-num').value.trim();
  const pos  = document.getElementById('player-pos').value;
  if (!name) { showToast('⚠️ Ingresa el nombre'); return; }

  const player = { id: uid(), name, num, pos, photo: tempPhoto || null, added: new Date().toISOString() };
  state.players.push(player);
  save();

  // Reset
  document.getElementById('player-name').value = '';
  document.getElementById('player-num').value = '';
  document.getElementById('player-pos').value = 'DEL';
  document.getElementById('photo-preview').innerHTML = '📷<input type="file" id="photo-input" accept="image/*" style="display:none" onchange="previewPhoto(event)"/>';
  document.getElementById('photo-preview').setAttribute('for','photo-input');
  tempPhoto = null;

  closeModal('modal-add-player');
  renderPlayerList();
  renderPlayerSelect();
  showToast('✅ Jugador añadido');
}

function renderPlayerList() {
  const container = document.getElementById('playerList');
  if (!state.players.length) {
    container.innerHTML = '<div class="empty-state"><div class="icon">👥</div><p>No hay jugadores registrados</p></div>';
    return;
  }
  const sorted = [...state.players].sort((a,b) => Number(a.num||99) - Number(b.num||99));
  container.innerHTML = sorted.map(p => {
    const posDetail = p.posRaw && p.posRaw !== p.pos ? `<span style="font-size:0.6rem;color:var(--text3);margin-left:4px">${p.posRaw}</span>` : '';
    const calidadBadge = p.calidad ? `<span style="font-size:0.6rem;color:var(--text3);border:1px solid var(--border);padding:1px 5px;border-radius:10px;margin-left:4px">${p.calidad}</span>` : '';
    const natFlag = p.nationality ? `<span style="font-size:0.65rem;color:var(--text3)">${p.nationality}</span>` : '';
    return `
    <div class="player-item">
      <div class="p-num">${p.num || '—'}</div>
      <div class="player-photo" onclick="openPlayerHistory('${p.id}')">
        ${p.photo ? `<img src="${p.photo}" alt="${p.name}"/>` : initials(p.name)}
      </div>
      <div style="flex:1;min-width:0">
        <div class="p-name" style="white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${p.name}</div>
        <div style="display:flex;align-items:center;flex-wrap:wrap;gap:3px;margin-top:2px">
          <span class="badge badge-pos-${p.pos}">${posLabel(p.pos)}</span>
          ${posDetail}
          ${calidadBadge}
          ${natFlag}
        </div>
      </div>
      <button class="btn btn-secondary btn-sm" onclick="openPlayerHistory('${p.id}')">📈</button>
      <button class="btn btn-danger btn-sm" onclick="removePlayer('${p.id}')">✕</button>
    </div>
  `}).join('');
}

function initials(name) {
  return name.split(' ').slice(0,2).map(w=>w[0]).join('').toUpperCase();
}
function posLabel(pos) {
  return { DEL:'Delantero', EXT:'Extremo', MED:'Mediocampista', DEF:'Def. Lateral', POR:'Portero' }[pos] || pos;
}

function removePlayer(id) {
  if (!confirm('¿Eliminar este jugador?')) return;
  state.players = state.players.filter(p => p.id !== id);
  save();
  renderPlayerList();
  renderPlayerSelect();
  showToast('Jugador eliminado');
}

function openPlayerHistory(id) {
  const p = state.players.find(x => x.id === id);
  if (!p) return;
  document.getElementById('modal-history-title').textContent = `📈 ${p.name}`;

  // Collect all jornadas where this player appears
  const entries = [];
  state.jornadas.forEach(j => {
    const ps = j.playerStats && j.playerStats[id];
    if (ps) entries.push({ j, ps });
  });

  if (!entries.length) {
    document.getElementById('modal-history-content').innerHTML =
      '<div class="empty-state"><p>Sin partidos registrados</p></div>';
  } else {
    document.getElementById('modal-history-content').innerHTML = entries.reverse().map(({j,ps}) => {
      const d = new Date(j.date).toLocaleDateString('es-CO', { day:'2-digit', month:'short' });
      const rival = j.awayTeam || 'Rival';
      const keyStats = [
        `Calif: <strong>${ps.calif||'-'}</strong>`,
        `Goles: <strong>${ps.goles||0}</strong>`,
        `Asist: <strong>${ps.asistencias||0}</strong>`,
        `Tiros Pta: <strong>${ps.tiros_puerta||0}</strong>`,
      ].join(' · ');
      return `
        <div class="history-item">
          <div class="h-date">${d} · vs ${rival} · ${j.competition}</div>
          <div class="h-info">${keyStats}</div>
        </div>`;
    }).join('');
  }
  openModal('modal-player-history');
}

// ── RIVALS ────────────────────────────────────
function addRival() {
  const name = document.getElementById('rival-name').value.trim();
  if (!name) { showToast('⚠️ Ingresa el nombre'); return; }
  if (state.rivals.includes(name)) { showToast('Ya existe'); return; }
  state.rivals.push(name);
  state.rivals.sort();
  save();
  renderRivalsSelect();
  document.getElementById('rival-name').value = '';
  closeModal('modal-add-rival');
  showToast('✅ Rival añadido');
}

function renderRivalsSelect() {
  const sel = document.getElementById('team-away');
  const cur = sel.value;
  sel.innerHTML = '<option value="">Seleccionar rival...</option>' +
    state.rivals.map(r => `<option value="${r}" ${r===cur?'selected':''}>${r}</option>`).join('');
  const scoreAway = document.getElementById('score-away-name');
  if (cur && state.rivals.includes(cur)) scoreAway.textContent = cur;
}

// Live update score labels
document.getElementById('team-away').addEventListener('change', function() {
  document.getElementById('score-away-name').textContent = this.value || 'Rival';
});

// ── JORNADA HELPERS ───────────────────────────
function getJornadaLabel() {
  const type = document.getElementById('jornada-type').value;
  if (type === 'numero') {
    const n = document.getElementById('jornada-num').value;
    return n ? `Jornada ${n}` : 'Jornada —';
  } else {
    const fase = document.getElementById('jornada-fase').value;
    const partido = document.getElementById('jornada-partido').value;
    return `${fase} · ${partido}`;
  }
}

function toggleJornadaInput() {
  const type = document.getElementById('jornada-type').value;
  document.getElementById('jornada-numero-wrap').style.display = type === 'numero' ? '' : 'none';
  document.getElementById('jornada-fase-wrap').style.display   = type === 'fase'   ? '' : 'none';
}

// ── PLAYER SELECT & STATS FORM ─────────────────
function renderPlayerSelect() {
  const sel = document.getElementById('stat-player-select');
  const cur = sel.value;
  sel.innerHTML = '<option value="">Seleccionar jugador...</option>' +
    [...state.players]
      .sort((a,b) => Number(a.num||99)-Number(b.num||99))
      .map(p => `<option value="${p.id}" ${p.id===cur?'selected':''}>${p.num ? `#${p.num} ` : ''}${p.name} (${posLabel(p.pos)})</option>`)
      .join('');
}

function loadPlayerStats() {
  const id = document.getElementById('stat-player-select').value;
  if (!id) { showToast('⚠️ Selecciona un jugador'); return; }

  state.currentPlayerId = id;
  const saved = state.pendingStats[id] || {};
  state.currentStats = { ...saved };

  renderStatsForm(saved);
  document.getElementById('stats-actions').style.display = '';
}

function renderStatsForm(values = {}) {
  const sections = [...new Set(STATS_DEF.map(s => s.section))];
  let html = '';

  sections.forEach(sec => {
    const fields = STATS_DEF.filter(s => s.section === sec);
    html += `<div class="stats-grid">`;
    html += `<div class="section-divider">${sec}</div>`;
    fields.forEach(f => {
      const val = values[f.key] !== undefined ? values[f.key] : '';
      html += `
        <div class="stat-field ${f.key === 'calif' ? 'full-width' : ''}">
          <label>${f.label} ${f.mult ? '<span class="multiplied">×8</span>' : ''}</label>
          <input type="number" id="sf-${f.key}" value="${val}"
            step="${f.type==='float'?'0.1':'1'}" min="0"
            oninput="onStatInput('${f.key}', this.value)"
            placeholder="0"/>
        </div>`;
    });
    html += `</div>`;
  });

  document.getElementById('stats-form-container').innerHTML = html;
}

function onStatInput(key, val) {
  state.currentStats[key] = val;
}

function savePlayerStats() {
  if (!state.currentPlayerId) return;
  // Copy current inputs
  STATS_DEF.forEach(f => {
    const el = document.getElementById(`sf-${f.key}`);
    if (el) state.currentStats[f.key] = el.value;
  });
  state.pendingStats[state.currentPlayerId] = { ...state.currentStats };
  showToast('✅ Stats guardadas — listas para informe');
}

// ── COMPUTED STATS (apply multiplier) ─────────
function computeStats(raw) {
  const out = {};
  STATS_DEF.forEach(f => {
    const v = parseFloat(raw[f.key]) || 0;
    out[f.key] = f.mult ? v * MULT : v;
  });
  return out;
}

// ── SAVE JORNADA (called on export) ───────────
function buildJornada() {
  const competition = document.getElementById('comp-type').value || 'Liga';
  const jornadaLabel = getJornadaLabel();
  const homeTeam = state.config.team || document.getElementById('team-home').value || 'Local';
  const awayTeam = document.getElementById('team-away').value || 'Rival';
  const scoreHome = parseInt(document.getElementById('score-home').value) || 0;
  const scoreAway = parseInt(document.getElementById('score-away').value) || 0;

  // Compute stats for each pending player
  const playerStats = {};
  Object.entries(state.pendingStats).forEach(([pid, raw]) => {
    playerStats[pid] = computeStats(raw);
  });

  return {
    id: uid(),
    date: new Date().toISOString(),
    competition,
    jornadaLabel,
    homeTeam,
    awayTeam,
    scoreHome,
    scoreAway,
    playerStats,
    rawStats: { ...state.pendingStats },
  };
}

function persistJornada(jornada) {
  // Replace if same date+comp+rival (update), else add
  const existing = state.jornadas.findIndex(j =>
    j.competition === jornada.competition &&
    j.jornadaLabel === jornada.jornadaLabel &&
    j.awayTeam === jornada.awayTeam
  );
  if (existing >= 0) {
    if (confirm('Ya existe una jornada con estos datos. ¿Sobrescribir?')) {
      state.jornadas[existing] = jornada;
    } else return null;
  } else {
    state.jornadas.push(jornada);
  }
  save();
  renderHistorial();
  renderResumen();
  return jornada;
}

// ── CSV EXPORT: SOLO JUGADORES ─────────────────
function exportMatchReport() {
  if (!Object.keys(state.pendingStats).length) {
    showToast('⚠️ No hay stats ingresadas');
    return;
  }
  const jornada = buildJornada();
  persistJornada(jornada);

  const headers = ['Jugador', 'Dorsal', 'Posición', ...STATS_DEF.map(f => f.label + (f.mult ? ' (×8)' : ''))];
  const rows = [headers.join(',')];

  Object.entries(jornada.playerStats).forEach(([pid, stats]) => {
    const p = state.players.find(x => x.id === pid);
    if (!p) return;
    const row = [
      `"${p.name}"`,
      p.num || '',
      posLabel(p.pos),
      ...STATS_DEF.map(f => stats[f.key] !== undefined ? stats[f.key] : 0)
    ];
    rows.push(row.join(','));
  });

  downloadFile('informe_jugadores.csv', rows.join('\n'), 'text/csv');
  showToast('📄 Informe de jugadores descargado');
}

// ── CSV EXPORT: COMPLETO ───────────────────────
function exportFullReport() {
  if (!Object.keys(state.pendingStats).length) {
    showToast('⚠️ No hay stats ingresadas');
    return;
  }
  const jornada = buildJornada();
  persistJornada(jornada);

  const lines = [];
  lines.push(`SCOUTMGR PRO — INFORME COMPLETO`);
  lines.push(`Equipo,${jornada.homeTeam}`);
  lines.push(`Rival,${jornada.awayTeam}`);
  lines.push(`Competición,${jornada.competition}`);
  lines.push(`Instancia,${jornada.jornadaLabel}`);
  lines.push(`Resultado,${jornada.scoreHome} - ${jornada.scoreAway}`);
  lines.push(`Fecha,${new Date(jornada.date).toLocaleDateString('es-CO')}`);
  lines.push(`Temporada,${state.config.season || '—'}`);
  lines.push(``);

  const headers = ['Jugador', 'Dorsal', 'Posición', ...STATS_DEF.map(f => f.label + (f.mult ? ' (×8)' : ''))];
  lines.push(headers.join(','));

  Object.entries(jornada.playerStats).forEach(([pid, stats]) => {
    const p = state.players.find(x => x.id === pid);
    if (!p) return;
    const row = [
      `"${p.name}"`, p.num || '', posLabel(p.pos),
      ...STATS_DEF.map(f => stats[f.key] !== undefined ? stats[f.key] : 0)
    ];
    lines.push(row.join(','));
  });

  downloadFile('informe_completo.csv', lines.join('\n'), 'text/csv');
  showToast('📊 Informe completo descargado');
}

function downloadFile(name, content, type) {
  const blob = new Blob(['\uFEFF' + content], { type: type + ';charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url; a.download = name; a.click();
  URL.revokeObjectURL(url);
}

// ── HISTORIAL ─────────────────────────────────
function renderHistorial() {
  const container = document.getElementById('historial-container');
  if (!state.jornadas.length) {
    container.innerHTML = '<div class="empty-state"><div class="icon">🕒</div><p>No hay jornadas registradas aún</p></div>';
    return;
  }

  const sorted = [...state.jornadas].reverse();
  container.innerHTML = sorted.map(j => {
    const d = new Date(j.date).toLocaleDateString('es-CO', { day:'2-digit', month:'short', year:'numeric' });
    const players = Object.keys(j.playerStats || {}).length;
    return `
      <div class="jornada-item" onclick="showJornadaDetail('${j.id}')">
        <span class="j-comp">${j.competition}</span>
        <div class="j-info">
          <div class="j-rival">vs ${j.awayTeam}</div>
          <div class="j-date">${d} · ${j.jornadaLabel} · ${players} jugadores</div>
        </div>
        <div class="j-score">${j.scoreHome}-${j.scoreAway}</div>
      </div>`;
  }).join('');
}

function showJornadaDetail(id) {
  const j = state.jornadas.find(x => x.id === id);
  if (!j) return;
  // For simplicity show a summary toast; a full detail modal can be added
  const d = new Date(j.date).toLocaleDateString('es-CO');
  alert(`${j.competition} — ${j.jornadaLabel}\nvs ${j.awayTeam} — ${j.scoreHome}:${j.scoreAway}\n${d}\n${Object.keys(j.playerStats||{}).length} jugadores con stats`);
}

// ── RESUMEN / RANKING ─────────────────────────
function renderResumen() {
  const container = document.getElementById('resumen-container');
  const filterComp = document.getElementById('filter-comp').value;

  const jornadas = filterComp
    ? state.jornadas.filter(j => j.competition === filterComp)
    : state.jornadas;

  if (!jornadas.length) {
    container.innerHTML = '<div class="empty-state"><div class="icon">📊</div><p>No hay datos para mostrar</p></div>';
    return;
  }

  // Aggregate stats per player
  const agg = {}; // playerId => { totals, games }
  jornadas.forEach(j => {
    Object.entries(j.playerStats || {}).forEach(([pid, stats]) => {
      if (!agg[pid]) agg[pid] = { games: 0, totals: {} };
      agg[pid].games++;
      STATS_DEF.forEach(f => {
        agg[pid].totals[f.key] = (agg[pid].totals[f.key] || 0) + (parseFloat(stats[f.key]) || 0);
      });
    });
  });

  let html = '';

  Object.entries(RANK_CONFIG).forEach(([pos, cfg]) => {
    const players = state.players.filter(p => p.pos === pos);
    if (!players.length) return;

    // Score each player
    const scored = players
      .filter(p => agg[p.id])
      .map(p => {
        const t = agg[p.id].totals;
        const g = agg[p.id].games;
        let score = 0;
        cfg.keys.forEach((k, i) => {
          score += ((t[k] || 0) / g) * cfg.weights[i];
        });
        return { p, score: Math.round(score * 10) / 10, totals: t, games: g };
      })
      .sort((a,b) => b.score - a.score)
      .slice(0, cfg.max);

    if (!scored.length) return;

    html += `<div class="rank-section">`;
    html += `<div class="rank-section-title">${cfg.label}</div>`;

    scored.forEach(({ p, score, totals, games }, i) => {
      const medal = ['gold','silver','bronze','normal'][Math.min(i,3)];
      const statsHtml = cfg.keys.map((k, ki) => `
        <div class="rank-stat">
          ${cfg.labels[ki]}: <span class="val">${Math.round((totals[k]||0)*10)/10}</span>
          <span style="color:var(--text3);font-size:0.6rem">(${Math.round((totals[k]||0)/games*10)/10}/p)</span>
        </div>`).join('');

      const photoHtml = p.photo
        ? `<div class="player-photo"><img src="${p.photo}" alt="${p.name}"/></div>`
        : `<div class="player-photo">${initials(p.name)}</div>`;

      html += `
        <div class="rank-card">
          <div class="rank-pos ${medal}">${i+1}</div>
          ${photoHtml}
          <div class="rank-info">
            <div class="rank-name">${p.num ? `#${p.num} ` : ''}${p.name}</div>
            <span class="badge badge-pos-${p.pos}" style="margin-bottom:6px;display:inline-block">${posLabel(p.pos)}</span>
            <div style="font-size:0.7rem;color:var(--text3)">⚽ ${games} partido${games!==1?'s':''}</div>
            <div class="rank-stats">${statsHtml}</div>
          </div>
          <div class="rank-score">${score}</div>
        </div>`;
    });

    html += `</div>`;
  });

  // Nota transversal
  html += `
    <div style="background:var(--accent-lt);border-radius:10px;padding:12px 14px;margin-top:8px;border-left:4px solid var(--accent2)">
      <div style="font-family:var(--font-h);font-size:0.75rem;font-weight:700;letter-spacing:1px;color:var(--accent);margin-bottom:6px">NOTA ANALÍTICA</div>
      <div style="font-size:0.78rem;color:var(--text2);line-height:1.5">
        La precisión de pases sola miente: se cruza siempre con la dificultad (corto/medio/largo).
        Un 90% dando solo pases cortos vale menos que un 78% con pases verticales constantes.
      </div>
    </div>`;

  container.innerHTML = html || '<div class="empty-state"><p>Sin jugadores con datos suficientes</p></div>';
}

// ── IMPORT / EXPORT ALL ───────────────────────
function exportAllData() {
  const json = JSON.stringify(state, null, 2);
  downloadFile(`scoutmgr_backup_${Date.now()}.json`, json, 'application/json');
  showToast('💾 Backup descargado');
}
function importData() {
  document.getElementById('import-file').click();
}
function loadImportFile(e) {
  const file = e.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = ev => {
    try {
      const imported = JSON.parse(ev.target.result);
      if (!confirm('¿Importar datos? Esto reemplazará los actuales.')) return;
      state = imported;
      save();
      init();
      showToast('✅ Datos importados correctamente');
    } catch(err) {
      showToast('❌ Archivo inválido');
    }
  };
  reader.readAsText(file);
}

function clearAllData() {
  if (!confirm('⚠️ ¿Borrar TODOS los datos? Esta acción no se puede deshacer.')) return;
  localStorage.removeItem('scoutmgr');
  state = { config:{team:'',season:''}, players:[], rivals:[], jornadas:[], currentStats:{}, currentPlayerId:null, pendingStats:{} };
  init();
  showToast('🗑️ Datos borrados');
}

// ── START ─────────────────────────────────────
init();
