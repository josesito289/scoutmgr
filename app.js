// ── PRELOADED PLAYERS ─────────────────────────
const PRELOADED_PLAYERS = [{"id":"1accncl7kh","name":"O. Linnér","num":"1","pos":"POR","photo":null,"added":"2025-01-01T00:00:00.000Z","nationality":"SUE","calidad":"Cedido","posRaw":"POR"},{"id":"qv4n19l5nb","name":"A. Sol Ortiz","num":"2","pos":"POR","photo":null,"added":"2025-01-01T00:00:00.000Z","nationality":"ESP","calidad":"Suplente 1","posRaw":"POR"},{"id":"dwckdj8ndx","name":"I. Lorea Vergara","num":"3","pos":"POR","photo":null,"added":"2025-01-01T00:00:00.000Z","nationality":"ESP","calidad":"Titular","posRaw":"POR"},{"id":"pvsb6jb3d4","name":"V. Miranda","num":"4","pos":"POR","photo":null,"added":"2025-01-01T00:00:00.000Z","nationality":"ECU","calidad":"Filial","posRaw":"POR"},{"id":"38oemglta7","name":"A. Sola","num":"4","pos":"DEF","photo":null,"added":"2025-01-01T00:00:00.000Z","nationality":"ESP","calidad":"Suplente 1","posRaw":"DFD"},{"id":"h9by04czqs","name":"M. Navarro","num":"5","pos":"DEF","photo":null,"added":"2025-01-01T00:00:00.000Z","nationality":"ESP","calidad":"Titular","posRaw":"DFD"},{"id":"ngeq9zeib4","name":"B. Velazquez","num":"991","pos":"DEF","photo":null,"added":"2025-01-01T00:00:00.000Z","nationality":"COL","calidad":"Filial","posRaw":"DFD"},{"id":"csad7wjgwx","name":"O. Bello","num":"992","pos":"DEF","photo":null,"added":"2025-01-01T00:00:00.000Z","nationality":"COL","calidad":"Filial","posRaw":"DFD"},{"id":"picz4qssc8","name":"K. Afrani","num":"6","pos":"DEF","photo":null,"added":"2025-01-01T00:00:00.000Z","nationality":"GHA","calidad":"Cedido","posRaw":"DFC"},{"id":"prvx9ntx3b","name":"A. Gabarrón Gil","num":"7","pos":"DEF","photo":null,"added":"2025-01-01T00:00:00.000Z","nationality":"ESP","calidad":"Suplente 2","posRaw":"DFC"},{"id":"lp7rdjifo6","name":"L. Tetteh","num":"8","pos":"DEF","photo":null,"added":"2025-01-01T00:00:00.000Z","nationality":"GHA","calidad":"Reserva","posRaw":"DFC"},{"id":"iv0sj60qbu","name":"A. Jara Fernández","num":"9","pos":"DEF","photo":null,"added":"2025-01-01T00:00:00.000Z","nationality":"ESP","calidad":"Suplente 1","posRaw":"DFC"},{"id":"dqrz2bf72x","name":"P. Nolaskoain","num":"10","pos":"DEF","photo":null,"added":"2025-01-01T00:00:00.000Z","nationality":"ESP","calidad":"Titular","posRaw":"DFC"},{"id":"3vwedhx5r3","name":"U. Nuñez","num":"11","pos":"DEF","photo":null,"added":"2025-01-01T00:00:00.000Z","nationality":"ESP","calidad":"Titular","posRaw":"DFC"},{"id":"200lhnyhsy","name":"A. Pedroza","num":"12","pos":"DEF","photo":null,"added":"2025-01-01T00:00:00.000Z","nationality":"ESP","calidad":"Titular","posRaw":"DFI"},{"id":"zijfprhzmp","name":"C. Muñoz Muñoz","num":"13","pos":"DEF","photo":null,"added":"2025-01-01T00:00:00.000Z","nationality":"ESP","calidad":"Suplente 2","posRaw":"DFI"},{"id":"d7t91lf7qa","name":"A. Lopez","num":"14","pos":"DEF","photo":null,"added":"2025-01-01T00:00:00.000Z","nationality":"ESP","calidad":"Reserva","posRaw":"DFI"},{"id":"dr985dnch4","name":"C. Varas herrera","num":"15","pos":"DEF","photo":null,"added":"2025-01-01T00:00:00.000Z","nationality":"ESP","calidad":"Cedido","posRaw":"DFI"},{"id":"2vlasvnmgy","name":"M. Roca","num":"16","pos":"MED","photo":null,"added":"2025-01-01T00:00:00.000Z","nationality":"ESP","calidad":"Titular","posRaw":"MCD"},{"id":"517g8uem2l","name":"A. Miranda","num":"17","pos":"MED","photo":null,"added":"2025-01-01T00:00:00.000Z","nationality":"COL","calidad":"Reserva","posRaw":"MCD"},{"id":"319zkfcd0c","name":"J. Mathis","num":"19","pos":"MED","photo":null,"added":"2025-01-01T00:00:00.000Z","nationality":"CAN","calidad":"Filial","posRaw":"MCD"},{"id":"0x224zwtwl","name":"A. Segura","num":"998","pos":"MED","photo":null,"added":"2025-01-01T00:00:00.000Z","nationality":"ECU","calidad":"Filial","posRaw":"MCD"},{"id":"myaa2v4elf","name":"C. Rousset","num":"999","pos":"MED","photo":null,"added":"2025-01-01T00:00:00.000Z","nationality":"FRA","calidad":"Filial","posRaw":"MCD"},{"id":"ytqe3m6q7a","name":"J. Osede Prieto","num":"18","pos":"MED","photo":null,"added":"2025-01-01T00:00:00.000Z","nationality":"ESP","calidad":"Suplente 1","posRaw":"MC"},{"id":"fdi1h0xuvu","name":"P. Fraser","num":"18","pos":"MED","photo":null,"added":"2025-01-01T00:00:00.000Z","nationality":"CAN","calidad":"Filial","posRaw":"MC"},{"id":"xdwwdy8owp","name":"E. Granero","num":"19","pos":"MED","photo":null,"added":"2025-01-01T00:00:00.000Z","nationality":"MEX","calidad":"Reserva","posRaw":"MC"},{"id":"baq14n070r","name":"W. Cameron","num":"20","pos":"MED","photo":null,"added":"2025-01-01T00:00:00.000Z","nationality":"EEUU","calidad":"Reserva","posRaw":"MC"},{"id":"0l3vk1ujc6","name":"N. Mendez","num":"21","pos":"MED","photo":null,"added":"2025-01-01T00:00:00.000Z","nationality":"ESP","calidad":"Titular","posRaw":"MC"},{"id":"zm3dap3kc6","name":"M. Adolfo","num":"22","pos":"MED","photo":null,"added":"2025-01-01T00:00:00.000Z","nationality":"ESP","calidad":"Reserva","posRaw":"MC"},{"id":"n9i1itkjys","name":"M. Merquelanz","num":"23","pos":"MED","photo":null,"added":"2025-01-01T00:00:00.000Z","nationality":"ESP","calidad":"Reserva","posRaw":"MC"},{"id":"cind6t0s77","name":"U. Vencedor","num":"24","pos":"MED","photo":null,"added":"2025-01-01T00:00:00.000Z","nationality":"ESP","calidad":"Reserva","posRaw":"MC"},{"id":"ayyeh1whxe","name":"V. Camarasa","num":"25","pos":"MED","photo":null,"added":"2025-01-01T00:00:00.000Z","nationality":"ESP","calidad":"Suplente 2","posRaw":"MC"},{"id":"5dyvw95z5x","name":"B. Clarke","num":"26","pos":"MED","photo":null,"added":"2025-01-01T00:00:00.000Z","nationality":"EEUU","calidad":"Cedido","posRaw":"MC"},{"id":"a11ekn838s","name":"J. Hurtado","num":"27","pos":"MED","photo":null,"added":"2025-01-01T00:00:00.000Z","nationality":"ESP","calidad":"Reserva","posRaw":"MI"},{"id":"kn4h1gt9pf","name":"Galvan","num":"28","pos":"MED","photo":null,"added":"2025-01-01T00:00:00.000Z","nationality":"ESP","calidad":"Suplente 2","posRaw":"MI"},{"id":"cyq8p3urys","name":"J. Cabral","num":"37","pos":"EXT","photo":null,"added":"2025-01-01T00:00:00.000Z","nationality":"CAB","calidad":"Titular","posRaw":"EI"},{"id":"k1uxe858jb","name":"M. Planas","num":"993","pos":"EXT","photo":null,"added":"2025-01-01T00:00:00.000Z","nationality":"ESP","calidad":"Filial","posRaw":"EI"},{"id":"ghn8lxfqgm","name":"C. Miguel","num":"994","pos":"EXT","photo":null,"added":"2025-01-01T00:00:00.000Z","nationality":"ESP","calidad":"Filial","posRaw":"EI"},{"id":"muj6xb46kc","name":"A. Vicente Robles","num":"29","pos":"MED","photo":null,"added":"2025-01-01T00:00:00.000Z","nationality":"ESP","calidad":"Suplente 1","posRaw":"MCO"},{"id":"u8okmmqocf","name":"N. Amiri","num":"30","pos":"MED","photo":null,"added":"2025-01-01T00:00:00.000Z","nationality":"ALE","calidad":"Titular","posRaw":"MCO"},{"id":"i0rslc8wep","name":"M. Blanco","num":"30","pos":"MED","photo":null,"added":"2025-01-01T00:00:00.000Z","nationality":"ESP","calidad":"Filial","posRaw":"MCO"},{"id":"ko5ve171mb","name":"J. Mboula","num":"31","pos":"EXT","photo":null,"added":"2025-01-01T00:00:00.000Z","nationality":"ESP","calidad":"Titular","posRaw":"ED"},{"id":"7pop1zl2tu","name":"Brahim","num":"32","pos":"EXT","photo":null,"added":"2025-01-01T00:00:00.000Z","nationality":"ESP","calidad":"Suplente 1","posRaw":"ED"},{"id":"ykpn9ge1jw","name":"I. Muñoz","num":"33","pos":"EXT","photo":null,"added":"2025-01-01T00:00:00.000Z","nationality":"ESP","calidad":"Cedido","posRaw":"ED"},{"id":"0p24w0y6y8","name":"P. Mosquero","num":"995","pos":"MED","photo":null,"added":"2025-01-01T00:00:00.000Z","nationality":"ESP","calidad":"Filial","posRaw":"MD"},{"id":"tnx56ductl","name":"A. Benitez","num":"996","pos":"EXT","photo":null,"added":"2025-01-01T00:00:00.000Z","nationality":"ESP","calidad":"Filial","posRaw":"ED"},{"id":"aqf1go3ma2","name":"M. Reina","num":"997","pos":"EXT","photo":null,"added":"2025-01-01T00:00:00.000Z","nationality":"ESP","calidad":"Filial","posRaw":"ED"},{"id":"5o57v49jk6","name":"J. Puado","num":"34","pos":"DEL","photo":null,"added":"2025-01-01T00:00:00.000Z","nationality":"ESP","calidad":"Titular","posRaw":"DC"},{"id":"p3xlojrq97","name":"B. Garcés","num":"35","pos":"DEL","photo":null,"added":"2025-01-01T00:00:00.000Z","nationality":"ESP","calidad":"Suplente 1","posRaw":"DC"},{"id":"xsqwrq971p","name":"M. Daramy","num":"36","pos":"DEL","photo":null,"added":"2025-01-01T00:00:00.000Z","nationality":"SIE","calidad":"Cedido","posRaw":"DC"}];

