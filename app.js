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
  '偰':'성씨 설','遜':'겸손할 손','龍':'용 룡','祥':'상서로울 상','池':'못 지','忠':'충성 충','鏡':'거울 경'
};
function hunOf(ch){ return HUN[ch] || '뜻풀이 준비 중'; }

/* ---- 상태/네비게이션 ---- */
let stack = [{screen:'home'}];
function loadJSON(k){ try{ return JSON.parse(localStorage.getItem(k)); }catch(e){ return null; } }
function loadSessionJSON(k){ try{ return JSON.parse(sessionStorage.getItem(k)); }catch(e){ return null; } }
let myClan = loadJSON('josang_myClan');
let authUser = loadSessionJSON('josang_authUser');
let searchMode = 'genealogy';
let homeCategory = 'start';
let sponsorVisible = loadJSON('josang_sponsor_visible') === true;
const PUBLIC_URL = 'https://korean-roots-journey.vercel.app/';
const curRoute = () => stack[stack.length-1];
const find = (s,b) => CLANS.find(c=>c.surname===s && c.bon===b);
function clanName(c){ return `${c.bon} ${c.surname}씨`; }
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
const FAMILY_QUESTIONS = [
  '우리 가족이 오래 살았던 동네는 어디였나요?',
  '어릴 때 자주 갔던 시장이나 골목은 어디였나요?',
  '가족끼리 자주 먹던 지역 음식은 무엇이었나요?',
  '성씨나 이름 한자에 대해 들은 이야기가 있나요?',
  '명절마다 떠오르는 장소나 집안 이야기가 있나요?',
  '내가 모르는 가족 사진 속 장소가 있나요?',
  '우리 가족이 다른 지역으로 옮겨 온 기억이 있나요?'
];
function familyAnswers(){ return loadJSON('josang_familyAnswers') || []; }
function familyAnswerKey(){ return `q-${dayKey(0)}`; }
function familyQuestionFor(label){
  const idx = hashText(`${label || 'root'}|${dayKey(0)}`) % FAMILY_QUESTIONS.length;
  return FAMILY_QUESTIONS[idx];
}
function copyFamilyQuestion(label, question){
  copyText(`조상이 도왔다 가족 질문\n${label || '내 이름 루트'}\n\n${question}\n\n답은 짧게 기억나는 만큼만 알려주세요. 가계 증명이나 혈통 확인이 아니라 가족 기억을 모으는 질문입니다.\n${PUBLIC_URL}`, '가족에게 보낼 질문을 복사했습니다');
}
function saveFamilyAnswer(label, question){
  const input = $('familyAnswerInput');
  const value = (input?.value || '').trim();
  if(!value){ toast('가족 답변을 한 줄 이상 입력해주세요'); return; }
  const a = familyAnswers();
  a.unshift({label:label || '내 이름 루트', question, answer:value, ts:Date.now()});
  saveLocalJSON('josang_familyAnswers', a.slice(0,30));
  toast('가족 답변을 뿌리여권에 저장했습니다');
  render();
}
function copyFamilyHistoryCard(){
  const latest = familyAnswers()[0];
  const title = latest?.label || (myClan ? `${myClan.bon} ${myClan.surname}씨` : '내 이름 루트');
  const answer = latest?.answer || '아직 가족 답변을 기다리는 중입니다.';
  copyText(`우리 집 한 줄 역사 카드\n${title}\n"${answer}"\n\n전해지는 가족 이야기로 저장한 기록입니다. 공식 증명 자료가 아닙니다.\n${PUBLIC_URL}`, '우리 집 한 줄 역사 카드를 복사했습니다');
}
function familyQuestionPanel(label){
  const question = familyQuestionFor(label);
  return `<section class="family-question-panel">
    <div class="family-question-head">
      <div><span>오늘의 가족 질문</span><b>${esc(question)}</b><p>부모님·친척에게 물어볼 한 문장입니다. 답변은 이 기기 뿌리여권에만 저장됩니다.</p></div>
      <button type="button" data-act="copyFamilyQuestion" data-label="${esc(label || '내 이름 루트')}" data-question="${esc(question)}">가족에게 물어보기</button>
    </div>
    <label class="family-answer-box">
      <span>받은 답변 저장</span>
      <textarea id="familyAnswerInput" rows="3" placeholder="예: 할머니가 충주 시장 근처에서 오래 사셨대요."></textarea>
    </label>
    <button type="button" class="family-save-btn" data-act="saveFamilyAnswer" data-label="${esc(label || '내 이름 루트')}" data-question="${esc(question)}">답변을 뿌리여권에 저장</button>
  </section>`;
}
function familyAnswersSection(){
  const items = familyAnswers();
  const rows = items.slice(0,5).map(item=>`<article>
    <span>${esc(item.label)}</span>
    <b>${esc(item.question)}</b>
    <p>${esc(item.answer)}</p>
  </article>`).join('');
  return `<section class="family-answers">
    <div class="saved-routes-head"><div><span>가족 릴레이</span><b>가족 답변함</b></div><small>${items.length}개</small></div>
    ${items.length ? rows : `<div class="saved-empty"><b>아직 가족 답변이 없습니다</b><span>오늘의 가족 질문을 복사해서 보내고, 받은 답을 붙여 넣으면 여기에 쌓입니다.</span></div>`}
    <button type="button" class="report-copy" data-act="copyFamilyHistory">우리 집 한 줄 역사 카드 복사</button>
  </section>`;
}
function placeStamps(){ return loadJSON('josang_placeStamps') || []; }
function stampPlace(name,type){
  const a = placeStamps();
  const key = `${type || 'place'}:${name || 'spot'}`;
  if(!a.some(x=>x.key===key)){
    a.unshift({key,name:name || '지역 스팟',type:type || 'place',ts:Date.now()});
    saveLocalJSON('josang_placeStamps', a.slice(0,50));
  }
  toast('방문 스탬프를 뿌리여권에 저장했습니다');
  render();
}
function rootPassportPanel(label){
  const checked = Object.values(missionState()).filter(Boolean).length;
  const stats = [
    ['저장 루트', savedRoutes().length],
    ['가족 답변', familyAnswers().length],
    ['방문 스탬프', placeStamps().length],
    ['미션', checked]
  ];
  return `<section class="root-passport-panel">
    <div class="sec-label">뿌리여권</div>
    <h3>${esc(label || '내 이름 루트')} 기록장</h3>
    <p>성씨·연원 기록, 가족 질문, 방문 스탬프, 퀴즈와 따라쓰기를 한 곳에 모읍니다. 무료는 이 기기 보관함으로 시작합니다.</p>
    <div class="passport-stat-grid">${stats.map(([k,v])=>`<div><b>${v}</b><span>${k}</span></div>`).join('')}</div>
    <div class="passport-actions">
      <button type="button" data-act="copyFamilyHistory">한 줄 역사 카드</button>
      <button type="button" data-act="tab" data-tab="region">스탬프 지도</button>
    </div>
  </section>`;
}
function copyBusinessPitch(){
  copyText(`조상이 도왔다 소상공인 스토리 패키지 샘플\n- 지역 루트 지도 핀\n- 스토리 카드와 쿠폰 QR\n- 가족 질문/뿌리여권 미션 연결\n- 광고·협찬 라벨 분리\n\n성과를 약속하지 않는 민간 파일럿 제안입니다.\n${PUBLIC_URL}`, '소상공인 패키지 문구를 복사했습니다');
}
function localCommercePackagePanel(){
  const packs = [
    ['소상공인','스토리 카드 5장','가게 이야기를 지역 루트 옆에 붙이고 쿠폰 QR은 별도 라벨로 표시합니다.'],
    ['종친회·문중','디지털 소개 페이지','본관 소개, 행사 지도, 퀴즈, 뿌리여권 PDF 샘플을 묶습니다.'],
    ['지자체·문화원','생활인구 리포트 샘플','관광·체류 데이터와 앱 저장/지도 클릭 지표를 분리해 보여줍니다.']
  ];
  return `<section class="commerce-package-panel">
    <div class="sec-label">소상공인 스토리 패키지 샘플</div>
    <h3>재미가 지역 매출 제안서가 되는 구조</h3>
    <p>가게를 일반 추천처럼 숨기지 않고, 광고·협찬 라벨을 붙인 스토리 스팟으로 분리합니다.</p>
    <div class="commerce-pack-grid">${packs.map(p=>`<article><span>${p[0]}</span><b>${p[1]}</b><p>${p[2]}</p></article>`).join('')}</div>
    <button type="button" class="report-copy" data-act="copyBusinessPitch">패키지 문구 복사</button>
  </section>`;
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
  return ({verified:'공개자료 확인', partial:'자료 확인 단계', legend:'전승·설화', draft:'개인 확인 단계'})[level] || '개인 확인 단계';
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
  const bare = key.replace(/씨$/,'').replace(/氏$/,'');
  return nameTracks().find(t => {
    const surname = norm(t.surname);
    const title = norm(t.title);
    return t.id===q
      || key.includes(title)
      || (key.length >= 2 && title.includes(key))
      || key.includes(norm(t.surname+t.bon))
      || key.includes(norm(t.bon))
      || key===surname
      || key===norm(`${t.surname}씨`)
      || bare===surname;
  });
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
      <div class="title" style="font-size:18px">${clanName(c)}</div><div class="spacer"></div>${authPill()}`;
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
    case 'routeResult': return screenRouteResult(t.params||{});
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
    ${primary?`<div class="search-kicker">15초 루트 생성</div><h2>확인 방식 선택</h2><p>${nameMode?'성씨만 알거나 아직 잘 모를 때도 지역·기억·공개 자료로 루트지도를 열 수 있어요.':'성씨와 본관을 알고 있을 때는 문헌 기록부터 차분히 확인합니다.'}</p>`:''}
    ${searchModeSwitch()}
    <div class="free-field"><label>${nameMode?'아는 단서':'성씨·본관·지역'}</label><input id="freeName" aria-label="성씨 또는 이름 길 검색" placeholder="${nameMode?'예: 설, 화산 이, 가족이 오래 산 지역':'예: 전주 이, 경주 김, 안동'}"></div>
    ${nameMode?`<div class="search-row one">
      ${trackQuickChips()}
      <div class="field"><label>분류</label><select id="selTrack" aria-label="성씨·연원 기록 분류">${trackOptions()}</select></div>
    </div>`:`<div class="search-row">
      <div class="field"><label>성씨</label><select id="selS" aria-label="성씨">${sOpts}</select></div>
      <div class="field"><label>본관</label><select id="selB" aria-label="본관">${bonOptions(sList[0])}</select></div>
    </div>`}
    <button class="btn" data-act="search">${nameMode?'15초 루트카드 만들기':'15초 루트카드 만들기'}</button>
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
  const label = item.title || clanName(item);
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
  const done = MISSION_ITEMS.filter(([id])=>state[`${scope}:${id}`]).length;
  return `<section class="mission-panel">
    <div class="sec-label">뿌리여권 · 지역 미션 카드</div>
    <div class="passport-head"><div><h3>${esc(label || '오늘의 지역 미션')}</h3><p>공부처럼 무겁지 않게, 이름에서 지역으로 이어지는 작은 행동을 스탬프로 모읍니다.</p></div><strong>${done}/${MISSION_ITEMS.length}</strong></div>
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
    <div class="sec-label">지자체 생활인구 리포트 데모</div>
    <h3>지역 방문 이유를 데이터로 설명하는 샘플</h3>
    <p>한국관광 데이터랩·생활인구 자료와 연결하기 전, 이 브라우저의 테스트 행동만 분리해 보는 민간 파일럿 지표입니다.</p>
    <div class="report-grid">${metrics.map(([k,v])=>`<div class="metric-card"><b>${v}</b><span>${k}</span></div>`).join('')}</div>
    <button type="button" class="report-copy" data-act="copyReport">리포트 문구 복사</button>
  </section>`;
}
function copyReport(){
  const checked = Object.values(missionState()).filter(Boolean).length;
  copyText(`조상이 도왔다 지자체 생활인구 리포트 데모\n저장한 루트 ${savedRoutes().length}개\n뿌리여권 미션 체크 ${checked}개\n알림 신청 ${leads().length}개\n스토리 스팟 확인 ${sponsorVisible ? 1 : 0}회\n이 수치는 현재 브라우저의 민간 파일럿 테스트 값이며, 공공 인증이나 수익 보장을 의미하지 않습니다.`, '리포트 문구를 복사했습니다');
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
function trimText(v,n){
  const text = String(v || '').replace(/\s+/g,' ').trim();
  return text.length > n ? `${text.slice(0,n-1)}…` : text;
}
function storyChaptersForClan(c){
  const firstTour = c.course?.day1?.[0] || c.region;
  const firstFood = c.food?.[0] || '지역 음식';
  return [
    ['1장 · 이름의 출발', `${c.bonHanja} ${c.surnameHanja}氏`, trimText(c.story, 86)],
    ['2장 · 기록의 사람', c.founder, trimText(c.history || c.origin, 86)],
    ['3장 · 오늘의 지역', c.region, `${firstTour}에서 시작해 ${firstFood}까지 이어지는 지역 루트로 봅니다.`]
  ];
}
function storyChaptersForTrack(t){
  return [
    ['1장 · 이름 단서', hanjaLine(t) || t.title, trimText(t.story, 86)],
    ['2장 · 지역 단서', t.region, trimText(t.origin, 86)],
    ['3장 · 확인 방식', trackGroup(t), trackAction(t)]
  ];
}
function storyBoard(title, subtitle, chapters, quizAttrs){
  return `<section class="story-board">
    <div class="story-board-head">
      <div><span>스토리텔링</span><b>${esc(title)}</b><p>${esc(subtitle)}</p></div>
      <button type="button" data-act="openQuiz" ${quizAttrs}>이야기 퀴즈</button>
    </div>
    <div class="story-steps">${chapters.map(([k,h,b])=>`<article>
      <span>${esc(k)}</span><b>${esc(h)}</b><p>${esc(b)}</p>
    </article>`).join('')}</div>
  </section>`;
}
function clanStoryBoard(c){
  return storyBoard(`${clanName(c)} 3장 이야기`, '유래를 읽고 바로 퀴즈로 확인합니다.', storyChaptersForClan(c), `data-qtype="clan" data-surname="${esc(c.surname)}" data-bon="${esc(c.bon)}"`);
}
function trackStoryBoard(t){
  return storyBoard(`${t.title} 3장 이야기`, '본관 단정 없이 이름·지역·확인 방식을 나눠 봅니다.', storyChaptersForTrack(t), `data-qtype="track" data-track="${esc(t.id)}"`);
}
function routeStoryBoard(clan, track){
  if(clan) return clanStoryBoard(clan);
  return trackStoryBoard(track);
}
function routeQuizPanel(clan, track){
  const title = clan ? clanName(clan) : track.title;
  const attrs = clan ? `data-qtype="clan" data-surname="${esc(clan.surname)}" data-bon="${esc(clan.bon)}"` : `data-qtype="track" data-track="${esc(track.id)}"`;
  return `<section class="route-quiz-panel">
    <div><span>퀴즈로 기억하기</span><b>${esc(title)} 맞춤 퀴즈</b><p>방금 본 유래·지역·확인 방식을 바로 풀어봅니다.</p></div>
    <button type="button" data-act="openQuiz" ${attrs}>퀴즈 시작</button>
  </section>`;
}
function hashText(v){
  let h=2166136261;
  for(const ch of String(v||'')){ h ^= ch.charCodeAt(0); h = Math.imul(h, 16777619); }
  return h >>> 0;
}
function dayKey(offset){
  const d = new Date();
  d.setDate(d.getDate()+offset);
  return `${d.getFullYear()}-${d.getMonth()+1}-${d.getDate()}`;
}
function fortuneFor(label, region, offset){
  const seed = hashText(`${label}|${region}|${dayKey(offset)}`);
  const tones = ['가볍게 확인하는 날','지역 단서가 보이는 날','기록을 나눠 보는 날','한 걸음 저장하는 날','가족 질문이 잘 맞는 날'];
  const actions = ['지도에서 장소 하나 저장하기','가족에게 오래 산 동네 물어보기','한자 한 글자 따라쓰기','지역 음식 하나 읽어보기','스토리 스팟 하나 눌러보기'];
  const focus = ['기록', '지역', '음식', '질문', '사진'];
  const lucky = ['주칠', '금분', '초록', '먹빛', '한지'];
  return {
    tone: tones[seed % tones.length],
    action: actions[Math.floor(seed/7) % actions.length],
    focus: focus[Math.floor(seed/13) % focus.length],
    lucky: lucky[Math.floor(seed/17) % lucky.length]
  };
}
function fortunePanel(clan, track){
  const label = clan ? clanName(clan) : track.title;
  const region = clan?.region || track?.region || '생활권';
  const today = fortuneFor(label, region, 0);
  const tomorrow = fortuneFor(label, region, 1);
  const card = (name, f) => `<article><span>${name}</span><b>${f.tone}</b><p>${f.action}</p><em>오늘의 단서 ${f.focus} · 색 ${f.lucky}</em></article>`;
  return `<section class="fortune-panel">
    <div class="sec-label">재미로 보는 오늘의 운세</div>
    <h3>${esc(label)} 운세 카드</h3>
    <p>성씨와 본관은 운명을 정하지 않습니다. 이 카드는 학습과 여행을 가볍게 시작하는 오락용 추천입니다.</p>
    <div class="fortune-grid">
      ${card('오늘의 운세', today)}
      ${card('내일의 운세', tomorrow)}
    </div>
  </section>`;
}
function homePathBar(){
  return `<div class="path-bar">
    <span>이름 입력</span><i></i><span>확인 방식 선택</span><i></i><span>15초 루트카드</span>
  </div>`;
}
function bonOptions(s){
  const list = bonsOf(s).map(c=>`<option value="${c.bon}">${c.bon} 본관</option>`).join('');
  return `<option value="__auto__">잘 모르겠어요</option>${list}`;
}
function searchModeSwitch(){
  const items = [
    ['genealogy','문헌 기록으로 보기','성씨와 본관을 알고 있을 때'],
    ['name','성씨·연원 기록으로 보기','성씨만 알거나 아직 잘 모를 때']
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
      <span>본관 기록</span><b>${clanName(a)}</b><em>${a.region} · 지도 보기</em>
    </div>
    <div class="quick-card alt" data-act="goNameTrack" data-track="${b.id}">
      <span>성씨·연원 기록</span><b>${b.title}</b><em>${b.region} · 별도 길</em>
    </div>
  </div>`;
}

