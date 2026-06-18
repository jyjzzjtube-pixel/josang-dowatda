/* ===== 조상이 도왔다 — 모바일 앱 로직 (P0 상업화 반영) ===== */
const SV = 'viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"';
const IC = {
  home:`<svg ${SV}><path d="M3.6 11 12 4.4 20.4 11"/><path d="M5.6 9.6V19h12.8V9.6"/><path d="M10 19v-4.2h4V19"/></svg>`,
  explore:`<svg ${SV}><circle cx="11" cy="11" r="6.3"/><path d="M20 20l-4.2-4.2"/></svg>`,
  mine:`<svg ${SV}><path d="M12 21v-7.5"/><path d="M12 13.5c-3.3 0-5.4-2.1-5.4-5C6.6 5.7 8.9 3.8 12 3.8s5.4 1.9 5.4 4.7c0 2.9-2.1 5-5.4 5z"/></svg>`,
  region:`<svg ${SV}><path d="M12 21s6-5.5 6-10a6 6 0 0 0-12 0c0 4.5 6 10 6 10z"/><circle cx="12" cy="11" r="2.2"/></svg>`,
  tree:`<svg ${SV}><circle cx="12" cy="5" r="2.3"/><circle cx="5.5" cy="18.5" r="2.3"/><circle cx="18.5" cy="18.5" r="2.3"/><path d="M12 7.3v3.4M12 10.7 6 16.4M12 10.7l6 5.7"/></svg>`,
  book:`<svg ${SV}><path d="M6 4h8.4A2.6 2.6 0 0 1 17 6.6V20H8.6A2.6 2.6 0 0 1 6 17.4z"/><path d="M9 8.5h5M9 11.5h5"/></svg>`,
  crown:`<svg ${SV}><path d="M4 18.5h16"/><path d="M4 18.5 5.4 8l4.1 4 2.5-5 2.5 5 4.1-4-1.4 10.5"/></svg>`,
  bowl:`<svg ${SV}><path d="M3.5 11h17a8.5 8.5 0 0 1-17 0z"/><path d="M9 7.2c0-1.1.6-1.7 1.6-2.2M13 7.2c0-1.1.6-1.7 1.6-2.2"/></svg>`,
  gift:`<svg ${SV}><rect x="4" y="9.5" width="16" height="10.5" rx="1.5"/><path d="M4 13.3h16M12 9.5V20"/><path d="M12 9.5C12 6.8 9.8 5.7 8.7 6.9 7.7 8 9.2 9.5 12 9.5zM12 9.5c0-2.7 2.2-3.8 3.3-2.6C16.3 8 14.8 9.5 12 9.5z"/></svg>`,
  ticket:`<svg ${SV}><path d="M4 9A1.5 1.5 0 0 1 5.5 7.5h13A1.5 1.5 0 0 1 20 9v1.4a1.7 1.7 0 0 0 0 3.2V15a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 4 15v-1.4a1.7 1.7 0 0 0 0-3.2z"/><path d="M14 7.8v8.4"/></svg>`,
  users:`<svg ${SV}><circle cx="9" cy="8" r="3"/><path d="M3.6 19a5.4 5.4 0 0 1 10.8 0"/><path d="M16 5.4a3 3 0 0 1 0 5.6M20.5 19a5 5 0 0 0-3.8-4.85"/></svg>`,
  child:`<svg ${SV}><circle cx="12" cy="6" r="2.5"/><path d="M12 8.5V15M8.5 11h7M9 20l3-5 3 5"/></svg>`,
  landmark:`<svg ${SV}><path d="M4 9 12 4l8 5"/><path d="M6 9.5v8M18 9.5v8M10 9.5v8M14 9.5v8"/><path d="M3.5 20h17"/></svg>`,
  cart:`<svg ${SV}><circle cx="9.5" cy="20" r="1.3"/><circle cx="17" cy="20" r="1.3"/><path d="M3 4.5h2.2l2 10.5h10l1.7-7.5H6.4"/></svg>`,
  flag:`<svg ${SV}><path d="M5.5 21V4.5M5.5 5.5h10L14 9l1.5 3.5h-10"/></svg>`,
  pen:`<svg ${SV}><path d="M4 20l4-1L18.5 8.5l-3-3L5 16z"/><path d="M14.5 6.5l3 3"/></svg>`
};
const TABS = [
  {id:'home', label:'홈', icon:IC.home},
  {id:'explore', label:'탐색', icon:IC.explore},
  {id:'mine', label:'내 가문', icon:IC.mine},
  {id:'region', label:'지역', icon:IC.region}
];
const SUBS = ['뿌리','인물','문화재','여행','맛'];
/* 한자 훈음(뜻·소리) — 데이터셋 성씨·본관 한자 (한문→한글 해석) */
const HUN = {
  '李':'오얏 리','金':'쇠 금','朴':'성씨 박','崔':'높을 최','鄭':'나라이름 정','姜':'성씨 강','趙':'나라이름 조',
  '林':'수풀 림','韓':'나라이름 한','吳':'나라이름 오','申':'펼 신','權':'권세 권','尹':'다스릴 윤',
  '全':'온전할 전','州':'고을 주','慶':'경사 경','海':'바다 해','密':'빽빽할 밀','陽':'볕 양','安':'편안할 안',
  '東':'동녘 동','坡':'언덕 파','平':'평평할 평','光':'빛 광','山':'메 산','義':'옳을 의','城':'재 성',
  '江':'강 강','陵':'큰언덕 릉','星':'별 성','廣':'넓을 광','延':'늘일 연','潘':'성씨 반','南':'남녘 남',
  '順':'순할 순','天':'하늘 천','萊':'명아주 래','日':'날 일','晉':'나아갈 진','漢':'한수 한','咸':'다 함',
  '羅':'벌일 라','淸':'맑을 청','氏':'성씨 씨','花':'꽃 화','德':'큰 덕','水':'물 수','張':'베풀 장',
  '偰':'성씨 설','遜':'겸손할 손','龍':'용 룡','祥':'상서로울 상'
};
function hunOf(ch){ return HUN[ch] || '뜻풀이 준비 중'; }

/* ---- 상태/네비게이션 ---- */
let stack = [{screen:'home'}];
function loadJSON(k){ try{ return JSON.parse(localStorage.getItem(k)); }catch(e){ return null; } }
function loadSessionJSON(k){ try{ return JSON.parse(sessionStorage.getItem(k)); }catch(e){ return null; } }
let myClan = loadJSON('josang_myClan');
let authUser = loadSessionJSON('josang_authUser');
let searchMode = 'genealogy';
let sponsorVisible = loadJSON('josang_sponsor_visible') === true;
const PUBLIC_URL = 'https://korean-roots-journey.vercel.app/';
const curRoute = () => stack[stack.length-1];
const find = (s,b) => CLANS.find(c=>c.surname===s && c.bon===b);
const bonsOf = s => CLANS.filter(c=>c.surname===s).sort((a,b)=>a.bon.localeCompare(b.bon,'ko'));
function popNum(c){ const m=(c.population||'').match(/([\d,]+)\s*만/); return m?parseInt(m[1].replace(/,/g,'')):0; }
function go(screen, params){ stack.push({screen, params:params||{}}); render(); }
function back(){ if(stack.length>1){ stack.pop(); render(); } }
function tab(id){ stack=[{screen:id}]; render(); }

/* ---- 리드 수집(알림받기) ---- */
function leads(){ return loadJSON('josang_leads') || []; }
function hasLead(f){ return leads().some(x=>x.feature===f); }
function notify(f){ const a=leads(); if(!a.some(x=>x.feature===f)){ a.push({feature:f, ts:Date.now()}); localStorage.setItem('josang_leads', JSON.stringify(a)); } toast('출시되면 알려드릴게요 · 신청 완료'); render(); }
function savedRoutes(){ return loadJSON('josang_savedRoutes') || []; }
function saveLocalJSON(k,v){ localStorage.setItem(k, JSON.stringify(v)); }
function saveRoute(type,id,label,meta){
  const a = savedRoutes();
  const key = `${type}:${id}`;
  if(!a.some(x=>x.key===key)){
    a.unshift({key,type,id,label,meta,ts:Date.now()});
    saveLocalJSON('josang_savedRoutes', a.slice(0,20));
  }
  toast('이 루트를 이 기기에 저장했습니다');
  render();
}
function routeSaved(type,id){ return savedRoutes().some(x=>x.key===`${type}:${id}`); }
function removeRoute(key){
  saveLocalJSON('josang_savedRoutes', savedRoutes().filter(x=>x.key!==key));
  toast('저장한 루트를 삭제했습니다');
  render();
}
function missionState(){ return loadJSON('josang_missions') || {}; }
function toggleMission(id){
  const m = missionState();
  m[id] = !m[id];
  saveLocalJSON('josang_missions', m);
  toast(m[id] ? '미션을 체크했습니다' : '미션 체크를 해제했습니다');
  render();
}
function copyText(text, okMsg){
  const done = () => toast(okMsg || '복사했습니다');
  if(navigator.clipboard?.writeText){
    navigator.clipboard.writeText(text).then(done).catch(()=>copyTextFallback(text, okMsg));
    return;
  }
  copyTextFallback(text, okMsg);
}
function copyTextFallback(text, okMsg){
  const area = document.createElement('textarea');
  area.value = text;
  area.setAttribute('readonly','');
  area.style.position = 'absolute';
  area.style.left = '-9999px';
  document.body.appendChild(area);
  area.select();
  try{ document.execCommand('copy'); toast(okMsg || '복사했습니다'); }
  catch(e){ toast('복사를 지원하지 않는 브라우저입니다'); }
  area.remove();
}
function copyRouteCard(type,id,label,meta){
  const kind = type === 'clan' ? '본관 기록' : '성씨·연원 기록';
  copyText(`조상이 도왔다 루트 카드\n${label}\n${kind} · ${meta}\n개인 가계 확정이 아닌 지역·기록 탐색 카드입니다.\n${PUBLIC_URL}`, '루트 카드를 복사했습니다');
}
function openSavedRoute(key){
  const item = savedRoutes().find(x=>x.key===key);
  if(!item){ toast('저장한 루트를 찾지 못했습니다'); return; }
  if(item.type === 'clan'){
    const parts = String(item.id || '').split('-');
    if(parts.length >= 2){ go('clan',{surname:parts[0], bon:parts.slice(1).join('-')}); return; }
  }
  if(item.type === 'track'){
    const id = String(item.id || '');
    if(id.startsWith('wide-')) go('nameTrack',{query:id.replace(/^wide-/,'') || item.label || ''});
    else go('nameTrack',{track:id});
    return;
  }
  toast('열 수 있는 루트 정보가 부족합니다');
}