const MULT = 8;

const STATS_DEF = [
  {key:'calif',          label:'Calificación',             mult:false, type:'float', section:'General'},
  {key:'goles',          label:'Goles',                    mult:false, type:'int',   section:'Ataque'},
  {key:'tiros_pct',      label:'Tiros %',                  mult:false, type:'float', section:'Ataque'},
  {key:'tiros_puerta',   label:'Tiros a puerta',           mult:true,  type:'int',   section:'Ataque'},
  {key:'tiros_desv',     label:'Tiros desviados',          mult:true,  type:'int',   section:'Ataque'},
  {key:'prec_pases',     label:'Precisión pases %',        mult:false, type:'float', section:'Pases'},
  {key:'asistencias',    label:'Asistencias',              mult:false, type:'int',   section:'Pases'},
  {key:'pases_c_ok',     label:'Pases cortos completados', mult:true,  type:'int',   section:'Pases'},
  {key:'pases_m_ok',     label:'Pases medios completados', mult:true,  type:'int',   section:'Pases'},
  {key:'pases_l_ok',     label:'Pases largos completados', mult:true,  type:'int',   section:'Pases'},
  {key:'pases_c_fail',   label:'Pases cortos fallados',    mult:true,  type:'int',   section:'Pases'},
  {key:'pases_m_fail',   label:'Pases medios fallados',    mult:true,  type:'int',   section:'Pases'},
  {key:'pases_l_fail',   label:'Pases largos fallados',    mult:true,  type:'int',   section:'Pases'},
  {key:'pases_clave',    label:'Pases clave',              mult:true,  type:'int',   section:'Pases'},
  {key:'centros_ok',     label:'Centros exitosos',         mult:true,  type:'int',   section:'Pases'},
  {key:'centros_fail',   label:'Centros fallados',         mult:true,  type:'int',   section:'Pases'},
  {key:'regates_clave',  label:'Regates clave',            mult:true,  type:'int',   section:'Regate'},
  {key:'faltas_rec',     label:'Faltas recibidas',         mult:true,  type:'int',   section:'Regate'},
  {key:'regates_1v1',    label:'Regates 1 a 1 exitosos',  mult:true,  type:'int',   section:'Regate'},
  {key:'entradas_pct',   label:'Porcentaje entradas %',   mult:false, type:'float', section:'Defensa'},
  {key:'entradas_perd',  label:'Entradas perdidas',        mult:true,  type:'int',   section:'Defensa'},
  {key:'entradas_gan',   label:'Entradas ganadas',         mult:true,  type:'int',   section:'Defensa'},
  {key:'faltas',         label:'Faltas cometidas',         mult:true,  type:'int',   section:'Defensa'},
  {key:'penales',        label:'Penales concedidos',       mult:false, type:'int',   section:'Defensa'},
  {key:'interceptac',    label:'Interceptaciones',         mult:true,  type:'int',   section:'Colocación'},
  {key:'bloqueos',       label:'Bloqueos',                 mult:true,  type:'int',   section:'Colocación'},
  {key:'fuera_lugar',    label:'Fuera de juego',           mult:true,  type:'int',   section:'Colocación'},
  {key:'posesion_gan',   label:'Posesión ganada',          mult:true,  type:'int',   section:'Retención del balón'},
  {key:'posesion_perd',  label:'Posesión perdida',         mult:true,  type:'int',   section:'Retención del balón'},
  {key:'despejes',       label:'Despejes',                 mult:true,  type:'int',   section:'Retención del balón'},
  {key:'cab_gan',        label:'Cabezazos ganados',        mult:true,  type:'int',   section:'Retención del balón'},
  {key:'cab_perd',       label:'Cabezazos perdidos',       mult:true,  type:'int',   section:'Retención del balón'},
  {key:'por_goles_conc', label:'Goles concedidos',         mult:false, type:'int',   section:'Portero', porterOnly:true},
  {key:'por_tiros_trap', label:'Tiros atrapados',          mult:true,  type:'int',   section:'Portero', porterOnly:true},
  {key:'por_tiros_rech', label:'Tiros rechazados',         mult:true,  type:'int',   section:'Portero', porterOnly:true},
  {key:'por_centros_trap',label:'Centros atrapados',       mult:true,  type:'int',   section:'Portero', porterOnly:true},
  {key:'por_balones_quit',label:'Balones quitados',        mult:true,  type:'int',   section:'Portero', porterOnly:true},
];