function instantRouteResult(){
  const clan = find('지','충주') || CLANS[0];
  const track = findTrack('ji-name-record') || nameTracks()[0];
  return `<section class="instant-route">
    <div class="instant-head">
      <div><span>15초 루트 결과 예시</span><b>이름 하나가 여행·공부·지역소비 카드가 됩니다</b></div>
      <button type="button" data-act="goClan" data-surname="${clan.surname}" data-bon="${clan.bon}">실제 보기</button>
    </div>
    <div class="instant-card">
      <div class="instant-seal" style="--c:${clan.accent}">${clan.bonHanja}</div>
      <div class="instant-main">
        <span>문헌 기록 루트</span>
        <b>${clanName(clan)}</b>
        <p>${clan.region} · ${clan.course?.day1?.slice(0,2).join(' · ') || '지역 유래'} · ${clan.food?.[0] || '지역 음식'}</p>
      </div>
    </div>
    <div class="instant-strip">
      <button type="button" data-act="goNameTrack" data-track="${track.id}">본관 모르면 성씨·연원 기록</button>
      <button type="button" data-act="tab" data-tab="region">전국 루트 지도</button>
      <button type="button" data-act="homeCat" data-cat="biz">지자체 리포트 데모</button>
    </div>
  </section>`;
}

function homeMapPreview(){
  return `<div class="home-map-preview" data-act="tab" data-tab="region">
    <div><span>전국 루트 지도</span><b>가문 연고지 · 성씨·연원 기록 · 관광 · 맛집</b></div>
    <button>지도 보기</button>
  </div>`;
}
function homeCategoryTabs(){
  const items = [
    ['start','루트카드','15초 결과'],
    ['name','이름기록','본관 모를 때'],
    ['fun','지역재미','맛집·관광'],
    ['biz','사업모델','지역 활성화']
  ];
  return `<div class="home-category-tabs" role="tablist" aria-label="홈 카테고리">
    ${items.map(([id,label,meta])=>`<button type="button" class="${homeCategory===id?'on':''}" role="tab" aria-selected="${homeCategory===id?'true':'false'}" data-act="homeCat" data-cat="${id}">
      <b>${label}</b><span>${meta}</span>
    </button>`).join('')}
  </div>`;
}
function compactNameGuide(){
  const tracks = ['ji-name-record','bon-unknown','rare-name-record','multicultural-name-record'].map(findTrack).filter(Boolean);
  return `<section class="compact-panel">
    <div class="sec-label">본관을 몰라도 시작</div>
    <h3>지씨 이름 기록도, 성씨·연원 기록으로 먼저 보기</h3>
    <p>문헌 기록만이 뿌리의 전부는 아닙니다. 본관으로 바로 잡히지 않는 이름도 낮은 단계가 아닙니다. 한자, 생활권, 가족 기억, 공개 자료를 나눠 보며 특정 가계로 단정하지 않습니다.</p>
    <div class="track-list">${tracks.map(trackRow).join('')}</div>
    <button class="btn btn-line" data-act="goNameTrack" data-query="">성씨·연원 기록 모두 보기</button>
  </section>`;
}
function regionalFunPanel(){
  return `<section class="fun-panel">
    <div class="sec-label">지역 재미</div>
    <h3>맛집·관광·지역 유래를 한 번에</h3>
    <p>이름에서 시작해 지역의 이야기, 하루 코스, 한 그릇 기억으로 이어집니다. 광고·협찬은 따로 표시합니다.</p>
    <div class="fun-grid">
      <div class="fun-card" data-act="goClan" data-surname="지" data-bon="충주"><span>충주 지씨 루트</span><b>중앙탑 · 탄금대 · 남한강</b><em>올뱅이국 · 꿩요리 · 사과</em></div>
      <div class="fun-card red" data-act="goClan" data-surname="이" data-bon="전주"><span>전주 루트</span><b>경기전 · 한옥마을</b><em>비빔밥 · 콩나물국밥</em></div>
      <div class="fun-card green" data-act="goClan" data-surname="권" data-bon="안동"><span>안동 루트</span><b>태사묘 · 월영교</b><em>찜닭 · 헛제사밥</em></div>
    </div>
    ${missionPanel('home-fun','오늘 하나만 해보는 지역 미션')}
  </section>`;
}
function homeCategoryPanel(){
  if(homeCategory === 'name') return compactNameGuide();
  if(homeCategory === 'fun') return `${regionalFunPanel()}${homeMapPreview()}`;
  if(homeCategory === 'biz') return `${localCommercePackagePanel()}${businessImpactSection('compact')}`;
  return `<section class="home-quick-panel">
    ${homeMapPreview()}
    ${quickRouteCards()}
    <button class="btn btn-line" data-act="homeCat" data-cat="name">본관을 모르는 이름도 보기</button>
  </section>`;
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
    <p class="business-lead">사용자는 이름과 지역을 배우고, 지역은 방문 이유를 얻고, 소상공인은 스토리 스팟과 쿠폰·예약·협찬 슬롯으로 고객을 만납니다.</p>
    <div class="impact-grid">${cards}</div>
    <div class="revenue-stack" aria-label="수익 루트">
      <div><b>무료 이용자</b><span>검색·지도·퀴즈</span></div>
      <i></i>
      <div><b>지역 방문</b><span>코스 저장·쿠폰</span></div>
      <i></i>
      <div><b>사업 수익</b><span>B2B 리포트·광고·제휴</span></div>
    </div>
    <div class="sponsor-toggle">
      <div><b>스토리 스팟 보기</b><span>광고·협찬 라벨을 붙여도 학습 루트는 그대로 볼 수 있습니다.</span></div>
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
    ['백년가게·노포','한 그릇 기억 스팟','향토음식·노포·청년 가게를 지역 이야기 맥락으로 보여줍니다.'],
    ['지자체 데모','생활인구 관심 리포트','저장·퀴즈·지도 클릭 같은 관심 지표를 월간 제안 자료로 묶습니다.']
  ];
  return `<div class="sponsor-spots" aria-label="광고 협찬 스팟">
    ${spots.map(s=>`<div class="sponsor-card"><span>${s[0]}</span><b>${s[1]}</b><p>${s[2]}</p></div>`).join('')}
  </div>`;
}