/* ---- 출처 등급 배지 ---- */
function srcBadge(level, label){ return `<span class="src-badge ${level}">${label}</span>`; }
function levelLabel(level){
  return ({verified:'공개자료 확인', partial:'출처 확인 중', legend:'전승·설화', draft:'개인 확인 단계'})[level] || '개인 확인 단계';
}
function factBadge(level){
  const cls = level==='verified' ? 'verified' : level==='legend' ? 'legend' : level==='draft' ? 'todo' : 'partial';
  return srcBadge(cls, levelLabel(level));
}
function norm(v){ return String(v||'').replace(/\s+/g,'').toLowerCase(); }
function esc(v){ return String(v??'').replace(/[&<>"']/g, ch=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch])); }
function displayQuery(v){ return esc(String(v||'').replace(/[<>]/g,'').trim()); }
function nameTracks(){ return typeof NAME_TRACKS==='undefined' ? [] : NAME_TRACKS; }
function findTrack(q){
  const key = norm(q);
  return nameTracks().find(t => t.id===q || key.includes(norm(t.title)) || key.includes(norm(t.surname+t.bon)) || key.includes(norm(t.bon)) || key===norm(t.surname));
}
function storyBadge(t){ return srcBadge(t?.isGenealogy ? 'primary' : 'story', t?.isGenealogy ? '역사 문헌 기록' : '성씨·연원 기록'); }
function trackKind(t){ return t?.isGenealogy ? '역사 문헌 기록 트랙' : '성씨·연원 기록 트랙'; }
function trackGroup(t){ return t?.group || (t?.isGenealogy ? '역사 문헌 기록' : '성씨·연원 기록'); }
function trackAction(t){ return t?.nextStep || '가족 기억·생활 지역·공개 기록을 나눠 확인합니다.'; }
function trackPrinciples(){
  return `<div class="track-principles" aria-label="이름 기록 원칙">
    <div><b>동등</b><span>역사 문헌 기록과 성씨·연원 기록을 위아래로 나누지 않습니다.</span></div>
    <div><b>분리</b><span>본관 확정 전에는 특정 가계로 자동 연결하지 않습니다.</span></div>
    <div><b>환대</b><span>문헌에 바로 잡히지 않는 이름도 지역과 조상의 삶을 이야기할 수 있습니다.</span></div>
  </div>`;
}
function sourceLine(s,i,url){
  const safe = esc(s);
  return `<div class="source-line"><b>${i+1}</b><span>${url?`<a href="${esc(url)}" target="_blank" rel="noopener">${safe}</a>`:safe}</span></div>`;
}
function hanjaLine(t){ return t?.hanjaLine || `${t.bonHanja||''} ${t.surnameHanja||''}${t.surnameHanja?'氏':''}`.trim(); }

/* ---- 테스트 회원/로그인 ---- */
function authName(){ return authUser?.name || '방문자'; }
function authPill(){
  return `<button class="auth-pill ${authUser?'on':''}" data-act="auth-open">${authUser?`${esc(authName())} 님`:'테스트 로그인'}</button>`;
}
function authStrip(mode){
  const quiet = mode === 'quiet';
  if(authUser){
    return `<div class="auth-strip ${quiet?'quiet':''} signed">
      <div><b>${esc(authName())} 님</b><span>테스트 계정으로 로그인 중 · 실제 개인정보 전송 없음</span></div>
      <button data-act="auth-logout">로그아웃</button>
    </div>`;
  }
  return `<div class="auth-strip ${quiet?'quiet':''}">
    <div><b>회원가입·로그인 테스트</b><span>무료 무계정 이용은 그대로, 저장/예약 기능만 테스트합니다.</span></div>
    <button data-act="auth-open">시작</button>
  </div>`;
}
function openAuth(mode){
  let m=$('authModal');
  if(!m){ m=document.createElement('div'); m.id='authModal'; m.className='modal'; $('app').appendChild(m); }
  const isJoin = mode==='join';
  m.innerHTML=`<div class="modal-card auth-card">
    <div class="modal-head"><div><div class="modal-title">${isJoin?'테스트 회원가입':'테스트 로그인'}</div>
      <div class="modal-sub">서버 전송 없이 이 브라우저에만 저장됩니다.</div></div>
      <div class="modal-close" data-act="auth-close" role="button" aria-label="닫기">×</div></div>
    <div class="auth-tabs">
      <button class="${isJoin?'on':''}" data-act="auth-switch" data-mode="join">회원가입</button>
      <button class="${!isJoin?'on':''}" data-act="auth-switch" data-mode="login">로그인</button>
    </div>
    <div class="auth-safety"><b>테스트 안내</b><span>실명/실제 이메일 입력 금지. 별칭과 데모 이메일을 권장합니다. 입력값은 현재 탭 sessionStorage에만 저장됩니다.</span></div>
    <label class="auth-field"><span>별칭</span><input id="authName" value="${esc(authUser?.name||'')}" placeholder="예: 루트 탐색자"></label>
    <label class="auth-field"><span>데모 이메일</span><input id="authEmail" value="${esc(authUser?.email||'')}" placeholder="demo@korean-roots.app"></label>
    <button class="btn" data-act="${isJoin?'auth-join':'auth-login'}">${isJoin?'테스트 계정 만들기':'테스트 로그인'}</button>
    <button class="btn btn-line" data-act="auth-demo">데모 계정으로 바로 보기</button>
    <button class="text-action" data-act="auth-reset">이 브라우저의 테스트 데이터 초기화</button>
    <p class="auth-note">실제 인증·결제·문자 발송은 연결하지 않았습니다. 가계 증명·계보 인증·신분 확인 용도가 아닙니다.</p>
  </div>`;
  requestAnimationFrame(()=>m.classList.add('on'));
}
function closeAuth(){ const m=$('authModal'); if(m){ m.classList.remove('on'); setTimeout(()=>{ if(m&&m.parentNode) m.remove(); },220); } }
function isDemoEmail(email){
  const v = String(email||'').trim().toLowerCase();
  return !v || v === 'demo@korean-roots.app' || v.includes('demo') || /@(example\.com|example\.test|test\.local|invalid)$/.test(v);
}
function saveAuth(name,email){
  authUser = {name:name||'테스트 사용자', email:email||'test@korean-roots.app', mode:'test', ts:Date.now()};
  sessionStorage.setItem('josang_authUser', JSON.stringify(authUser));
  closeAuth(); toast(`${authName()} 님, 테스트 로그인되었습니다`); render();
}
function authFromForm(){
  const email = ($('authEmail')?.value||'').trim();
  if(!isDemoEmail(email)){ toast('실제 이메일은 넣지 마세요 · 데모 이메일만 허용'); return; }
  saveAuth(($('authName')?.value||'').trim(), email);
}
function logoutAuth(){
  authUser=null; sessionStorage.removeItem('josang_authUser'); localStorage.removeItem('josang_authUser'); toast('테스트 로그아웃되었습니다'); render();
}
function resetTestData(){
  authUser=null; myClan=null;
  ['josang_authUser','josang_myClan','josang_leads'].forEach(k=>localStorage.removeItem(k));
  sessionStorage.removeItem('josang_authUser');
  closeAuth(); toast('이 브라우저의 테스트 데이터를 지웠습니다'); render();
}

/* ---- 렌더 ---- */
const $ = id => document.getElementById(id);
function render(){
  const t = curRoute();
  renderAppbar(t);
  $('content').innerHTML = renderScreen(t);
  renderNav();
  postRender(t);
  $('content').scrollTop = 0;
}
function renderAppbar(t){
  const ab = $('appbar');
  if(t.screen==='clan'){
    const c = find(t.params.surname, t.params.bon);
    ab.innerHTML = `<div class="back" role="button" tabindex="0" aria-label="뒤로" data-act="back">‹</div>
      <div class="title" style="font-size:18px">${c.surname} ${c.bon}씨</div><div class="spacer"></div>${authPill()}`;
  } else if(t.screen==='nameTrack'){
    ab.innerHTML = `<div class="back" role="button" tabindex="0" aria-label="뒤로" data-act="back">‹</div>
      <div class="title" style="font-size:18px">이름 길</div><div class="spacer"></div>${authPill()}`;
  } else {
    ab.innerHTML = `<div class="seal" aria-hidden="true">姓</div>
      <div class="title">조상이 도왔다</div><div class="sub">루트지도</div><div class="spacer"></div>${authPill()}`;
  }
}
function renderNav(){
  const active = stack[0].screen;
  $('bottomnav').setAttribute('role','tablist');
  $('bottomnav').innerHTML = TABS.map(t=>`
    <div class="nav ${t.id===active?'on':''}" role="tab" aria-selected="${t.id===active}" tabindex="0" data-act="tab" data-tab="${t.id}">
      <span class="ic" aria-hidden="true">${t.icon}</span>${t.label}</div>`).join('');
}
function renderScreen(t){
  switch(t.screen){
    case 'home': return screenHome();
    case 'explore': return screenExplore();
    case 'mine': return screenMine();
    case 'region': return screenRegion();
    case 'clan': return screenClan(t.params);
    case 'nameTrack': return screenNameTrack(t.params||{});
    case 'searchResult': return screenSearchResult(t.params||{});
    default: return screenHome();
  }
}

/* ---- 검색 카드 ---- */
function searchCard(mode){
  const primary = mode === 'primary';
  const nameMode = searchMode === 'name';
  const sList = [...new Set(CLANS.map(c=>c.surname))];
  const sOpts = sList.map(s=>`<option value="${s}">${s} 씨</option>`).join('');
  return `<div class="search-card ${primary?'primary-search':''}">
    ${primary?`<div class="search-kicker">이름 하나로 시작</div><h2>어디서 시작할까요?</h2><p>${nameMode?'성씨만 알거나 아직 잘 모를 때도 지역·기억·공개 자료로 루트지도를 열 수 있어요.':'성씨와 본관을 알고 있을 때는 문헌 기록부터 차분히 확인합니다.'}</p>`:''}
    ${searchModeSwitch()}
    <div class="free-field"><label>${nameMode?'아는 단서':'성씨·본관·지역'}</label><input id="freeName" aria-label="성씨 또는 이름 길 검색" placeholder="${nameMode?'예: 설, 화산 이, 가족이 오래 산 지역':'예: 전주 이, 경주 김, 안동'}"></div>
    ${nameMode?`<div class="search-row one">
      ${trackQuickChips()}
      <div class="field"><label>분류</label><select id="selTrack" aria-label="성씨·연원 기록 분류">${trackOptions()}</select></div>
    </div>`:`<div class="search-row">
      <div class="field"><label>성씨</label><select id="selS" aria-label="성씨">${sOpts}</select></div>
      <div class="field"><label>본관</label><select id="selB" aria-label="본관">${bonOptions(sList[0])}</select></div>
    </div>`}
    <button class="btn" data-act="search">${nameMode?'넓게 루트지도 열기':'기록으로 루트지도 열기'}</button>
  </div>`;
}
function trustRail(){
  return `<div class="trust-rail" aria-label="서비스 기준">
    <div><b>무료</b><span>무계정 이용</span></div>
    <div><b>OSM</b><span>한글 지도</span></div>
    <div><b>분리</b><span>문헌/연원 기록</span></div>
    <div><b>표시</b><span>출처 등급</span></div>
  </div>`;
}
function publicNotice(){
  return `<div class="public-notice">
    <b>안내 기준</b>
    <span>가계 증명서가 아닙니다. 성씨·본관 정보를 문화관광 관점에서 안내하며, 계보 인증·신분 확인 용도로 사용할 수 없습니다.</span>
  </div>`;
}
function routeSavePanel(type,item){
  const id = item.id || `${item.surname || ''}-${item.bon || ''}` || item.title;
  const label = item.title || `${item.surname} ${item.bon}씨`;
  const meta = item.region || trackGroup(item) || '루트 기록';
  const saved = routeSaved(type,id);
  return `<div class="route-save-panel">
    <div><b>${saved?'저장된 루트':'이 루트 저장'}</b><span>이 기기에만 저장됩니다. 개인 가계나 혈통을 확정하지 않습니다.</span></div>
    <div class="route-save-actions">
      <button type="button" class="${saved?'saved':''}" data-act="saveRoute" data-type="${type}" data-id="${esc(id)}" data-label="${esc(label)}" data-meta="${esc(meta)}">${saved?'저장됨':'저장'}</button>
      <button type="button" class="copy" data-act="copyRoute" data-type="${type}" data-id="${esc(id)}" data-label="${esc(label)}" data-meta="${esc(meta)}">루트 카드 복사</button>
    </div>
  </div>`;
}
function savedRoutesSection(){
  const items = savedRoutes();
  const empty = `<div class="saved-empty"><b>저장한 루트가 아직 없습니다</b><span>본관 기록이나 성씨·연원 기록에서 “이 루트 저장”을 누르면 여기에 모입니다.</span></div>`;
  const rows = items.map(item=>`<div class="saved-route">
    <div class="saved-route-main">
      <span>${item.type==='clan'?'본관 기록':'성씨·연원 기록'}</span>
      <b>${esc(item.label)}</b>
      <em>${esc(item.meta || '루트 기록')}</em>
    </div>
    <div class="saved-route-actions">
      <button type="button" data-act="openSavedRoute" data-key="${esc(item.key)}">열기</button>
      <button type="button" class="ghost" data-act="removeRoute" data-key="${esc(item.key)}">삭제</button>
    </div>
  </div>`).join('');
  return `<section class="saved-routes">
    <div class="saved-routes-head"><div><span>내 기기 보관함</span><b>저장한 루트</b></div><small>${items.length}개</small></div>
    ${items.length?rows:empty}
  </section>`;
}
const MISSION_ITEMS = [
  ['photo','사진 한 장 보기','지역 이미지나 문화재 사진을 보고 한 줄로 느낌을 남깁니다.'],
  ['hanja','한자 하나 따라쓰기','성씨나 본관 한자 중 하나를 천천히 따라 써봅니다.'],
  ['food','지역 음식 하나 알아보기','향토음식·시장·노포 이야기를 먼저 읽습니다.'],
  ['question','가족에게 물어볼 질문 1개','“우리 가족이 오래 산 동네는 어디였나요?”처럼 가볍게 시작합니다.']
];
function missionPanel(scope,label){
  const state = missionState();
  return `<section class="mission-panel">
    <div class="sec-label">지역 미션 카드</div>
    <h3>${esc(label || '오늘의 지역 미션')}</h3>
    <p>공부처럼 무겁지 않게, 이름에서 지역으로 이어지는 작은 행동을 체크합니다.</p>
    <div class="mission-grid">${MISSION_ITEMS.map(([id,title,body])=>{
      const key = `${scope}:${id}`;
      return `<button type="button" class="mission-card ${state[key]?'done':''}" data-act="toggleMission" data-id="${esc(key)}">
        <b>${title}</b><span>${body}</span><em>${state[key]?'체크됨':'해보기'}</em>
      </button>`;
    }).join('')}</div>
  </section>`;
}
function reportDemoPanel(){
  const checked = Object.values(missionState()).filter(Boolean).length;
  const metrics = [
    ['저장한 루트', savedRoutes().length],
    ['미션 체크', checked],
    ['알림 신청', leads().length],
    ['협찬 스팟 확인', sponsorVisible ? 1 : 0]
  ];
  return `<section class="report-panel">
    <div class="sec-label">월간 리포트 데모</div>
    <h3>민간 파일럿 지표</h3>
    <p>지자체·상권 제안 전에, 이 브라우저의 테스트 행동만 분리해 보는 샘플입니다.</p>
    <div class="report-grid">${metrics.map(([k,v])=>`<div class="metric-card"><b>${v}</b><span>${k}</span></div>`).join('')}</div>
    <button type="button" class="report-copy" data-act="copyReport">리포트 문구 복사</button>
  </section>`;
}
function copyReport(){
  const checked = Object.values(missionState()).filter(Boolean).length;
  copyText(`조상이 도왔다 월간 리포트 데모\n저장한 루트 ${savedRoutes().length}개\n미션 체크 ${checked}개\n알림 신청 ${leads().length}개\n협찬 스팟 확인 ${sponsorVisible ? 1 : 0}회\n이 수치는 현재 브라우저의 민간 파일럿 테스트 값이며, 공공 인증이나 수익 보장을 의미하지 않습니다.`, '리포트 문구를 복사했습니다');
}
function feedbackCta(scope){
  const items = [
    ['표현신고','불쾌한 표현 신고'],
    ['자료정정','자료 정정 요청'],
    ['귀속오류','가계 귀속 오류 신고']
  ];
  return `<section class="feedback-cta">
    <div><b>표현·자료 바로잡기</b><span>사람을 평가하거나 개인 가계를 확정하는 표현은 받지 않습니다.</span></div>
    <div class="feedback-actions">${items.map(([id,label])=>`<button type="button" data-act="notify" data-feature="${id}:${scope}">${label}</button>`).join('')}</div>
  </section>`;
}
function homePathBar(){
  return `<div class="path-bar">
    <span>이름 입력</span><i></i><span>문헌/연원 기록 분기</span><i></i><span>지도 확인</span>
  </div>`;
}
function bonOptions(s){
  const list = bonsOf(s).map(c=>`<option value="${c.bon}">${c.bon} 본관</option>`).join('');
  return `<option value="__auto__">잘 모르겠어요</option>${list}`;
}
function searchModeSwitch(){
  const items = [
    ['genealogy','기록으로 찾기','성씨와 본관을 알고 있을 때'],
    ['name','넓게 둘러보기','성씨만 알거나 아직 잘 모를 때']
  ];
  return `<div class="mode-switch" role="tablist" aria-label="검색 모드">${items.map(([id,label,meta])=>`
    <button type="button" class="${searchMode===id?'on':''}" role="tab" aria-selected="${searchMode===id?'true':'false'}" data-act="searchMode" data-mode="${id}">
      <b>${label}</b><span>${meta}</span>
    </button>`).join('')}</div>`;
}
function trackQuickChips(){
  const items = [
    ['bon-unknown','본관을 몰라요'],
    ['rare-name-record','희성·새 성씨'],
    ['multicultural-name-record','다문화·귀화 이름'],
    ['hwasan-lee','이주·정착 이야기']
  ];
  return `<div class="situation-chips" aria-label="넓게 둘러보기 상황 선택">
    ${items.map(([id,label])=>`<button type="button" data-act="pickTrack" data-track="${id}">${label}</button>`).join('')}
  </div>`;
}
function trackOptions(){
  const opts = nameTracks().map(t=>`<option value="${esc(t.id)}">${esc(trackGroup(t))} · ${esc(t.title)}</option>`).join('');
  return `<option value="__auto__">상황에 맞게 안내</option>${opts}`;
}
function nameTrackIntro(){
  const tracks = nameTracks().slice(0,5).map(trackRow).join('');
  return `<div class="name-track-card">
    <div class="sec-label">성씨·연원 기록</div>
    <h3>문헌에 바로 잡히지 않아도, 조상의 이야기는 사라지지 않습니다</h3>
    <p>희성·귀화성·본관 모름·새 성씨는 결핍으로 보지 않습니다. 특정 가계로 단정하지 않고, 가족 기억과 생활 지역, 공개 기록을 모아 별도 스토리로 안내합니다.</p>
    ${trackPrinciples()}
    <div class="track-list">${tracks}</div>
    <button class="btn btn-line" data-act="goNameTrack" data-query="">성씨·연원 기록 모두 보기</button>
  </div>`;
}
function trackRow(t){
  return `<div class="track-row" data-act="goNameTrack" data-track="${t.id}">
    <div class="track-seal" style="--c:${t.accent}">${t.bonHanja}</div>
    <div><div class="track-name">${t.title}</div><div class="track-meta">${trackGroup(t)} · ${t.type} · ${t.region}</div></div>
    <span class="track-level ${t.verifyLevel}">${levelLabel(t.verifyLevel)}</span>
  </div>`;
}
function fallbackTrackCards(query){
  const picks = ['bon-unknown','rare-name-record','multicultural-name-record'].map(findTrack).filter(Boolean);
  return `<div class="route-choice">
    ${picks.map(t=>`<div class="route-card" data-act="goNameTrack" data-track="${t.id}" data-query="${displayQuery(query)}">
      <div class="track-seal" style="--c:${t.accent}">${t.bonHanja}</div>
      <b>${t.group || t.title}</b>
      <span>${t.story}</span>
      <em>${trackAction(t)}</em>
    </div>`).join('')}
  </div>`;
}

function quickRouteCards(){
  const a = CLANS[0], b = nameTracks()[0];
  return `<div class="quick-grid">
    <div class="quick-card" data-act="goClan" data-surname="${a.surname}" data-bon="${a.bon}">
      <span>본관 기록</span><b>${a.surname} ${a.bon}씨</b><em>${a.region} · 지도 보기</em>
    </div>
    <div class="quick-card alt" data-act="goNameTrack" data-track="${b.id}">
      <span>성씨·연원 기록</span><b>${b.title}</b><em>${b.region} · 별도 길</em>
    </div>
  </div>`;
}

function homeMapPreview(){
  return `<div class="home-map-preview" data-act="tab" data-tab="region">
    <div><span>전국 루트 지도</span><b>가문 연고지 · 성씨·연원 기록 · 관광 · 맛집</b></div>
    <button>지도 보기</button>
  </div>`;
}

function todayRegionShot(){
  return `<section class="region-shot" data-act="goClan" data-surname="이" data-bon="전주">
    <div class="shot-art" aria-hidden="true"><span>全州</span></div>
    <div class="shot-body">
      <span class="shot-label">오늘의 지역 한 컷</span>
      <h3>오늘은 전주로 이어지는 길</h3>
      <p>경기전에서 남부시장까지, 이름이 닿는 동네를 3분 코스로 봅니다.</p>
      <button type="button">루트 보기</button>
    </div>
  </section>`;
}

const BUSINESS_LANES = [
  {
    id:'public-region',
    label:'공공',
    title:'생활인구 루트',
    body:'이름에서 시작한 지역 방문을 지자체 관광관, 스탬프 코스, 가족 여행 과제로 연결합니다.',
    metric:'방문·체류·코스 저장',
    action:'지자체 제안 패키지'
  },
  {
    id:'local-shop',
    label:'상권',
    title:'소상공인 스토리 광고',
    body:'노포, 전통시장, 청년 한식, 특산물을 가문·지역 이야기 옆에 표시하되 광고·협찬 표기를 분명히 둡니다.',
    metric:'클릭·예약·쿠폰 사용',
    action:'가게별 스토리 카드'
  },
  {
    id:'regional-image',
    label:'이미지',
    title:'지역 이미지 보드',
    body:'전주, 안동, 경주, 김해처럼 지역의 색·음식·문화재를 한 장의 공유 이미지로 묶어 방문 욕구를 만듭니다.',
    metric:'공유·저장·재방문',
    action:'지역별 시각 패키지'
  },
  {
    id:'data-report',
    label:'데이터',
    title:'관광 데이터 리포트',
    body:'관광공사 데이터랩, 방문자수, 검색·저장 이벤트를 분리해 지역 홍보 성과를 추적합니다.',
    metric:'지역 단위 지표',
    action:'월간 리포트'
  },
  {
    id:'education',
    label:'교육',
    title:'재미있는 역사 공부',
    body:'퀴즈, 한자 따라쓰기, 가족 인터뷰 미션으로 초등·가족·청년층이 부담 없이 들어오게 합니다.',
    metric:'퀴즈·미션 완료',
    action:'학교·가족 체험'
  }
];

function businessImpactSection(mode){
  const compact = mode === 'compact';
  const cards = BUSINESS_LANES.map(lane=>`<div class="impact-card" data-act="notify" data-feature="${lane.id}">
    <div class="impact-top"><span>${lane.label}</span><b>${lane.title}</b></div>
    <p>${lane.body}</p>
    <div class="impact-meta"><em>${lane.metric}</em><strong>${lane.action}</strong></div>
  </div>`).join('');
  return `<section class="business-panel ${compact?'compact':''}">
    <div class="sec-label">지역 활성화 모델</div>
    <h3>재미있는 루트가 지역 소비로 이어지는 구조</h3>
    <p class="business-lead">사용자는 이름과 지역을 배우고, 지역은 방문 이유를 얻고, 소상공인은 스토리와 쿠폰·예약·광고 슬롯으로 고객을 만납니다.</p>
    <div class="impact-grid">${cards}</div>
    <div class="revenue-stack" aria-label="수익 루트">
      <div><b>무료 이용자</b><span>검색·지도·퀴즈</span></div>
      <i></i>
      <div><b>지역 방문</b><span>코스 저장·쿠폰</span></div>
      <i></i>
      <div><b>사업 수익</b><span>B2B 리포트·광고·제휴</span></div>
    </div>
    <div class="sponsor-toggle">
      <div><b>광고·협찬 스팟 보기</b><span>꺼도 학습 루트는 그대로 볼 수 있습니다.</span></div>
      <button type="button" class="${sponsorVisible?'on':''}" data-act="toggleSponsor">${sponsorVisible?'켜짐':'보기'}</button>
    </div>
    ${sponsorVisible?sponsorSpotCards():''}
    ${reportDemoPanel()}
    <div class="risk-note">수익·방문 효과를 보장하지 않습니다. 광고·협찬 라벨을 표시하고, 개인 계보나 민감정보를 광고 타깃으로 쓰지 않는 방향으로 설계합니다.</div>
  </section>`;
}
function sponsorSpotCards(){
  const spots = [
    ['광고·협찬','전통시장 스토리 스팟','지역 루트 옆에 시장·골목 이야기를 붙입니다. 일반 추천과 분리 표시합니다.'],
    ['제휴 테스트','한 그릇 기억 스팟','향토음식·노포·청년 가게를 지역 이야기 맥락으로 보여줍니다.'],
    ['민간 파일럿','지역 관심 리포트','저장·퀴즈·지도 클릭 같은 관심 지표를 월간 제안 자료로 묶습니다.']
  ];
  return `<div class="sponsor-spots" aria-label="광고 협찬 스팟">
    ${spots.map(s=>`<div class="sponsor-card"><span>${s[0]}</span><b>${s[1]}</b><p>${s[2]}</p></div>`).join('')}
  </div>`;
}

/* ---- 홈 ---- */
function screenHome(){
  const feat = CLANS.slice(0,3).map(clanRow).join('');
  const chips = CLANS.map(c=>`<span class="chip" data-act="goClan" data-surname="${c.surname}" data-bon="${c.bon}">${c.surname} ${c.bon}씨</span>`).join('');
  return `<div class="screen">
    <section class="hero command-hero">
      <div class="hero-badge">무료로 내 루트 보기</div>
      <h1 class="hero-title">내 이름이 닿는 지역을<br><em>지도에서 바로 확인</em></h1>
      <p class="hero-desc">성씨·본관 기록은 기록대로, 본관을 모르는 이름은 성씨·연원 기록으로 안내합니다.</p>
      ${homePathBar()}
    </section>
    ${searchCard('primary')}
    ${trustRail()}
    ${authStrip('quiet')}
    ${homeMapPreview()}
    ${todayRegionShot()}
    ${missionPanel('home','오늘 바로 해볼 지역 미션')}
    <div class="home-branch">
      <b>문헌 기록만이 뿌리의 전부는 아닙니다.</b>
      <span>본관 문헌으로 바로 확정되지 않는 이름도 조상과 지역의 이야기를 가질 수 있습니다. 앱은 두 길을 동등하게, 그러나 헷갈리지 않게 나눠 보여줍니다.</span>
    </div>
    ${businessImpactSection('compact')}
    ${quickRouteCards()}
    ${publicNotice()}
    <div class="quiz-card" data-act="quiz">
      <div class="quiz-ic">퀴</div>
      <div><div class="quiz-t">뿌리 퀴즈 한 판</div><div class="quiz-s">내 성씨·시조 상식, 몇 점 나올까?</div></div>
      <div class="quiz-go">시작 ›</div>
    </div>
    <div class="row-head">이런 가문도 있어요</div>
    ${feat}
    ${nameTrackIntro()}
    <div class="row-head">바로 찾아보기</div>
    <div class="chips">${chips}</div>
    <div class="neutral-note">성씨와 본관은 나를 설명하는 여러 결 중 하나일 뿐입니다. 모든 성씨와 뿌리는 동등하며, 가문에 높고 낮음은 없습니다.</div>
  </div>`;
}

/* ---- 탐색 ---- */
function screenExplore(){
  const rows = [...CLANS].sort((a,b)=>(a.surname+a.bon).localeCompare(b.surname+b.bon,'ko')).map(clanRow).join('');
  return `<div class="screen">
    <div class="sec-label">탐색</div>
    <h2 class="scr-h">성씨로 찾는 내 뿌리</h2>
    <p class="muted" style="font-size:13px;margin:6px 0 14px">현재 ${CLANS.length}개 가문 수록 · 계속 더해갑니다</p>
    ${searchCard()}
    ${nameTrackIntro()}
    <div class="row-head">전체 가문 (가나다순)</div>
    ${rows}
    ${publicNotice()}
  </div>`;
}
function searchMatches(query){
  const key = norm(query);
  const hit = v => {
    const n = norm(v || '');
    return !!n && (key.includes(n) || n.includes(key));
  };
  const clans = CLANS.filter(c => hit(c.surname) || hit(c.bon) || hit(c.surname+c.bon) || hit(c.bon+c.surname));
  const tracks = nameTracks().filter(t => hit(t.surname) || hit(t.bon) || hit(t.title) || hit(t.type) || hit(t.region) || hit(t.surname+t.bon));
  return {clans:[...new Map(clans.map(c=>[`${c.surname}-${c.bon}`,c])).values()], tracks:[...new Map(tracks.map(t=>[t.id,t])).values()]};
}
function screenSearchResult(p){
  const query = (p.query||'').trim();
  const found = searchMatches(query);
  const clanRows = found.clans.length ? found.clans.slice(0,8).map(clanRow).join('') : '';
  const trackRows = found.tracks.length ? found.tracks.slice(0,8).map(trackRow).join('') : '';
  return `<div class="screen">
    <section class="result-hero">
      <div class="sec-label">검색 결과</div>
      <h2>「${displayQuery(query)}」을 바로 본관으로 단정하지 않습니다</h2>
      <p>${found.clans.length + found.tracks.length ? '기록 후보를 나눠 보여드립니다.' : '아직 바로 일치하는 기록은 없어요. 그래도 성씨·연원 기록 트랙에서 지역·유래·스토리 후보를 이어서 확인할 수 있습니다.'}</p>
    </section>
    ${found.clans.length?`<div class="row-head">본관 기록 후보</div>${clanRows}`:''}
    <div class="row-head">${found.tracks.length?'성씨·연원 기록 후보':'아직 자료가 적은 이름'}</div>
    ${found.tracks.length?`<div class="track-list">${trackRows}</div>`:`<div class="card zero-card"><b>아직 본관 기록으로 단정하지 않습니다.</b><span>그래도 빈손이 아닙니다. 이름이 이어진 생활권, 가족 기억, 공개 통계에서 시작하는 세 가지 기록 길을 선택할 수 있습니다.</span>${fallbackTrackCards(query)}<button class="btn" data-act="goNameTrack" data-query="${displayQuery(query)}">안전하게 기록 시작</button></div>`}
    ${feedbackCta('search')}
    ${publicNotice()}
  </div>`;
}
function clanRow(c){
  return `<div class="clan-row" data-act="goClan" data-surname="${c.surname}" data-bon="${c.bon}">
    <div class="emblem" style="--c:${c.accent}">${c.bonHanja}</div>
    <div class="info"><div class="nm">${c.surname} ${c.bon}씨${c.badge?` <span class="context-chip">${c.badge}</span>`:''}${c.verifyLevel==='draft'?` <span class="draft-tag">확인 필요</span>`:''}</div><div class="tg">${c.tagline}</div></div>
    <div class="arr" aria-hidden="true">›</div></div>`;
}

/* ---- 후크(알림받기 리드수집) ---- */
function hook(icon, title, sub, feature){
  const done = hasLead(feature);
  return `<div class="hook ${done?'notified':''}" data-act="notify" data-feature="${feature}">
    <span class="hi" aria-hidden="true">${icon}</span>
    <div><div class="ht">${title}</div><div class="hs">${sub}</div></div>
    <span class="soon">${done?'신청완료 ✓':'알림받기'}</span></div>`;
}

/* ---- 내 가문 ---- */
function screenMine(){
  if(!myClan){
    return `<div class="screen">
    ${authStrip()}
    ${savedRoutesSection()}
    <div class="empty">
      <div class="big" aria-hidden="true">${IC.tree}</div><h3>아직 등록된 가문이 없어요</h3>
      <p>성씨와 본관, 또는 성씨·연원 기록을 찾아<br>이 기기에 테스트 저장할 수 있어요.</p>
      <button class="btn" data-act="tab" data-tab="explore" style="max-width:240px;margin:0 auto">성씨·연원 기록 찾기</button>
    </div></div>`;
  }
  const c = find(myClan.surname, myClan.bon);
  return `<div class="screen">
    <div class="sec-label">내 가문</div>
    <div class="detail-hero" style="--c:${c.accent}">
      <div class="emblem" style="--c:${c.accent}">${c.bonHanja}</div>
      <div class="nm">${c.surname} ${c.bon}씨</div>
      <div class="tg">“${c.tagline}”</div>
      <div class="meta">시조 ${c.founder} · 연고지 ${c.region}</div>
    </div>
    ${savedRoutesSection()}
    <div class="clan-row" data-act="goClan" data-surname="${c.surname}" data-bon="${c.bon}">
      <div class="emblem" style="--c:${c.accent}">${c.bonHanja}</div>
      <div class="info"><div class="nm">가문 백과 다시 보기</div><div class="tg">시조·인물·문화재·여행</div></div>
      <div class="arr" aria-hidden="true">›</div></div>
    <div class="action">
      ${hook(IC.tree,'우리 기록 노트 만들기','가족 기억을 이 브라우저에서 테스트 정리','가계도')}
      ${hook(IC.book,'가문 이야기 책','우리 가문 이야기를 책으로','가문역사책')}
      ${hook(IC.crown,'기록 보관 알림','문헌 열람이 아니라 테스트 저장·정정 알림','기록보관')}
    </div>
    <button class="btn btn-line" data-act="unregister" style="margin-top:8px">등록 가문 변경</button>
  </div>`;
}

/* ---- 지역(둘러보기) ---- */
function screenRegion(){
  const items = [
    [IC.landmark,'지자체 관광관','전주·안동·경주·김해관','지자체관'],
    [IC.bowl,'향토음식 백과사전','지역별 음식 모아보기','향토음식백과'],
    [IC.gift,'지역 특산물 장터','밀키트·전통주·한과 구매','특산물장터'],
    [IC.ticket,'전통문화 체험 예약','한지·다도·한복·전통주','체험예약'],
    [IC.users,'문중·모임 안내 도구','공지·행사·자료 정리 테스트','종친회'],
    [IC.child,'어린이 역사교육','성씨 찾기·퀴즈·스탬프투어','어린이교육']
  ].map(m=>{const done=hasLead(m[3]); return `<div class="menu-item ${done?'notified':''}" data-act="notify" data-feature="${m[3]}">
    <span class="mi" aria-hidden="true">${m[0]}</span>
    <div><div class="mt">${m[1]}</div><div class="ms">${m[2]}</div></div>
    <span class="soon">${done?'신청완료 ✓':'알림받기'}</span></div>`;}).join('');
  return `<div class="screen">
    <section class="region-head">
      <div class="sec-label">지역 지도</div>
      <h2 class="scr-h">전국 루트 지도</h2>
      <p>가문 연고지와 성씨·연원 기록을 먼저 보고, 관광지·맛집은 보조 레이어로 켭니다.</p>
    </section>
    ${worldMapSection()}
    ${regionCurationSection()}
    ${missionPanel('region','지도에서 고른 지역 미션')}
    ${businessImpactSection()}
    <div class="row-head compact">다음 연결 기능</div>
    ${items}
    <div class="card" style="margin-top:14px;text-align:center">
      <div class="serif" style="font-size:16px;color:var(--brand-text)">조상이 도왔다</div>
      <p class="muted" style="font-size:12px;margin-top:6px">모든 성씨와 뿌리는 동등합니다 · 이 앱은 가문의 우열을 가리지 않습니다<br>데이터=출처 표시 자료·일부 확인 중 · 지도=OpenStreetMap(무료)</p>
    </div>
    ${publicNotice()}
  </div>`;
}

function regionCurationSection(){
  return `<section class="region-curation">
    <div class="row-head compact">지역 한 컷</div>
    <div class="region-image-grid">
      <div class="region-image-card ink"><b>전주</b><span>경기전과 시장 골목이 이어지는 하루</span></div>
      <div class="region-image-card green"><b>안동</b><span>서원과 전통마을을 천천히 걷는 길</span></div>
      <div class="region-image-card gold"><b>경주</b><span>천년 유적과 한 끼 기억이 만나는 도시</span></div>
    </div>
    <div class="row-head compact">오늘의 루트</div>
    <div class="local-route">
      <div><b>기록이 남은 곳</b><span>경기전 · 한옥마을</span></div>
      <div><b>한 그릇 기억</b><span>전주비빔밥 · 콩나물국밥</span></div>
      <div><b>지역 협력</b><span>파트너가 있을 때 광고·협찬 라벨로 표시</span></div>
    </div>
  </section>`;
}

function worldMapSection(){
  return `<div class="map-card world-map-card">
    <div class="map-title-row">
      <div><b>전국 루트 지도</b><span>지도 레이어를 껐다 켜며 구분합니다</span></div>
    </div>
    <div class="layer-controls four" aria-label="전국 지도 레이어">
      <button class="layer-toggle on" data-act="toggleMapLayer" data-layer="family"><span class="dot family"></span>가문</button>
      <button class="layer-toggle" data-act="toggleMapLayer" data-layer="tour"><span class="dot tour"></span>관광</button>
      <button class="layer-toggle" data-act="toggleMapLayer" data-layer="food"><span class="dot food"></span>맛집</button>
      <button class="layer-toggle on" data-act="toggleMapLayer" data-layer="story"><span class="dot story"></span>연원기록</button>
    </div>
    <div id="worldMap"></div>
    <div class="map-note">역사 문헌 기록은 CLANS, 성씨·연원 기록은 별도 스토리 트랙입니다 · 좌표는 지역 중심 표시</div>
  </div>`;
}

/* ---- 성씨·연원 길(희성·귀화성·본관 미상 포용 트랙) ---- */
function screenNameTrack(p){
  const track = p.track ? findTrack(p.track) : findTrack(p.query);
  const query = (p.query||'').trim();
  const rows = nameTracks().map(trackRow).join('');
  if(!track){
    return `<div class="screen">
      <section class="name-hero">
        <div class="sec-label">성씨·연원 기록</div>
        <h2>본관을 몰라도, 기록은 시작할 수 있습니다</h2>
        <p>${query?`「${displayQuery(query)}」 검색 결과가 아직 역사 문헌 기록에는 없습니다.`:'본관을 몰라도 시작할 수 있는 별도 길입니다.'} 이 화면은 성씨·생활권·공개자료를 모아 보는 안내이며, 특정 가계로 단정하지 않습니다.</p>
        ${factBadge('partial')}
      </section>
      ${routeSavePanel('track',{id:`wide-${query||'start'}`, title:query?`${query} 넓게 둘러보기`:'넓게 둘러보기 루트', region:'성씨·연원 기록'})}
      ${missionPanel(`track-wide-${query||'start'}`,'본관을 모를 때 시작하는 미션')}
      ${feedbackCta('nameTrack')}
      ${trackPrinciples()}
      <div id="nameMap"></div>
      <div class="card origin"><h4>분류 안내</h4><p>검색에서 바로 잡히지 않는 이름은 본관 모름, 희성·새 성씨, 다문화·귀화 이름처럼 따로 분류합니다. 이 분류는 낮은 단계가 아니라 확인 방식의 차이입니다. 두 출처 이상으로 확인되기 전까지는 출처 등급을 올리지 않습니다.</p></div>
      <div class="row-head">선택할 수 있는 성씨·연원 기록</div>
      <div class="track-list">${rows}</div>
    </div>`;
  }
  return `<div class="screen">
    <section class="detail-hero" style="--c:${track.accent}">
      <div class="emblem" style="--c:${track.accent}">${track.bonHanja}</div>
      <div class="nm">${track.title}</div>
      <div class="hanja">${hanjaLine(track)}</div>
      <div class="tg">“${track.badge}”</div>
      <div class="meta">${trackGroup(track)} · ${track.type} · ${track.region}</div>
      <div>${storyBadge(track)} ${factBadge(track.verifyLevel)}</div>
    </section>
    ${routeSavePanel('track', track)}
    ${missionPanel(`track-${track.id}`,'이 이름 길에서 해볼 미션')}
    ${feedbackCta('nameTrack')}
    <div id="nameMap"></div>
    <p class="story">${track.story}</p>
    <div class="card origin"><h4>${track.isGenealogy?'유래':'스토리텔링 방식'}</h4><p>${track.origin}</p>${storyBadge(track)} ${factBadge(track.verifyLevel)}</div>
    <div class="card"><h4>다음 확인</h4><p class="track-next">${trackAction(track)}</p></div>
    <div class="card"><h4>출처 메모</h4>${track.sources.map((s,i)=>sourceLine(s,i,track.sourceUrls?.[i])).join('')}
      <div class="disclaimer">${track.isGenealogy?'역사 문헌 기록을 참고하지만 앱의 표기는 안내용입니다.':'이 트랙은 역사 문헌 기록과 구분된 성씨·연원 기록입니다. 이름·성씨·생활 지역을 연결해 보는 스토리 안내입니다.'} 가계 확정 아님을 전제로 보여주며, 두 출처 이상으로 확인되기 전에는 출처 등급을 올리지 않습니다. 좌표는 지역 중심 표시이며, 세부 주소로 단정하지 않습니다.</div></div>
    <div class="row-head">다른 성씨·연원 기록</div>
    <div class="track-list">${nameTracks().filter(x=>x.id!==track.id).map(trackRow).join('')}</div>
  </div>`;
}

/* ---- 가문 상세 ---- */
function screenClan(p){
  const c = find(p.surname, p.bon);
  const sub = p.sub || '뿌리';
  const seg = SUBS.map(s=>`<div class="s ${s===sub?'on':''}" role="tab" aria-selected="${s===sub}" tabindex="0" data-act="sub" data-sub="${s}">${s}</div>`).join('');
  const others = CLANS.filter(x=>x.surname===c.surname && x.bon!==c.bon);
  const also = others.length ? `<div class="also-bon">
    <span style="font-size:12.5px;color:var(--sub);align-self:center">같은 ${c.surname}씨 다른 본관 ›</span>
    ${others.map(x=>`<span class="ab" data-act="goClan" data-surname="${x.surname}" data-bon="${x.bon}"><b>${x.bon}</b> ${x.surname}씨</span>`).join('')}</div>` : '';
  return `<div class="screen">
    <div class="detail-hero" style="--c:${c.accent}">
      <div class="emblem" style="--c:${c.accent}">${c.bonHanja}</div>
      <div class="nm">${c.surname} ${c.bon}씨</div>
      <div class="hanja" aria-label="${c.bon} ${c.surname}씨">${c.bonHanja} ${c.surnameHanja}氏</div>
      <div class="tg">“${c.tagline}”</div>
      ${c.badge?`<div class="hero-context">${c.badge} · ${c.population}</div>`:''}
      <div class="meta">시조 ${c.founder} · ${c.epoch} · ${c.region}</div>
      <div>${c.verifyLevel==='draft' ? srcBadge('todo','작성 초안 · 확인 필요') : srcBadge('primary', `통계청 ${c.populationYear||'2015'} 인구주택총조사`)}</div>
      <button class="hanja-btn" data-act="hanja" data-surname="${c.surname}" data-bon="${c.bon}">${IC.pen} 한자 따라쓰기</button>
    </div>
    ${routeSavePanel('clan', c)}
    ${missionPanel(`clan-${c.surname}-${c.bon}`,'이 지역에서 해볼 미션')}
    ${also}
    <div class="seg" role="tablist">${seg}</div>
    <div id="subview">${subView(c, sub)}</div>
    ${feedbackCta('clan')}
    <div class="action detail-actions">
      <div class="disclaimer">${c.verifyLevel==='draft'
        ? '<b style="color:var(--fact-todo)">이 가문 정보는 1차 정리 초안으로, 아직 확인 필요 상태입니다.</b> 통계청·한국민족문화대백과 등 공개 자료로 추가 확인 후 업데이트됩니다. '
        : `공개 자료·족보·종친회 자료를 바탕으로 정리했으며, 일부는 전승이라 가문에 따라 견해가 다를 수 있습니다. 인구는 통계청 ${c.populationYear||'2015'} 기준입니다. `}<span class="fix" data-act="notify" data-feature="정정요청">잘못된 정보 정정 요청하기</span></div>
    </div>
  </div>`;
}
/* 맛집을 관광에 엮은 1박2일 동선 (조상의 길 → 별미 → 관광) */
function itinerary(c){
  const f=c.food||[], sp=c.specialty||[];
  function day(stops,n,label,lunch,last){
    const it=[];
    stops.forEach((s,i)=>{ it.push(['spot',s]); if(i===1&&lunch) it.push(['food','점심 · '+lunch]); });
    if(last) it.push(['food',last]);
    return `<div class="day"><div class="dh"><span class="n">${n}</span>${label}</div>`+
      it.map(x=>`<div class="stop ${x[0]==='food'?'food':''}"><span class="d" aria-hidden="true"></span>${x[1]}</div>`).join('')+`</div>`;
  }
  return day(c.course.day1,1,'첫째 날 · 조상의 길과 별미',f[0],f[1]?('저녁 · '+f[1]):null)
       + day(c.course.day2,2,'둘째 날 · 관광과 주전부리',f[2]||f[0],sp[0]?('주전부리 · '+sp[0]):null);
}
function neighborhoodCards(c){
  const food = c.food?.[0] || '향토음식';
  const market = (c.course?.day2 || []).find(x=>/시장|골목|마을/.test(x)) || c.course?.day2?.[0] || c.region;
  return `<div class="local-neighborhood">
    <div class="row-head compact">조상의 길 옆, 오늘의 동네</div>
    <div class="local-card-grid">
      <div class="local-card"><span>먼저 들를 곳</span><b>${c.course?.day1?.[0] || c.region}</b><p>기록이 남은 장소부터 차분히 봅니다.</p></div>
      <div class="local-card"><span>한 그릇 기억</span><b>${food}</b><p>이 지역에서 오래 먹어온 음식 이야기를 곁들입니다.</p></div>
      <div class="local-card partner"><span>지역 협력</span><b>${market}</b><p>지역 파트너가 있을 때만 광고·협찬 라벨로 조용히 표시합니다.</p></div>
    </div>
  </div>`;
}
function subView(c, sub){
  const draft = c.verifyLevel==='draft';
  const db = (lvl,label) => draft ? srcBadge('todo','작성 초안 · 사실 확인 전') : srcBadge(lvl,label);
  const legendTop = (sub==='뿌리' && c.founderType==='legendary')
    ? `<div style="margin-bottom:10px">${srcBadge('legend','전설·전승으로 전해지는 시조 설화')}</div>` : '';
  if(sub==='뿌리'){
    const originLevel = c.founderType==='legendary' ? 'legend' : 'primary';
    const originLabel = c.founderType==='legendary' ? '전승·종친회 자료' : '공개 자료·종친회 자료';
    return `${legendTop}<p class="story">${c.story}</p>
      <div class="card origin"><h4>본관 유래</h4><p>${c.origin}</p>${db(originLevel, originLabel)}</div>
      <div class="proverb">“${c.proverb}”</div>`;
  }
  if(sub==='인물'){
    return `<div class="card"><h4>가문 역사</h4><p style="font-size:14.5px;line-height:1.75;color:var(--ink-soft)">${c.history}</p>${db('primary','한국민족문화대백과·공개 자료')}</div>
      <div class="tl">${c.figures.map(f=>`<div class="tl-node"><div class="tl-era">${f.era}</div>
      <div class="tl-name">${f.name}</div><div class="tl-desc">${f.desc}</div></div>`).join('')}</div>`;
  }
  if(sub==='문화재'){
    return `<div class="card">${c.heritage.map(h=>`<div class="h-item"><span class="bul" aria-hidden="true">◆</span>
      <div><div class="ht">${h.name}</div><div class="hd">${h.desc}</div></div></div>`).join('')}
      ${db('primary','국가유산청 국가유산포털')}</div>`;
  }
  if(sub==='여행'){
    return `<div class="map-card">
      <div class="layer-controls" aria-label="지도 레이어">
        <button class="layer-toggle on" data-act="toggleMapLayer" data-layer="family"><span class="dot family"></span>가문 연고지</button>
        <button class="layer-toggle on" data-act="toggleMapLayer" data-layer="tour"><span class="dot tour"></span>관광지</button>
        <button class="layer-toggle on" data-act="toggleMapLayer" data-layer="food"><span class="dot food"></span>맛집</button>
      </div>
      <div id="map"></div>
      <div class="map-note">좌표가 있는 항목만 표시합니다 · 팝업에서 출처 등급을 확인하세요</div>
    </div>
      <div class="sec-mini">조상의 길 · 별미 · 관광을 잇는 1박 2일</div>
      <div class="card">${itinerary(c)}</div>
      ${neighborhoodCards(c)}
      ${hook(IC.bowl,'이 고장 노포·맛집','백년가게·노포 2·3대·청년 한식','노포맛집')}
      ${hook(IC.ticket,'이 코스로 여행·숙박 예약','코스 묶음 예약','여행예약')}`;
  }
  if(sub==='맛'){
    return `<div class="card"><h4>기록이 닿는 맛</h4><p class="taste-note">구매보다 먼저 지역의 음식 이야기를 배웁니다. 제휴 상품은 별도 라벨을 붙입니다.</p><div style="margin-top:10px">${c.food.map(f=>`<span class="tag">${f}</span>`).join('')}</div></div>
      <div class="card"><h4>지역 특산물</h4><div style="margin-top:8px">${c.specialty.map(f=>`<span class="tag">${f}</span>`).join('')}</div></div>
      ${hook(IC.cart,'지역 상품 보기','밀키트·전통주·한과는 제휴 여부를 표시','특산물구매')}`;
  }
  return '';
}

/* ---- StickyCTA ---- */
function syncSticky(t){
  let el = $('stickyCta');
  if(t.screen==='clan' && (t.params.sub||'뿌리')!=='여행'){
    const c = find(t.params.surname, t.params.bon);
    const isMine = myClan && myClan.surname===c.surname && myClan.bon===c.bon;
    if(!el){ el=document.createElement('div'); el.id='stickyCta'; $('content').insertAdjacentElement('afterend', el); }
    el.innerHTML = isMine
      ? `<div class="two"><button class="btn-line" data-act="goMine">✓ 내 기록</button><button class="btn" data-act="notify" data-feature="가계도">기록 노트 시작</button></div>`
      : `<button class="btn" data-act="register" data-surname="${c.surname}" data-bon="${c.bon}">내 가문으로 등록하기</button>`;
  } else if(el){ el.remove(); }
}

/* ---- 지도 ---- */
let MAP, MAP_LAYERS={};
let MAP_LAYER_STATE={family:true,tour:true,food:true,story:true};
const MAP_POINT_CATALOG = {
  "경기전":{lat:35.8157,lng:127.1497,type:"tour",desc:"태조 어진 봉안 유적",verifyLevel:"verified"},
  "전주 한옥마을":{lat:35.8151,lng:127.1530,type:"tour",desc:"전주 한옥 관광권역",verifyLevel:"verified"},
  "전동성당":{lat:35.8136,lng:127.1497,type:"tour",desc:"전주 한옥마을 인근 근대 문화유산",verifyLevel:"verified"},
  "오목대":{lat:35.8130,lng:127.1574,type:"tour",desc:"이성계 관련 전주 유적",verifyLevel:"verified"},
  "전주향교":{lat:35.8122,lng:127.1577,type:"tour",desc:"조선시대 지방 교육기관",verifyLevel:"verified"},
  "남부시장":{lat:35.8120,lng:127.1468,type:"tour",desc:"전주 전통시장",verifyLevel:"verified"},
  "전주비빔밥":{lat:35.8151,lng:127.1530,type:"food",desc:"전주 한옥마을 음식권역",verifyLevel:"partial"},
  "콩나물국밥":{lat:35.8120,lng:127.1468,type:"food",desc:"전주 남부시장 음식권역",verifyLevel:"partial"},
  "한정식":{lat:35.8151,lng:127.1530,type:"food",desc:"지역 한식 권역",verifyLevel:"partial"},
  "경주 대릉원":{lat:35.8380,lng:129.2121,type:"tour",desc:"경주 신라 고분군",verifyLevel:"verified"},
  "첨성대":{lat:35.8347,lng:129.2187,type:"tour",desc:"신라 천문 관측 유적",verifyLevel:"verified"},
  "불국사":{lat:35.7900,lng:129.3321,type:"tour",desc:"경주 세계유산 사찰",verifyLevel:"verified"},
  "석굴암":{lat:35.7948,lng:129.3493,type:"tour",desc:"경주 세계유산 석굴 사원",verifyLevel:"verified"},
  "경주 쌈밥":{lat:35.8380,lng:129.2121,type:"food",desc:"경주 관광권역 향토음식",verifyLevel:"partial"},
  "황남빵":{lat:35.8380,lng:129.2121,type:"food",desc:"경주 황남동 과자 문화권역",verifyLevel:"partial"},
  "수로왕릉":{lat:35.2340,lng:128.8811,type:"tour",desc:"김수로왕 능역",verifyLevel:"verified"},
  "국립김해박물관":{lat:35.2350,lng:128.8736,type:"tour",desc:"가야 문화 박물관",verifyLevel:"verified"},
  "구지봉":{lat:35.2372,lng:128.8728,type:"tour",desc:"가락국 건국 설화 유적",verifyLevel:"legend"},
  "돼지국밥(경남)":{lat:35.2285,lng:128.8760,type:"food",desc:"경남권 향토음식",verifyLevel:"partial"},
  "안동 하회마을":{lat:36.5388,lng:128.5187,type:"tour",desc:"안동 전통마을",verifyLevel:"verified"},
  "병산서원":{lat:36.5450,lng:128.5437,type:"tour",desc:"안동 서원",verifyLevel:"verified"},
  "월영교":{lat:36.5765,lng:128.7600,type:"tour",desc:"안동 호반 산책 명소",verifyLevel:"verified"},
  "도산서원":{lat:36.7275,lng:128.8431,type:"tour",desc:"퇴계 이황 관련 서원",verifyLevel:"verified"},
  "안동찜닭":{lat:36.5658,lng:128.7301,type:"food",desc:"안동 구시장 찜닭골목 권역",verifyLevel:"partial"}
};
function mapPopup(p){
  return `<b>${p.name}</b><br>${p.desc||''}<br><span class="popup-level ${p.verifyLevel}">${levelLabel(p.verifyLevel)}</span><br><small>가계 확정 아님 · 지역 중심 표시</small>`;
}
function mapIcon(type){
  return L.divIcon({className:'',html:`<div class="map-marker ${type}"></div>`,iconSize:[18,18],iconAnchor:[9,9]});
}
function mapFallback(el, msg){
  el.innerHTML = `<div class="map-fallback"><b>지도를 준비 중입니다</b><span>${msg}</span></div>`;
}
function withLeaflet(el, fn){
  if(!el) return;
  if(typeof L !== 'undefined'){ fn(); return; }
  mapFallback(el, '지도 라이브러리를 다시 불러오고 있어요. 네트워크가 막히면 레이어 목록으로 계속 볼 수 있습니다.');
}
function catalogPoint(name, fallbackType){
  const p = MAP_POINT_CATALOG[name];
  if(!p) return null;
  return {...p, name, type:p.type||fallbackType};
}
function clanMapPoints(c){
  const family = [{name:`${c.surname} ${c.bon}씨 연고지`,lat:c.lat,lng:c.lng,type:'family',desc:c.region,verifyLevel:c.verifyLevel||'partial'}];
  const tourNames = [...(c.course?.day1||[]), ...(c.course?.day2||[])];
  const tour = tourNames.map(n=>catalogPoint(n,'tour')).filter(Boolean);
  const food = [...(c.food||[]), ...(c.specialty||[])].map(n=>catalogPoint(n,'food')).filter(Boolean);
  return {family,tour,food};
}
function updateMapLayerUI(){
  Object.keys(MAP_LAYER_STATE).forEach(k=>{
    const btn = document.querySelector(`.layer-toggle[data-layer="${k}"]`);
    if(btn) btn.classList.toggle('on', MAP_LAYER_STATE[k]);
    if(MAP_LAYERS[k]){
      if(MAP_LAYER_STATE[k]) MAP_LAYERS[k].addTo(MAP);
      else MAP.removeLayer(MAP_LAYERS[k]);
    }
  });
}
function toggleMapLayer(type){
  if(!(type in MAP_LAYER_STATE)) return;
  MAP_LAYER_STATE[type]=!MAP_LAYER_STATE[type];
  updateMapLayerUI();
}
function buildMap(c){
  const el = $('map'); if(!el) return;
  withLeaflet(el, ()=>{
    if(MAP){ MAP.remove(); MAP=null; }
    MAP_LAYER_STATE={family:true,tour:true,food:true,story:true};
    MAP = L.map('map',{zoomControl:true,attributionControl:true}).setView([c.lat,c.lng],11);
    /* OSM 표준 타일 = 무료·무키, 한국 내 지명을 한글로 렌더(네이버 익숙도를 0원으로) */
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      {maxZoom:19,subdomains:'abc',attribution:'© OpenStreetMap contributors'}).addTo(MAP);
    const points = clanMapPoints(c);
    MAP_LAYERS = {};
    Object.entries(points).forEach(([type,items])=>{
      MAP_LAYERS[type]=L.layerGroup(items.filter(p=>Number.isFinite(p.lat)&&Number.isFinite(p.lng)).map(p=>L.marker([p.lat,p.lng],{icon:mapIcon(type)}).bindPopup(mapPopup(p))));
    });
    const route = [...points.family, ...points.tour, ...points.food].filter(p=>Number.isFinite(p.lat)&&Number.isFinite(p.lng));
    if(route.length>1){
      L.polyline(route.map(p=>[p.lat,p.lng]),{color:'#E85D3F',weight:3,opacity:.72,dashArray:'6 8'}).addTo(MAP);
    }
    updateMapLayerUI();
    if(route.length>1) MAP.fitBounds(L.latLngBounds(route.map(p=>[p.lat,p.lng])).pad(.18));
    else MAP.setView([c.lat,c.lng],11);
    const first = points.family[0];
    if(first) L.popup().setLatLng([first.lat,first.lng]).setContent(mapPopup(first)).openOn(MAP);
    setTimeout(()=>MAP.invalidateSize(),120);
    setTimeout(()=>MAP.invalidateSize(),420);
  });
}
function buildNameTrackMap(track){
  const el = $('nameMap'); if(!el) return;
  withLeaflet(el, ()=>{
    if(MAP){ MAP.remove(); MAP=null; }
    const points = (track ? [track] : nameTracks()).filter(p=>Number.isFinite(p.lat)&&Number.isFinite(p.lng));
    if(!points.length){ mapFallback(el, '좌표가 준비된 성씨·연원 기록이 아직 없습니다. 기록은 목록으로 먼저 확인할 수 있습니다.'); return; }
    MAP = L.map('nameMap',{zoomControl:true,attributionControl:true}).setView([36.5,127.8],6);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      {maxZoom:19,subdomains:'abc',attribution:'© OpenStreetMap contributors'}).addTo(MAP);
    points.forEach(p=>{
      L.marker([p.lat,p.lng],{icon:mapIcon(p.isGenealogy?'family':'story')}).addTo(MAP)
        .bindPopup(`<b>${p.title}</b><br>${p.region}<br>${trackKind(p)}<br><span class="popup-level ${p.verifyLevel}">${levelLabel(p.verifyLevel)}</span><br><small>가계 확정 아님 · 지역 중심 표시</small>`);
    });
    if(points.length>1) MAP.fitBounds(L.latLngBounds(points.map(p=>[p.lat,p.lng])).pad(.25));
    else if(points[0]) MAP.setView([points[0].lat,points[0].lng],8);
    setTimeout(()=>MAP.invalidateSize(),120);
    setTimeout(()=>MAP.invalidateSize(),420);
  });
}
function worldMapPoints(){
  const family = CLANS.filter(c=>Number.isFinite(c.lat)&&Number.isFinite(c.lng)).map(c=>({
    name:`${c.surname} ${c.bon}씨`, lat:c.lat, lng:c.lng, type:'family', desc:`가문/본관 기록 · ${c.region}`, verifyLevel:c.verifyLevel||'partial'
  }));
  const seen={};
  const allTours = [], allFood = [];
  CLANS.forEach(c=>{
    [...(c.course?.day1||[]), ...(c.course?.day2||[])].forEach(n=>{ const p=catalogPoint(n,'tour'); if(p&&!seen[`t-${n}`]){ seen[`t-${n}`]=1; allTours.push(p); } });
    [...(c.food||[]), ...(c.specialty||[])].forEach(n=>{ const p=catalogPoint(n,'food'); if(p&&!seen[`f-${n}`]){ seen[`f-${n}`]=1; allFood.push(p); } });
  });
  const story = nameTracks().filter(p=>Number.isFinite(p.lat)&&Number.isFinite(p.lng)).map(p=>({
    name:p.title, lat:p.lat, lng:p.lng, type:'story', desc:`${trackKind(p)} · ${p.region}`, verifyLevel:p.verifyLevel||'partial'
  }));
  return {family,tour:allTours,food:allFood,story};
}
function buildWorldMap(){
  const el = $('worldMap'); if(!el) return;
  withLeaflet(el, ()=>{
    if(MAP){ MAP.remove(); MAP=null; }
    MAP_LAYER_STATE={family:true,tour:false,food:false,story:true};
    MAP = L.map('worldMap',{zoomControl:true,attributionControl:true}).setView([36.5,127.8],6);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      {maxZoom:19,subdomains:'abc',attribution:'© OpenStreetMap contributors'}).addTo(MAP);
    const points = worldMapPoints();
    MAP_LAYERS = {};
    Object.entries(points).forEach(([type,items])=>{
      MAP_LAYERS[type]=L.layerGroup(items.map(p=>L.marker([p.lat,p.lng],{icon:mapIcon(type)}).bindPopup(mapPopup(p))));
    });
    updateMapLayerUI();
    const route = Object.values(points).flat().filter(p=>Number.isFinite(p.lat)&&Number.isFinite(p.lng));
    if(route.length>1) MAP.fitBounds(L.latLngBounds(route.map(p=>[p.lat,p.lng])).pad(.16));
    setTimeout(()=>MAP.invalidateSize(),120);
    setTimeout(()=>MAP.invalidateSize(),420);
  });
}