const RANK_CONFIG = {
  DEL: {label:'⚽ Mejores Delanteros', max:3,
    keys:['goles','regates_1v1','faltas_rec','pases_clave'],
    weights:[4,2,1,2], labels:['Goles','Reg.1v1','F.Rec','P.Clave']},
  EXT: {label:'🏃 Mejores Extremos', max:2,
    keys:['asistencias','goles','regates_1v1','faltas_rec','pases_clave'],
    weights:[3,3,2,1,2], labels:['Asist.','Goles','Reg.1v1','F.Rec','P.Clave']},
  MED: {label:'🎯 Mejores Mediocampistas', max:4,
    keys:['pases_l_ok','posesion_gan','interceptac','centros_ok','pases_m_fail'],
    weights:[2,3,3,1,-2], labels:['P.Larg.OK','Pos.Gan','Intcpt','Centros','P.Med.Fail']},
  DEF: {label:'🛡️ Mejores Defensas', max:2,
    keys:['entradas_perd','penales','pases_l_ok','fuera_lugar','cab_perd'],
    weights:[-3,-4,2,1,-2], labels:['Ent.Perd','Pen.Con','P.Larg.OK','Fuera L.','Cab.Perd']},
  POR: {label:'🧤 Mejor Portero', max:1,
    keys:['despejes','pases_l_ok','cab_gan','posesion_gan','por_tiros_trap'],
    weights:[3,2,2,2,3], labels:['Despejes','P.Larg.OK','Cab.Gan','Pos.Gan','T.Atrap']},
};

let state = {
  config: {team:'', season:''},
  players: [],
  rivals: [],
  jornadas: [],
  plantillaData: {},
  currentPlayerId: null,
  pendingStats: {},
};

function save() {
  try { localStorage.setItem('scoutmgr_v2', JSON.stringify(state)); } catch(e) {}
}
function load() {
  try {
    const raw = localStorage.getItem('scoutmgr_v2');
    if (raw) state = JSON.parse(raw);
  } catch(e) {}
}