/* ---- 홈 ---- */
function screenHome(){
  return `<div class="screen">
    <section class="hero command-hero">
      <div class="hero-badge">무료로 내 루트 보기</div>
      <h1 class="hero-title">내 이름이 닿는 지역을<br><em>지도에서 바로 확인</em></h1>
      <p class="hero-desc">성씨·본관 기록은 기록대로, 본관을 모르는 이름은 성씨·연원 기록으로 안내합니다.</p>
      ${homePathBar()}
    </section>
    ${searchCard('primary')}
    ${familyQuestionPanel('내 이름 루트')}
    ${instantRouteResult()}
    ${rootPassportPanel('내 이름 루트')}
    ${homeCategoryTabs()}
    ${homeCategoryPanel()}
    ${trustRail()}
    ${publicNotice()}
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
function routeResultModel(p){
  const query = (p.query||'').trim();
  const found = searchMatches(query);
  const clan = p.mode === 'name' ? null : ((p.surname && p.bon ? find(p.surname,p.bon) : null) || found.clans[0] || null);
  const track = (p.track ? findTrack(p.track) : null) || found.tracks[0] || findTrack('bon-unknown') || nameTracks()[0];
  const region = clan?.region || track?.region || '지역 확인 전';
  const food = clan?.food?.[0] || (track?.id==='ji-name-record' ? '운정식당 올뱅이국' : '지역 한 그릇 기억');
  const tour = clan?.course?.day1?.[0] || (track?.id==='ji-name-record' ? '충주 중앙탑' : '생활권 지도');
  return {query, found, clan, track, region, food, tour};
}
function routeResultHeroCard(label,value,body){
  return `<div class="route-result-card"><span>${label}</span><b>${value}</b><p>${body}</p></div>`;
}
function routeBusinessPackage(){
  const packs = [
    ['이용자','뿌리여권','한자·가족질문·지역음식·사진 미션으로 재방문을 만듭니다.'],
    ['소상공인','스토리 스팟','노포·전통시장·청년가게를 광고 라벨과 함께 지역 이야기로 연결합니다.'],
    ['지자체','생활인구 리포트','검색·저장·지도 클릭·미션 체크를 지역 관심 지표로 묶습니다.']
  ];
  return `<section class="route-business-pack">
    <div class="sec-label">사업 패키지</div>
    <h3>사용자 재미가 지역 제안서가 되는 구조</h3>
    <div>${packs.map(p=>`<article><span>${p[0]}</span><b>${p[1]}</b><p>${p[2]}</p></article>`).join('')}</div>
  </section>`;
}
function screenRouteResult(p){
  const r = routeResultModel(p);
  const clan = r.clan;
  const track = r.track;
  const routeTitle = clan ? clanName(clan) : track.title;
  const safeQuery = displayQuery(r.query || routeTitle || '이름');
  return `<div class="screen">
    <section class="route-result-hero">
      <div class="sec-label">15초 루트 설계서</div>
      <h2>「${safeQuery}」 다음 행동 3가지</h2>
      <p>족보식 단정이 아니라, 문헌 기록·성씨연원·지역지도·소상공인 스팟을 나눠 보여주는 실행 화면입니다.</p>
      <div class="route-result-steps">
        <span>1 확인 방식</span><i></i><span>2 지역 지도</span><i></i><span>3 뿌리여권</span><i></i><span>4 스토리 스팟</span>
      </div>
    </section>
    ${familyQuestionPanel(routeTitle)}
    ${routeStoryBoard(clan, track)}
    <section class="route-result-grid">
      ${routeResultHeroCard('지역 루트', r.region, `${r.tour}에서 시작해 ${r.food}까지 이어지는 하루 코스입니다.`)}
      ${routeResultHeroCard('기록 상태', clan?levelLabel(clan.verifyLevel):levelLabel(track.verifyLevel), '출처 등급을 올리기 전에는 개인 가계로 확정하지 않습니다.')}
      ${routeResultHeroCard('수익 연결', '스토리 스팟', '광고·협찬 라벨을 붙인 지역 가게 카드와 지자체 리포트로 확장합니다.')}
    </section>
    ${fortunePanel(clan, track)}
    <section class="route-next-actions">
      <div class="route-next-main">
        <span>${clan?'문헌 기록 후보':'성씨·연원 기록 후보'}</span>
        <b>${routeTitle}</b>
        <p>${clan?clan.tagline:track.story}</p>
      </div>
      <div class="route-next-buttons">
        ${clan?`<button type="button" data-act="goClan" data-surname="${clan.surname}" data-bon="${clan.bon}">가문 상세</button>
        <button type="button" data-act="goClanTravel" data-surname="${clan.surname}" data-bon="${clan.bon}">지도·1박2일</button>`:''}
        ${track?`<button type="button" class="alt" data-act="goNameTrack" data-track="${track.id}">성씨·연원 기록</button>`:''}
      </div>
    </section>
    ${routeQuizPanel(clan, track)}
    ${rootPassportPanel(routeTitle)}
    ${missionPanel(`route-${norm(routeTitle)}`,'이 루트로 찍는 뿌리여권')}
    ${routeBusinessPackage()}
    ${localCommercePackagePanel()}
    ${businessImpactSection('compact')}
    ${feedbackCta('routeResult')}
    ${publicNotice()}
  </div>`;
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
    <div class="info"><div class="nm">${clanName(c)}${c.badge?` <span class="context-chip">${c.badge}</span>`:''}${c.verifyLevel==='draft'?` <span class="draft-tag">확인 필요</span>`:''}</div><div class="tg">${c.tagline}</div></div>
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
    ${rootPassportPanel('내 이름 루트')}
    ${familyQuestionPanel('내 이름 루트')}
    ${familyAnswersSection()}
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
      <div class="nm">${clanName(c)}</div>
      <div class="tg">“${c.tagline}”</div>
      <div class="meta">시조 ${c.founder} · 연고지 ${c.region}</div>
    </div>
    ${rootPassportPanel(clanName(c))}
    ${familyQuestionPanel(clanName(c))}
    ${familyAnswersSection()}
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
      <p>가문, 관광, 진짜맛집, 연원기록을 한 지도에서 켜고 끄며 봅니다. 마커를 누르면 상세내용이 바로 열립니다.</p>
    </section>
    ${worldMapSection()}
    ${rootPassportPanel('지역 스탬프')}
    ${regionCurationSection()}
    ${missionPanel('region','지도에서 고른 지역 미션')}
    ${businessImpactSection()}
    ${localCommercePackagePanel()}
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
      <button class="layer-toggle on" data-act="toggleMapLayer" data-layer="tour"><span class="dot tour"></span>관광</button>
      <button class="layer-toggle on" data-act="toggleMapLayer" data-layer="food"><span class="dot food"></span>진짜맛집</button>
      <button class="layer-toggle on" data-act="toggleMapLayer" data-layer="story"><span class="dot story"></span>연원기록</button>
    </div>
    <div id="worldMap"></div>
    <div class="map-note">지도 마커 클릭 시 상세내용이 아래 카드에 열립니다 · 출처 등급과 연결 루트를 함께 표시</div>
    ${mapPointListShell()}
    ${mapDetailShell()}
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
      ${mapPointListShell()}
      ${mapDetailShell()}
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
    ${trackStoryBoard(track)}
    ${fortunePanel(null, track)}
    ${nameTrackFunPreview(track)}
    ${missionPanel(`track-${track.id}`,'이 이름 길에서 해볼 미션')}
    ${feedbackCta('nameTrack')}
    <div id="nameMap"></div>
    ${mapPointListShell()}
    ${mapDetailShell()}
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
      <div class="nm">${clanName(c)}</div>
      <div class="hanja" aria-label="${c.bon} ${c.surname}씨">${c.bonHanja} ${c.surnameHanja}氏</div>
      <div class="tg">“${c.tagline}”</div>
      ${c.badge?`<div class="hero-context">${c.badge} · ${c.population}</div>`:''}
      <div class="meta">시조 ${c.founder} · ${c.epoch} · ${c.region}</div>
      <div>${c.verifyLevel==='draft' ? srcBadge('todo','작성 초안 · 확인 필요') : srcBadge('primary', `통계청 ${c.populationYear||'2015'} 인구주택총조사`)}</div>
      <button class="hanja-btn" data-act="hanja" data-surname="${c.surname}" data-bon="${c.bon}">${IC.pen} 한자 따라쓰기</button>
    </div>
    ${routeSavePanel('clan', c)}
    ${clanStoryBoard(c)}
    ${fortunePanel(c, null)}
    ${clanFunPreview(c)}
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
function clanFunPreview(c){
  const tour = (c.course?.day1 || []).slice(0,3);
  const foods = (c.food || []).slice(0,3);
  const regionNote = c.region || c.bon;
  return `<section class="detail-fun-preview">
    <div class="detail-fun-head">
      <div><span>지역 재미 미리보기</span><b>관광지 · 맛집 · 지역 유래</b></div>
      <button type="button" data-act="sub" data-sub="여행">지도·1박2일</button>
    </div>
    <div class="detail-fun-grid">
      <div><span>관광지</span><b>${tour.join(' · ')}</b></div>
      <div><span>맛집</span><b>${foods.join(' · ')}</b></div>
      <div><span>지역 유래</span><b>${regionNote}에서 이름의 흔적을 공개 기록과 함께 봅니다.</b></div>
    </div>
  </section>`;
}
function nameTrackFunPreview(track){
  const isJi = track.id === 'ji-name-record';
  const tour = isJi ? '충주 중앙탑 · 탄금대 · 남한강' : `${track.region} 생활권 · 가족 기억 · 공개 자료`;
  const food = isJi ? '운정식당 올뱅이국 · 대장군식당 꿩요리 · 충주 사과' : '지역 시장 · 오래 간 가게 · 가족 밥상';
  return `<section class="detail-fun-preview story-mode">
    <div class="detail-fun-head">
      <div><span>성씨·연원 기록</span><b>족보 기록과 별도로 보는 지역 이야기</b></div>
      <button type="button" data-act="tab" data-tab="region">지도 보기</button>
    </div>
    <div class="detail-fun-grid">
      <div><span>지역 스토리</span><b>${tour}</b></div>
      <div><span>먹거리</span><b>${food}</b></div>
      <div><span>확인 방식</span><b>자동 귀속하지 않고 한자·생활권·가족 문서를 나눠 확인합니다.</b></div>
    </div>
  </section>`;
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
      <div class="layer-controls four" aria-label="지도 레이어">
        <button class="layer-toggle on" data-act="toggleMapLayer" data-layer="family"><span class="dot family"></span>가문 연고지</button>
        <button class="layer-toggle on" data-act="toggleMapLayer" data-layer="tour"><span class="dot tour"></span>관광지</button>
        <button class="layer-toggle on" data-act="toggleMapLayer" data-layer="food"><span class="dot food"></span>진짜맛집</button>
        <button class="layer-toggle on" data-act="toggleMapLayer" data-layer="story"><span class="dot story"></span>연원기록</button>
      </div>
      <div id="map"></div>
      <div class="map-note">마커 클릭 시 상세내용이 아래 카드에 열립니다 · 출처 등급과 연결 루트를 함께 표시</div>
      ${mapPointListShell()}
      ${mapDetailShell()}
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
let MAP_SELECTED_POINT=null;
let MAP_POINT_STORE={};
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
  "안동찜닭":{lat:36.5658,lng:128.7301,type:"food",desc:"안동 구시장 찜닭골목 권역",verifyLevel:"partial"},
  "중앙탑사적공원":{lat:37.0169,lng:127.8625,type:"tour",desc:"충주 탑평리 칠층석탑과 남한강 경관",verifyLevel:"verified"},
  "충주박물관":{lat:37.0174,lng:127.8620,type:"tour",desc:"충주 역사 자료를 볼 수 있는 박물관",verifyLevel:"verified"},
  "탄금대":{lat:36.9774,lng:127.9186,type:"tour",desc:"우륵과 가야금 전승이 함께 전하는 충주 명소",verifyLevel:"verified"},
  "수안보 온천":{lat:36.8466,lng:127.9954,type:"tour",desc:"충주 수안보 온천 관광권역",verifyLevel:"partial"},
  "충주 활옥동굴":{lat:36.9586,lng:127.9698,type:"tour",desc:"충주 동굴형 관광지",verifyLevel:"partial"},
  "충주 자유시장":{lat:36.9708,lng:127.9329,type:"tour",desc:"충주 도심 전통시장권",verifyLevel:"partial"},
  "운정식당 · 충주 올뱅이국":{lat:36.9796,lng:127.9316,type:"food",desc:"한국관광공사 충주 음식 기사에 소개된 올뱅이해장국 식당",detail:"대표 메뉴는 올뱅이해장국으로 소개되며, 충주 KBS·이마트 인근 주소가 공개 자료에 기재되어 있습니다.",source:"한국관광공사 대한민국 구석구석",sourceUrl:"https://korean.visitkorea.or.kr/detail/rem_detail.do?cotid=e79e6c19-6f39-4598-b0f0-d2d6c680fbe6",verifyLevel:"partial"},
  "대장군식당 · 충주 꿩요리":{lat:36.8433,lng:127.9966,type:"food",desc:"한국관광공사 충주 음식 기사에 소개된 수안보 꿩요리 식당",detail:"전통 꿩코스요리와 주소가 공개 자료에 기재되어 있습니다. 영업 여부는 방문 전 확인이 필요합니다.",source:"한국관광공사 대한민국 구석구석",sourceUrl:"https://korean.visitkorea.or.kr/detail/rem_detail.do?cotid=e79e6c19-6f39-4598-b0f0-d2d6c680fbe6",verifyLevel:"partial"},
  "충주 자유시장 먹거리":{lat:36.9708,lng:127.9329,type:"food",desc:"충주 도심 전통시장권에서 지역 먹거리를 함께 둘러보는 지점",detail:"개별 점포 추천이 아니라 시장권역 표시입니다. 실제 광고·협찬이 붙으면 별도 라벨을 표시합니다.",source:"한국관광공사 대한민국 구석구석",sourceUrl:"https://korean.visitkorea.or.kr/detail/rem_detail.do?cotid=1f390d1d-6f63-4c6b-8b53-737dc3e1a0b2",verifyLevel:"partial"},
  "충주 올뱅이국":{lat:36.9796,lng:127.9316,type:"food",desc:"운정식당 등 충주 올뱅이해장국 권역",verifyLevel:"partial"},
  "충주 꿩요리":{lat:36.8433,lng:127.9966,type:"food",desc:"수안보 권역에서 알려진 충주 음식",verifyLevel:"partial"},
  "막국수":{lat:36.991,lng:127.9259,type:"food",desc:"충주 여행 중 곁들일 수 있는 면 요리",verifyLevel:"partial"},
  "충주 사과":{lat:36.991,lng:127.9259,type:"food",desc:"충주 지역 특산물",verifyLevel:"partial"}
};
function mapPopup(p){
  return `<b>${esc(p.name)}</b><br>${esc(p.desc||'')}<br><span class="popup-level ${p.verifyLevel}">${levelLabel(p.verifyLevel)}</span><br><small>아래 상세카드에서 출처와 연결 루트를 확인하세요</small>`;
}
function mapIcon(type){
  return L.divIcon({className:`map-icon-shell ${type}`,html:`<div class="map-marker ${type}"></div>`,iconSize:[24,24],iconAnchor:[12,12]});
}
function mapFallback(el, msg){
  el.innerHTML = `<div class="map-fallback"><b>지도를 준비 중입니다</b><span>${msg}</span></div>`;
}
function pointTypeLabel(type){
  return ({family:'가문', tour:'관광', food:'진짜맛집', story:'연원기록'})[type] || '지도';
}
function mapDetailShell(){
  return `<div id="mapDetailCard" class="map-detail-card empty" aria-live="polite">
    <span>지도 마커 상세</span>
    <b>마커를 누르면 상세내용이 여기에 열립니다</b>
    <p>가문, 관광지, 진짜맛집, 연원기록을 색으로 구분하고 출처 등급을 같이 표시합니다.</p>
  </div>`;
}
function mapPointListShell(){
  return `<div id="mapPointList" class="map-point-list" aria-label="지도 항목 빠른 선택"></div>`;
}
function renderMapPointList(groups){
  const el = $('mapPointList');
  if(!el) return;
  MAP_POINT_STORE={};
  const order = [['family','가문'],['tour','관광'],['food','진짜맛집'],['story','연원기록']];
  const html = order.map(([type,label])=>{
    const items = (groups[type] || []).filter(p=>Number.isFinite(p.lat)&&Number.isFinite(p.lng)).slice(0,6);
    if(!items.length) return '';
    return `<div class="map-point-group"><span>${label}</span><div>${items.map((p,i)=>{
      const key = `${type}-${i}-${norm(p.name)}`;
      MAP_POINT_STORE[key]=p;
      return `<button type="button" data-act="mapPointDetail" data-point="${esc(key)}"><i class="dot ${type}"></i>${esc(p.name)}</button>`;
    }).join('')}</div></div>`;
  }).join('');
  el.innerHTML = html || '<div class="map-point-empty">표시할 지도 항목이 아직 없습니다.</div>';
}
function mapDetailAction(p){
  const actions = [];
  actions.push(`<button type="button" data-act="stampPlace" data-name="${esc(p.name || '지역 스팟')}" data-type="${esc(p.type || 'place')}">방문 스탬프</button>`);
  if(p.sourceUrl) actions.push(`<a href="${esc(p.sourceUrl)}" target="_blank" rel="noopener">출처 열기</a>`);
  if(p.surname && p.bon) actions.push(`<button type="button" data-act="goClan" data-surname="${esc(p.surname)}" data-bon="${esc(p.bon)}">관련 가문 보기</button>`);
  if(p.trackId) actions.push(`<button type="button" data-act="goNameTrack" data-track="${esc(p.trackId)}">연원기록 보기</button>`);
  return actions.join('');
}
function showMapDetail(p){
  MAP_SELECTED_POINT=p;
  const card = $('mapDetailCard');
  if(!card) return;
  const source = p.source || (p.type==='family' ? '가문/본관 공개 기록' : p.type==='story' ? '성씨·연원 기록' : p.type==='tour' ? '관광 공개 자료' : '음식·지역 공개 자료');
  card.className = `map-detail-card ${p.type || ''}`;
  card.innerHTML = `<div class="map-detail-top">
      <span>${pointTypeLabel(p.type)}</span>
      ${factBadge(p.verifyLevel || 'partial')}
    </div>
    <b>${esc(p.name)}</b>
    <p>${esc(p.detail || p.desc || '상세 설명을 준비 중입니다.')}</p>
    <div class="map-detail-meta">
      <span>출처: ${esc(source)}</span>
      <span>좌표: ${Number.isFinite(p.lat)?p.lat.toFixed(4):'-'}, ${Number.isFinite(p.lng)?p.lng.toFixed(4):'-'}</span>
    </div>
    <div class="map-commerce-line"><span>방문 스탬프</span><span>쿠폰 준비중</span><span>광고·협찬 라벨 분리</span></div>
    <div class="map-detail-actions">${mapDetailAction(p)}</div>`;
  setTimeout(()=>card.scrollIntoView({block:'nearest',behavior:'smooth'}), 40);
}
function markerForPoint(p){
  const z = ({story:900, food:800, tour:700, family:600})[p.type] || 500;
  const marker = L.marker([p.lat,p.lng],{icon:mapIcon(p.type), zIndexOffset:z, title:p.name, alt:p.name})
    .bindPopup(mapPopup(p))
    .on('click',()=>showMapDetail(p));
  marker.on('add',()=>{
    const icon = marker.getElement();
    if(icon){
      icon.dataset.mapType = p.type || '';
      icon.dataset.mapName = p.name || '';
      icon.addEventListener('click',()=>showMapDetail(p));
    }
  });
  return marker;
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
  const family = [{name:`${clanName(c)} 연고지`,lat:c.lat,lng:c.lng,type:'family',desc:c.region,detail:c.story,surname:c.surname,bon:c.bon,source:'가문/본관 공개 기록',verifyLevel:c.verifyLevel||'partial'}];
  const tourNames = [...(c.course?.day1||[]), ...(c.course?.day2||[])];
  const tour = tourNames.map(n=>catalogPoint(n,'tour')).filter(Boolean).map(p=>({...p,surname:c.surname,bon:c.bon,source:p.source||'관광 공개 자료'}));
  const food = [...(c.food||[])].map(n=>catalogPoint(n,'food')).filter(Boolean).map(p=>({...p,surname:c.surname,bon:c.bon,source:p.source||'음식·지역 공개 자료'}));
  const story = nameTracks()
    .filter(t=>Number.isFinite(t.lat)&&Number.isFinite(t.lng)&&(t.surname===c.surname || norm(t.region).includes(norm(c.bon)) || norm(t.region).includes(norm(c.region))))
    .map(t=>({name:t.title,lat:t.lat,lng:t.lng,type:'story',desc:`${trackKind(t)} · ${t.region}`,detail:t.story||t.origin,trackId:t.id,source:(t.sources||[])[0]||'성씨·연원 기록',sourceUrl:(t.sourceUrls||[])[0],verifyLevel:t.verifyLevel||'partial'}));
  return {family,tour,food,story};
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
    renderMapPointList(points);
    MAP_LAYERS = {};
    Object.entries(points).forEach(([type,items])=>{
      MAP_LAYERS[type]=L.layerGroup(items.filter(p=>Number.isFinite(p.lat)&&Number.isFinite(p.lng)).map(p=>markerForPoint(p)));
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
    if(first) showMapDetail(first);
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
    const mapItems = points.map(p=>({
        name:p.title,
        lat:p.lat,
        lng:p.lng,
        type:p.isGenealogy?'family':'story',
        desc:`${trackKind(p)} · ${p.region}`,
        detail:p.story || p.origin,
        trackId:p.id,
        source:(p.sources || [])[0] || '성씨·연원 기록',
        sourceUrl:(p.sourceUrls || [])[0],
        verifyLevel:p.verifyLevel || 'partial'
    }));
    renderMapPointList({
      family:mapItems.filter(p=>p.type==='family'),
      story:mapItems.filter(p=>p.type==='story')
    });
    mapItems.forEach(item=>markerForPoint(item).addTo(MAP));
    if(points.length>1) MAP.fitBounds(L.latLngBounds(points.map(p=>[p.lat,p.lng])).pad(.25));
    else if(points[0]) MAP.setView([points[0].lat,points[0].lng],8);
    if(mapItems[0]) showMapDetail(mapItems[0]);
    setTimeout(()=>MAP.invalidateSize(),120);
    setTimeout(()=>MAP.invalidateSize(),420);
  });
}
function worldMapPoints(){
  const family = CLANS.filter(c=>Number.isFinite(c.lat)&&Number.isFinite(c.lng)).map(c=>({
    name:clanName(c), lat:c.lat, lng:c.lng, type:'family', desc:`가문/본관 기록 · ${c.region}`, detail:c.story, surname:c.surname, bon:c.bon, source:'가문/본관 공개 기록', verifyLevel:c.verifyLevel||'partial'
  }));
  const seen={};
  const allTours = [], allFood = [];
  CLANS.forEach(c=>{
    [...(c.course?.day1||[]), ...(c.course?.day2||[])].forEach(n=>{ const p=catalogPoint(n,'tour'); if(p&&!seen[`t-${n}`]){ seen[`t-${n}`]=1; allTours.push({...p,surname:c.surname,bon:c.bon,source:p.source||'관광 공개 자료'}); } });
    [...(c.food||[])].forEach(n=>{ const p=catalogPoint(n,'food'); if(p&&!seen[`f-${n}`]){ seen[`f-${n}`]=1; allFood.push({...p,surname:c.surname,bon:c.bon,source:p.source||'음식·지역 공개 자료'}); } });
  });
  const story = nameTracks().filter(p=>Number.isFinite(p.lat)&&Number.isFinite(p.lng)).map(p=>({
    name:p.title, lat:p.lat, lng:p.lng, type:'story', desc:`${trackKind(p)} · ${p.region}`, detail:p.story || p.origin, trackId:p.id, source:(p.sources || [])[0] || '성씨·연원 기록', sourceUrl:(p.sourceUrls || [])[0], verifyLevel:p.verifyLevel||'partial'
  }));
  return {family,tour:allTours,food:allFood,story};
}
function buildWorldMap(){
  const el = $('worldMap'); if(!el) return;
  withLeaflet(el, ()=>{
    if(MAP){ MAP.remove(); MAP=null; }
    MAP_LAYER_STATE={family:true,tour:true,food:true,story:true};
    MAP = L.map('worldMap',{zoomControl:true,attributionControl:true}).setView([36.5,127.8],6);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      {maxZoom:19,subdomains:'abc',attribution:'© OpenStreetMap contributors'}).addTo(MAP);
    const points = worldMapPoints();
    renderMapPointList(points);
    MAP_LAYERS = {};
    Object.entries(points).forEach(([type,items])=>{
      MAP_LAYERS[type]=L.layerGroup(items.map(p=>markerForPoint(p)));
    });
    updateMapLayerUI();
    const route = Object.values(points).flat().filter(p=>Number.isFinite(p.lat)&&Number.isFinite(p.lng));
    if(route.length>1) MAP.fitBounds(L.latLngBounds(route.map(p=>[p.lat,p.lng])).pad(.16));
    const first = [...points.family, ...points.story, ...points.tour, ...points.food][0];
    if(first) showMapDetail(first);
    setTimeout(()=>MAP.invalidateSize(),120);
    setTimeout(()=>MAP.invalidateSize(),420);
  });
}

/* ---- 글자 따라쓰기 (한자 획순 + 한글 이름) ---- */
let HZ=null, HZ_CHARS=[], HZ_CLAN_CHARS=[], HZ_IDX=0, HZ_MODE='clan', HZ_TOTAL=0, HZ_GUIDE_STEP=0;
const HANGUL_CHO = ['ㄱ','ㄲ','ㄴ','ㄷ','ㄸ','ㄹ','ㅁ','ㅂ','ㅃ','ㅅ','ㅆ','ㅇ','ㅈ','ㅉ','ㅊ','ㅋ','ㅌ','ㅍ','ㅎ'];
const HANGUL_JUNG = ['ㅏ','ㅐ','ㅑ','ㅒ','ㅓ','ㅔ','ㅕ','ㅖ','ㅗ','ㅘ','ㅙ','ㅚ','ㅛ','ㅜ','ㅝ','ㅞ','ㅟ','ㅠ','ㅡ','ㅢ','ㅣ'];
const HANGUL_JONG = ['','ㄱ','ㄲ','ㄳ','ㄴ','ㄵ','ㄶ','ㄷ','ㄹ','ㄺ','ㄻ','ㄼ','ㄽ','ㄾ','ㄿ','ㅀ','ㅁ','ㅂ','ㅄ','ㅅ','ㅆ','ㅇ','ㅈ','ㅊ','ㅋ','ㅌ','ㅍ','ㅎ'];
function orderedHanja(v){ return [...String(v||'')].filter(x=>/[一-鿿]/.test(x)); }
function orderedHangul(v){ return [...String(v||'').replace(/\s+/g,'')].filter(x=>/[가-힣ㄱ-ㅎㅏ-ㅣ]/.test(x)); }
function uniqHanja(c){ return [...new Set(orderedHanja(c.bonHanja+c.surnameHanja+'氏'))]; }
function openHanja(s,b){
  const c=find(s,b); if(!c) return; HZ_CLAN_CHARS=uniqHanja(c); HZ_CHARS=[...HZ_CLAN_CHARS]; HZ_IDX=0; HZ_MODE='clan'; HZ_GUIDE_STEP=0;
  let m=$('hanjaModal');
  if(!m){ m=document.createElement('div'); m.id='hanjaModal'; m.className='modal'; $('app').appendChild(m); }
  m.innerHTML=`<div class="modal-card">
    <div class="modal-head"><div><div class="modal-title">글자 따라쓰기</div>
      <div class="modal-sub">${clanName(c)} · 획순서 가이드를 보고 천천히 씁니다</div></div>
      <div class="modal-close" data-act="hanja-close" role="button" aria-label="닫기">×</div></div>
    <div class="hz-mode-switch" aria-label="따라쓰기 방식 선택">
      <button class="hz-mode-btn on" data-act="hz-mode" data-mode="clan">성씨·본관 한자</button>
      <button class="hz-mode-btn" data-act="hz-mode" data-mode="full">전체 이름 한자</button>
      <button class="hz-mode-btn" data-act="hz-mode" data-mode="hangul">한글 이름</button>
    </div>
    <div class="hz-input-panel" id="hzFullPanel">
      <label>전체 이름 한자</label>
      <div><input id="hzFullName" placeholder="예: 池旼俊"><button data-act="hz-apply-full">이름 한자 쓰기</button></div>
      <p>한자 이름을 아는 경우 성과 이름 전체를 글자별로 연습합니다.</p>
    </div>
    <div class="hz-input-panel" id="hzHangulPanel">
      <label>한글 이름 따라쓰기</label>
      <div><input id="hzHangulName" placeholder="예: 지민준"><button data-act="hz-apply-hangul">한글 이름 쓰기</button></div>
      <p>한자 이름이 없거나 모르면 한글 이름을 초성·중성·종성 순서로 연습합니다.</p>
    </div>
    <div class="hz-tabs" id="hzTabs"></div>
    <div class="hz-mean" id="hzMean"></div>
    <div class="hz-guide" id="hzGuide"></div>
    <div class="hz-stage"><div id="hzTarget"></div></div>
    <div class="hz-caption" id="hzCaption">‘획순 보기’로 순서를 보고, ‘따라쓰기 시작’으로 천천히 그려보세요.</div>
    <div class="hz-controls">
      <button class="hz-btn" data-act="hz-animate">획순 보기</button>
      <button class="hz-btn primary" data-act="hz-quiz">따라쓰기 시작</button>
      <button class="hz-btn" data-act="hz-reset">다시</button></div></div>`;
  requestAnimationFrame(()=>m.classList.add('on'));
  renderHzModes(); renderHzTabs(); hzLoad();
}
function renderHzModes(){
  document.querySelectorAll('.hz-mode-btn').forEach(btn=>btn.classList.toggle('on', btn.dataset.mode===HZ_MODE));
  const full=$('hzFullPanel'), hangul=$('hzHangulPanel');
  if(full) full.classList.toggle('on', HZ_MODE==='full');
  if(hangul) hangul.classList.toggle('on', HZ_MODE==='hangul');
}
function switchHzMode(mode){
  HZ_MODE = mode || 'clan'; HZ_GUIDE_STEP=0; renderHzModes();
  if(HZ_MODE==='clan'){
    HZ_CHARS=[...HZ_CLAN_CHARS]; HZ_IDX=0; renderHzTabs(); hzLoad(); return;
  }
  if(HZ_MODE==='full'){ applyFullHanjaName(true); return; }
  applyHangulName(true);
}
function applyFullHanjaName(quiet){
  const chars = orderedHanja($('hzFullName')?.value || '');
  if(!chars.length){ HZ_CHARS=[]; HZ_IDX=0; renderHzTabs(); renderHzEmpty('전체 이름 한자', quiet?'한자 이름을 입력하면 글자별 획순서를 보여드립니다.':'한자로 된 이름을 입력하세요.'); return; }
  HZ_MODE='full'; HZ_CHARS=chars; HZ_IDX=0; HZ_GUIDE_STEP=0; renderHzModes(); renderHzTabs(); hzLoad();
}
function applyHangulName(quiet){
  const chars = orderedHangul($('hzHangulName')?.value || '');
  if(!chars.length){ HZ_CHARS=[]; HZ_IDX=0; renderHzTabs(); renderHzEmpty('한글 이름', quiet?'한글 이름을 입력하면 초성·중성·종성 순서로 안내합니다.':'한글 이름을 입력하세요.'); return; }
  HZ_MODE='hangul'; HZ_CHARS=chars; HZ_IDX=0; HZ_GUIDE_STEP=0; renderHzModes(); renderHzTabs(); hzLoad();
}
function renderHzEmpty(title, msg){
  HZ=null; HZ_TOTAL=0;
  const mn=$('hzMean'); if(mn) mn.innerHTML=`<b>입력</b> <span>${title}</span>`;
  const guide=$('hzGuide'); if(guide) guide.innerHTML=`<div class="hz-guide-top"><b>대기</b><span>${msg}</span></div>`;
  const target=$('hzTarget'); if(target) target.innerHTML=`<div class="hz-empty">이름을 입력하고<br>따라쓰기 모드를 시작하세요</div>`;
  const cap=$('hzCaption'); if(cap) cap.textContent=msg;
}
function renderHzTabs(){ const t=$('hzTabs'); if(t) t.innerHTML=HZ_CHARS.length?HZ_CHARS.map((ch,i)=>`<div class="hz-tab ${i===HZ_IDX?'on':''}" data-act="hz-tab" data-i="${i}">${ch}</div>`).join(''):`<div class="hz-tab empty">입력</div>`; }
function hzLoad(){
  const t=$('hzTarget'); if(!t) return; t.innerHTML=''; HZ=null; HZ_TOTAL=0; HZ_GUIDE_STEP=0;
  if(!HZ_CHARS.length){ renderHzEmpty(HZ_MODE==='hangul'?'한글 이름':'전체 이름 한자','이름을 입력하면 따라쓰기 가이드가 열립니다.'); return; }
  const ch=HZ_CHARS[HZ_IDX]; const mn=$('hzMean');
  if(mn) mn.innerHTML=`<b>${ch}</b> <span>${HZ_MODE==='hangul'?'한글 이름':hunOf(ch)}</span>`;
  const cap=$('hzCaption');
  if(HZ_MODE==='hangul'){ renderHangulTrace(ch); return; }
  updateHanziGuide(ch, 0, 0, 'ready');
  if(cap) cap.textContent=`${ch} 글자는 먼저 획순 보기로 방향을 보고, 따라쓰기 시작을 누르면 현재 획을 안내합니다.`;
  if(typeof HanziWriter==='undefined'){ if(cap)cap.textContent='한자 데이터를 불러오는 중이에요. 잠시 후 다시 눌러주세요.'; return; }
  HZ=HanziWriter.create('hzTarget', HZ_CHARS[HZ_IDX], {
    width:240,height:240,padding:12,showOutline:true,showCharacter:false,
    strokeColor:'#1C1A17',radicalColor:'#B04A33',outlineColor:'#E2DBC9',
    drawingColor:'#B04A33',drawingWidth:26,highlightColor:'#C9A227',
    strokeAnimationSpeed:1.1,delayBetweenStrokes:260,
    onLoadCharDataSuccess:function(data){ HZ_TOTAL = data?.strokes?.length || 0; updateHanziGuide(ch, 0, HZ_TOTAL, 'ready'); },
    onLoadCharDataError:function(){ if(cap)cap.textContent='이 글자는 따라쓰기 데이터를 준비 중이에요.'; }
  });
}
function updateHanziGuide(ch, current, total, state){
  const guide=$('hzGuide'); if(!guide) return;
  const totalText = total ? `${total}획 글자` : '획순 데이터 확인 중';
  const focus = current ? `${current}획째를 쓰는 중` : '1획부터 방향을 확인';
  guide.innerHTML=`<div class="hz-guide-top"><b>${HZ_IDX+1}/${HZ_CHARS.length}</b><span>${totalText} · ${focus}</span></div>
    <ol>
      <li class="${state==='ready'||state==='animate'?'on':''}">획순 보기로 시작점과 방향을 먼저 봅니다.</li>
      <li class="${state==='quiz'?'on':''}">따라쓰기 시작 후 붉은 선 기준으로 현재 획을 씁니다.</li>
      <li class="${state==='complete'?'on':''}">막히면 힌트가 나오고, 끝나면 다음 글자로 넘어갑니다.</li>
    </ol>`;
}
function hangulParts(ch){
  const code = ch.charCodeAt(0) - 0xAC00;
  if(code < 0 || code > 11171) return [ch, '모양', ''];
  const cho = Math.floor(code / 588);
  const jung = Math.floor((code % 588) / 28);
  const jong = code % 28;
  return [HANGUL_CHO[cho], HANGUL_JUNG[jung], HANGUL_JONG[jong]];
}
function hangulSteps(ch){
  const [cho,jung,jong] = hangulParts(ch);
  return [`초성 ${cho} 먼저 자리 잡기`, `중성 ${jung}을 이어 쓰기`, jong ? `종성 ${jong} 받침 마무리` : '받침 없이 균형 확인'];
}
function renderHangulTrace(ch){
  const steps = hangulSteps(ch);
  const guide=$('hzGuide');
  if(guide) guide.innerHTML=`<div class="hz-guide-top"><b>${HZ_IDX+1}/${HZ_CHARS.length}</b><span>초성 → 중성 → 종성 순서</span></div>
    <ol>${steps.map((s,i)=>`<li class="${i===0?'on':''}">${s}</li>`).join('')}</ol>`;
  const target=$('hzTarget');
  if(target) target.innerHTML=`<div class="hangul-trace" id="hangulTrace">
    <div class="hangul-outline">${esc(ch)}</div>
    <div class="hangul-step-label">초성 → 중성 → 종성</div>
  </div>`;
  const cap=$('hzCaption');
  if(cap) cap.textContent=`${ch} 글자는 ${steps.join(' → ')} 순서로 따라 씁니다.`;
}
function advanceHangulGuide(){
  const steps=[...document.querySelectorAll('#hzGuide li')];
  if(!steps.length) return;
  HZ_GUIDE_STEP=(HZ_GUIDE_STEP+1)%steps.length;
  steps.forEach((s,i)=>s.classList.toggle('on', i===HZ_GUIDE_STEP));
  const cap=$('hzCaption');
  if(cap) cap.textContent=`${HZ_GUIDE_STEP+1}단계: ${steps[HZ_GUIDE_STEP].textContent}`;
}
function startHangulTrace(){
  $('hangulTrace')?.classList.add('trace-active');
  const cap=$('hzCaption');
  if(cap) cap.textContent='흐린 글자 위를 손가락이나 펜으로 천천히 따라 써보세요.';
}
function hzAnimate(){
  const cap=$('hzCaption');
  if(HZ_MODE==='hangul'){ advanceHangulGuide(); return; }
  const ch=HZ_CHARS[HZ_IDX];
  if(HZ){ updateHanziGuide(ch, 0, HZ_TOTAL, 'animate'); if(cap)cap.textContent=`${ch} 획순서를 1획부터 끝획까지 보여줍니다.`; HZ.animateCharacter({onComplete:function(){ if(cap)cap.textContent='이제 따라쓰기 시작을 눌러 같은 순서로 써보세요.'; }}); }
}
function hzQuiz(){
  const cap=$('hzCaption');
  if(HZ_MODE==='hangul'){ startHangulTrace(); return; }
  const ch=HZ_CHARS[HZ_IDX];
  if(HZ){ if(cap)cap.textContent=`${ch} 따라쓰기 시작. 현재 획을 천천히 그리세요.`; updateHanziGuide(ch, 1, HZ_TOTAL, 'quiz'); HZ.quiz({showHintAfterMisses:1,
    onCorrectStroke:function(s){ const done=(Number.isFinite(s?.strokeNum)?s.strokeNum+1:0); const next=done+1; updateHanziGuide(ch, next, HZ_TOTAL, s?.strokesRemaining===0?'complete':'quiz'); if(cap)cap.textContent=s?.strokesRemaining===0?'마지막 획까지 맞췄습니다.':'좋습니다. 다음 획으로 넘어갑니다.'; },
    onMistake:function(){ if(cap)cap.textContent='현재 획의 시작점과 방향을 다시 확인하세요. 힌트가 표시됩니다.'; },
    onComplete:function(){ updateHanziGuide(ch, HZ_TOTAL, HZ_TOTAL, 'complete'); if(cap)cap.textContent='완성했습니다. 다음 글자를 눌러 이어서 연습하세요.'; }
  }); }
}
function closeHanja(){ const m=$('hanjaModal'); if(m){ m.classList.remove('on'); HZ=null; setTimeout(()=>{ if(m&&m.parentNode) m.remove(); },220); } }

/* ---- 뿌리 퀴즈 (출처 등급이 있는 가문 + 성씨·연원 기록) ---- */
let QZ={score:0,total:0,q:null,answered:false,questions:null,title:'뿌리 퀴즈'};
function quizPool(){ return CLANS.filter(c=>c.verifyLevel!=='draft'); }
function qShuffle(a){ for(let i=a.length-1;i>0;i--){ const j=Math.floor(Math.random()*(i+1)); const t=a[i];a[i]=a[j];a[j]=t; } return a; }
function qPick(vals,correct,n){ const p=[...new Set(vals)].filter(v=>v&&v!==correct); qShuffle(p); return p.slice(0,n); }
function quizItem(q, correct, options, explain){
  return {q, correct, options:qShuffle([correct, ...qPick(options, correct, 3)]), explain};
}
function makeClanQuiz(c){
  const L=x=>`${x.surname} ${x.bon}씨`;
  const all = quizPool();
  return [
    quizItem(`${clanName(c)}의 연고지로 앱이 표시한 지역은 어디일까요?`, c.region, all.map(x=>x.region), `정답: ${c.region} · 개인 가계 확정이 아니라 지역 루트 안내입니다.`),
    quizItem(`${clanName(c)} 화면에서 시조로 소개한 인물은 누구일까요?`, c.founder, all.map(x=>x.founder), `정답: ${c.founder} · 출처 등급은 ${levelLabel(c.verifyLevel)}입니다.`),
    quizItem(`한자 본관 「${c.bonHanja}」은(는) 어느 기록 후보일까요?`, L(c), all.map(L), `정답: ${L(c)} · 한자와 지역을 함께 확인합니다.`),
    quizItem(`이 앱에서 ${clanName(c)} 정보는 무엇으로 봐야 할까요?`, '문화관광 안내와 공개 기록 탐색', ['지역 여행 메모', '가족 질문 카드', '한자 연습 카드', '문화관광 안내와 공개 기록 탐색'], '정답: 문화관광 안내와 공개 기록 탐색 · 가계 증명서가 아닙니다.')
  ];
}
function makeTrackQuiz(t){
  const tracks = nameTracks();
  return [
    quizItem(`${t.title}은 앱에서 어떤 기록으로 구분하나요?`, trackGroup(t), tracks.map(trackGroup), `정답: ${trackGroup(t)} · 본관 기록과 낮고 높음으로 나누지 않습니다.`),
    quizItem(`${t.title}의 지역 단서로 표시된 곳은 어디일까요?`, t.region, tracks.map(x=>x.region), `정답: ${t.region} · 좌표는 지역 중심 표시입니다.`),
    quizItem(`${t.title}을 볼 때 앱이 피하는 방식은 무엇일까요?`, '확인 전 자동 연결', ['한자 확인', '생활권 확인', '확인 전 자동 연결', '가족 기억 확인'], '정답: 확인 전 자동 연결 · 모르는 것은 모른다고 표시합니다.'),
    quizItem(`성씨·연원 기록의 핵심 태도는 무엇일까요?`, '확정 전에도 조상의 생활권을 존중', ['확정 전에도 조상의 생활권을 존중', '자료를 나눠 보기', '지역 단서 모으기', '가족 질문 남기기'], '정답: 확정 전에도 조상의 생활권을 존중 · 모든 이름을 같은 무게로 다룹니다.')
  ];
}
function makeQ(){
  if(QZ.questions?.length) return QZ.questions[Math.floor(Math.random()*QZ.questions.length)];
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
function quizContextFromButton(el){
  if(!el) return {title:'뿌리 퀴즈', questions:null};
  if(el.dataset.qtype === 'clan'){
    const c = find(el.dataset.surname, el.dataset.bon);
    if(c) return {title:`${clanName(c)} 이야기 퀴즈`, questions:makeClanQuiz(c)};
  }
  if(el.dataset.qtype === 'track'){
    const t = findTrack(el.dataset.track);
    if(t) return {title:`${t.title} 이야기 퀴즈`, questions:makeTrackQuiz(t)};
  }
  return {title:'뿌리 퀴즈', questions:null};
}
function openQuiz(el){
  const ctx = quizContextFromButton(el);
  QZ={score:0,total:0,q:null,answered:false,questions:ctx.questions,title:ctx.title};
  let m=$('quizModal'); if(!m){ m=document.createElement('div'); m.id='quizModal'; m.className='modal'; $('app').appendChild(m); }
  m.innerHTML=`<div class="modal-card"><div class="modal-head"><div><div class="modal-title">${esc(QZ.title)}</div>
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
  toast(`${b} ${s}씨 — 내 가문으로 등록되었습니다`); render(); }
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
    if(selected !== '__auto__'){ go('routeResult',{track:selected, query:free, mode:'name'}); return; }
    go('routeResult',{query:free || '본관 모름', mode:'name'});
    return;
  }
  if(free){
    const exact = CLANS.find(c=>norm(free).includes(norm(c.surname+c.bon)) || norm(free).includes(norm(c.bon+c.surname)));
    if(exact){ go('routeResult',{query:free, surname:exact.surname, bon:exact.bon}); return; }
    go('searchResult',{query:free});
    return;
  }
  const s=$('selS').value; let b=$('selB').value;
  if(b==='__auto__'){ go('routeResult',{query:`${s} 씨 본관 모름`}); return; }   /* 자동 특정 본관 귀속 금지(추측·쏠림 방지) */
  go('routeResult',{surname:s, bon:b, query:`${b} ${s}씨`});
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
  else if(a==='goClanTravel') go('clan',{surname:el.dataset.surname,bon:el.dataset.bon,sub:'여행'});
  else if(a==='goNameTrack') go('nameTrack',{track:el.dataset.track, query:el.dataset.query||''});
  else if(a==='goMine') tab('mine');
  else if(a==='sub'){ curRoute().params.sub = el.dataset.sub; render(); }
  else if(a==='homeCat'){ homeCategory = el.dataset.cat || 'start'; render(); }
  else if(a==='searchMode'){ searchMode = el.dataset.mode || 'genealogy'; render(); }
  else if(a==='pickTrack'){ const sel=$('selTrack'); if(sel) sel.value=el.dataset.track; toast('이 출발점으로 안내합니다'); }
  else if(a==='search') doSearch();
  else if(a==='toggleMapLayer') toggleMapLayer(el.dataset.layer);
  else if(a==='mapPointDetail'){ const point=MAP_POINT_STORE[el.dataset.point]; if(point) showMapDetail(point); }
  else if(a==='stampPlace') stampPlace(el.dataset.name, el.dataset.type);
  else if(a==='toggleSponsor'){ sponsorVisible=!sponsorVisible; localStorage.setItem('josang_sponsor_visible', JSON.stringify(sponsorVisible)); render(); }
  else if(a==='saveRoute') saveRoute(el.dataset.type, el.dataset.id, el.dataset.label, el.dataset.meta);
  else if(a==='copyRoute') copyRouteCard(el.dataset.type, el.dataset.id, el.dataset.label, el.dataset.meta);
  else if(a==='copyFamilyQuestion') copyFamilyQuestion(el.dataset.label, el.dataset.question);
  else if(a==='saveFamilyAnswer') saveFamilyAnswer(el.dataset.label, el.dataset.question);
  else if(a==='copyFamilyHistory') copyFamilyHistoryCard();
  else if(a==='copyBusinessPitch') copyBusinessPitch();
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
  else if(a==='hz-mode') switchHzMode(el.dataset.mode);
  else if(a==='hz-apply-full') applyFullHanjaName();
  else if(a==='hz-apply-hangul') applyHangulName();
  else if(a==='hz-animate') hzAnimate();
  else if(a==='hz-quiz') hzQuiz();
  else if(a==='hz-reset') hzLoad();
  else if(a==='hz-tab'){ HZ_IDX=+el.dataset.i; HZ_GUIDE_STEP=0; renderHzTabs(); hzLoad(); }
  else if(a==='quiz' || a==='openQuiz') openQuiz(el);
  else if(a==='quiz-answer') answerQuiz(+el.dataset.i);
  else if(a==='quiz-next') nextQ();
  else if(a==='quiz-close') closeQuiz();
});

/* ---- 부팅 ---- */
render();
if('serviceWorker' in navigator){
  navigator.serviceWorker.register('sw.js?v=39').then(reg => reg.update()).catch(()=>{});
}