/* ---- 한자 따라쓰기 (Hanzi Writer) ---- */
let HZ=null, HZ_CHARS=[], HZ_IDX=0;
function uniqHanja(c){ return [...new Set((c.bonHanja+c.surnameHanja).split('').filter(x=>/[一-鿿]/.test(x)))]; }
function openHanja(s,b){
  const c=find(s,b); if(!c) return; HZ_CHARS=uniqHanja(c); HZ_IDX=0;
  let m=$('hanjaModal');
  if(!m){ m=document.createElement('div'); m.id='hanjaModal'; m.className='modal'; $('app').appendChild(m); }
  m.innerHTML=`<div class="modal-card">
    <div class="modal-head"><div><div class="modal-title">한자 따라쓰기</div>
      <div class="modal-sub">${c.surname} ${c.bon}씨 · ${c.bonHanja} ${c.surnameHanja}氏</div></div>
      <div class="modal-close" data-act="hanja-close" role="button" aria-label="닫기">×</div></div>
    <div class="hz-tabs" id="hzTabs"></div>
    <div class="hz-mean" id="hzMean"></div>
    <div class="hz-stage"><div id="hzTarget"></div></div>
    <div class="hz-caption" id="hzCaption">‘획순 보기’로 순서를 보고, ‘따라쓰기’로 천천히 그려보세요.</div>
    <div class="hz-controls">
      <button class="hz-btn" data-act="hz-animate">획순 보기</button>
      <button class="hz-btn primary" data-act="hz-quiz">따라쓰기</button>
      <button class="hz-btn" data-act="hz-reset">다시</button></div></div>`;
  requestAnimationFrame(()=>m.classList.add('on'));
  renderHzTabs(); hzLoad();
}
function renderHzTabs(){ const t=$('hzTabs'); if(t) t.innerHTML=HZ_CHARS.map((ch,i)=>`<div class="hz-tab ${i===HZ_IDX?'on':''}" data-act="hz-tab" data-i="${i}">${ch}</div>`).join(''); }
function hzLoad(){
  const t=$('hzTarget'); if(!t) return; t.innerHTML=''; HZ=null;
  const ch=HZ_CHARS[HZ_IDX]; const mn=$('hzMean'); if(mn) mn.innerHTML=`<b>${ch}</b> <span>${hunOf(ch)}</span>`;
  const cap=$('hzCaption');
  if(typeof HanziWriter==='undefined'){ if(cap)cap.textContent='한자 데이터를 불러오는 중이에요. 잠시 후 다시 눌러주세요.'; return; }
  HZ=HanziWriter.create('hzTarget', HZ_CHARS[HZ_IDX], {
    width:240,height:240,padding:12,showOutline:true,showCharacter:false,
    strokeColor:'#1C1A17',radicalColor:'#B04A33',outlineColor:'#E2DBC9',
    drawingColor:'#B04A33',drawingWidth:26,highlightColor:'#C9A227',
    strokeAnimationSpeed:1.1,delayBetweenStrokes:260,
    onLoadCharDataError:function(){ if(cap)cap.textContent='이 글자는 따라쓰기 데이터를 준비 중이에요.'; }
  });
}
function hzAnimate(){ const cap=$('hzCaption'); if(HZ){ if(cap)cap.textContent='쓰는 순서를 잘 보세요.'; HZ.animateCharacter(); } }
function hzQuiz(){ const cap=$('hzCaption'); if(HZ){ if(cap)cap.textContent='회색 선을 따라 천천히 그려보세요.'; HZ.quiz({showHintAfterMisses:1,onComplete:function(){ if(cap)cap.textContent='완성했어요! 잘했어요.'; }}); } }
function closeHanja(){ const m=$('hanjaModal'); if(m){ m.classList.remove('on'); HZ=null; setTimeout(()=>{ if(m&&m.parentNode) m.remove(); },220); } }