function init() {
  load();

  // Register DOM event listeners safely inside init
  document.querySelectorAll('.modal-overlay').forEach(function(m) {
    m.addEventListener('click', function(e) { if (e.target === m) m.classList.remove('open'); });
  });
  const awayEl = document.getElementById('team-away');
  if (awayEl) {
    awayEl.addEventListener('change', function() {
      document.getElementById('score-away-name').textContent = this.value || 'Rival';
    });
  }

  if (!state.players || state.players.length === 0) {
    state.players = JSON.parse(JSON.stringify(PRELOADED_PLAYERS));
    save();
  }
  if (!state.plantillaData) state.plantillaData = {};

  updateHeaderTeam();
  document.getElementById('headerDate').textContent =
    new Date().toLocaleDateString('es-CO', {day:'2-digit', month:'short', year:'numeric'});

  if (state.config.team) {
    document.getElementById('config-team').value = state.config.team;
    document.getElementById('team-home').value = state.config.team;
    document.getElementById('score-home-name').textContent = state.config.team;
  }
  if (state.config.season) document.getElementById('config-season').value = state.config.season;

  renderPlayerList();
  renderRivalsSelect();
  renderPlayerSelect();
  renderPlantillaSelect();
  renderHistorial();
  renderResumen();
  updateJornadaUI();
}

const TAB_IDS = ['tab-registro','tab-resumen','tab-plantilla','tab-historial','tab-config'];
function switchTab(id) {
  document.querySelectorAll('.tab-content').forEach(t => t.classList.remove('active'));
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  const idx = TAB_IDS.indexOf(id);
  if (idx >= 0) document.querySelectorAll('.tab-btn')[idx].classList.add('active');
  if (id === 'tab-resumen') renderResumen();
  if (id === 'tab-historial') renderHistorial();
  if (id === 'tab-plantilla') renderPlantillaSelect();
}

function openModal(id) { document.getElementById(id).classList.add('open'); }
function closeModal(id) { document.getElementById(id).classList.remove('open'); }
// modal close on backdrop - registered in init()

function showToast(msg, duration=2400) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), duration);
}

function saveConfig() {
  state.config.team   = document.getElementById('config-team').value.trim();
  state.config.season = document.getElementById('config-season').value.trim();
  document.getElementById('team-home').value = state.config.team;
  document.getElementById('score-home-name').textContent = state.config.team || 'Local';
  updateHeaderTeam(); save();
}
function saveHomeTeam() {
  state.config.team = document.getElementById('team-home').value.trim();
  document.getElementById('config-team').value = state.config.team;
  document.getElementById('score-home-name').textContent = state.config.team || 'Local';
  updateHeaderTeam(); save();
}
function updateHeaderTeam() {
  document.getElementById('headerTeam').textContent = state.config.team || 'Sin equipo';
}

function uid() { return Date.now().toString(36) + Math.random().toString(36).slice(2); }
function initials(name) { return name.split(' ').slice(0,2).map(w=>w[0]).join('').toUpperCase(); }
function posLabel(pos) {
  return {DEL:'Delantero',EXT:'Extremo',MED:'Mediocampista',DEF:'Def. Lateral',POR:'Portero'}[pos] || pos;
}
function slugify(str) {
  return (str||'').replace(/[^a-zA-Z0-9_\-]/g,'_').replace(/__+/g,'_').slice(0,30);
}

let tempPhoto = null;
function previewPhoto(e) {
  const file = e.target.files[0]; if (!file) return;
  const reader = new FileReader();
  reader.onload = ev => {
    tempPhoto = ev.target.result;
    const btn = document.getElementById('photo-preview');
    btn.innerHTML = '<img src="' + tempPhoto + '" alt="foto"/>';
  };
  reader.readAsDataURL(file);
}

function addPlayer() {
  const name = document.getElementById('player-name').value.trim();
  const num  = document.getElementById('player-num').value.trim();
  const pos  = document.getElementById('player-pos').value;
  if (!name) { showToast('⚠️ Ingresa el nombre'); return; }
  state.players.push({id:uid(), name, num, pos, photo:tempPhoto||null, added:new Date().toISOString()});
  save();
  document.getElementById('player-name').value = '';
  document.getElementById('player-num').value  = '';
  tempPhoto = null;
  document.getElementById('photo-preview').innerHTML =
    '<input type="file" id="photo-input" accept="image/*" style="display:none" onchange="previewPhoto(event)"/>📷';
  closeModal('modal-add-player');
  renderPlayerList(); renderPlayerSelect(); renderPlantillaSelect();
  showToast('✅ Jugador añadido');
}

function removePlayer(id) {
  if (!confirm('¿Eliminar este jugador?')) return;
  state.players = state.players.filter(p => p.id !== id);
  delete state.pendingStats[id];
  save(); renderPlayerList(); renderPlayerSelect(); renderPlantillaSelect();
  updateJornadaUI();
  showToast('Jugador eliminado');
}

function renderPlayerList() {
  const container = document.getElementById('playerList');
  if (!state.players.length) {
    container.innerHTML = '<div class="empty-state"><div class="icon">👥</div><p>No hay jugadores registrados</p></div>';
    return;
  }
  const sorted = [...state.players].sort((a,b) => Number(a.num||99)-Number(b.num||99));
  container.innerHTML = sorted.map(p => {
    const posDetail = p.posRaw  ? '<span style="font-size:0.6rem;color:var(--text3);margin-left:4px">'+p.posRaw+'</span>' : '';
    const calBadge  = p.calidad ? '<span style="font-size:0.6rem;color:var(--text3);border:1px solid var(--border);padding:1px 5px;border-radius:10px;margin-left:4px">'+p.calidad+'</span>' : '';
    const inJornada = state.pendingStats[p.id] ? ' ✅' : '';
    return '<div class="player-item">' +
      '<div class="p-num">'+(p.num||'—')+'</div>' +
      '<div class="player-photo" onclick="openPlayerHistory(\'' + p.id + '\')">' +
        (p.photo ? '<img src="'+p.photo+'" alt="'+p.name+'"/>' : initials(p.name)) +
      '</div>' +
      '<div style="flex:1;min-width:0">' +
        '<div class="p-name" style="white-space:nowrap;overflow:hidden;text-overflow:ellipsis">'+p.name+inJornada+'</div>' +
        '<div style="display:flex;align-items:center;flex-wrap:wrap;gap:3px;margin-top:2px">' +
          '<span class="badge badge-pos-'+p.pos+'">'+posLabel(p.pos)+'</span>' +
          posDetail + calBadge +
        '</div>' +
      '</div>' +
      '<button class="btn btn-secondary btn-sm" onclick="openPlayerHistory(\'' + p.id + '\')" >📈</button>' +
      '<button class="btn btn-danger btn-sm" onclick="removePlayer(\'' + p.id + '\')" >✕</button>' +
    '</div>';
  }).join('');
}
function addRival() {
  const name = document.getElementById('rival-name').value.trim();
  if (!name) { showToast('⚠️ Ingresa el nombre'); return; }
  if (state.rivals.includes(name)) { showToast('Ya existe'); return; }
  state.rivals.push(name); state.rivals.sort(); save();
  renderRivalsSelect();
  document.getElementById('rival-name').value = '';
  closeModal('modal-add-rival'); showToast('✅ Rival añadido');
}
function renderRivalsSelect() {
  const sel = document.getElementById('team-away');
  const cur = sel.value;
  sel.innerHTML = '<option value="">Seleccionar rival...</option>' +
    state.rivals.map(r => '<option value="'+r+'"'+(r===cur?' selected':'')+'>'+r+'</option>').join('');
  if (cur) document.getElementById('score-away-name').textContent = cur;
}
// team-away listener - registered in init()

