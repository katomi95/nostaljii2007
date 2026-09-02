/* =========================================================
   NOSTALJII 2007  ―  engine
   ========================================================= */
(function(){
"use strict";

/* =========================================================
   1. 背景（SVG）
   ========================================================= */
const SVG_HEAD = '<svg viewBox="0 0 800 450" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">';

const BGS = {

sea: SVG_HEAD + `
<defs>
 <linearGradient id="b1a" x1="0" y1="0" x2="0" y2="1">
  <stop offset="0%" stop-color="#241a0c"/><stop offset="60%" stop-color="#5c4620"/><stop offset="100%" stop-color="#8a6a31"/></linearGradient>
 <linearGradient id="b1b" x1="0" y1="0" x2="0" y2="1">
  <stop offset="0%" stop-color="#6d5426"/><stop offset="45%" stop-color="#33260f"/><stop offset="100%" stop-color="#0f0a05"/></linearGradient>
 <radialGradient id="b1m"><stop offset="0%" stop-color="#fff0cd"/><stop offset="100%" stop-color="#fff0cd" stop-opacity="0"/></radialGradient>
</defs>
<rect width="800" height="252" fill="url(#b1a)"/>
<circle cx="596" cy="150" r="104" fill="url(#b1m)" opacity=".45"/>
<circle cx="596" cy="150" r="27" fill="#fbf0d2" opacity=".9"/>
<g fill="#1b1409" opacity=".3">
 <ellipse cx="470" cy="124" rx="220" ry="15"/><ellipse cx="250" cy="172" rx="260" ry="17"/>
 <ellipse cx="700" cy="198" rx="200" ry="13"/>
</g>
<rect y="250" width="800" height="200" fill="url(#b1b)"/>
<g fill="#f4e2b4" opacity=".14">
 <rect x="430" y="258" width="330" height="2"/><rect x="40" y="268" width="300" height="2"/>
 <rect x="300" y="282" width="420" height="3"/><rect x="0" y="298" width="330" height="3"/>
 <rect x="380" y="316" width="400" height="3"/><rect x="60" y="336" width="380" height="4"/>
</g>
<g fill="#0d0904"><rect x="0" y="356" width="800" height="94"/></g>
<g stroke="#0d0904" stroke-width="9" opacity=".96">
 <line x1="0" y1="272" x2="800" y2="272"/><line x1="0" y1="306" x2="800" y2="306"/>
 <line x1="66" y1="264" x2="66" y2="360"/><line x1="236" y1="264" x2="236" y2="360"/>
 <line x1="406" y1="264" x2="406" y2="360"/><line x1="576" y1="264" x2="576" y2="360"/>
 <line x1="746" y1="264" x2="746" y2="360"/>
</g>
<g stroke="#a8813c" stroke-width="1.6" opacity=".55">
 <line x1="0" y1="268" x2="800" y2="268"/><line x1="0" y1="302" x2="800" y2="302"/>
 <line x1="0" y1="358" x2="800" y2="358"/>
</g>` + '</svg>',

dawn: SVG_HEAD + `
<defs>
 <linearGradient id="b2a" x1="0" y1="0" x2="0" y2="1">
  <stop offset="0%" stop-color="#1d150b"/><stop offset="40%" stop-color="#6e5326"/>
  <stop offset="76%" stop-color="#c79a4d"/><stop offset="100%" stop-color="#f0cd88"/></linearGradient>
 <linearGradient id="b2b" x1="0" y1="0" x2="0" y2="1">
  <stop offset="0%" stop-color="#d6ab5e"/><stop offset="26%" stop-color="#6a4f24"/><stop offset="100%" stop-color="#130d07"/></linearGradient>
</defs>
<rect width="800" height="248" fill="url(#b2a)"/>
<rect y="246" width="800" height="204" fill="url(#b2b)"/>
<ellipse cx="392" cy="246" rx="132" ry="18" fill="#fff2c8" opacity=".65"/>
<g fill="#fff2c8" opacity=".2">
 <rect x="322" y="258" width="140" height="3"/><rect x="292" y="272" width="200" height="3"/>
 <rect x="262" y="290" width="260" height="4"/><rect x="230" y="312" width="324" height="4"/>
 <rect x="196" y="340" width="392" height="5"/>
</g>
<g fill="#160f08" opacity=".92"><rect x="0" y="362" width="800" height="88"/></g>
<g stroke="#160f08" stroke-width="8">
 <line x1="0" y1="286" x2="800" y2="286"/><line x1="0" y1="318" x2="800" y2="318"/>
 <line x1="104" y1="278" x2="104" y2="366"/><line x1="316" y1="278" x2="316" y2="366"/>
 <line x1="528" y1="278" x2="528" y2="366"/><line x1="712" y1="278" x2="712" y2="366"/>
</g>
<g stroke="#c9a05c" stroke-width="1.5" opacity=".5">
 <line x1="0" y1="282" x2="800" y2="282"/><line x1="0" y1="364" x2="800" y2="364"/>
</g>` + '</svg>',

corridor: SVG_HEAD + `
<defs>
 <linearGradient id="b3a" x1="0" y1="0" x2="0" y2="1">
  <stop offset="0%" stop-color="#4b3818"/><stop offset="100%" stop-color="#150e07"/></linearGradient>
 <radialGradient id="b3l"><stop offset="0%" stop-color="#ffd58c"/><stop offset="100%" stop-color="#ffd58c" stop-opacity="0"/></radialGradient>
</defs>
<rect width="800" height="450" fill="#0f0a05"/>
<polygon points="0,0 800,0 800,450 0,450" fill="url(#b3a)" opacity=".55"/>
<polygon points="0,20 306,166 306,300 0,436" fill="#241909"/>
<polygon points="800,20 494,166 494,300 800,436" fill="#241909"/>
<polygon points="306,166 494,166 494,300 306,300" fill="#0a0703"/>
<g stroke="#6b4f22" stroke-width="2" opacity=".75">
 <line x1="0" y1="20" x2="306" y2="166"/><line x1="0" y1="436" x2="306" y2="300"/>
 <line x1="800" y1="20" x2="494" y2="166"/><line x1="800" y1="436" x2="494" y2="300"/>
 <line x1="104" y1="70" x2="104" y2="386"/><line x1="196" y1="114" x2="196" y2="342"/>
 <line x1="262" y1="146" x2="262" y2="316"/>
 <line x1="696" y1="70" x2="696" y2="386"/><line x1="604" y1="114" x2="604" y2="342"/>
 <line x1="538" y1="146" x2="538" y2="316"/>
</g>
<g fill="#100b06" stroke="#6b4f22" stroke-width="2">
 <rect x="118" y="132" width="66" height="196"/>
 <rect x="616" y="132" width="66" height="196"/>
</g>
<g fill="#c9a05c" opacity=".6"><circle cx="176" cy="232" r="4"/><circle cx="624" cy="232" r="4"/></g>
<circle cx="152" cy="120" r="66" fill="url(#b3l)" opacity=".5"/>
<circle cx="648" cy="120" r="66" fill="url(#b3l)" opacity=".3"/>
<circle cx="152" cy="120" r="9" fill="#ffe4ad"/><circle cx="648" cy="120" r="7" fill="#b18d4e"/>
<g stroke="#7a5b28" stroke-width="2" opacity=".45">
 <line x1="0" y1="300" x2="306" y2="300"/><line x1="494" y1="300" x2="800" y2="300"/>
 <line x1="60" y1="340" x2="306" y2="292"/><line x1="740" y1="340" x2="494" y2="292"/>
</g>
<g fill="#0a0703" opacity=".8"><rect x="352" y="286" width="96" height="14"/></g>` + '</svg>',

engine: SVG_HEAD + `
<defs>
 <linearGradient id="b4a" x1="0" y1="0" x2="0" y2="1">
  <stop offset="0%" stop-color="#3a2b12"/><stop offset="100%" stop-color="#0c0804"/></linearGradient>
 <linearGradient id="b4b" x1="0" y1="0" x2="1" y2="0">
  <stop offset="0%" stop-color="#0f0a05"/><stop offset="35%" stop-color="#3d2d13"/><stop offset="100%" stop-color="#100b06"/></linearGradient>
</defs>
<rect width="800" height="450" fill="url(#b4a)"/>
<g stroke="#57411c" stroke-width="18" fill="none" opacity=".8">
 <path d="M-20 118 H 250 Q 296 118 296 164 V 340"/>
 <path d="M820 150 H 606 Q 560 150 560 196 V 356"/>
 <path d="M-20 214 H 120 Q 166 214 166 260 V 380"/>
</g>
<g stroke="#8a6830" stroke-width="4" fill="none" opacity=".5">
 <path d="M-20 126 H 250 Q 288 126 288 164 V 340"/>
 <path d="M820 158 H 606 Q 568 158 568 196 V 356"/>
</g>
<g fill="url(#b4b)" stroke="#6d5024" stroke-width="3">
 <rect x="322" y="128" width="180" height="188" rx="8"/>
</g>
<g fill="#c9a05c" opacity=".55">
 <circle cx="336" cy="142" r="3"/><circle cx="488" cy="142" r="3"/>
 <circle cx="336" cy="302" r="3"/><circle cx="488" cy="302" r="3"/>
 <circle cx="412" cy="142" r="3"/><circle cx="412" cy="302" r="3"/>
</g>
<g fill="#160f07" stroke="#7a5b28" stroke-width="3">
 <circle cx="412" cy="200" r="42"/>
</g>
<g stroke="#d7ae66" stroke-width="3"><line x1="412" y1="200" x2="438" y2="176"/></g>
<circle cx="412" cy="200" r="4" fill="#e8c07a"/>
<g fill="#1b1309" stroke="#6d5024" stroke-width="3">
 <rect x="636" y="196" width="128" height="120" rx="4"/>
</g>
<g stroke="#7a5b28" stroke-width="2" opacity=".7">
 <line x1="650" y1="216" x2="750" y2="216"/><line x1="650" y1="240" x2="750" y2="240"/>
 <line x1="650" y1="264" x2="750" y2="264"/><line x1="650" y1="288" x2="750" y2="288"/>
</g>
<g fill="#0c0804"><rect x="0" y="336" width="800" height="114"/></g>
<g stroke="#4a3616" stroke-width="3" opacity=".8">
 <line x1="0" y1="340" x2="800" y2="340"/>
 <line x1="60" y1="340" x2="30" y2="450"/><line x1="240" y1="340" x2="228" y2="450"/>
 <line x1="420" y1="340" x2="426" y2="450"/><line x1="600" y1="340" x2="624" y2="450"/>
</g>
<g fill="#241a0b" stroke="#6d5024" stroke-width="2">
 <rect x="176" y="284" width="86" height="52" rx="3"/>
 <rect x="176" y="276" width="86" height="10" rx="2"/>
</g>
<g stroke="#8a6830" stroke-width="2" fill="none" opacity=".8">
 <path d="M196 276 v-22"/><path d="M222 276 v-34"/><path d="M244 276 v-16"/>
</g>` + '</svg>',

salon: SVG_HEAD + `
<defs>
 <linearGradient id="b5a" x1="0" y1="0" x2="0" y2="1">
  <stop offset="0%" stop-color="#584322"/><stop offset="100%" stop-color="#1a1208"/></linearGradient>
 <radialGradient id="b5c"><stop offset="0%" stop-color="#ffe8b8"/><stop offset="100%" stop-color="#ffe8b8" stop-opacity="0"/></radialGradient>
</defs>
<rect width="800" height="450" fill="url(#b5a)"/>
<g fill="#231909" stroke="#6d5124" stroke-width="3">
 <path d="M52 350 V196 Q52 132 116 132 Q180 132 180 196 V350 Z"/>
 <path d="M330 350 V180 Q330 108 400 108 Q470 108 470 180 V350 Z"/>
 <path d="M620 350 V196 Q620 132 684 132 Q748 132 748 196 V350 Z"/>
</g>
<g fill="#0b0704" opacity=".9">
 <path d="M340 350 V186 Q340 120 400 120 Q460 120 460 186 V350 Z"/>
</g>
<g stroke="#8a6830" stroke-width="2" opacity=".5">
 <line x1="400" y1="120" x2="400" y2="350"/><line x1="340" y1="230" x2="460" y2="230"/>
</g>
<circle cx="400" cy="118" r="118" fill="url(#b5c)" opacity=".38"/>
<g stroke="#a8813c" stroke-width="2" fill="none">
 <path d="M400 30 v52"/><path d="M352 104 h96"/>
 <path d="M356 104 q44 40 44 40 q0 0 44-40"/>
 <path d="M368 104 v22"/><path d="M432 104 v22"/>
</g>
<g fill="#f5e0ae" opacity=".85">
 <circle cx="356" cy="108" r="5"/><circle cx="368" cy="130" r="5"/><circle cx="400" cy="146" r="6"/>
 <circle cx="432" cy="130" r="5"/><circle cx="444" cy="108" r="5"/>
</g>
<g fill="#0c0804"><rect x="0" y="344" width="800" height="106"/></g>
<g stroke="#7d5c29" stroke-width="2" opacity=".45"><line x1="0" y1="348" x2="800" y2="348"/></g>
<g fill="#150e07" stroke="#7d5c29" stroke-width="2">
 <path d="M92 344 l38-76 h218 l-24 76 Z"/>
 <rect x="112" y="260" width="228" height="12"/>
</g>
<g stroke="#a8813c" stroke-width="1.4" opacity=".5">
 <line x1="140" y1="272" x2="126" y2="344"/><line x1="200" y1="272" x2="190" y2="344"/>
 <line x1="260" y1="272" x2="254" y2="344"/><line x1="320" y1="272" x2="318" y2="344"/>
</g>
<g fill="#241a0b" stroke="#6d5124" stroke-width="2">
 <rect x="560" y="300" width="120" height="12" rx="3"/>
 <rect x="572" y="312" width="9" height="32"/><rect x="659" y="312" width="9" height="32"/>
</g>` + '</svg>',

smoking: SVG_HEAD + `
<defs>
 <linearGradient id="b6a" x1="0" y1="0" x2="0" y2="1">
  <stop offset="0%" stop-color="#412f14"/><stop offset="100%" stop-color="#140e07"/></linearGradient>
 <radialGradient id="b6r"><stop offset="0%" stop-color="#ffb066"/><stop offset="100%" stop-color="#ffb066" stop-opacity="0"/></radialGradient>
</defs>
<rect width="800" height="450" fill="url(#b6a)"/>
<g stroke="#6a4e22" stroke-width="2" opacity=".5">
 <line x1="0" y1="96" x2="800" y2="96"/><line x1="0" y1="286" x2="800" y2="286"/>
 <line x1="128" y1="60" x2="128" y2="344"/><line x1="304" y1="60" x2="304" y2="344"/>
 <line x1="480" y1="60" x2="480" y2="344"/><line x1="656" y1="60" x2="656" y2="344"/>
</g>
<circle cx="618" cy="168" r="118" fill="url(#b6r)" opacity=".26"/>
<g fill="#241a0c" stroke="#6d5124" stroke-width="3">
 <circle cx="618" cy="168" r="60"/><circle cx="618" cy="168" r="45" fill="#0c0804"/>
</g>
<g fill="#c9a05c" opacity=".7">
 <circle cx="618" cy="106" r="3"/><circle cx="680" cy="168" r="3"/>
 <circle cx="618" cy="230" r="3"/><circle cx="556" cy="168" r="3"/>
</g>
<g fill="#0f0a06"><rect x="0" y="338" width="800" height="112"/></g>
<g stroke="#6a4e22" stroke-width="2" opacity=".45"><line x1="0" y1="342" x2="800" y2="342"/></g>
<g fill="#1c1409" stroke="#5f4720" stroke-width="3">
 <path d="M96 340 v-92 q0-30 34-30 h88 q34 0 34 30 v92 Z"/>
 <rect x="74" y="258" width="30" height="82" rx="12"/>
 <rect x="244" y="258" width="30" height="82" rx="12"/>
 <path d="M130 218 q44-14 88 0"/>
</g>
<g fill="#1c1409" stroke="#5f4720" stroke-width="3">
 <rect x="340" y="288" width="152" height="12" rx="4"/>
 <rect x="356" y="300" width="10" height="40"/><rect x="466" y="300" width="10" height="40"/>
</g>
<g fill="#e8b273" opacity=".9"><circle cx="452" cy="282" r="4"/></g>
<g stroke="#c9a05c" stroke-width="1.4" fill="none" opacity=".45">
 <path d="M452 278 q16-18 4-38 q-12-22 8-40"/>
</g>` + '</svg>',

library: SVG_HEAD + `
<defs>
 <linearGradient id="b7a" x1="0" y1="0" x2="0" y2="1">
  <stop offset="0%" stop-color="#3e2e14"/><stop offset="100%" stop-color="#110b06"/></linearGradient>
</defs>
<rect width="800" height="450" fill="url(#b7a)"/>
<g fill="#241a0b" stroke="#6b4f22" stroke-width="3">
 <rect x="16" y="70" width="244" height="272"/>
 <rect x="540" y="70" width="244" height="272"/>
</g>
<g stroke="#6b4f22" stroke-width="2">
 <line x1="16" y1="138" x2="260" y2="138"/><line x1="16" y1="206" x2="260" y2="206"/><line x1="16" y1="274" x2="260" y2="274"/>
 <line x1="540" y1="138" x2="784" y2="138"/><line x1="540" y1="206" x2="784" y2="206"/><line x1="540" y1="274" x2="784" y2="274"/>
</g>
<g fill="#7a5c2a" opacity=".5">
 <rect x="26" y="86" width="9" height="48"/><rect x="38" y="92" width="13" height="42"/><rect x="54" y="84" width="8" height="50"/>
 <rect x="66" y="90" width="14" height="44"/><rect x="84" y="86" width="9" height="48"/><rect x="96" y="94" width="11" height="40"/>
 <rect x="26" y="154" width="12" height="48"/><rect x="42" y="160" width="8" height="42"/><rect x="54" y="152" width="14" height="50"/>
 <rect x="72" y="158" width="9" height="44"/><rect x="186" y="156" width="12" height="46"/><rect x="202" y="152" width="9" height="50"/>
 <rect x="26" y="222" width="10" height="48"/><rect x="40" y="228" width="13" height="42"/>
 <rect x="550" y="86" width="10" height="48"/><rect x="564" y="92" width="14" height="42"/><rect x="582" y="84" width="9" height="50"/>
 <rect x="596" y="90" width="12" height="44"/><rect x="700" y="86" width="10" height="48"/><rect x="714" y="92" width="9" height="42"/>
 <rect x="550" y="222" width="13" height="48"/><rect x="568" y="228" width="9" height="42"/><rect x="582" y="220" width="12" height="50"/>
 <rect x="650" y="154" width="11" height="48"/><rect x="666" y="160" width="8" height="42"/>
</g>
<g fill="#0e0a05"><rect x="0" y="336" width="800" height="114"/></g>
<g stroke="#6b4f22" stroke-width="2" opacity=".5"><line x1="0" y1="340" x2="800" y2="340"/></g>
<g stroke="#6b4f22" stroke-width="5" opacity=".75">
 <line x1="452" y1="72" x2="410" y2="336"/><line x1="506" y1="72" x2="472" y2="336"/>
 <line x1="446" y1="110" x2="498" y2="110"/><line x1="436" y1="176" x2="490" y2="176"/>
 <line x1="426" y1="242" x2="482" y2="242"/><line x1="416" y1="308" x2="474" y2="308"/>
</g>
<g fill="#2b1f0d" stroke="#6b4f22" stroke-width="2" opacity=".9">
 <rect x="286" y="300" width="46" height="11" transform="rotate(-9 309 305)"/>
 <rect x="336" y="316" width="56" height="12" transform="rotate(6 364 322)"/>
 <rect x="252" y="322" width="50" height="11" transform="rotate(-15 277 327)"/>
 <rect x="316" y="290" width="42" height="10" transform="rotate(12 337 295)"/>
</g>
<g fill="#150e07" stroke="#6b4f22" stroke-width="2">
 <rect x="590" y="296" width="140" height="14" rx="3"/>
 <rect x="604" y="310" width="10" height="30"/><rect x="706" y="310" width="10" height="30"/>
</g>` + '</svg>',

black: SVG_HEAD + '<rect width="800" height="450" fill="#000"/>' + '</svg>'
};

/* =========================================================
   2. 立ち絵（SVG シルエット）
   ========================================================= */
const P_HEAD = '<svg viewBox="0 0 240 340" xmlns="http://www.w3.org/2000/svg">';
const RIM = '#cfa257';
const BODY = '#150e07';

function figWrap(id, inner){
  return P_HEAD +
  '<defs><radialGradient id="gl_'+id+'"><stop offset="0%" stop-color="#e8c98a" stop-opacity=".22"/>' +
  '<stop offset="100%" stop-color="#e8c98a" stop-opacity="0"/></radialGradient>' +
  '<linearGradient id="bd_'+id+'" x1="0" y1="0" x2="1" y2="0">' +
  '<stop offset="0%" stop-color="#241a0e"/><stop offset="55%" stop-color="#150e07"/>' +
  '<stop offset="100%" stop-color="#0c0805"/></linearGradient></defs>' +
  '<ellipse cx="120" cy="190" rx="132" ry="150" fill="url(#gl_'+id+')"/>' +
  inner + '</svg>';
}

const FIGS = {

/* イリヤ：つば広帽・長い髪・立て襟のコート */
illu: figWrap('illu', `
<g fill="url(#bd_illu)" stroke="${RIM}" stroke-width="2" stroke-linejoin="round">
 <path d="M108 152 h24 v34 h-24 Z"/>
 <path d="M28 340 V262 q0-40 34-56 l46-20 12 14 12-14 46 20 q34 16 34 56 V340 Z"/>
 <ellipse cx="120" cy="122" rx="31" ry="38"/>
 <path d="M120 74 q-34 0-38 40 q-3 34-10 74 l24 10 q-8-44-4-76 q22 12 28-14 q10 22 34 16 q6 30-2 74 l24-10 q-8-40-11-74 q-4-40-45-40 Z"/>
 <ellipse cx="120" cy="82" rx="72" ry="13"/>
 <path d="M92 82 q0-34 28-34 q28 0 28 34 Z"/>
</g>
<g fill="none" stroke="${RIM}" stroke-width="1.6" opacity=".9">
 <path d="M100 118 q10-6 20-1"/><path d="M140 118 q10-5 18 1" opacity=".5"/>
 <path d="M118 128 v10 l6 3"/>
 <path d="M108 150 q12 6 24 0"/>
 <path d="M96 82 h48"/>
</g>
<g fill="none" stroke="${RIM}" stroke-width="1.5" opacity=".75">
 <path d="M120 186 v58"/><path d="M92 208 l28-22 28 22"/>
 <path d="M64 244 v96"/><path d="M176 244 v96"/>
</g>`),

/* マッシュビー卿：山高帽・口髭・単眼鏡・葉巻 */
mash: figWrap('mash', `
<g fill="url(#bd_mash)" stroke="${RIM}" stroke-width="2" stroke-linejoin="round">
 <path d="M106 154 h30 v30 h-30 Z"/>
 <path d="M8 340 V260 q0-42 42-58 l58-20 12 12 12-12 58 20 q42 16 42 58 V340 Z"/>
 <ellipse cx="120" cy="124" rx="36" ry="34"/>
 <ellipse cx="120" cy="94" rx="58" ry="11"/>
 <path d="M88 94 q0-40 32-40 q32 0 32 40 Z"/>
 <path d="M92 148 q16-12 28-2 q12-10 28 2 q-10 20-28 18 q-18 2-28-18 Z"/>
</g>
<g fill="none" stroke="${RIM}" stroke-width="1.6">
 <circle cx="102" cy="122" r="13"/><path d="M115 124 q16 8 20 22"/>
 <path d="M141 120 q8-4 14 1"/>
 <path d="M120 138 v6"/>
 <path d="M90 96 h60"/>
</g>
<g fill="url(#bd_mash)" stroke="${RIM}" stroke-width="1.8">
 <path d="M120 190 l-22-12 v22 Z"/><path d="M120 190 l22-12 v22 Z"/>
</g>
<g fill="none" stroke="${RIM}" stroke-width="1.5" opacity=".7">
 <path d="M120 206 v40"/><path d="M78 216 l42-26 42 26"/>
 <path d="M40 250 v90"/><path d="M200 250 v90"/>
</g>
<g fill="none" stroke="${RIM}" stroke-width="1.3" opacity=".5">
 <path d="M196 222 q20-10 16-30 q-4-20 12-28"/>
</g>
<circle cx="197" cy="224" r="4" fill="#e8bd78"/>`),

/* デュラン：中折れ帽・長身・指を立てる・パイプ */
dunant: figWrap('dunant', `
<g fill="url(#bd_dunant)" stroke="${RIM}" stroke-width="2" stroke-linejoin="round">
 <path d="M110 150 h22 v32 h-22 Z"/>
 <path d="M44 340 V252 q0-38 34-54 l32-14 10 12 10-12 32 14 q34 16 34 54 V340 Z"/>
 <ellipse cx="120" cy="118" rx="29" ry="37"/>
 <ellipse cx="120" cy="80" rx="64" ry="11"/>
 <path d="M92 80 q0-32 28-32 q28 0 28 32 Z"/>
 <rect x="92" y="72" width="56" height="9"/>
 <path d="M136 148 q28 6 40 18 l-6 8 q-16-12-38-16 Z"/>
 <path d="M168 168 q22-4 26 10 q4 16-12 20 q-16 4-20-12 Z"/>
</g>
<g fill="none" stroke="${RIM}" stroke-width="1.6">
 <path d="M104 114 q10-5 18 0"/><path d="M136 114 q8-4 14 1" opacity=".55"/>
 <path d="M120 122 v14 l-6 4"/>
 <path d="M106 146 q14 5 26-1"/>
 <path d="M148 130 q16 6 24 20" opacity=".6"/>
</g>
<g fill="none" stroke="${RIM}" stroke-width="1.5" opacity=".75">
 <path d="M120 182 v56"/><path d="M96 202 l24-20 24 20"/>
 <path d="M120 214 l-14 26 h28 Z"/>
 <path d="M70 248 v92"/><path d="M170 248 v92"/>
</g>`),

/* 船長：制帽・顎髭・ダブルの制服 */
cap: figWrap('cap', `
<g fill="url(#bd_cap)" stroke="${RIM}" stroke-width="2" stroke-linejoin="round">
 <path d="M106 152 h28 v28 h-28 Z"/>
 <path d="M18 340 V258 q0-42 40-56 l50-18 12 12 12-12 50 18 q40 14 40 56 V340 Z"/>
 <ellipse cx="120" cy="124" rx="32" ry="36"/>
 <path d="M90 122 q2 44 30 52 q28-8 30-52 q-6 22-30 22 q-24 0-30-22 Z"/>
 <path d="M78 86 q0-38 42-38 q42 0 42 38 Z"/>
 <rect x="76" y="84" width="88" height="14" rx="2"/>
 <path d="M56 100 q64 14 128 0 q-64 18-128 0 Z"/>
</g>
<g fill="none" stroke="${RIM}" stroke-width="1.6">
 <path d="M102 118 q10-5 18 0"/><path d="M138 118 q-10-5-18 0"/>
 <path d="M120 128 v10"/>
 <rect x="106" y="70" width="28" height="14" rx="2"/>
 <path d="M120 70 v14 M106 77 h28"/>
</g>
<g fill="none" stroke="${RIM}" stroke-width="1.5" opacity=".7">
 <path d="M120 196 v76"/><path d="M84 214 l36-26 36 26"/>
 <rect x="40" y="216" width="34" height="12" rx="3"/>
 <rect x="166" y="216" width="34" height="12" rx="3"/>
</g>
<g fill="#dcb066" opacity=".85">
 <circle cx="96" cy="244" r="4.5"/><circle cx="144" cy="244" r="4.5"/>
 <circle cx="96" cy="276" r="4.5"/><circle cx="144" cy="276" r="4.5"/>
 <circle cx="96" cy="308" r="4.5"/><circle cx="144" cy="308" r="4.5"/>
</g>`),

/* カスケ：眼鏡・スーツ */
kasuke: figWrap('kasuke', `
<g fill="url(#bd_kasuke)" stroke="${RIM}" stroke-width="2" stroke-linejoin="round">
 <path d="M108 150 h24 v30 h-24 Z"/>
 <path d="M36 340 V256 q0-40 36-54 l38-14 10 12 10-12 38 14 q36 14 36 54 V340 Z"/>
 <ellipse cx="120" cy="120" rx="30" ry="36"/>
 <path d="M120 82 q-32 0-34 30 q-1 12 2 18 q2-22 12-26 q20 10 42 0 q10 6 12 26 q3-6 2-18 q-2-30-36-30 Z"/>
</g>
<g fill="none" stroke="${RIM}" stroke-width="1.6">
 <rect x="94" y="112" width="23" height="15" rx="3"/>
 <rect x="123" y="112" width="23" height="15" rx="3"/>
 <path d="M117 119 h6"/><path d="M94 118 l-10-3"/><path d="M146 118 l10-3"/>
 <path d="M108 146 q12 5 24 0"/>
</g>
<g fill="none" stroke="${RIM}" stroke-width="1.5" opacity=".75">
 <path d="M120 186 l-18 22 18 92 18-92 -18-22"/>
 <path d="M84 202 l36-18 36 18"/>
 <path d="M60 250 v90"/><path d="M180 250 v90"/>
</g>`),

/* 船内放送 */
voice: figWrap('voice', `
<g fill="url(#bd_voice)" stroke="${RIM}" stroke-width="2" stroke-linejoin="round">
 <path d="M74 150 h30 l54-46 v134 l-54-46 H74 Z"/>
 <rect x="46" y="130" width="30" height="40" rx="4"/>
</g>
<g fill="none" stroke="${RIM}" stroke-width="2" opacity=".7">
 <path d="M174 122 q24 46 0 92"/>
 <path d="M196 100 q36 68 0 136"/>
</g>
<g fill="none" stroke="${RIM}" stroke-width="1.4" opacity=".45">
 <rect x="52" y="230" width="140" height="76" rx="4"/>
 <path d="M64 252 h116 M64 268 h116 M64 284 h84"/>
</g>
<g fill="#e8bd78" opacity=".8"><circle cx="176" cy="292" r="5"/></g>`),

/* 一同 */
group: figWrap('group', `
<g fill="url(#bd_group)" stroke="${RIM}" stroke-width="1.8" opacity=".65">
 <path d="M-6 340 V262 q0-34 30-46 l34-14 34 14 q30 12 30 46 V340 Z"/>
 <ellipse cx="58" cy="176" rx="26" ry="30"/>
 <ellipse cx="58" cy="142" rx="48" ry="9"/>
</g>
<g fill="url(#bd_group)" stroke="${RIM}" stroke-width="1.8" opacity=".8">
 <path d="M132 340 V254 q0-34 32-46 l34-14 34 14 q32 12 32 46 V340 Z"/>
 <ellipse cx="198" cy="166" rx="27" ry="31"/>
 <path d="M170 142 q0-26 28-26 q28 0 28 26 Z"/>
</g>
<g fill="url(#bd_group)" stroke="${RIM}" stroke-width="2">
 <path d="M54 340 V250 q0-36 32-48 l36-14 36 14 q32 12 32 48 V340 Z"/>
 <ellipse cx="122" cy="160" rx="28" ry="32"/>
 <path d="M94 158 q2 34 28 40 q26-6 28-40 q-6 18-28 18 q-22 0-28-18 Z"/>
</g>
<g fill="none" stroke="${RIM}" stroke-width="1.4" opacity=".6">
 <path d="M122 226 v60"/><path d="M198 224 v54"/>
</g>`)
};

/* =========================================================
   3. 音（Web Audio）
   ========================================================= */
const MOODS = {
  sea:    { nz:.055, cut: 380, f1: 55,   f2: 82.5,  dr:.055 },
  dawn:   { nz:.05,  cut: 340, f1: 61.7, f2: 92.5,  dr:.05  },
  alarm:  { nz:.07,  cut: 900, f1: 110,  f2: 116.5, dr:.06  },
  tense:  { nz:.045, cut: 500, f1: 65.4, f2: 98,    dr:.055 },
  illu:   { nz:.035, cut: 620, f1: 73.4, f2: 110,   dr:.05  },
  mash:   { nz:.05,  cut: 300, f1: 61.7, f2: 77.8,  dr:.06  },
  dunant: { nz:.035, cut: 700, f1: 82.4, f2: 123.5, dr:.05  },
  engine: { nz:.075, cut: 240, f1: 41.2, f2: 61.7,  dr:.07  },
  bomb:   { nz:.05,  cut: 420, f1: 49,   f2: 51.9,  dr:.06, tick:true },
  calm:   { nz:.03,  cut: 300, f1: 65.4, f2: 98,    dr:.04  }
};

const Snd = {
  ctx:null, on:true, master:null, noiseGain:null, filt:null,
  o1:null, o2:null, g1:null, tickTimer:null, ready:false,

  init(){
    if(this.ready) return;
    const AC = window.AudioContext || window.webkitAudioContext;
    if(!AC) return;
    try{ this.ctx = new AC(); }catch(e){ return; }
    const c = this.ctx;
    this.master = c.createGain(); this.master.gain.value = this.on ? .9 : 0;
    this.master.connect(c.destination);

    // brown-ish noise
    const len = c.sampleRate * 3;
    const buf = c.createBuffer(1, len, c.sampleRate);
    const d = buf.getChannelData(0);
    let last = 0;
    for(let i=0;i<len;i++){
      const w = Math.random()*2-1;
      last = (last + .02*w)/1.02; d[i] = last*3.2;
    }
    const src = c.createBufferSource(); src.buffer = buf; src.loop = true;
    this.filt = c.createBiquadFilter(); this.filt.type='lowpass'; this.filt.frequency.value=400;
    this.noiseGain = c.createGain(); this.noiseGain.gain.value=.05;
    src.connect(this.filt); this.filt.connect(this.noiseGain); this.noiseGain.connect(this.master);
    src.start();

    this.g1 = c.createGain(); this.g1.gain.value=.05; this.g1.connect(this.master);
    this.o1 = c.createOscillator(); this.o1.type='sine';     this.o1.frequency.value=55;
    this.o2 = c.createOscillator(); this.o2.type='triangle'; this.o2.frequency.value=82.5;
    const g2 = c.createGain(); g2.gain.value=.45;
    this.o1.connect(this.g1); this.o2.connect(g2); g2.connect(this.g1);
    this.o1.start(); this.o2.start();
    this.ready = true;
  },

  resume(){ if(this.ctx && this.ctx.state === "suspended") this.ctx.resume(); },

  mood(name){
    const m = MOODS[name]; if(!m) return;
    if(this.tickTimer){ clearInterval(this.tickTimer); this.tickTimer=null; }
    if(!this.ready) return;
    const t = this.ctx.currentTime, R = (p,v)=>{ p.cancelScheduledValues(t); p.setTargetAtTime(v, t, .8); };
    R(this.filt.frequency, m.cut); R(this.noiseGain.gain, m.nz);
    R(this.o1.frequency, m.f1);    R(this.o2.frequency, m.f2);
    R(this.g1.gain, m.dr);
    if(m.tick) this.tickTimer = setInterval(()=>this.sfx("tick"), 1000);
  },

  sfx(kind){
    if(!this.ready || !this.on) return;
    const c = this.ctx, t = c.currentTime;
    if(kind === "boom"){
      const len = c.sampleRate*2, b = c.createBuffer(1,len,c.sampleRate), d = b.getChannelData(0);
      for(let i=0;i<len;i++){ d[i] = (Math.random()*2-1) * Math.pow(1-i/len, 2.4); }
      const s = c.createBufferSource(); s.buffer=b;
      const f = c.createBiquadFilter(); f.type='lowpass';
      f.frequency.setValueAtTime(2400,t); f.frequency.exponentialRampToValueAtTime(90, t+1.6);
      const g = c.createGain(); g.gain.setValueAtTime(.95,t); g.gain.exponentialRampToValueAtTime(.001,t+2);
      s.connect(f); f.connect(g); g.connect(this.master); s.start(); s.stop(t+2);
      const o = c.createOscillator(); o.type='sine';
      o.frequency.setValueAtTime(120,t); o.frequency.exponentialRampToValueAtTime(28,t+1.4);
      const og = c.createGain(); og.gain.setValueAtTime(.6,t); og.gain.exponentialRampToValueAtTime(.001,t+1.6);
      o.connect(og); og.connect(this.master); o.start(); o.stop(t+1.7);
      return;
    }
    const map = { beep:[760,.16,'square',.16], tick:[1500,.045,'square',.05],
                  blip:[280,.02,'square',.022], ok:[520,.5,'sine',.14], cut:[180,.3,'sawtooth',.16] };
    const p = map[kind]; if(!p) return;
    const o = c.createOscillator(), g = c.createGain();
    o.type = p[2]; o.frequency.setValueAtTime(p[0], t);
    if(kind==="ok") o.frequency.exponentialRampToValueAtTime(p[0]*1.5, t+p[1]);
    if(kind==="cut") o.frequency.exponentialRampToValueAtTime(40, t+p[1]);
    g.gain.setValueAtTime(p[3], t); g.gain.exponentialRampToValueAtTime(.0008, t+p[1]);
    o.connect(g); g.connect(this.master); o.start(); o.stop(t+p[1]+.05);
  },

  toggle(){
    this.on = !this.on;
    if(this.master) this.master.gain.setTargetAtTime(this.on ? .9 : 0, this.ctx.currentTime, .05);
    return this.on;
  }
};

/* =========================================================
   4. DOM
   ========================================================= */
const $ = s => document.querySelector(s);
const elScreen = $("#screen"), elBg = $("#bg"), elPortrait = $("#portrait"),
      elCard = $("#scene-card"), elIcas = $("#icas"), elIcasBody = $(".icas-body"),
      elMsg = $("#msgwin"), elName = $("#namebox"), elText = $("#msgtext"),
      elCursor = $("#cursor"), elChoices = $("#choices"), elMenu = $("#menu"),
      elFade = $("#fade"), elFlash = $("#flash"), elBig = $("#bigtext"),
      elBigSpan = elBig.querySelector("span"), elTitle = $("#title-screen"),
      btnStart = $("#btn-start"), btnCont = $("#btn-continue"),
      btnSound = $("#btn-sound"), btnTitle = $("#btn-title");

/* =========================================================
   5. 状態
   ========================================================= */
const state = {
  frames: [],
  locked: true,
  awaiting: false,      // クリック待ち
  typing: false,
  typeTimer: null,
  fullText: "",
  target: null,
  checkpoint: null,
  reviveOnContinue: false,
  curBg: "", curMood: "", curFig: "",
  running: false
};

/* =========================================================
   6. 画面制御
   ========================================================= */
function setBg(v){
  if(state.curBg === v) return;
  state.curBg = v;
  setFig("");                 /* 場面が変わったら前の人物は退場させる */
  elBg.classList.remove("on");
  window.setTimeout(()=>{
    elBg.innerHTML = BGS[v] || BGS.black;
    elBg.classList.add("on");
  }, 120);
}

function setFig(fig){
  if(state.curFig === fig) return;
  state.curFig = fig;
  const olds = elPortrait.querySelectorAll(".fig");
  olds.forEach(o=>{
    o.classList.remove("on");
    o.classList.add("gone");
    window.setTimeout(()=>{ if(o.parentNode) o.remove(); }, 560);
  });
  if(!fig) return;
  const d = document.createElement("div");
  d.className = "fig";
  d.innerHTML = FIGS[fig] || "";
  elPortrait.appendChild(d);
  window.requestAnimationFrame(()=>window.requestAnimationFrame(()=>d.classList.add("on")));
}

function shake(hard){
  elScreen.classList.remove("shake","shake-soft");
  void elScreen.offsetWidth;
  elScreen.classList.add(hard ? "shake" : "shake-soft");
}

function flash(){
  elFlash.classList.remove("go"); void elFlash.offsetWidth; elFlash.classList.add("go");
}

/* ---- タイプライター ---- */
function typeInto(target, text, done){
  state.typing = true; state.target = target; state.fullText = text;
  target.textContent = "";
  elCursor.classList.remove("on");
  let i = 0;
  const speed = 26;
  const tick = ()=>{
    if(!state.typing) return;
    if(i >= text.length){
      state.typing = false; state.typeTimer = null;
      elCursor.classList.add("on");
      if(done) done();
      return;
    }
    const ch = text[i++];
    target.textContent += ch;
    if(i % 3 === 0) Snd.sfx("blip");
    let d = speed;
    if("、。」！？…".indexOf(ch) >= 0) d = 210;
    if(ch === "―") d = 60;
    state.typeTimer = window.setTimeout(tick, d);
  };
  state.typeTimer = window.setTimeout(tick, 10);
}

function finishTyping(){
  if(!state.typing) return;
  if(state.typeTimer) clearTimeout(state.typeTimer);
  state.typing = false; state.typeTimer = null;
  state.target.textContent = state.fullText;
  elCursor.classList.add("on");
}

/* =========================================================
   7. 実行エンジン
   ========================================================= */
function pull(){
  while(state.frames.length){
    const f = state.frames[state.frames.length-1];
    if(f.i < f.list.length) return f.list[f.i++];
    state.frames.pop();
  }
  return null;
}

function push(list){ state.frames.push({list:list, i:0}); }

function step(){
  if(!state.running) return;
  const node = pull();
  if(!node){ toTitle(); return; }
  exec(node);
}

function exec(node){
  switch(node.t){

    case "save":
      state.checkpoint = {
        frames: state.frames.map(f=>({list:f.list, i:f.i})),
        bg: state.curBg, mood: state.curMood
      };
      state.reviveOnContinue = false;
      btnCont.disabled = false;
      step(); break;

    case "bg":   setBg(node.v); step(); break;
    case "clear":setFig(""); step(); break;

    case "mood":
      state.curMood = node.v; Snd.mood(node.v); step(); break;

    case "card": {
      state.locked = true;
      setFig("");
      elMsg.classList.remove("on"); elIcas.classList.remove("on"); elMenu.classList.remove("on");
      elCard.querySelector(".sc-no").textContent = node.no;
      elCard.querySelector(".sc-ti").textContent = node.ti;
      elCard.classList.add("on");
      window.setTimeout(()=>{
        elCard.classList.remove("on");
        window.setTimeout(()=>{ state.locked=false; elMenu.classList.add("on"); step(); }, 700);
      }, 2200);
      break; }

    case "n": {
      elMsg.classList.add("on"); elMenu.classList.add("on");
      elName.textContent = "";
      elText.classList.add("narration");
      typeInto(elText, node.x);
      state.awaiting = true;
      break; }

    case "s": {
      const c = CHARS[node.who] || {name:"", fig:""};
      elMsg.classList.add("on"); elMenu.classList.add("on");
      elName.textContent = c.name;
      elText.classList.remove("narration");
      if(node.who !== "kasuke") setFig(c.fig);
      typeInto(elText, node.x);
      state.awaiting = true;
      break; }

    case "i": {
      elIcas.classList.add("on");
      elIcas.classList.remove("glitch"); void elIcas.offsetWidth; elIcas.classList.add("glitch");
      Snd.sfx("tick");
      typeInto(elIcasBody, node.x);
      state.awaiting = true;
      break; }

    case "w":
      state.locked = true; elCursor.classList.remove("on");
      window.setTimeout(()=>{ state.locked=false; step(); }, node.ms||1000);
      break;

    case "fx":
      state.locked = true; elCursor.classList.remove("on");
      runFx(node.v, ()=>{ state.locked=false; step(); });
      break;

    case "choice": showChoice(node); break;
    case "wire":   showWire(); break;

    case "big":
      state.locked = true;
      elBigSpan.textContent = node.x;
      elBig.classList.add("on");
      window.setTimeout(()=>{ state.locked=false; step(); }, node.ms||2500);
      break;

    case "gameover": doGameOver(); break;
    case "endcard":  doEndCard();  break;

    default: step();
  }
}

function runFx(v, done){
  switch(v){
    case "flash": flash(); Snd.sfx("boom"); window.setTimeout(done, 500); break;
    case "shake": shake(true); window.setTimeout(done, 700); break;
    case "beep":  Snd.sfx("beep"); shake(false); window.setTimeout(done, 350); break;
    case "boom":
      flash(); shake(true); Snd.sfx("boom");
      window.setTimeout(()=>{ elFade.classList.remove("fast"); elFade.classList.add("on"); }, 350);
      window.setTimeout(done, 1600); break;
    case "blackout":
      elFade.classList.add("fast"); elFade.classList.add("on");
      window.setTimeout(done, 300); break;
    case "fadeout":
      setFig("");
      elMsg.classList.remove("on"); elIcas.classList.remove("on"); elMenu.classList.remove("on");
      elFade.classList.remove("fast"); elFade.classList.add("on");
      window.setTimeout(done, 1100); break;
    case "fadein":
      elFade.classList.remove("on");
      window.setTimeout(done, 900); break;
    default: done();
  }
}

/* ---- 選択肢 ---- */
function showChoice(node){
  state.locked = true; state.awaiting = false;
  elCursor.classList.remove("on");
  elChoices.className = "on";
  elChoices.innerHTML = "";
  const q = document.createElement("div"); q.className="ch-q"; q.textContent = node.q || "";
  elChoices.appendChild(q);
  node.opts.forEach(op=>{
    const b = document.createElement("button");
    b.type = "button"; b.textContent = op.l;
    b.addEventListener("click", ev=>{
      ev.stopPropagation();
      elChoices.className = ""; elChoices.innerHTML = "";
      Snd.sfx("ok");
      state.locked = false;
      push(op.b);
      step();
    });
    elChoices.appendChild(b);
  });
}

/* ---- 爆弾解除 ---- */
function showWire(){
  state.locked = true; state.awaiting = false;
  elCursor.classList.remove("on");
  elChoices.className = "on wire";
  elChoices.innerHTML = "";
  const q = document.createElement("div");
  q.className = "ch-q"; q.textContent = "― どちらのコードを切る ―";
  elChoices.appendChild(q);
  [["赤いコードを切る", true], ["青いコードを切る", false]].forEach(pair=>{
    const b = document.createElement("button");
    b.type="button"; b.textContent = pair[0];
    b.addEventListener("click", ev=>{
      ev.stopPropagation();
      elChoices.className=""; elChoices.innerHTML="";
      Snd.sfx("cut");
      state.locked=false;
      push(pair[1] ? CUT_RED : BOOM);
      step();
    });
    elChoices.appendChild(b);
  });
}

/* ---- ゲームオーバー（嘘） ---- */
function doGameOver(){
  state.locked = true;
  // BOOM フレームを畳んで、本編は「解除後」の位置に残しておく
  while(state.frames.length && state.frames[state.frames.length-1].list === BOOM) state.frames.pop();
  state.reviveOnContinue = true;
  btnCont.disabled = false;
  elBig.classList.remove("on");
  window.setTimeout(()=>{
    elMsg.classList.remove("on"); elIcas.classList.remove("on"); elMenu.classList.remove("on");
    elChoices.className = "";
    elTitle.classList.remove("off");
    elFade.classList.remove("on");
    state.running = false;
    state.locked = false;
    Snd.mood("calm");
  }, 400);
}

/* ---- エンディング ---- */
function doEndCard(){
  state.locked = true;
  elMsg.classList.remove("on"); elIcas.classList.remove("on"); elMenu.classList.remove("on");
  elBigSpan.innerHTML =
    '<span style="display:block;letter-spacing:.18em;font-size:1.1em;">NOSTALJII 2007</span>' +
    '<span style="display:block;margin-top:1.1em;font-size:.36em;letter-spacing:.24em;font-family:\'Hiragino Mincho ProN\',serif;">忘れようとしても、思い出せない。</span>' +
    '<span style="display:block;margin-top:2.4em;font-size:.3em;letter-spacing:.5em;opacity:.7;">E N D</span>';
  elBigSpan.style.animation = "none";
  elBig.classList.add("on");
  Snd.mood("calm");
  window.setTimeout(()=>{
    state.locked = false;
    const back = ()=>{
      elBig.classList.remove("on");
      elBigSpan.style.animation = "";
      elScreen.removeEventListener("click", back);
      window.setTimeout(toTitle, 400);
    };
    elScreen.addEventListener("click", back);
  }, 2600);
}

function toTitle(){
  state.running = false;
  elMsg.classList.remove("on"); elIcas.classList.remove("on"); elMenu.classList.remove("on");
  elChoices.className = ""; elChoices.innerHTML = "";
  elFade.classList.remove("on"); elBig.classList.remove("on");
  elTitle.classList.remove("off");
  Snd.mood("calm");
}

/* =========================================================
   8. 入力
   ========================================================= */
function advance(){
  if(!state.running || state.locked) return;
  if(state.typing){ finishTyping(); return; }
  if(state.awaiting){ state.awaiting = false; elCursor.classList.remove("on"); step(); }
}

elScreen.addEventListener("click", e=>{
  if(elTitle.classList.contains("off") === false) return;
  if(e.target.closest("#choices") || e.target.closest("#menu")) return;
  advance();
});

document.addEventListener("keydown", e=>{
  if(e.key === " " || e.key === "Enter"){
    if(!elTitle.classList.contains("off")) return;
    e.preventDefault(); advance();
  }
});

/* =========================================================
   9. タイトル／メニュー
   ========================================================= */
function beginRun(){
  Snd.init(); Snd.resume();
  elTitle.classList.add("off");
  state.running = true; state.locked = false; state.awaiting = false;
  window.setTimeout(step, 850);
}

btnStart.addEventListener("click", e=>{
  e.stopPropagation();
  state.frames = [{list:STORY, i:0}];
  state.curBg = ""; state.curFig = ""; state.curMood = "";
  state.reviveOnContinue = false;
  elBg.innerHTML = ""; elPortrait.innerHTML = ""; elIcasBody.textContent = "";
  elFade.classList.remove("on");
  beginRun();
});

btnCont.addEventListener("click", e=>{
  e.stopPropagation();
  if(btnCont.disabled) return;
  if(state.reviveOnContinue){
    state.reviveOnContinue = false;
    elFade.classList.remove("on");
    push(REVIVE);
    beginRun();
    return;
  }
  const cp = state.checkpoint;
  if(!cp) return;
  state.frames = cp.frames.map(f=>({list:f.list, i:f.i}));
  state.curBg = ""; state.curFig = ""; elPortrait.innerHTML = "";
  setBg(cp.bg || "black");
  Snd.mood(cp.mood || "calm");
  elFade.classList.remove("on");
  beginRun();
});

btnSound.addEventListener("click", e=>{
  e.stopPropagation();
  Snd.init();
  const on = Snd.toggle();
  btnSound.textContent = on ? "♪ ON" : "♪ OFF";
});

btnTitle.addEventListener("click", e=>{
  e.stopPropagation();
  if(state.typing) finishTyping();
  toTitle();
});

/* =========================================================
   10. CRT ノイズ
   ========================================================= */
(function noiseLoop(){
  const cv = document.getElementById("noise");
  const W = 160, H = 90;
  cv.width = W; cv.height = H;
  const ctx = cv.getContext("2d", {alpha:true});
  const img = ctx.createImageData(W, H);
  let last = 0;
  function draw(ts){
    if(ts - last > 66){
      last = ts;
      const d = img.data;
      for(let i=0;i<d.length;i+=4){
        const v = 90 + Math.random()*165;
        d[i]=v; d[i+1]=v; d[i+2]=v; d[i+3]= Math.random()<.55 ? 255 : 70;
      }
      ctx.putImageData(img, 0, 0);
    }
    window.requestAnimationFrame(draw);
  }
  window.requestAnimationFrame(draw);
})();

/* 素材参照（デバッグ・拡張用） */
window.NOSTALJII = { FIGS: FIGS, BGS: BGS, CHARS: CHARS, Snd: Snd, state: state };

/* 初期表示 */
elBg.innerHTML = BGS.black;
elBg.classList.add("on");

})();