/* ---- 뿌리 퀴즈 (출처 등급이 있는 가문만 출제) ---- */
let QZ={score:0,total:0,q:null,answered:false};
function quizPool(){ return CLANS.filter(c=>c.verifyLevel!=='draft'); }
function qShuffle(a){ for(let i=a.length-1;i>0;i--){ const j=Math.floor(Math.random()*(i+1)); const t=a[i];a[i]=a[j];a[j]=t; } return a; }
function qPick(vals,correct,n){ const p=[...new Set(vals)].filter(v=>v&&v!==correct); qShuffle(p); return p.slice(0,n); }
function makeQ(){
  const pool=quizPool(); const c=pool[Math.floor(Math.random()*pool.length)];
  const L=x=>`${x.surname} ${x.bon}씨`;
  const types=['fc','cr','hc','cf']; const t=types[Math.floor(Math.random()*types.length)];
  let q,correct,dist;
  if(t==='fc'){ q=`「${c.founder}」은(는) 어느 가문의 시조일까요?`; correct=L(c); dist=qPick(pool.map(L),correct,3); }
  else if(t==='cr'){ q=`${L(c)}의 연고지(본관)는 어디일까요?`; correct=c.region; dist=qPick(pool.map(x=>x.region),correct,3); }
  else if(t==='hc'){ q=`한자 본관 「${c.bonHanja}」은(는) 어느 성씨일까요?`; correct=L(c); dist=qPick(pool.map(L),correct,3); }
  else { q=`${L(c)}의 시조(始祖)는 누구일까요?`; correct=c.founder; dist=qPick(pool.map(x=>x.founder),correct,3); }
  return {q,correct,options:qShuffle([correct,...dist]),explain:`정답: ${L(c)} · 시조 ${c.founder} · 연고지 ${c.region}`};
}
function openQuiz(){ QZ={score:0,total:0,q:null,answered:false};
  let m=$('quizModal'); if(!m){ m=document.createElement('div'); m.id='quizModal'; m.className='modal'; $('app').appendChild(m); }
  m.innerHTML=`<div class="modal-card"><div class="modal-head"><div><div class="modal-title">뿌리 퀴즈</div>
    <div class="modal-sub" id="qzScore"></div></div><div class="modal-close" data-act="quiz-close" role="button" aria-label="닫기">×</div></div>
    <div id="qzBody"></div></div>`;
  requestAnimationFrame(()=>m.classList.add('on')); nextQ();
}
function nextQ(){ QZ.q=makeQ(); QZ.answered=false; renderQuiz(-1); }
function renderQuiz(picked){
  const b=$('qzBody'); if(!b) return; const q=QZ.q;
  const sc=$('qzScore'); if(sc) sc.textContent=`${QZ.total}문제 · ${QZ.score}점`;
  const opts=q.options.map((o,i)=>{ let cls='quiz-opt';
    if(QZ.answered){ if(o===q.correct)cls+=' correct'; else if(i===picked)cls+=' wrong'; else cls+=' dim'; }
    return `<div class="${cls}" data-act="quiz-answer" data-i="${i}">${o}</div>`; }).join('');
  b.innerHTML=`<div class="quiz-q">${q.q}</div><div class="quiz-opts">${opts}</div>
    <div class="quiz-explain">${QZ.answered?q.explain:'정답을 골라보세요'}</div>
    ${QZ.answered?`<button class="btn" data-act="quiz-next">다음 문제 ›</button>`:''}`;
}
function answerQuiz(i){ if(QZ.answered)return; QZ.answered=true; QZ.total++; if(QZ.q.options[i]===QZ.q.correct)QZ.score++; renderQuiz(i); }
function closeQuiz(){ const m=$('quizModal'); if(m){ m.classList.remove('on'); setTimeout(()=>{ if(m&&m.parentNode) m.remove(); },220); } }