function getJornadaLabel() {
  const type = document.getElementById('jornada-type').value;
  if (type === 'numero') {
    const n = document.getElementById('jornada-num').value;
    return n ? 'J'+n : '';
  }
  const fase    = document.getElementById('jornada-fase').value;
  const partido = document.getElementById('jornada-partido').value;
  return fase+'_'+partido;
}
function toggleJornadaInput() {
  const type = document.getElementById('jornada-type').value;
  document.getElementById('jornada-numero-wrap').style.display = type==='numero' ? '' : 'none';
  document.getElementById('jornada-fase-wrap').style.display   = type==='fase'   ? '' : 'none';
}
function validateJornadaMeta() {
  const comp   = document.getElementById('comp-type').value;
  const rival  = document.getElementById('team-away').value;
  const jLabel = getJornadaLabel();
  if (!comp)   { showToast('⚠️ Selecciona tipo de competición'); return false; }
  if (!rival)  { showToast('⚠️ Selecciona el rival'); return false; }
  if (!jLabel) { showToast('⚠️ Ingresa el número o fase de jornada'); return false; }
  return true;
}

function renderPlayerSelect() {
  const sel = document.getElementById('stat-player-select');
  const cur = sel.value;
  sel.innerHTML = '<option value="">Seleccionar jugador...</option>' +
    [...state.players].sort((a,b)=>Number(a.num||99)-Number(b.num||99))
      .map(p => '<option value="'+p.id+'"'+(p.id===cur?' selected':'')+'>'+(p.num?'#'+p.num+' ':'')+p.name+' ('+posLabel(p.pos)+')</option>')
      .join('');
}

function loadPlayerStats() {
  const id = document.getElementById('stat-player-select').value;
  if (!id) { showToast('⚠️ Selecciona un jugador'); return; }
  state.currentPlayerId = id;
  const saved = state.pendingStats[id] || {};
  renderStatsForm(saved);
  document.getElementById('stats-actions').style.display = '';
  const btnPartial = document.getElementById('btn-save-partial');
  btnPartial.disabled = false;
  btnPartial.style.opacity = '1';
}

function renderStatsForm(values) {
  values = values || {};
  const player = state.players.find(p => p.id === state.currentPlayerId);
  const isPor  = player && player.pos === 'POR';
  const sections = [...new Set(STATS_DEF.map(s => s.section))];
  let html = '';
  sections.forEach(sec => {
    const fields = STATS_DEF.filter(s => s.section === sec && (!s.porterOnly || isPor));
    if (!fields.length) return;
    html += '<div class="stats-grid"><div class="section-divider">'+sec+'</div>';
    fields.forEach(f => {
      const val = values[f.key] !== undefined ? values[f.key] : '';
      html += '<div class="stat-field'+(f.key==='calif'?' full-width':'')+'">'+
        '<label>'+f.label+(f.mult?' <span class="multiplied">×8</span>':'')+'</label>'+
        '<input type="number" id="sf-'+f.key+'" value="'+val+'"'+
        ' step="'+(f.type==='float'?'0.1':'1')+'" min="0" placeholder="0"/>'+
        '</div>';
    });
    html += '</div>';
  });
  document.getElementById('stats-form-container').innerHTML = html;
}

function savePlayerStats() {
  if (!state.currentPlayerId) { showToast('⚠️ Carga un jugador primero'); return; }
  const raw = {};
  STATS_DEF.forEach(f => {
    const el = document.getElementById('sf-'+f.key);
    if (el) raw[f.key] = el.value;
  });
  state.pendingStats[state.currentPlayerId] = raw;
  save();
  renderPlayerList();
  updateJornadaUI();
  const pName = state.players.find(p => p.id===state.currentPlayerId);
  showToast('✅ Stats de '+(pName?pName.name:'jugador')+' guardadas');
}

function updateJornadaUI() {
  const count = Object.keys(state.pendingStats).length;
  const ready = count >= 11;
  const counter = document.getElementById('counter-display');
  const icon    = document.getElementById('counter-icon');
  if (counter) {
    counter.textContent = count+' / 11 mín.';
    counter.style.color = ready ? 'var(--accent)' : (count>=8 ? 'var(--warn)' : 'var(--danger)');
    icon.textContent    = ready ? '✅' : (count>=8 ? '⏳' : '❌');
  }
  const listEl = document.getElementById('jornada-players-list');
  if (listEl) {
    if (!count) {
      listEl.innerHTML = '';
    } else {
      listEl.innerHTML = '<div style="display:flex;flex-wrap:wrap;gap:6px;margin-bottom:8px">' +
        Object.keys(state.pendingStats).map(pid => {
          const p = state.players.find(x => x.id===pid);
          return p ? '<span style="background:var(--accent-lt);border:1px solid var(--accent2);color:var(--accent);border-radius:20px;padding:3px 10px;font-size:0.72rem;font-weight:600">'+p.name.split(' ')[0]+'</span>' : '';
        }).join('') + '</div>';
    }
  }
  const setBtn = (id, enabled) => {
    const b = document.getElementById(id);
    if (!b) return;
    b.disabled = !enabled;
    b.style.opacity = enabled ? '1' : '0.5';
  };
  setBtn('btn-export-players', ready);
  setBtn('btn-export-full',    ready);
  setBtn('btn-clear-jornada',  ready);
}

