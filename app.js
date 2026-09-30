(() => {
  'use strict';
  const materials = [
    { id: 1, name: 'Sand', category: 'Powders', icon: '▰', color: '#e9ca83', desc: 'Powder · Falls', density: 7 },
    { id: 12, name: 'Snow', category: 'Powders', icon: '❄', color: '#d8e9f3', desc: 'Powder · Cold', density: 4 },
    { id: 14, name: 'Seed', category: 'Powders', icon: '✳', color: '#91b95b', desc: 'Powder · Grows', density: 5 },
    { id: 16, name: 'Salt', category: 'Powders', icon: '✧', color: '#ddd9c9', desc: 'Powder · Dissolves', density: 6 },
    { id: 17, name: 'Gunpowder', category: 'Explosives', icon: '▪', color: '#777982', desc: 'Powder · Fuse', density: 6 },
    { id: 25, name: 'Clay', category: 'Powders', icon: '▰', color: '#bb8062', desc: 'Powder · Molds when wet', density: 8 },
    { id: 26, name: 'Ash', category: 'Powders', icon: '⋰', color: '#9b9ca0', desc: 'Powder · Light', density: 2 },
    { id: 2, name: 'Water', category: 'Liquids', icon: '◒', color: '#54b8e8', desc: 'Liquid · Flows', density: 5 },
    { id: 7, name: 'Oil', category: 'Liquids', icon: '◉', color: '#aa873e', desc: 'Liquid · Flammable', density: 3 },
    { id: 15, name: 'Acid', category: 'Liquids', icon: '◍', color: '#a1dc5e', desc: 'Liquid · Corrosive', density: 6 },
    { id: 20, name: 'Mud', category: 'Liquids', icon: '◒', color: '#8d6348', desc: 'Slurry · Sticky', density: 7 },
    { id: 5, name: 'Fire', category: 'Energy', icon: '♨', color: '#ff794b', desc: 'Energy · Hot', density: 0 },
    { id: 10, name: 'Lava', category: 'Energy', icon: '◉', color: '#ff613e', desc: 'Liquid · Molten', density: 8 },
    { id: 8, name: 'Steam', category: 'Energy', icon: '☁', color: '#bfcbd4', desc: 'Gas · Rises', density: 0 },
    { id: 9, name: 'Smoke', category: 'Energy', icon: '☁', color: '#818993', desc: 'Gas · Drifts', density: 0 },
    { id: 21, name: 'TNT', category: 'Explosives', icon: '▣', color: '#df6350', desc: 'Explosive · Big blast', density: 0 },
    { id: 22, name: 'Dynamite', category: 'Explosives', icon: '▰', color: '#ce4f43', desc: 'Explosive · Tall blast', density: 0 },
    { id: 23, name: 'C4', category: 'Explosives', icon: '⬟', color: '#d9d0a6', desc: 'Explosive · Heavy blast', density: 0 },
    { id: 24, name: 'Nitro', category: 'Explosives', icon: '◉', color: '#d6a657', desc: 'Liquid · Unstable', density: 7 },
    { id: 32, name: 'Meteorite', category: 'Energy', icon: '◆', color: '#ff9859', desc: 'Falling · Superheated', density: 9 },
    { id: 6, name: 'Wood', category: 'Nature', icon: '▥', color: '#9d653d', desc: 'Solid · Flammable', density: 0 },
    { id: 13, name: 'Plant', category: 'Nature', icon: '♣', color: '#57b66a', desc: 'Solid · Grows', density: 0 },
    { id: 27, name: 'Firefly', category: 'Life', icon: '✦', color: '#d6ef6d', desc: 'Creature · Glows', density: 1 },
    { id: 28, name: 'Fish', category: 'Life', icon: '◁', color: '#71d6d3', desc: 'Creature · Swims', density: 5 },
    { id: 29, name: 'Beetle', category: 'Life', icon: '⬟', color: '#75ba78', desc: 'Creature · Crawls', density: 6 },
    { id: 3, name: 'Stone', category: 'Solids', icon: '◆', color: '#838995', desc: 'Solid · Heavy', density: 0 },
    { id: 4, name: 'Wall', category: 'Solids', icon: '▦', color: '#515a70', desc: 'Solid · Immovable', density: 0 },
    { id: 11, name: 'Ice', category: 'Solids', icon: '❖', color: '#86d9ed', desc: 'Solid · Melts', density: 0 },
    { id: 18, name: 'Glass', category: 'Solids', icon: '◇', color: '#9ecbd0', desc: 'Solid · Brittle', density: 0 },
    { id: 19, name: 'Metal', category: 'Solids', icon: '⬡', color: '#abb5c5', desc: 'Solid · Conducts heat', density: 0 },
    { id: 30, name: 'Copper', category: 'Electrical', icon: '⬡', color: '#d18b65', desc: 'Conductor · Carries power', density: 0 },
    { id: 31, name: 'Brick', category: 'Solids', icon: '▤', color: '#b76b5b', desc: 'Solid · Heat-baked clay', density: 0 },
    { id: 33, name: 'Battery', category: 'Electrical', icon: '▣', color: '#b9d958', desc: 'Power source · Energizes copper', density: 0 },
    { id: 34, name: 'Light', category: 'Electrical', icon: '☼', color: '#7d8790', desc: 'Device · Lights when powered', density: 0 },
    { id: 35, name: 'Burnt wire', category: 'Electrical', icon: '┄', color: '#4c4241', desc: 'Insulator · Overheated copper', density: 0 },
    { id: 37, name: 'Coal', category: 'Powders', icon: '▪', color: '#373a40', desc: 'Fuel · Catches fire easily', density: 7 },
    { id: 38, name: 'Quicksand', category: 'Liquids', icon: '◉', color: '#bd9258', desc: 'Dense slurry · Forms from sand and water', density: 7 },
    { id: 39, name: 'Rubber', category: 'Solids', icon: '▰', color: '#38323d', desc: 'Solid · Insulator · Burns', density: 0 },
    { id: 40, name: 'Obsidian', category: 'Solids', icon: '◆', color: '#453c59', desc: 'Solid · Forms when lava meets water', density: 0 },
    { id: 41, name: 'Magnet', category: 'Solids', icon: 'U', color: '#e36872', desc: 'Solid · Pulls nearby metal', density: 0 },
    { id: 42, name: 'Glowstone', category: 'Solids', icon: '✦', color: '#70cbb5', desc: 'Solid · Emits a soft mint glow', density: 0 },
  ];
  const byId = new Map(materials.map(m => [m.id, m]));
  // Keep older saved worlds loadable; retired material cells display as inert brick.
  byId.set(36, { id: 36, name: 'Brick', category: 'Solids', icon: '▤', color: '#b76b5b', desc: 'Legacy material', density: 0 });
  const categories = ['All', 'Powders', 'Explosives', 'Liquids', 'Energy', 'Nature', 'Life', 'Solids', 'Electrical'];
  const canvas = document.querySelector('#world'), ctx = canvas.getContext('2d', { alpha: true });
  const fxCanvas = document.querySelector('#fx'), fx = fxCanvas.getContext('2d');
  const frame = document.querySelector('#canvasFrame');
  const categoryStrip = document.querySelector('#categoryTabs');
  categoryStrip.addEventListener('wheel', e => { if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) { categoryStrip.scrollLeft += e.deltaY; e.preventDefault(); } }, { passive: false });
  categoryStrip.addEventListener('keydown', e => { if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') { categoryStrip.scrollBy({ left: e.key === 'ArrowRight' ? 90 : -90, behavior: 'smooth' }); } });
  const W = 240, H = 132, N = W * H;
  const cells = new Uint8Array(N), life = new Uint8Array(N), heat = new Float32Array(N), variation = new Uint8Array(N), flowX = new Int8Array(N), powered = new Uint8Array(N), powerNetwork = new Uint16Array(N), networkBatteryCount = new Uint16Array(N + 1), networkCurrent = new Float32Array(N + 1), wireCapacity = new Float32Array(N), lightIntensity = new Float32Array(N), lightRange = new Uint8Array(N), lightVisited = new Uint8Array(N), powerQueue = new Int32Array(N);
  const image = ctx.createImageData(W, H);
  let selected = 1, category = 'All', tool = 'brush', running = true, speed = 1, brush = 5, density = .72, gravity = 1, wind = 0, weatherWind = 0, weather = 'clear', glow = true, trails = true, gridVisible = true, zoom = 1, atmosphere = true;
  let mouseDown = false, lastPoint = null, shapeStart = null, shapePreview = null, frameNo = 0, seconds = 0, lastSecond = performance.now(), frameCount = 0, fps = 60, restoreTool = null;
  let fxParticles = [], history = [], future = [], lastSnapshot = 0, hintDismissed = false, soundOn = false, audioCtx = null, toastTimer, powerDirty = true;
  const dirs = [-1, 1];
  const rand = n => Math.floor(Math.random() * n);
  const index = (x, y) => y * W + x;
  const inside = (x, y) => x >= 0 && x < W && y >= 0 && y < H;
  const materialColor = id => (byId.get(id) || { color: '#000000' }).color;
  const rgbCache = new Map();
  function rgb(hex) { if (rgbCache.has(hex)) return rgbCache.get(hex); const v = hex.replace('#', ''); const a = [parseInt(v.slice(0, 2), 16), parseInt(v.slice(2, 4), 16), parseInt(v.slice(4, 6), 16)]; rgbCache.set(hex, a); return a; }
  function toast(message) { const el = document.querySelector('#toast'); el.textContent = message; el.classList.add('show'); clearTimeout(toastTimer); toastTimer = setTimeout(() => el.classList.remove('show'), 1900); }
  function setMaterial(id) { selected = id; document.querySelector('#selectedName').textContent = byId.get(id).name; document.querySelector('#selectedSwatch').style.background = materialColor(id); document.querySelector('#selectedSwatch').style.boxShadow = `0 0 12px ${materialColor(id)}66`; renderMaterials(); }
  function renderCategories() { const root = document.querySelector('#categoryTabs'); root.innerHTML = categories.map(c => `<button class="category-tab${c === category ? ' active' : ''}" data-category="${c}">${c}</button>`).join(''); root.querySelectorAll('button').forEach(b => b.onclick = () => { category = b.dataset.category; renderCategories(); renderMaterials(); }); }
  function renderMaterials() {
    const q = document.querySelector('#materialSearch').value.trim().toLowerCase();
    const list = materials.filter(m => (category === 'All' || m.category === category) && (!q || `${m.name} ${m.desc} ${m.category}`.toLowerCase().includes(q)));
    document.querySelector('#materialList').innerHTML = list.map(m => `<button class="material-card${selected === m.id ? ' selected' : ''}" data-id="${m.id}" title="${m.name}: ${m.desc}"><span class="material-icon" style="color:${m.color};background:${m.color}18">${m.icon}</span><span><b>${m.name}</b><small>${m.desc}</small></span></button>`).join('') || '<div class="empty-search">No materials found.</div>';
    document.querySelectorAll('.material-card').forEach(b => b.onclick = () => setMaterial(+b.dataset.id));
    document.querySelector('#materialCount').textContent = materials.length;
  }
  function resize() {
    canvas.width = W; canvas.height = H; ctx.imageSmoothingEnabled = false;
    const r = fxCanvas.getBoundingClientRect(), dpr = Math.min(devicePixelRatio || 1, 2);
    fxCanvas.width = Math.max(1, Math.round(r.width * dpr)); fxCanvas.height = Math.max(1, Math.round(r.height * dpr));
    fx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }
  new ResizeObserver(resize).observe(frame); resize();
  function particleCount() { let count = 0; for (let i = 0; i < N; i++) if (cells[i]) count++; return count; }
  function getPoint(e) { const r = canvas.getBoundingClientRect(); const x = Math.floor((e.clientX - r.left) / r.width * W), y = Math.floor((e.clientY - r.top) / r.height * H); return { x: Math.max(0, Math.min(W - 1, x)), y: Math.max(0, Math.min(H - 1, y)) }; }
  function setCell(x, y, id, heatValue) { if (!inside(x, y)) return; const i = index(x, y), old=cells[i]; cells[i] = id; if ([30,33,34].includes(old)||[30,33,34].includes(id))powerDirty=true; life[i] = id === 5 ? 38 + rand(38) : id === 8 ? 100 + rand(80) : id === 9 ? 90 + rand(80) : id === 10 ? 255 : id === 15 ? 230 : 0; heat[i] = heatValue ?? (id === 5 ? 95 : id === 10 ? 150 : id === 11 ? -12 : id === 32 ? 135 : 0); variation[i] = rand(28); flowX[i] = 0; if ((id === 5 || id === 10 || id === 32) && Math.random() < .5) spark(x, y, id === 5 ? '#ffbf63' : '#ffb444'); }
  function eraseCell(x, y) { if (!inside(x, y)) return; const i = index(x, y); if([30,33,34].includes(cells[i]))powerDirty=true;cells[i] = 0; life[i] = 0; heat[i] = 0; flowX[i] = 0; }
  function saveHistory() { history.push({ c: cells.slice(), l: life.slice(), h: heat.slice() }); if (history.length > 20) history.shift(); future = []; }
  function restoreState(state) { cells.set(state.c); life.set(state.l); heat.set(state.h); flowX.fill(0); powerDirty=true; }
  function undo() { if (!history.length) return; future.push({ c: cells.slice(), l: life.slice(), h: heat.slice() }); restoreState(history.pop()); toast('Undid your last action'); updateStats(); }
  function redo() { if (!future.length) return; history.push({ c: cells.slice(), l: life.slice(), h: heat.slice() }); restoreState(future.pop()); toast('Action restored'); updateStats(); }
  function applyTemperature(x, y, amount) {
    if (!inside(x, y)) return;
    const i = index(x, y), id = cells[i];
    if (!id) { setCell(x, y, amount > 0 ? 5 : 12); return; }
    heat[i] += amount;
    if (amount > 0) {
      if (isExplosive(id) || id === 6 || id === 7 || id === 13 || id === 37 || id === 39) ignite(i);
      else if ((id === 11 || id === 12) && heat[i] > -2) { cells[i] = 2; heat[i] = 5; }
      else if (id === 2 && heat[i] > 95) { cells[i] = 8; life[i] = 110; heat[i] = 30; }
      else if (id === 25 && heat[i] > 85) { cells[i] = 31; heat[i] = 0; }
      else if (id === 20 && heat[i] > 60) { cells[i] = 1; heat[i] = 0; }
    } else {
      if (id === 5 && heat[i] < 35) { cells[i] = 9; life[i] = 80; heat[i] = 0; }
      else if (id === 10 && heat[i] < 70) { cells[i] = 3; heat[i] = 0; }
      else if (id === 2 && heat[i] < -8) { cells[i] = 11; heat[i] = -30; }
    }
  }
  function stamp(x, y, id = selected, radius = brush) {
    const r = radius, chance = tool === 'erase' || tool === 'heat' || tool === 'cool' ? 1 : density;
    for (let dy = -r; dy <= r; dy++) for (let dx = -r; dx <= r; dx++) if (dx * dx + dy * dy <= r * r + r && Math.random() < chance) {
      if (tool === 'heat') applyTemperature(x + dx, y + dy, 75);
      else if (tool === 'cool') applyTemperature(x + dx, y + dy, -75);
      else if (tool === 'erase' || id === 0) eraseCell(x + dx, y + dy); else setCell(x + dx, y + dy, id);
    }
    if (!hintDismissed) { document.querySelector('#canvasHint').classList.add('hidden'); hintDismissed = true; }
  }
  function drawLine(a, b, id = selected, erase = false) { const dx = b.x - a.x, dy = b.y - a.y, steps = Math.max(Math.abs(dx), Math.abs(dy), 1); for (let s = 0; s <= steps; s++) stamp(Math.round(a.x + dx * s / steps), Math.round(a.y + dy * s / steps), id, brush); }
  function drawRect(a, b, id = selected, fill = false) { const x0 = Math.min(a.x, b.x), x1 = Math.max(a.x, b.x), y0 = Math.min(a.y, b.y), y1 = Math.max(a.y, b.y); if (fill) { for (let y = y0; y <= y1; y += Math.max(1, Math.floor(brush / 2))) for (let x = x0; x <= x1; x += Math.max(1, Math.floor(brush / 2))) stamp(x, y, id, Math.max(1, Math.floor(brush / 2))); } else { drawLine({ x: x0, y: y0 }, { x: x1, y: y0 }, id); drawLine({ x: x0, y: y1 }, { x: x1, y: y1 }, id); drawLine({ x: x0, y: y0 }, { x: x0, y: y1 }, id); drawLine({ x: x1, y: y0 }, { x: x1, y: y1 }, id); } }
  canvas.addEventListener('pointerdown', e => {
    if (e.button !== 0) return; e.preventDefault(); canvas.setPointerCapture(e.pointerId); const p = getPoint(e); mouseDown = true; lastPoint = p; shapeStart = p;
    if (tool === 'pick') { const id = cells[index(p.x, p.y)]; if (byId.has(id)) setMaterial(id); else toast('Nothing to pick here'); mouseDown = false; return; }
    if (tool === 'bucket') { saveHistory(); floodFill(p.x, p.y, selected); mouseDown = false; return; }
    if (tool === 'brush' || tool === 'erase' || tool === 'heat' || tool === 'cool') { saveHistory(); stamp(p.x, p.y, selected); }
  });
  canvas.addEventListener('pointermove', e => {
    const p = getPoint(e); document.querySelector('#coords').textContent = `X: ${String(p.x).padStart(3, '0')}   Y: ${String(p.y).padStart(3, '0')}`;
    if (!mouseDown) return;
    if (tool === 'brush' || tool === 'erase' || tool === 'heat' || tool === 'cool') { drawLine(lastPoint, p, selected, tool === 'erase'); lastPoint = p; }
    else if (tool === 'line' || tool === 'rect') { shapePreview = p; }
  });
  canvas.addEventListener('pointerup', e => { if (!mouseDown) return; const p = getPoint(e); if (tool === 'line' && shapeStart) { saveHistory(); drawLine(shapeStart, p); } if (tool === 'rect' && shapeStart) { saveHistory(); drawRect(shapeStart, p); } mouseDown = false; shapeStart = null; shapePreview = null; });
  canvas.addEventListener('pointercancel', () => { mouseDown = false; shapeStart = null; shapePreview = null; });
  canvas.addEventListener('contextmenu', e => e.preventDefault());
  function floodFill(x, y, id) { const start = index(x, y), target = cells[start]; if (target === id) return; const stack = [start], seen = new Uint8Array(N); let filled = 0; while (stack.length && filled < 7000) { const i = stack.pop(); if (seen[i] || cells[i] !== target) continue; seen[i] = 1; cells[i] = id; heat[i] = id === 5 ? 95 : 0; flowX[i] = 0; filled++; const px = i % W, py = Math.floor(i / W); if (px > 0) stack.push(i - 1); if (px < W - 1) stack.push(i + 1); if (py > 0) stack.push(i - W); if (py < H - 1) stack.push(i + W); } powerDirty=true;toast(filled >= 7000 ? 'Filled area (7,000 cell limit)' : 'Area filled'); }
  function swap(i, j) { if (j < 0 || j >= N || cells[j] === 4) return false; const tmp = cells[i]; cells[i] = cells[j]; cells[j] = tmp; if([30,33,34].includes(tmp)||[30,33,34].includes(cells[i]))powerDirty=true; const lt = life[i]; life[i] = life[j]; life[j] = lt; const ht = heat[i]; heat[i] = heat[j]; heat[j] = ht; const vt = variation[i]; variation[i] = variation[j]; variation[j] = vt; const ft = flowX[i]; flowX[i] = flowX[j]; flowX[j] = ft; return true; }
  function spark(x, y, color) { if (!trails) return; if (fxParticles.length < 230) fxParticles.push({ x: x + (Math.random() - .5) * 2, y, vx: (Math.random() - .5) * .75, vy: -.25 - Math.random() * .7, life: 15 + rand(22), max: 38, color, size: .5 + Math.random() * 1.5 }); }
  function emit(id, x, y) { if (id === 5 && Math.random() < .035) spark(x, y, Math.random() < .5 ? '#ffb84d' : '#ff7048'); if (id === 10 && Math.random() < .022) spark(x, y, '#ff894a'); if (id === 15 && Math.random() < .025) spark(x, y, '#b5ff68'); if (id === 32 && Math.random() < .6) spark(x, y, '#ffbd6c'); }
  function neighbor(i, dx, dy) { const x = i % W, y = Math.floor(i / W), nx = x + dx, ny = y + dy; return inside(nx, ny) ? index(nx, ny) : -1; }
  function updatePower() {
    if (!powerDirty) return;
    powered.fill(0);powerNetwork.fill(0);networkBatteryCount.fill(0);networkCurrent.fill(0);wireCapacity.fill(1);lightIntensity.fill(0);lightRange.fill(0);lightVisited.fill(0);
    let nextNetwork=0;
    for(let start=0;start<N;start++)if(cells[start]===33&&!powerNetwork[start]){
      const id=++nextNetwork;let head=0,tail=0,batteries=0;powerNetwork[start]=id;powerQueue[tail++]=start;
      while(head<tail){const i=powerQueue[head++];powered[i]=1;if(cells[i]===33)batteries++;for(const [dx,dy] of [[0,-1],[0,1],[-1,0],[1,0]]){const j=neighbor(i,dx,dy);if(j>=0&&(cells[j]===30||cells[j]===33)&&!powerNetwork[j]){powerNetwork[j]=id;powerQueue[tail++]=j;}}}
      networkBatteryCount[id]=batteries;
    }
    // Nearby copper cells approximate wire thickness: broad traces carry more current.
    for(let i=0;i<N;i++)if(cells[i]===30&&powerNetwork[i]){
      const x=i%W,y=Math.floor(i/W);let nearby=0;
      for(let dy=-2;dy<=2;dy++)for(let dx=-2;dx<=2;dx++)if(inside(x+dx,y+dy)&&cells[index(x+dx,y+dy)]===30)nearby++;
      const thickness=nearby/5;
      // One- and two-cell traces have very low current capacity; a wider
      // trace scales up quickly so only genuinely thin sections fuse.
      wireCapacity[i] = thickness <= 2 ? 0.72 + (thickness - 1) * 0.18 : thickness * 2.5;
    }
    for(let start=0;start<N;start++)if(cells[start]===34&&!lightVisited[start]){
      let head=0,tail=0;const group=[];const networks=new Set();lightVisited[start]=1;powerQueue[tail++]=start;
      while(head<tail){const i=powerQueue[head++];group.push(i);for(const [dx,dy] of [[0,-1],[0,1],[-1,0],[1,0]]){const j=neighbor(i,dx,dy);if(j<0)continue;if(cells[j]===34&&!lightVisited[j]){lightVisited[j]=1;powerQueue[tail++]=j;}else if((cells[j]===30||cells[j]===33)&&powerNetwork[j])networks.add(powerNetwork[j]);}}
      let supply=0;for(const id of networks)supply+=networkBatteryCount[id];if(!supply)continue;
      const intensity=Math.min(1,supply/group.length),range=Math.max(1,Math.min(24,Math.round((4+supply*2)*intensity)));
      for(const id of networks)networkCurrent[id]=Math.max(networkCurrent[id],supply*.01);
      for(const i of group){powered[i]=1;lightIntensity[i]=intensity;lightRange[i]=range;}
    }
    powerDirty=false;
  }
  function updateWireThermal() {
    let burntAny=false;
    for(let i=0;i<N;i++)if(cells[i]===30&&powerNetwork[i]){
      let wet=false;
      for(const [dx,dy] of [[0,-1],[0,1],[-1,0],[1,0],[-1,-1],[1,-1],[-1,1],[1,1]]){
        const j=neighbor(i,dx,dy);if(j<0)continue;
        if(cells[j]===2){wet=true;break;}
        if(wet)break;
      }
      if(wet){heat[i]=0;continue;}
      const overload=(networkCurrent[powerNetwork[i]]||0)-wireCapacity[i];
      if(overload>0){heat[i]=Math.min(100,heat[i]+overload*.12);if(Math.random()<.08)spark(i%W,Math.floor(i/W),'#ff743d');}
      else heat[i]=Math.max(0,heat[i]-.35);
      if(heat[i]>=70){
        const x=i%W,y=Math.floor(i/W);setCell(x,y,35);
        for(let k=0;k<4;k++)spark(x,y,k%2?'#ff743d':'#ffd06b');
        if(y>0&&cells[i-W]===0)setCell(x,y-1,9);
        burntAny=true;
      }
    }
    if(burntAny)toast('Copper wire overheated and burned out');
  }
  function isExplosive(id) { return id === 17 || id === 21 || id === 22 || id === 23 || id === 24; }
  function ignite(i) {
    const id = cells[i];
    if (isExplosive(id)) { heat[i] = 115; life[i] = id === 17 ? 22 : id === 21 ? 17 : id === 22 ? 12 : id === 23 ? 24 : 7; spark(i % W, Math.floor(i / W), '#ffb34f'); return; }
    if (id === 6 || id === 7 || id === 13 || id === 37 || id === 39) { cells[i] = 5; life[i] = 45 + rand(38); heat[i] = 95; }
  }
  function explode(i, explosiveId = 17) {
    const profiles = { 17: { radius: 6, fire: .78, debris: .24, tall: false }, 21: { radius: 10, fire: .54, debris: .3, tall: false }, 22: { radius: 8, fire: .68, debris: .26, tall: true }, 23: { radius: 12, fire: .4, debris: .38, tall: false }, 24: { radius: 9, fire: .72, debris: .2, tall: false } };
    const profile = profiles[explosiveId] || profiles[17], x = i % W, y = Math.floor(i / W), r = profile.radius;
    for (let dy = -r; dy <= r; dy++) for (let dx = -r; dx <= r; dx++) {
      const dist = profile.tall ? dx * dx * 1.7 + dy * dy : dx * dx + dy * dy;
      if (dist > r * r || !inside(x + dx, y + dy)) continue;
      const j = index(x + dx, y + dy), target = cells[j];
      if (target === 4 || target === 3 || target === 19) continue;
      if (j !== i && isExplosive(target)) { ignite(j); continue; }
      if (dist < r * r * .48 || Math.random() < .78) setCell(x + dx, y + dy, Math.random() < profile.debris ? 3 : 5, 110);
    }
    for (let s = 0; s < r * 3; s++) spark(x + rand(r * 2 + 1) - r, y + rand(r * 2 + 1) - r, Math.random() < .5 ? '#ffd16f' : '#ff754b');
    beep(Math.max(45, 125 - r * 5), .1, .045);
  }
  function react(i, id) {
    const offsets = [[0,-1],[0,1],[-1,0],[1,0],[-1,-1],[1,-1]];
    for (const [dx, dy] of offsets) { const j = neighbor(i, dx, dy); if (j < 0) continue; const other = cells[j];
      if (id === 5) { if (other === 2) { cells[i] = 8; life[i] = 100; heat[i] = 20; cells[j] = 0; return; } if ([6,7,13,37,39].includes(other) || isExplosive(other)) ignite(j); else if (other === 12) { cells[j] = 2; heat[j] = 0; } }
      if (id === 10) { if (other === 2) { cells[j] = 8; life[j] = 125; heat[j] = 30; cells[i] = 40; heat[i] = 0; return; } if (other === 1) { cells[j] = 18; cells[i] = 3; heat[i] = 0; return; } if ([6,7,13,37,39].includes(other) || isExplosive(other)) ignite(j); }
      if (id === 1 && other === 10) { cells[i] = 8; life[i] = 120; heat[i] = 25; cells[j] = 3; heat[j] = 0; return; }
      if (id === 1 && other === 5) { cells[j] = 8; life[j] = 105; cells[i] = 0; return; }
      if (id === 1 && other === 13 && Math.random() < .002) { cells[j] = 13; }
      if (id === 2 && (other === 1 || other === 25)) { const mix=other===1?38:20;cells[i]=mix;cells[j]=mix;heat[i]=heat[j]=0;return; }
      if ((id === 20 || id === 25) && other === 5) { cells[i] = id === 20 ? 1 : 31; heat[i] = 0; }
      if (id === 15 && other && ![3,4,18,19,10].includes(other) && Math.random() < .025) { if([30,33,34].includes(other))powerDirty=true;cells[j] = 0; heat[j] = 0; if (Math.random() < .18) cells[i] = 8; }
      if ((id === 12 || id === 1) && other === 13 && Math.random() < .001) cells[i] = 0;
      if (id === 11 && other === 5) { cells[i] = 2; heat[i] = 1; }
      if (id === 25 && other === 2) { cells[i] = 20; }
      if (id === 1 && other === 11 && heat[j] > 3) cells[j] = 2;
    }
  }
  function canDisplace(mover, target) { if (!target || target === 8 || target === 9 || target === 5) return true; const a = byId.get(mover)?.density || 0, b = byId.get(target)?.density || 0; return a > b && [2,7,15,10,20,24,38].includes(target); }
  function moveDown(i, id, x, y) { const j = neighbor(i, 0, 1); if (j >= 0 && canDisplace(id, cells[j]) && swap(i, j)) return j; const first = dirs[rand(2)], j1 = neighbor(i, first, 1), j2 = neighbor(i, -first, 1); if (j1 >= 0 && canDisplace(id, cells[j1]) && swap(i, j1)) return j1; if (j2 >= 0 && canDisplace(id, cells[j2]) && swap(i, j2)) return j2; return -1; }
  function moveLiquid(i, id) {
    const x = i % W, y = Math.floor(i / W), bias = flowX[i] + (wind + weatherWind) * .18;
    const preferred = Math.sign(bias) || (Math.random() < .5 ? -1 : 1), order = [preferred, -preferred];
    const down = neighbor(i, 0, 1);
    if (down >= 0 && canDisplace(id, cells[down]) && swap(i, down)) { flowX[down] = Math.round(flowX[down] * .72); return; }
    for (const dx of order) { const j = neighbor(i, dx, 1); if (j >= 0 && canDisplace(id, cells[j]) && swap(i, j)) { flowX[j] = Math.max(-8, Math.min(8, flowX[j] * .65 + dx * 2)); return; } }
    const spread = id === 10 ? 1 : id === 15 ? 4 : id === 7 ? 6 : id === 20 ? 3 : id === 24 ? 5 : id === 38 ? 2 : 8;
    const momentum = Math.max(0, Math.abs(flowX[i]) - 1), reach = Math.min(spread, 1 + Math.floor(momentum / 2));
    for (const dx of order) {
      let destination = -1;
      for (let k = 1; k <= reach; k++) { const j = neighbor(i, dx * k, 0); if (j < 0) break; if (canDisplace(id, cells[j]) && cells[j] !== 0) { destination = j; break; } if (cells[j] !== 0) break; destination = j; }
      if (destination >= 0 && swap(i, destination)) { flowX[destination] = Math.max(-8, Math.min(8, flowX[destination] * .55 + dx * 2)); return; }
    }
    flowX[i] = Math.trunc(flowX[i] * .55);
  }
  function moveGas(i, id) { const x = i % W, drift = Math.sign(wind + weatherWind + (Math.random() - .5) * 12); let order = [0, drift || (Math.random() < .5 ? -1 : 1), -drift || 1]; for (const dx of order) { const j = neighbor(i, dx, -1); if (j >= 0 && (!cells[j] || cells[j] === 5)) { swap(i, j); return; } } if (Math.random() < .6) { const j = neighbor(i, Math.random() < .5 ? -1 : 1, 0); if (j >= 0 && !cells[j]) swap(i,j); } }
  function updateCreature(i, id, x, y) {
    if (id === 27) {
      if (Math.random() < .035) { const side = neighbor(i, Math.random() < .5 ? -1 : 1, 0); if (side >= 0 && !cells[side]) swap(i, side); }
      if (Math.random() < .18) moveGas(i, id);
      return;
    }
    if (id === 28) {
      const wet = [[0,1],[0,-1],[-1,0],[1,0]].map(([dx,dy]) => neighbor(i,dx,dy)).filter(j => j >= 0 && cells[j] === 2);
      if (wet.length) { life[i] = 0; if (Math.random() < .32) swap(i, wet[rand(wet.length)]); }
      else { life[i] = Math.min(255, life[i] + 1); if (life[i] > 75) { cells[i] = 0; return; } if (Math.random() < .12) moveDown(i,id,x,y); }
      return;
    }
    if (id === 29) {
      const below = neighbor(i,0,1);
      if (below >= 0 && !cells[below]) { moveDown(i,id,x,y); return; }
      if (Math.random() < .12) { const dx = Math.random() < .5 ? -1 : 1, side = neighbor(i,dx,0); if (side >= 0 && !cells[side]) swap(i,side); }
      return;
    }
  }
  function meteorImpact(i) {
    const x = i % W, y = Math.floor(i / W);
    for (let dy=-2;dy<=2;dy++) for(let dx=-2;dx<=2;dx++) if(dx*dx+dy*dy<=5&&inside(x+dx,y+dy)) { const j=index(x+dx,y+dy); if(cells[j]===4||cells[j]===19)continue; if(j===i)setCell(x+dx,y+dy,3); else if(!cells[j]&&Math.random()<.58)setCell(x+dx,y+dy,5,110); else if([6,7,13].includes(cells[j]))ignite(j); }
    for(let k=0;k<6;k++)spark(x+rand(5)-2,y+rand(5)-2,'#ffab59');
  }
  function updateMagnet(i) {
    if(frameNo%2)return;
    for(const [dx,dy] of [[0,-1],[0,1],[-1,0],[1,0],[-1,-1],[1,-1],[-1,1],[1,1]]){
      const near=neighbor(i,dx,dy),metal=neighbor(i,dx*2,dy*2);
      if(near>=0&&metal>=0&&!cells[near]&&cells[metal]===19){swap(metal,near);return;}
    }
  }
  function updateCell(i) {
    const id = cells[i]; if(id===41){updateMagnet(i);return;} if (!id || id === 4 || id === 3 || id === 6 || id === 13 || id === 18 || id === 19 || id === 30 || id === 31 || id === 35 || id === 36 || id === 39 || id === 40 || id === 42) return;
    let x = i % W, y = Math.floor(i / W); react(i, id);
    if (cells[i] !== id) return;
    if (isExplosive(id) && heat[i] > 20) { emit(id, x, y); spark(x, y, '#ff9e4a'); if (life[i] > 0) life[i]--; else { explode(i, id); return; } return; }
    if (id === 27 || id === 28 || id === 29) { updateCreature(i,id,x,y); return; }
    if (id === 32) { emit(id,x,y); const below=neighbor(i,0,1); if(below>=0&&!cells[below]){swap(i,below);if(Math.random()<.45)spark(x,y,'#ffad61');}else{meteorImpact(i);return;} return; }
    if (id === 1 || id === 12 || id === 14 || id === 16 || id === 17 || id === 25 || id === 26) { if (id === 14 && y > H - 4 && Math.random() < .01) cells[i] = 13; if (Math.random() <= Math.min(1, gravity)) { const moved = moveDown(i, id, x, y); if (moved >= 0 && gravity > 1 && Math.random() < (gravity - 1)) moveDown(moved, id, moved % W, Math.floor(moved / W)); } return; }
    if ([2,7,15,10,20,24,38].includes(id)) { if (Math.random() > Math.min(1, gravity)) return; moveLiquid(i, id); if (gravity > 1 && Math.random() < (gravity - 1)) moveLiquid(i, id); if (id === 10 && Math.random() < .003) { const n = neighbor(i, 0, -1); if (n >= 0 && !cells[n]) setCell(x, y - 1, 9); } return; }
    if (id === 5) {
      emit(id,x,y); if (life[i] > 0) life[i]--; else { cells[i] = Math.random() < .38 ? 9 : 0; return; }
      heat[i] = Math.max(0, heat[i] - .22); const rise = neighbor(i, 0, -1); if (rise >= 0 && !cells[rise] && Math.random() < .55) swap(i, rise);
      if (Math.random() < .018) { const nx = x + rand(3) - 1, ny = y - rand(3); if (inside(nx, ny) && !cells[index(nx,ny)]) setCell(nx, ny, 9); } return;
    }
    if (id === 8 || id === 9) { if (atmosphere && life[i] > 0) life[i]--; else if (atmosphere) { cells[i] = 0; return; } moveGas(i, id); return; }
  }
  function updatePlant() { if (frameNo % 8) return; for (let k = 0; k < 45; k++) { const x = rand(W), y = rand(H), i = index(x,y); if (cells[i] !== 13) continue; const up = neighbor(i, 0, -1), side = neighbor(i, Math.random() < .5 ? -1 : 1, 0); if (up >= 0 && !cells[up] && Math.random() < .24) setCell(x, y - 1, 13); else if (side >= 0 && !cells[side] && Math.random() < .08) setCell(side % W, y, 13); } }
  function updateWeather() {
    weatherWind = weather === 'storm' ? Math.sin(frameNo * .11) * 8 + (Math.random() - .5) * 3 : 0;
    if (weather === 'rain' && frameNo % 2 === 0) { for (let n=0;n<5;n++) { const x=rand(W); if(!cells[x])setCell(x,0,2); } }
    else if (weather === 'snow' && frameNo % 3 === 0) { for (let n=0;n<4;n++) { const x=rand(W); if(!cells[x])setCell(x,0,12); } }
    else if (weather === 'heatwave' && frameNo % 5 === 0) { for(let n=0;n<28;n++){const i=rand(N);if(cells[i]&&![2,8,9,10].includes(cells[i])){heat[i]+=4;if(cells[i]===11&&heat[i]>0){cells[i]=2;heat[i]=5;}if(isExplosive(cells[i])&&heat[i]>95)ignite(i);}} }
    else if (weather === 'meteor' && frameNo % 18 === 0) { const x=rand(W); if(!cells[x])setCell(x,0,32,145); }
  }
  function doStep() {
    frameNo++;
    updateWeather();
    for (let y = H - 1; y >= 0; y--) { const leftFirst = Math.random() < .5; for (let k = 0; k < W; k++) { const x = leftFirst ? k : W - 1 - k; updateCell(index(x, y)); } }
    updatePlant();
    if (gravity < .98 && frameNo % 4 === 0) { const chance = (1 - gravity) * .3; for (let i = 0; i < N; i++) if (cells[i] === 1 && Math.random() < chance) { const x = i % W, y = Math.floor(i / W), up = neighbor(i, 0, -1); if (up >= 0 && !cells[up] && Math.random() < .12) swap(i, up); } }
    if (frameNo % 6 === 0) { powerDirty=true; updatePower(); }
    updateWireThermal();
    if (frameNo % 12 === 0) { for (let i = 0; i < N; i++) if (heat[i] > 1) { const h = heat[i]; heat[i] *= atmosphere ? .994 : .999; if (cells[i] === 5 || cells[i] === 10 || h > 35) for (const [dx,dy] of [[0,-1],[0,1],[-1,0],[1,0]]) { const j = neighbor(i,dx,dy); if (j >= 0 && [3,18,19,30].includes(cells[j])) heat[j] = Math.max(heat[j], h * ([19,30].includes(cells[j]) ? .82 : .58)); } } }
  }
  function render() {
    updatePower();
    const d = image.data;
    for (let i = 0; i < N; i++) { const id = cells[i], p = i * 4; if (!id) { d[p+3] = 0; continue; } const mat = byId.get(id); const c = rgb(mat.color); let v = (variation[i] - 13) * .7; if (id === 5) v += Math.sin(frameNo * .22 + i * .3) * 18; if (id === 10) v += Math.sin(frameNo * .1 + i) * 8; if (id === 8 || id === 9) v += Math.sin(frameNo * .07 + i * .2) * 7; const h = heat[i]; if (h > 10 && (id === 19 || id === 3)) v += Math.min(90, h * .25); d[p] = Math.max(0, Math.min(255, c[0] + v)); d[p+1] = Math.max(0, Math.min(255, c[1] + v)); d[p+2] = Math.max(0, Math.min(255, c[2] + v)); d[p+3] = id === 8 || id === 9 ? 150 + rand(45) : 255; }
    ctx.putImageData(image, 0, 0);
    ctx.save(); ctx.globalCompositeOperation = 'lighter';
    for (let i = 0; i < N; i++) {
      const id=cells[i],x=i%W,y=Math.floor(i/W);
      if(isExplosive(id)&&heat[i]>20){ctx.globalAlpha=.45+Math.random()*.35;ctx.fillStyle=Math.random()<.5?'#ff8d3b':'#ffd25c';ctx.fillRect(x,y,1,1)}
      else if(id===30&&heat[i]>4){ctx.globalAlpha=Math.min(.95,.18+heat[i]/85);ctx.fillStyle=heat[i]>44?'#ff512f':'#ff9a43';ctx.fillRect(x,y,1,1)}
      else if(id===30&&powered[i]){ctx.globalAlpha=Math.min(.82,.2+networkBatteryCount[powerNetwork[i]]*.08);ctx.fillStyle='#ffc978';ctx.fillRect(x,y,1,1)}
      else if(id===33){ctx.globalAlpha=.28;ctx.fillStyle='#e5ff93';ctx.fillRect(x,y,1,1)}
      else if(id===42){ctx.globalAlpha=.12;ctx.fillStyle='#75ffdb';ctx.fillRect(x-4,y-4,9,9);ctx.globalAlpha=.48;ctx.fillRect(x,y,1,1)}
      else if(id===34&&powered[i]){const r=lightRange[i],b=lightIntensity[i];ctx.fillStyle='#ffd65e';ctx.globalAlpha=.1*b;ctx.fillRect(x-r,y,2*r+1,1);ctx.fillRect(x,y-r,1,2*r+1);ctx.globalAlpha=.12*b;ctx.fillRect(x-Math.max(1,r>>1),y-Math.max(1,r>>1),Math.max(3,r),Math.max(3,r));ctx.globalAlpha=.88*b;ctx.fillStyle='#fff0a4';ctx.fillRect(x-1,y-1,3,3)}
    }
    ctx.restore();
    ctx.save(); ctx.globalCompositeOperation = 'screen';
    for (let i = 0; i < N; i++) {
      const id=cells[i],x=i%W,y=Math.floor(i/W);
      if(id===2){const wave=Math.sin(frameNo*.16+x*.43+y*.19+Math.sin(x*.08)*1.4),surface=y===0||cells[i-W]===0;if(wave>.15){ctx.globalAlpha=.06+(wave+1)*.055;ctx.fillStyle='#65d5ff';ctx.fillRect(x,y,1,1)}if(surface&&wave>.55){ctx.globalAlpha=.32+wave*.18;ctx.fillStyle='#d5f8ff';ctx.fillRect(x,y,1,1)}}
      else if(id===28){ctx.globalAlpha=.95;ctx.fillStyle='#a6f5e7';ctx.fillRect(x-1,y,3,1);ctx.fillStyle='#52b9bc';ctx.fillRect(x-2,y,1,1);ctx.fillRect(x+1,y-1,1,1);ctx.fillStyle='#efffe9';ctx.fillRect(x,y,1,1)}
      else if(id===29){ctx.globalAlpha=.95;ctx.fillStyle='#5ca36a';ctx.fillRect(x-1,y,3,1);ctx.fillRect(x-1,y-1,2,1);ctx.fillStyle='#d0ee84';ctx.fillRect(x+1,y-1,1,1)}
      else if(id===27){ctx.globalAlpha=.55+.35*Math.sin(frameNo*.2+i);ctx.fillStyle='#dfff7e';ctx.fillRect(x,y,1,1);if(glow){ctx.globalAlpha=.18;ctx.fillRect(x-1,y-1,3,3)}}
    }
    ctx.restore();
    if (glow) { ctx.save(); ctx.globalCompositeOperation = 'lighter'; for (let k=0;k<90;k++) { const i=rand(N),id=cells[i]; if (id===5||id===10||id===15) { const x=i%W,y=Math.floor(i/W),c=materialColor(id); ctx.globalAlpha=id===15?.09:.12; ctx.fillStyle=c; ctx.fillRect(x-1,y-1,3,3); } } ctx.restore(); }
    if (shapeStart && shapePreview) { ctx.save(); ctx.strokeStyle = materialColor(tool === 'erase' ? 0 : selected); ctx.globalAlpha=.75; ctx.lineWidth=1; ctx.setLineDash([3,2]); const a=shapeStart,b=shapePreview; if(tool==='line'){ctx.beginPath();ctx.moveTo(a.x,a.y);ctx.lineTo(b.x,b.y);ctx.stroke()}else{ctx.strokeRect(Math.min(a.x,b.x),Math.min(a.y,b.y),Math.abs(a.x-b.x),Math.abs(a.y-b.y))}ctx.restore(); }
    drawFx();
  }
  function drawFx() { const r=fxCanvas.getBoundingClientRect(); fx.clearRect(0,0,r.width,r.height); const sx=r.width/W, sy=r.height/H; for(let i=fxParticles.length-1;i>=0;i--){const p=fxParticles[i];p.x+=p.vx+(wind+weatherWind)*.008;p.y+=p.vy;p.vy-=.006;p.life--;if(p.life<=0||p.y<0){fxParticles.splice(i,1);continue}fx.globalAlpha=Math.min(1,p.life/12)*.85;fx.fillStyle=p.color;fx.shadowBlur=glow?7:0;fx.shadowColor=p.color;fx.fillRect(p.x*sx,p.y*sy,p.size*sx,p.size*sy)}fx.globalAlpha=1;fx.shadowBlur=0; }
  let lastStats = 0; function updateStats() { if(performance.now()-lastStats<250)return;lastStats=performance.now(); const count=particleCount();document.querySelector('#particleCount').textContent=count.toLocaleString();document.querySelector('#statParticles').textContent=count.toLocaleString();let hsum=0,hn=0;for(let i=0;i<N;i++)if(cells[i]){hsum+=heat[i];hn++}document.querySelector('#statTemp').textContent=Math.round(22+(hn?hsum/hn:0));document.querySelector('#fpsReadout').textContent=`${fps} FPS`;document.querySelector('#simStatus').textContent=running?'SIMULATION LIVE':'SIMULATION PAUSED';document.querySelector('.top-status .live-dot').style.background=running?'var(--lime)':'#89919d'; }
  function animate(now) { requestAnimationFrame(animate); frameCount++;if(now-lastSecond>=1000){fps=frameCount;frameCount=0;lastSecond=now;if(running)seconds++;document.querySelector('#timeDisplay').textContent=`${String(Math.floor(seconds/60)).padStart(2,'0')}:${String(seconds%60).padStart(2,'0')}`;document.querySelector('#timelineProgress').style.width=`${(seconds%120)/120*100}%`;}
    if(running){for(let s=0;s<speed;s++)doStep();} if(now-lastSnapshot>9000 && running){lastSnapshot=now; if(particleCount()) {history.push({c:cells.slice(),l:life.slice(),h:heat.slice()});if(history.length>8)history.shift();future=[];}}
    render();updateStats();
  }
  requestAnimationFrame(animate);
  function beep(freq=440,dur=.06,vol=.025){if(!soundOn)return;try{audioCtx ||= new(window.AudioContext||window.webkitAudioContext)();const o=audioCtx.createOscillator(),g=audioCtx.createGain();o.frequency.value=freq;o.type='sine';g.gain.value=vol;o.connect(g);g.connect(audioCtx.destination);o.start();g.gain.exponentialRampToValueAtTime(.001,audioCtx.currentTime+dur);o.stop(audioCtx.currentTime+dur)}catch{}}
  function setTool(t){tool=t;document.querySelectorAll('.tool-btn').forEach(b=>b.classList.toggle('selected',b.dataset.tool===t));canvas.style.cursor=t==='pick'?'copy':t==='bucket'?'cell':'crosshair';}
  document.querySelectorAll('.tool-btn').forEach(b=>b.onclick=()=>setTool(b.dataset.tool));
  document.querySelector('#materialSearch').addEventListener('input',renderMaterials);
  document.querySelector('#brushSize').oninput=e=>{brush=+e.target.value;document.querySelector('#brushValue').textContent=brush};
  document.querySelector('#density').oninput=e=>{density=+e.target.value/100;document.querySelector('#densityValue').textContent=e.target.value+'%'};
  document.querySelector('#gravity').oninput=e=>{gravity=+e.target.value/100;document.querySelector('#gravityValue').textContent=gravity.toFixed(1)+'×'};
  document.querySelector('#wind').oninput=e=>{wind=+e.target.value/10;document.querySelector('#windValue').textContent=(wind>0?'+':'')+Math.round(wind*10)+'%'};
  document.querySelector('#weatherMode').onchange=e=>{weather=e.target.value;weatherWind=0;document.querySelector('#weatherCaption').textContent=e.target.selectedOptions[0].textContent.replace(/^\S+\s*/,'');toast(`${document.querySelector('#weatherCaption').textContent} weather enabled`)};
  document.querySelector('#playBtn').onclick=()=>{running=!running;document.querySelector('#playBtn').textContent=running?'Ⅱ':'▶';document.querySelector('#playBtn').title=running?'Pause simulation (Space)':'Resume simulation (Space)';updateStats()};
  document.querySelector('#stepBtn').onclick=()=>{if(!running){doStep();render();updateStats()}};
  document.querySelectorAll('.speed-btn').forEach(b=>b.onclick=()=>{speed=+b.dataset.speed;document.querySelectorAll('.speed-btn').forEach(x=>x.classList.toggle('active',x===b))});
  document.querySelector('#clearBtn').onclick=()=>{saveHistory();cells.fill(0);life.fill(0);heat.fill(0);flowX.fill(0);powerDirty=true;fxParticles=[];seconds=0;document.querySelector('#canvasHint').classList.remove('hidden');hintDismissed=false;updateStats();toast('World cleared. Start fresh!')};
  document.querySelector('#dismissHint').onclick=()=>{document.querySelector('#canvasHint').classList.add('hidden');hintDismissed=true};
  document.querySelector('#undoBtn').onclick=undo;document.querySelector('#redoBtn').onclick=redo;
  document.querySelector('#gridBtn').onclick=()=>{gridVisible=!gridVisible;frame.classList.toggle('grid-off',!gridVisible);document.querySelector('#gridBtn').style.color=gridVisible?'var(--lime)':''};
  document.querySelector('#glowBtn').onclick=e=>{glow=!glow;e.currentTarget.classList.toggle('active',glow)};
  document.querySelector('#trailsBtn').onclick=e=>{trails=!trails;e.currentTarget.classList.toggle('active',trails);if(!trails)fxParticles=[]};
  document.querySelector('#soundBtn').onclick=e=>{soundOn=!soundOn;e.currentTarget.style.color=soundOn?'var(--lime)':'';toast(soundOn?'Sound effects on':'Sound effects off');if(soundOn)beep(600,.08,.02)};
  document.querySelector('#saveBtn').onclick=()=>{const data={version:1,width:W,height:H,cells:Array.from(cells),life:Array.from(life),heat:Array.from(heat),seconds,gravity,wind,weather};const blob=new Blob([JSON.stringify(data)],{type:'application/json'}),a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download=`sandfall-lab-v2-world-${new Date().toISOString().slice(0,10)}.json`;a.click();setTimeout(()=>URL.revokeObjectURL(a.href),1500);toast('World saved to your device')};
  document.querySelector('#loadBtn').onclick=()=>document.querySelector('#loadFile').click();
  document.querySelector('#loadFile').onchange=async e=>{const file=e.target.files?.[0];if(!file)return;try{const data=JSON.parse(await file.text());if(data.width!==W||data.height!==H||!Array.isArray(data.cells)||data.cells.length!==N||data.cells.some(id=>!Number.isInteger(id)||(id!==0&&!byId.has(id))))throw new Error('This file is not a Sandfall Lab v2 world save.');saveHistory();cells.set(data.cells);flowX.fill(0);powerDirty=true;if(Array.isArray(data.life)&&data.life.length===N)life.set(data.life);else life.fill(0);if(Array.isArray(data.heat)&&data.heat.length===N)heat.set(data.heat);else heat.fill(0);seconds=Number(data.seconds)||0;if(Number.isFinite(data.gravity))gravity=Math.max(0,Math.min(2,data.gravity));if(Number.isFinite(data.wind))wind=Math.max(-10,Math.min(10,data.wind));if(['clear','rain','snow','storm','heatwave','meteor'].includes(data.weather))weather=data.weather;document.querySelector('#weatherMode').value=weather;document.querySelector('#weatherCaption').textContent=document.querySelector('#weatherMode').selectedOptions[0].textContent.replace(/^\S+\s*/,'');document.querySelector('#gravity').value=Math.round(gravity*100);document.querySelector('#gravityValue').textContent=gravity.toFixed(1)+'×';document.querySelector('#wind').value=Math.round(wind*10);document.querySelector('#windValue').textContent=(wind>0?'+':'')+Math.round(wind*10)+'%';hintDismissed=particleCount()>0;document.querySelector('#canvasHint').classList.toggle('hidden',hintDismissed);toast('World loaded. Keep experimenting!')}catch(err){toast(err.message||'Could not load that world')}e.target.value='';};
  document.querySelector('#zoomIn').onclick=()=>setZoom(Math.min(1.5,zoom+.1));document.querySelector('#zoomOut').onclick=()=>setZoom(Math.max(.7,zoom-.1));document.querySelector('#fitBtn').onclick=()=>setZoom(1);function setZoom(z){zoom=z;document.querySelector('#zoomLabel').textContent=Math.round(z*100)+'%';canvas.style.transform=`scale(${z})`;fxCanvas.style.transform=`scale(${z})`}
  document.querySelector('#fullscreenBtn').onclick=()=>{document.body.classList.toggle('fullscreen');setTimeout(resize,80)};
  document.querySelector('#atmosphereToggle').onclick=e=>{atmosphere=!atmosphere;e.currentTarget.classList.toggle('on',atmosphere);document.querySelector('.env-heading small').textContent=atmosphere?'Clear skies':'Vacuum mode';toast(atmosphere?'Atmosphere effects enabled':'Vacuum mode: gases and heat linger')};
  document.querySelector('#randomBtn').onclick=()=>{saveHistory();const ids=[1,2,3,5,6,7,10,11,12,13,14,17,19,20,21,22,23,24,25,26,27,28,29,30,32];for(let x=10;x<W-10;x++)for(let y=8;y<30;y++)if(Math.random()<.12)setCell(x,y,ids[rand(ids.length)]);toast('A little chaos, coming right up');beep(530,.08,.02)};
  document.querySelector('#rainBtn').onclick=()=>{saveHistory();for(let x=8;x<W-8;x+=2+rand(3))for(let k=0;k<18;k++)if(Math.random()<.8)setCell(x+rand(3)-1,rand(7),2);toast('Let it pour');};
  const modal=document.querySelector('#modalBackdrop');function showModal(kind){const title=document.querySelector('#modalTitle'),eyebrow=document.querySelector('#modalEyebrow'),content=document.querySelector('#modalContent');if(kind==='reactions'){eyebrow.textContent='EXPERIMENT & DISCOVER';title.textContent='Reaction cookbook.';content.innerHTML='<p class="modal-copy">Combine elements and see what happens. Heat, pressure and a little curiosity go a long way.</p><div class="modal-grid"><div class="modal-item"><b>Water + Fire</b><span>Water cools flames and becomes rising steam.</span></div><div class="modal-item"><b>Water + Lava</b><span>Instant stone, with a cloud of steam.</span></div><div class="modal-item"><b>Sand + Lava</b><span>Molten heat transforms sand into glass.</span></div><div class="modal-item"><b>Fire + Wood / Oil</b><span>Combustion spreads and leaves smoke behind.</span></div><div class="modal-item"><b>Fire / Lava + Explosives</b><span>Lights a fuse. Gunpowder, TNT, dynamite, C4 and nitro have different blast shapes and strength.</span></div><div class="modal-item"><b>Battery + Copper + Light</b><span>Connect a battery to a light with touching copper cells to complete the circuit.</span></div><div class="modal-item"><b>Water + Sand</b><span>They blend into slow-moving mud.</span></div><div class="modal-item"><b>Mud + Fire</b><span>Heat dries mud back into sand.</span></div><div class="modal-item"><b>Acid + Most things</b><span>Acid eats away at nearby materials.</span></div><div class="modal-item"><b>Water + Seeds</b><span>Seeds can take root in soil and grow.</span></div><div class="modal-item"><b>Warmth + Ice</b><span>Ice melts into water. Cold snow piles up.</span></div></div>'}else if(kind==='shortcuts'){eyebrow.textContent='YOUR HANDY SHORTCUTS';title.textContent='Hands on the controls.';content.innerHTML='<div class="key-row"><span>Brush, line, shape, fill, pick, erase, heat, cool</span><kbd>B · L · R · F · I · E · H · C</kbd></div><div class="key-row"><span>Pause / resume simulation</span><kbd>SPACE</kbd></div><div class="key-row"><span>Undo / redo</span><kbd>CTRL Z / CTRL Y</kbd></div><div class="key-row"><span>Pick a material</span><kbd>1 – 9</kbd></div><div class="key-row"><span>Search materials</span><kbd>/</kbd></div><div class="key-row"><span>Clear canvas</span><kbd>SHIFT X</kbd></div><p class="modal-copy">Tip: Right click and drag to erase quickly. Use the brush size and density sliders to shape your experiments.</p>'}else{eyebrow.textContent='A LITTLE GUIDE';title.textContent='Make a little mess.';content.innerHTML='<p class="modal-copy">Sandfall Lab v2 is a tiny physics playground. Pick a material, paint it into the world and watch the rules of matter do their thing. Mix materials, turn up the heat, or throw gravity out the window.</p><div class="modal-grid"><div class="modal-item"><b>Draw</b><span>Drag to pour or paint materials.</span></div><div class="modal-item"><b>Experiment</b><span>Water, fire, lava and plants react.</span></div><div class="modal-item"><b>Shape it</b><span>Lines, rectangles and a fill tool.</span></div><div class="modal-item"><b>Make it yours</b><span>Control weather, temperature, gravity, wind and brush.</span></div></div><p class="modal-copy">Keyboard: B brush · L line · R shape · F fill · I pick · E erase · Space pause · Ctrl+Z undo.</p>'}modal.classList.add('show')}
  document.querySelector('#helpBtn').onclick=()=>showModal('help');document.querySelector('#reactionsBtn').onclick=()=>showModal('reactions');document.querySelector('#shortcutsBtn').onclick=()=>showModal('shortcuts');document.querySelector('#modalClose').onclick=()=>modal.classList.remove('show');modal.onclick=e=>{if(e.target===modal)modal.classList.remove('show')};
  function keyboard(e){const tag=document.activeElement.tagName;if(tag==='INPUT'&&e.key!=='Escape')return;const key=e.key.toLowerCase();if(e.key===' '){e.preventDefault();document.querySelector('#playBtn').click()}else if((e.ctrlKey||e.metaKey)&&key==='z'){e.preventDefault();e.shiftKey?redo():undo()}else if((e.ctrlKey||e.metaKey)&&key==='y'){e.preventDefault();redo()}else if(key==='/'){e.preventDefault();document.querySelector('#materialSearch').focus()}else if(key==='b')setTool('brush');else if(key==='l')setTool('line');else if(key==='r'&&!e.shiftKey)setTool('rect');else if(key==='f')setTool('bucket');else if(key==='i')setTool('pick');else if(key==='e')setTool('erase');else if(key==='h')setTool('heat');else if(key==='c')setTool('cool');else if(e.shiftKey&&key==='x')document.querySelector('#clearBtn').click();else if(key==='m')document.querySelector('#randomBtn').click();else if(e.key==='Enter')document.querySelector('#rainBtn').click();else if(key>='1'&&key<='9')setMaterial(materials[+key-1].id);else if(key==='escape')modal.classList.remove('show');}
  document.addEventListener('keydown',keyboard);
  // Quick right-click erase; Ctrl/Meta+S exports the current world.
  canvas.addEventListener('pointerdown',e=>{if(e.button===2){e.preventDefault();restoreTool=tool;setTool('erase');const p=getPoint(e);mouseDown=true;lastPoint=p;saveHistory();stamp(p.x,p.y,0);}});
  canvas.addEventListener('pointerup',e=>{if(e.button===2&&restoreTool){setTool(restoreTool);restoreTool=null}});
  renderCategories();renderMaterials();setMaterial(selected);updateStats();
})();