/* ---- 동작 ---- */
function registerClan(s,b){ myClan={surname:s,bon:b}; localStorage.setItem('josang_myClan',JSON.stringify(myClan));
  toast(`${s} ${b}씨 — 내 가문으로 등록되었습니다`); render(); }
function unregister(){ myClan=null; localStorage.removeItem('josang_myClan'); toast('등록이 해제되었습니다'); render(); }
let toastT;
function toast(msg){ let el=$('toast'); if(!el){el=document.createElement('div');el.id='toast';$('app').appendChild(el);}
  el.textContent=msg; el.classList.add('show'); clearTimeout(toastT); toastT=setTimeout(()=>el.classList.remove('show'),2200); }

/* ---- 검색 셀렉트 연동 ---- */
function wireSearch(){
  const selS=$('selS'), selB=$('selB'), free=$('freeName');
  if(selS && selB) selS.addEventListener('change',()=>{ selB.innerHTML = bonOptions(selS.value); });
  if(free) free.addEventListener('keydown',e=>{ if(e.key==='Enter') doSearch(); });
}
function doSearch(){
  const free = ($('freeName')?.value || '').trim();
  if(searchMode === 'name'){
    const selected = $('selTrack')?.value || '__auto__';
    if(selected !== '__auto__'){ go('nameTrack',{track:selected, query:free}); return; }
    go('nameTrack',{query:free || '본관 모름'});
    return;
  }
  if(free){
    const exact = CLANS.find(c=>norm(free).includes(norm(c.surname+c.bon)) || norm(free).includes(norm(c.bon+c.surname)));
    if(exact){ go('clan',{surname:exact.surname, bon:exact.bon}); return; }
    go('searchResult',{query:free});
    return;
  }
  const s=$('selS').value; let b=$('selB').value;
  if(b==='__auto__'){ go('nameTrack',{query:`${s} 씨 본관 모름`}); return; }   /* 자동 특정 본관 귀속 금지(추측·쏠림 방지) */
  go('clan',{surname:s, bon:b});
}