function computeStats(raw) {
  const out = {};
  STATS_DEF.forEach(f => {
    const v = parseFloat(raw[f.key]) || 0;
    out[f.key] = f.mult ? v * MULT : v;
  });
  return out;
}

function buildJornada() {
  const competition  = document.getElementById('comp-type').value  || 'Liga';
  const jornadaLabel = getJornadaLabel();
  const homeTeam     = state.config.team || document.getElementById('team-home').value || 'Local';
  const awayTeam     = document.getElementById('team-away').value  || 'Rival';
  const scoreHome    = parseInt(document.getElementById('score-home').value) || 0;
  const scoreAway    = parseInt(document.getElementById('score-away').value) || 0;
  const playerStats  = {};
  Object.entries(state.pendingStats).forEach(([pid, raw]) => {
    playerStats[pid] = computeStats(raw);
  });
  return {
    id: uid(), date: new Date().toISOString(),
    competition, jornadaLabel, homeTeam, awayTeam,
    scoreHome, scoreAway, playerStats,
    rawStats: Object.assign({}, state.pendingStats)
  };
}

function persistJornada(jornada) {
  const existing = state.jornadas.findIndex(j =>
    j.competition===jornada.competition &&
    j.jornadaLabel===jornada.jornadaLabel &&
    j.awayTeam===jornada.awayTeam);
  if (existing >= 0) {
    if (!confirm('Ya existe esta jornada. ¿Sobrescribir?')) return null;
    state.jornadas[existing] = jornada;
  } else {
    state.jornadas.push(jornada);
  }
  save(); renderHistorial(); renderResumen();
  return jornada;
}

function csvFilename(jornada, prefix) {
  prefix = prefix || '';
  const comp  = slugify(jornada.competition);
  const j     = slugify(jornada.jornadaLabel);
  const rival = slugify(jornada.awayTeam);
  return (prefix?prefix+'_':'')+'jornada_'+comp+'_'+j+'_vs_'+rival+'.csv';
}

function exportMatchReport() {
  if (!validateJornadaMeta()) return;
  const count = Object.keys(state.pendingStats).length;
  if (count < 11) { showToast('⚠️ Faltan jugadores por ingresar ('+count+'/11)'); return; }
  const jornada    = buildJornada();
  persistJornada(jornada);
  const allStats   = STATS_DEF.filter(f => !f.porterOnly);
  const porStats   = STATS_DEF.filter(f =>  f.porterOnly);
  const headers    = ['Jugador','Dorsal','Posición',
    ...allStats.map(f => f.label+(f.mult?' (×8)':'')),
    ...porStats.map(f => f.label+' [POR]')];
  const rows = [headers.join(',')];
  Object.entries(jornada.playerStats).forEach(([pid, stats]) => {
    const p = state.players.find(x => x.id===pid); if (!p) return;
    rows.push([
      '"'+p.name+'"', p.num||'', posLabel(p.pos),
      ...allStats.map(f => stats[f.key]||0),
      ...porStats.map(f => p.pos==='POR' ? (stats[f.key]||0) : '')
    ].join(','));
  });
  downloadFile(csvFilename(jornada,'stats'), rows.join('\n'), 'text/csv');
  showToast('📄 CSV de jugadores descargado');
}

function exportFullReport() {
  if (!validateJornadaMeta()) return;
  const count = Object.keys(state.pendingStats).length;
  if (count < 11) { showToast('⚠️ Faltan jugadores por ingresar ('+count+'/11)'); return; }
  const jornada  = buildJornada();
  persistJornada(jornada);
  const lines    = [];
  lines.push('SCOUTMGR PRO — INFORME COMPLETO');
  lines.push('Equipo,'+jornada.homeTeam);
  lines.push('Rival,'+jornada.awayTeam);
  lines.push('Competición,'+jornada.competition);
  lines.push('Instancia,'+jornada.jornadaLabel);
  lines.push('Resultado,'+jornada.scoreHome+' - '+jornada.scoreAway);
  lines.push('Fecha,'+new Date(jornada.date).toLocaleDateString('es-CO'));
  lines.push('Temporada,'+(state.config.season||'—'));
  lines.push('Jugadores en jornada,'+Object.keys(jornada.playerStats).length);
  lines.push('');
  const allStats = STATS_DEF.filter(f => !f.porterOnly);
  const porStats = STATS_DEF.filter(f =>  f.porterOnly);
  lines.push(['Jugador','Dorsal','Posición',
    ...allStats.map(f => f.label+(f.mult?' (×8)':'')),
    ...porStats.map(f => f.label+' [POR]')].join(','));
  Object.entries(jornada.playerStats).forEach(([pid, stats]) => {
    const p = state.players.find(x => x.id===pid); if (!p) return;
    lines.push([
      '"'+p.name+'"', p.num||'', posLabel(p.pos),
      ...allStats.map(f => stats[f.key]||0),
      ...porStats.map(f => p.pos==='POR' ? (stats[f.key]||0) : '')
    ].join(','));
  });
  downloadFile(csvFilename(jornada,'completo'), lines.join('\n'), 'text/csv');
  showToast('📊 Informe completo descargado');
}

function clearJornada() {
  if (!validateJornadaMeta()) return;
  const count = Object.keys(state.pendingStats).length;
  if (count < 11) { showToast('⚠️ No hay jornada completa para limpiar'); return; }
  if (!confirm('¿Limpiar datos de esta jornada? ('+count+' jugadores)\nEsto no borra el historial ya guardado.')) return;
  state.pendingStats = {};
  state.currentPlayerId = null;
  save();
  renderPlayerList();
  document.getElementById('stats-form-container').innerHTML =
    '<div class="empty-state"><div class="icon">⚽</div><p>Selecciona un jugador para ingresar estadísticas</p></div>';
  document.getElementById('stats-actions').style.display = 'none';
  const btnPartial = document.getElementById('btn-save-partial');
  btnPartial.disabled = true;
  btnPartial.style.opacity = '0.5';
  updateJornadaUI();
  showToast('🗑️ Jornada limpiada');
}

