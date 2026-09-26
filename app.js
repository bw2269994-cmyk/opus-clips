const clips = [
  { title:'The uncomfortable truth about growth', duration:'00:42', rating:'9.4', views:'2.8k', tag:'Top pick', cls:'', status:'ready' },
  { title:'Stop waiting for the perfect time', duration:'00:28', rating:'8.9', views:'1.9k', tag:'Top pick', cls:'t2', status:'ready' },
  { title:'Your audience is already listening', duration:'00:35', rating:'8.6', views:'1.2k', tag:'Draft', cls:'t3', status:'draft' },
  { title:'One small habit, a huge difference', duration:'00:31', rating:'8.2', views:'840', tag:'Ready', cls:'', status:'ready' },
  { title:'What nobody tells you about consistency', duration:'00:46', rating:'7.9', views:'612', tag:'Ready', cls:'t2', status:'ready' },
  { title:'Make the next decision easier', duration:'00:24', rating:'7.5', views:'380', tag:'Draft', cls:'t3', status:'draft' }
];
const grid = document.querySelector('#clipGrid');
function render(filter='all') { grid.innerHTML = clips.filter(c => filter==='all' || (filter==='top' ? Number(c.rating)>=8.8 : c.status==='draft')).map((c,i) => `<article class="clip-card"><div class="thumb ${c.cls}"><span class="thumb-label">${c.title}</span><span class="duration">${c.duration}</span><button class="play" aria-label="Play ${c.title}">▶</button></div><div class="clip-info"><p class="clip-title">${c.title}</p><div class="meta"><span class="rating">★ ${c.rating} <small>score</small></span><span>${c.views} views</span><span class="badge ${c.status==='draft'?'draft':''}">${c.tag}</span></div></div></article>`).join(''); }
render();
document.querySelectorAll('.filter').forEach(btn => btn.addEventListener('click', () => { document.querySelectorAll('.filter').forEach(b=>b.classList.remove('active')); btn.classList.add('active'); render(btn.dataset.filter); }));
const drop = document.querySelector('#dropzone'), input = document.querySelector('#urlInput'), toast = document.querySelector('#toast');
function notify(message) { toast.textContent=message; toast.classList.add('show'); setTimeout(()=>toast.classList.remove('show'),3500); }
document.querySelector('#analyzeBtn').addEventListener('click', () => { if (!input.value.trim()) { input.focus(); notify('Paste a video link first'); return; } notify('Analyzing your video… Your clips will be ready shortly.'); });
document.querySelector('#browseBtn').addEventListener('click',()=>document.querySelector('#fileInput').click());
document.querySelector('#fileInput').addEventListener('change',e=>{if(e.target.files[0]) notify(`${e.target.files[0].name} added — analyzing now…`);});
['dragenter','dragover'].forEach(ev=>drop.addEventListener(ev,e=>{e.preventDefault();drop.classList.add('dragging');}));
['dragleave','drop'].forEach(ev=>drop.addEventListener(ev,e=>{e.preventDefault();drop.classList.remove('dragging');}));
drop.addEventListener('drop',e=>{const text=e.dataTransfer.getData('text'); if(text){input.value=text;notify('Link added — click “Find my clips” to analyze.');}else if(e.dataTransfer.files.length){notify(`${e.dataTransfer.files[0].name} added — analyzing now…`);}});
document.addEventListener('click',e=>{if(e.target.matches('.play')) notify('Preview player coming next — this clip is ready to export.');});