/* ---- 렌더 후 처리 ---- */
function postRender(t){
  if(t.screen==='home'||t.screen==='explore') wireSearch();
  if(t.screen==='region') buildWorldMap();
  if(t.screen==='clan' && (t.params.sub||'뿌리')==='여행'){ buildMap(find(t.params.surname,t.params.bon)); }
  if(t.screen==='nameTrack'){ buildNameTrackMap(t.params.track ? findTrack(t.params.track) : findTrack(t.params.query)); }
  syncSticky(t);
}

/* ---- 이벤트 위임 ---- */
document.addEventListener('click', e=>{
  const el = e.target.closest('[data-act]'); if(!el) return;
  const a = el.dataset.act;
  if(a==='tab') tab(el.dataset.tab);
  else if(a==='back') back();
  else if(a==='goClan') go('clan',{surname:el.dataset.surname,bon:el.dataset.bon});
  else if(a==='goNameTrack') go('nameTrack',{track:el.dataset.track, query:el.dataset.query||''});
  else if(a==='goMine') tab('mine');
  else if(a==='sub'){ curRoute().params.sub = el.dataset.sub; render(); }
  else if(a==='searchMode'){ searchMode = el.dataset.mode || 'genealogy'; render(); }
  else if(a==='pickTrack'){ const sel=$('selTrack'); if(sel) sel.value=el.dataset.track; toast('이 출발점으로 안내합니다'); }
  else if(a==='search') doSearch();
  else if(a==='toggleMapLayer') toggleMapLayer(el.dataset.layer);
  else if(a==='toggleSponsor'){ sponsorVisible=!sponsorVisible; localStorage.setItem('josang_sponsor_visible', JSON.stringify(sponsorVisible)); render(); }
  else if(a==='saveRoute') saveRoute(el.dataset.type, el.dataset.id, el.dataset.label, el.dataset.meta);
  else if(a==='copyRoute') copyRouteCard(el.dataset.type, el.dataset.id, el.dataset.label, el.dataset.meta);
  else if(a==='openSavedRoute') openSavedRoute(el.dataset.key);
  else if(a==='removeRoute') removeRoute(el.dataset.key);
  else if(a==='toggleMission') toggleMission(el.dataset.id);
  else if(a==='copyReport') copyReport();
  else if(a==='register') registerClan(el.dataset.surname, el.dataset.bon);
  else if(a==='unregister') unregister();
  else if(a==='notify') notify(el.dataset.feature);
  else if(a==='auth-open') openAuth('join');
  else if(a==='auth-switch') openAuth(el.dataset.mode);
  else if(a==='auth-close') closeAuth();
  else if(a==='auth-join') authFromForm();
  else if(a==='auth-login') authFromForm();
  else if(a==='auth-demo') saveAuth('루트 탐색자','demo@korean-roots.app');
  else if(a==='auth-logout') logoutAuth();
  else if(a==='auth-reset') resetTestData();
  else if(a==='hanja') openHanja(el.dataset.surname, el.dataset.bon);
  else if(a==='hanja-close') closeHanja();
  else if(a==='hz-animate') hzAnimate();
  else if(a==='hz-quiz') hzQuiz();
  else if(a==='hz-reset') hzLoad();
  else if(a==='hz-tab'){ HZ_IDX=+el.dataset.i; renderHzTabs(); hzLoad(); }
  else if(a==='quiz') openQuiz();
  else if(a==='quiz-answer') answerQuiz(+el.dataset.i);
  else if(a==='quiz-next') nextQ();
  else if(a==='quiz-close') closeQuiz();
});

/* ---- 부팅 ---- */
render();
if('serviceWorker' in navigator){
  navigator.serviceWorker.register('sw.js?v=31').then(reg => reg.update()).catch(()=>{});
}