function downloadFile(name, content, type) {
  const blob = new Blob(['\uFEFF'+content], {type: type+';charset=utf-8;'});
  const url  = URL.createObjectURL(blob);
  const a    = document.createElement('a');
  a.href=url; a.download=name; a.click();
  URL.revokeObjectURL(url);
}

function renderHistorial() {
  const container = document.getElementById('historial-container');
  if (!state.jornadas.length) {
    container.innerHTML = '<div class="empty-state"><div class="icon">🕒</div><p>No hay jornadas registradas aún</p></div>';
    return;
  }
  container.innerHTML = [...state.jornadas].reverse().map(j => {
    const d  = new Date(j.date).toLocaleDateString('es-CO',{day:'2-digit',month:'short',year:'numeric'});
    const pc = Object.keys(j.playerStats||{}).length;
    return '<div class="jornada-item" onclick="showJornadaDetail(\''+j.id+'\')">'+
      '<span class="j-comp">'+j.competition+'</span>'+
      '<div class="j-info">'+
        '<div class="j-rival">vs '+j.awayTeam+'</div>'+
        '<div class="j-date">'+d+' · '+j.jornadaLabel+' · '+pc+' jugadores</div>'+
      '</div>'+
      '<div class="j-score">'+j.scoreHome+'-'+j.scoreAway+'</div>'+
    '</div>';
  }).join('');
}

function showJornadaDetail(id) {
  const j = state.jornadas.find(x=>x.id===id); if (!j) return;
  const d = new Date(j.date).toLocaleDateString('es-CO');
  alert(j.competition+' — '+j.jornadaLabel+'\nvs '+j.awayTeam+' — '+j.scoreHome+':'+j.scoreAway+'\n'+d+'\n'+Object.keys(j.playerStats||{}).length+' jugadores con stats');
}

function renderResumen() {
  const container  = document.getElementById('resumen-container');
  const filterComp = document.getElementById('filter-comp').value;
  const jornadas   = filterComp ? state.jornadas.filter(j=>j.competition===filterComp) : state.jornadas;
  if (!jornadas.length) {
    container.innerHTML = '<div class="empty-state"><div class="icon">📊</div><p>No hay datos para mostrar</p></div>';
    return;
  }
  const agg = {};
  jornadas.forEach(j => {
    Object.entries(j.playerStats||{}).forEach(([pid, stats]) => {
      if (!agg[pid]) agg[pid] = {games:0, totals:{}};
      agg[pid].games++;
      STATS_DEF.forEach(f => {
        agg[pid].totals[f.key] = (agg[pid].totals[f.key]||0) + (parseFloat(stats[f.key])||0);
      });
    });
  });
  let html = '';
  Object.entries(RANK_CONFIG).forEach(([pos, cfg]) => {
    const players = state.players.filter(p => p.pos===pos && agg[p.id]);
    if (!players.length) return;
    const scored = players.map(p => {
      const t=agg[p.id].totals, g=agg[p.id].games;
      let score=0;
      cfg.keys.forEach((k,i) => { score += ((t[k]||0)/g)*cfg.weights[i]; });
      return {p, score:Math.round(score*10)/10, totals:t, games:g};
    }).sort((a,b)=>b.score-a.score).slice(0,cfg.max);
    if (!scored.length) return;
    html += '<div class="rank-section"><div class="rank-section-title">'+cfg.label+'</div>';
    scored.forEach((item, i) => {
      const p=item.p, score=item.score, totals=item.totals, games=item.games;
      const medal = ['gold','silver','bronze','normal'][Math.min(i,3)];
      const photo = p.photo
        ? '<div class="player-photo"><img src="'+p.photo+'" alt="'+p.name+'"/></div>'
        : '<div class="player-photo">'+initials(p.name)+'</div>';
      const statsHtml = cfg.keys.map((k,ki) =>
        '<div class="rank-stat">'+cfg.labels[ki]+': <span class="val">'+Math.round((totals[k]||0)*10)/10+'</span>'+
        '<span style="color:var(--text3);font-size:0.6rem">('+Math.round((totals[k]||0)/games*10)/10+'/p)</span></div>'
      ).join('');
      html +=
        '<div class="rank-card">'+
          '<div class="rank-pos '+medal+'">'+(i+1)+'</div>'+
          photo+
          '<div class="rank-info">'+
            '<div class="rank-name">'+(p.num?'#'+p.num+' ':'')+p.name+'</div>'+
            '<span class="badge badge-pos-'+p.pos+'" style="margin-bottom:6px;display:inline-block">'+posLabel(p.pos)+'</span>'+
            '<div style="font-size:0.7rem;color:var(--text3)">⚽ '+games+' partido'+(games!==1?'s':'')+'</div>'+
            '<div class="rank-stats">'+statsHtml+'</div>'+
          '</div>'+
          '<div class="rank-score">'+score+'</div>'+
        '</div>';
    });
    html += '</div>';
  });
  html += '<div style="background:var(--accent-lt);border-radius:10px;padding:12px 14px;margin-top:8px;border-left:4px solid var(--accent2)">'+
    '<div style="font-family:var(--font-h);font-size:0.75rem;font-weight:700;letter-spacing:1px;color:var(--accent);margin-bottom:6px">NOTA ANALÍTICA</div>'+
    '<div style="font-size:0.78rem;color:var(--text2);line-height:1.5">'+
    'La precisión de pases sola miente: se cruza con la dificultad (corto/medio/largo). '+
    'Un 90% dando solo pases cortos vale menos que un 78% con pases verticales constantes.'+
    '</div></div>';
  container.innerHTML = html || '<div class="empty-state"><p>Sin datos suficientes</p></div>';
}

// ── PLANTILLA TAB ─────────────────────────────
function renderPlantillaSelect() {
  const sel = document.getElementById('plantilla-player-select');
  if (!sel) return;
  const cur = sel.value;
  sel.innerHTML = '<option value="">Seleccionar jugador...</option>' +
    [...state.players].sort((a,b)=>Number(a.num||99)-Number(b.num||99))
      .map(p => '<option value="'+p.id+'"'+(p.id===cur?' selected':'')+'>'+(p.num?'#'+p.num+' ':'')+p.name+'</option>')
      .join('');
}

function loadPlantillaPlayer() {
  const id   = document.getElementById('plantilla-player-select').value;
  const card = document.getElementById('plantilla-form-card');
  if (!id) { card.style.display='none'; return; }
  const p  = state.players.find(x=>x.id===id);
  const pf = (state.plantillaData && state.plantillaData[id]) || {};
  card.style.display = '';
  document.getElementById('plantilla-player-title').textContent = (p.num?'#'+p.num+' ':'')+p.name;
  document.getElementById('pf-media').value         = pf.media        || '';
  document.getElementById('pf-edad').value          = pf.edad         || '';
  document.getElementById('pf-salario-sem').value   = pf.salarioSem   || '';
  document.getElementById('pf-salario-anual').value = pf.salarioAnual || '';
  document.getElementById('pf-contrato').value      = pf.contrato     || '';
  document.getElementById('pf-valor').value         = pf.valor        || '';
  document.getElementById('pf-accion').value        = pf.accion       || '';
  document.getElementById('pf-procedencia').value   = pf.procedencia  || (p.nationality||'');
  document.getElementById('pf-nuevo-equipo').value  = pf.nuevoEquipo  || '';
  document.getElementById('pf-nacionalidad').value  = pf.nacionalidad || (p.nationality||'');
}

function calcSalarioAnual() {
  const sem = parseFloat(document.getElementById('pf-salario-sem').value) || 0;
  document.getElementById('pf-salario-anual').value = sem * 50;
}

function savePlantillaPlayer() {
  const id = document.getElementById('plantilla-player-select').value;
  if (!id) return;
  if (!state.plantillaData) state.plantillaData = {};
  const sem = parseFloat(document.getElementById('pf-salario-sem').value) || 0;
  state.plantillaData[id] = {
    media:        document.getElementById('pf-media').value,
    edad:         document.getElementById('pf-edad').value,
    salarioSem:   sem,
    salarioAnual: sem * 50,
    contrato:     document.getElementById('pf-contrato').value,
    valor:        document.getElementById('pf-valor').value,
    accion:       document.getElementById('pf-accion').value,
    procedencia:  document.getElementById('pf-procedencia').value,
    nuevoEquipo:  document.getElementById('pf-nuevo-equipo').value,
    nacionalidad: document.getElementById('pf-nacionalidad').value,
  };
  save();
  showToast('✅ Datos de plantilla guardados');
}

function exportPlantillaCSV() {
  const headers = ['Jugador','Dorsal','Posición','Media','Edad',
    'Salario Semanal (€)','Salario Anual (€)','Duración Contrato (años)',
    'Valor de Mercado (€)','Acción','Procedencia','Nuevo Equipo','Nacionalidad'];
  const rows = [headers.join(',')];
  [...state.players].sort((a,b)=>Number(a.num||99)-Number(b.num||99)).forEach(p => {
    const pf = (state.plantillaData && state.plantillaData[p.id]) || {};
    rows.push([
      '"'+p.name+'"', p.num||'', posLabel(p.pos),
      pf.media||'', pf.edad||'',
      pf.salarioSem||'', pf.salarioAnual||'',
      pf.contrato||'', pf.valor||'',
      pf.accion||'',
      '"'+(pf.procedencia||'')+'"',
      '"'+(pf.nuevoEquipo||'')+'"',
      pf.nacionalidad||''
    ].join(','));
  });
  const season = slugify(state.config.season || 'temporada');
  downloadFile('plantilla_'+season+'.csv', rows.join('\n'), 'text/csv');
  showToast('📄 Plantilla exportada');
}

function openPlayerHistory(id) {
  const p = state.players.find(x=>x.id===id); if (!p) return;
  document.getElementById('modal-history-title').textContent = '📈 '+p.name;
  const entries = state.jornadas
    .map(j => ({j, ps: j.playerStats && j.playerStats[id]}))
    .filter(e => e.ps).reverse();
  if (!entries.length) {
    document.getElementById('modal-history-content').innerHTML =
      '<div class="empty-state"><p>Sin partidos registrados</p></div>';
  } else {
    document.getElementById('modal-history-content').innerHTML = entries.map(function(e) {
      const j=e.j, ps=e.ps;
      const d = new Date(j.date).toLocaleDateString('es-CO',{day:'2-digit',month:'short'});
      return '<div class="history-item">'+
        '<div class="h-date">'+d+' · vs '+j.awayTeam+' · '+j.competition+'</div>'+
        '<div class="h-info">Calif: <strong>'+(ps.calif||'-')+'</strong> · Goles: <strong>'+(ps.goles||0)+'</strong> · Asist: <strong>'+(ps.asistencias||0)+'</strong></div>'+
      '</div>';
    }).join('');
  }
  openModal('modal-player-history');
}

function exportAllData() {
  downloadFile('scoutmgr_backup_'+Date.now()+'.json', JSON.stringify(state,null,2), 'application/json');
  showToast('💾 Backup descargado');
}
function importData() { document.getElementById('import-file').click(); }
function loadImportFile(e) {
  const file = e.target.files[0]; if (!file) return;
  const reader = new FileReader();
  reader.onload = function(ev) {
    try {
      const imp = JSON.parse(ev.target.result);
      if (!confirm('¿Importar datos? Reemplazará los actuales.')) return;
      state = imp; save(); init();
      showToast('✅ Datos importados');
    } catch(err) { showToast('❌ Archivo inválido'); }
  };
  reader.readAsText(file);
}
function clearAllData() {
  if (!confirm('⚠️ ¿Borrar TODOS los datos? No se puede deshacer.')) return;
  localStorage.removeItem('scoutmgr_v2');
  state = {config:{team:'',season:''}, players:[], rivals:[], jornadas:[],
           plantillaData:{}, currentPlayerId:null, pendingStats:{}};
  init(); showToast('🗑️ Datos borrados');
}

document.addEventListener('DOMContentLoaded', function() { init(); });
