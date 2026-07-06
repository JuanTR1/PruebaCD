const faces=[
 {image:'assets/amo-a-todos.png',color:'#f5a623',rotation:'rotateX(-17deg) rotateY(0deg)',text:{es:['Amo a todos','Haz sentir incluida a una persona con un gesto sincero.'],en:['I love everyone','Make someone feel included with a sincere gesture.'],it:['Amo tutti','Fai sentire inclusa una persona con un gesto sincero.'],fr:["J’aime tout le monde",'Fais en sorte qu’une personne se sente incluse.'],ca:['Estimo tothom','Fes que algú se senti inclòs amb un gest sincer.'],pt:['Amar a todos','Faça uma pessoa se sentir incluída com um gesto sincero.']}},
 {image:'assets/amo-a-la-otra-persona.png',color:'#9463a5',rotation:'rotateX(-17deg) rotateY(-90deg)',text:{es:['Amo a la otra persona','Mira a quien tienes delante y haz algo concreto por su bien.'],en:['I love the other person','See the person before you and do something for their good.'],it:["Amo l’altra persona",'Guarda chi hai davanti e fai qualcosa per il suo bene.'],fr:["J’aime l’autre personne",'Regarde la personne devant toi et agis pour son bien.'],ca:["Estimo l’altra persona",'Mira qui tens davant i fes alguna cosa pel seu bé.'],pt:['Amar o outro','Olhe para quem está diante de você e faça algo concreto pelo seu bem.']}},
 {image:'assets/escucho-al-otro.png',color:'#9ebc2f',rotation:'rotateX(-17deg) rotateY(90deg)',text:{es:['Escucho al otro','Regala una conversación sin interrumpir ni apresurar la respuesta.'],en:['I listen to others','Offer a conversation without interrupting or rushing the answer.'],it:["Ascolto l’altro",'Offri una conversazione senza interrompere o affrettare.'],fr:["J’écoute l’autre",'Offre une conversation sans interrompre ni presser.'],ca:["Escolto l’altre",'Ofereix una conversa sense interrompre ni apressar.'],pt:['Escutar o outro','Ofereça uma conversa sem interromper nem apressar a resposta.']}},
 {image:'assets/soy-el-primero-en-amar.png',color:'#5595c8',rotation:'rotateX(-107deg) rotateY(0deg)',text:{es:['Soy el primero en amar','Da el primer paso sin esperar a que la otra persona lo haga.'],en:['I am the first to love','Take the first step without waiting for someone else.'],it:['Sono il primo ad amare','Fai il primo passo senza aspettare l’altra persona.'],fr:['Je suis le premier à aimer','Fais le premier pas sans attendre l’autre personne.'],ca:['Soc el primer a estimar','Fes el primer pas sense esperar l’altra persona.'],pt:['Ser o primeiro a amar','Dê o primeiro passo sem esperar que a outra pessoa o faça.']}},
 {image:'assets/nos-perdonamos.png',color:'#d8b9d3',rotation:'rotateX(-17deg) rotateY(180deg)',text:{es:['Nos perdonamos','Suelta una pequeña ofensa y abre espacio para comenzar de nuevo.'],en:['We forgive one another','Let go of a small hurt and make room to begin again.'],it:['Ci perdoniamo','Lascia andare una piccola offesa e ricomincia.'],fr:['Nous nous pardonnons','Laisse partir une petite blessure et recommence.'],ca:['Ens perdonem','Deixa anar una petita ofensa i torna a començar.'],pt:['Perdoar uns aos outros','Deixe passar uma pequena ofensa e abra espaço para recomeçar.']}},
 {image:'assets/nos-amamos-mutuamente.png',color:'#75af55',rotation:'rotateX(73deg) rotateY(0deg)',text:{es:['Nos amamos mutuamente','Acepta ayuda y ofrece la tuya: la paz también se construye juntos.'],en:['We love one another','Accept help and offer yours: peace is built together.'],it:['Ci amiamo a vicenda','Accetta aiuto e offri il tuo: la pace si costruisce insieme.'],fr:['Nous nous aimons','Accepte de l’aide et offre la tienne : la paix se construit ensemble.'],ca:['Ens estimem mútuament','Accepta ajuda i ofereix la teva: la pau es construeix junts.'],pt:['Amar uns aos outros','Aceite ajuda e ofereça a sua: a paz também se constrói juntos.']}}
];

const localizedImages={
 es:['assets/amo-a-todos.png','assets/amo-a-la-otra-persona.png','assets/escucho-al-otro.png','assets/soy-el-primero-en-amar.png','assets/nos-perdonamos.png','assets/nos-amamos-mutuamente.png'],
 en:['assets/en/amo-a-todos.png','assets/en/amo-a-la-otra-persona.png','assets/en/escucho-al-otro.png','assets/en/soy-el-primero-en-amar.png','assets/en/nos-perdonamos.png','assets/en/nos-amamos-mutuamente.png'],
 it:['assets/it/amo-a-todos.png','assets/it/amo-a-la-otra-persona.png','assets/it/escucho-al-otro.png','assets/it/soy-el-primero-en-amar.png','assets/it/nos-perdonamos.png','assets/it/nos-amamos-mutuamente.png'],
 fr:['assets/fr/amo-a-todos.png','assets/fr/amo-a-la-otra-persona.png','assets/fr/escucho-al-otro.png','assets/fr/soy-el-primero-en-amar.png','assets/fr/nos-perdonamos.png','assets/fr/nos-amamos-mutuamente.png'],
 ca:['assets/ca/amo-a-todos.png','assets/ca/amo-a-la-otra-persona.png','assets/ca/escucho-al-otro.png','assets/ca/soy-el-primero-en-amar.png','assets/ca/nos-perdonamos.png','assets/ca/nos-amamos-mutuamente.png'],
 pt:['assets/pt/amo-a-todos.png','assets/pt/amo-a-la-otra-persona.png','assets/pt/escucho-al-otro.png','assets/pt/soy-el-primero-en-amar.png','assets/pt/nos-perdonamos.png','assets/pt/nos-amamos-mutuamente.png']
};

function faceImage(index,lang=language.value){return localizedImages[lang][index]}

const ui={
 es:{eyebrow:'UN PEQUEÑO GESTO PUEDE CAMBIAR EL DÍA',titleLead:'Lanza una idea.',titleAccent:'Pon la paz en movimiento.',intro:'Cada cara propone una forma sencilla de cuidar a los demás y construir paz en lo cotidiano. Lanza el dado, recibe tu reto y llévalo contigo hoy.',roll:'Lanzar el dado',discover:'Conocer los seis valores',note:'Una experiencia para compartir en familia, el aula o la comunidad.',today:'TU RETO PARA HOY',sixFaces:'LAS SEIS CARAS',valuesTitle:'Seis caminos hacia la paz',valuesIntro:'Pulsa una tarjeta para explorar su mensaje.',quote:'“La paz comienza cuando decidimos amar primero.”',footerText:'Un proyecto para sembrar fraternidad en lo cotidiano.',flip:'Ver mensaje',back:'Volver'},
 en:{eyebrow:'A SMALL GESTURE CAN CHANGE THE DAY',titleLead:'Roll an idea.',titleAccent:'Set peace in motion.',intro:'Each side suggests a simple way to care for others and build peace in everyday life. Roll the dice, receive your challenge and carry it with you today.',roll:'Roll the dice',discover:'Discover the six values',note:'An experience to share with family, school or community.',today:'YOUR CHALLENGE FOR TODAY',sixFaces:'THE SIX SIDES',valuesTitle:'Six paths toward peace',valuesIntro:'Choose a card to explore its message.',quote:'“Peace begins when we decide to love first.”',footerText:'A project to sow fraternity in everyday life.',flip:'View message',back:'Back'},
 it:{eyebrow:'UN PICCOLO GESTO PUÒ CAMBIARE LA GIORNATA',titleLead:'Lancia un’idea.',titleAccent:'Metti in moto la pace.',intro:'Ogni faccia propone un modo semplice per prendersi cura degli altri e costruire la pace nella vita quotidiana. Lancia il dado e porta con te la sfida di oggi.',roll:'Lancia il dado',discover:'Scopri i sei valori',note:'Un’esperienza da condividere in famiglia, a scuola o nella comunità.',today:'LA TUA SFIDA DI OGGI',sixFaces:'LE SEI FACCE',valuesTitle:'Sei cammini verso la pace',valuesIntro:'Scegli una carta per esplorare il messaggio.',quote:'“La pace inizia quando decidiamo di amare per primi.”',footerText:'Un progetto per seminare fraternità nella vita quotidiana.',flip:'Vedi messaggio',back:'Indietro'},
 fr:{eyebrow:'UN PETIT GESTE PEUT CHANGER LA JOURNÉE',titleLead:'Lance une idée.',titleAccent:'Mets la paix en mouvement.',intro:'Chaque face propose une manière simple de prendre soin des autres et de construire la paix au quotidien. Lance le dé et emporte ton défi avec toi.',roll:'Lancer le dé',discover:'Découvrir les six valeurs',note:'Une expérience à partager en famille, à l’école ou en communauté.',today:'TON DÉFI POUR AUJOURD’HUI',sixFaces:'LES SIX FACES',valuesTitle:'Six chemins vers la paix',valuesIntro:'Choisis une carte pour explorer son message.',quote:'« La paix commence quand nous décidons d’aimer en premier. »',footerText:'Un projet pour semer la fraternité au quotidien.',flip:'Voir le message',back:'Retour'},
 ca:{eyebrow:'UN PETIT GEST POT CANVIAR EL DIA',titleLead:'Llança una idea.',titleAccent:'Posa la pau en moviment.',intro:'Cada cara proposa una manera senzilla de cuidar els altres i construir la pau en la vida quotidiana. Llança el dau i emporta’t el repte d’avui.',roll:'Llança el dau',discover:'Descobreix els sis valors',note:'Una experiència per compartir en família, a l’escola o a la comunitat.',today:'EL TEU REPTE D’AVUI',sixFaces:'LES SIS CARES',valuesTitle:'Sis camins cap a la pau',valuesIntro:'Tria una targeta per explorar el missatge.',quote:'« La pau comença quan decidim estimar primer. »',footerText:'Un projecte per sembrar fraternitat en la vida quotidiana.',flip:'Veure missatge',back:'Tornar'},
 pt:{eyebrow:'UM PEQUENO GESTO PODE MUDAR O DIA',titleLead:'Lance uma ideia.',titleAccent:'Coloque a paz em movimento.',intro:'Cada face propõe uma forma simples de cuidar dos outros e construir a paz no cotidiano. Lance o dado, receba seu desafio e leve-o com você hoje.',roll:'Lançar o dado',discover:'Conhecer os seis valores',note:'Uma experiência para compartilhar em família, na escola ou na comunidade.',today:'SEU DESAFIO PARA HOJE',sixFaces:'AS SEIS FACES',valuesTitle:'Seis caminhos para a paz',valuesIntro:'Toque em uma carta para explorar sua mensagem.',quote:'“A paz começa quando decidimos amar primeiro.”',footerText:'Um projeto para semear fraternidade no cotidiano.',flip:'Ver mensagem',back:'Voltar'}
};

const cube=document.querySelector('#cube');
const rollButton=document.querySelector('#rollButton');
const language=document.querySelector('#language');
const grid=document.querySelector('#valuesGrid');
const resultImage=document.querySelector('#resultImage');
const resultTitle=document.querySelector('#resultTitle');
const resultDescription=document.querySelector('#resultDescription');
const messageCard=document.querySelector('#messageCard');
let current=0;
const flippedCards=new Set();
let baseX=-17,baseY=28,dragX=0,dragY=0,isDragging=false,startX=0,startY=0;
const rollDuration=1250;

function rotationAngles(rotation){
 const x=Number((rotation.match(/rotateX\((-?\d+(?:\.\d+)?)deg\)/)||[])[1]||0);
 const y=Number((rotation.match(/rotateY\((-?\d+(?:\.\d+)?)deg\)/)||[])[1]||0);
 return{x,y};
}

function applyCubeTransform(){
 cube.style.transform=`rotateX(${baseX+dragX}deg) rotateY(${baseY+dragY}deg)`;
}

function setCubeRotation(rotation,{resetDrag=true}={}){
 const angles=rotationAngles(rotation);
 baseX=angles.x;baseY=angles.y;
 if(resetDrag){dragX=0;dragY=0}
 applyCubeTransform();
}

function commitDragOffset(){
 baseX+=dragX;baseY+=dragY;
 dragX=0;dragY=0;
 applyCubeTransform();
}

function enableCubeDrag(){
 const target=cube.closest('.scene')||cube;
 target.addEventListener('pointerdown',event=>{
  if(rollButton.disabled)return;
  event.preventDefault();
  isDragging=true;startX=event.clientX;startY=event.clientY;
  cube.style.transition='transform .08s linear';
  target.classList.add('dragging');
  if(target.setPointerCapture)target.setPointerCapture(event.pointerId);
 });
 target.addEventListener('pointermove',event=>{
  if(!isDragging)return;
  dragY=(event.clientX-startX)*.42;
  dragX=-(event.clientY-startY)*.34;
  applyCubeTransform();
 });
 function endDrag(event){
  if(!isDragging)return;
  isDragging=false;commitDragOffset();cube.style.transition='';
  target.classList.remove('dragging');
  if(target.releasePointerCapture)target.releasePointerCapture(event.pointerId);
 }
 target.addEventListener('dragstart',event=>event.preventDefault());
 target.addEventListener('pointerup',endDrag);
 target.addEventListener('pointercancel',endDrag);
 target.addEventListener('lostpointercapture',()=>{if(isDragging){isDragging=false;commitDragOffset();cube.style.transition='';target.classList.remove('dragging')}});
}

function visibleCode(option){return(option.textContent||option.label||option.value||'').trim().slice(0,2).toLowerCase()}
function setInitialLanguage(){
 const requested=(new URLSearchParams(location.search).get('lang')||localStorage.getItem('livingPeaceSelectorLang')||'es').toLowerCase();
 const options=[...language.options];
 const match=options.find(option=>visibleCode(option)===requested)||options.find(option=>option.value===requested&&visibleCode(option)===requested);
 if(match)language.value=match.value;
}

function renderGrid(){
 const lang=language.value;
 grid.innerHTML=faces.map((face,index)=>`<button class="value-card ${current===index?'active':''} ${flippedCards.has(index)?'flipped':''}" style="--accent:${face.color}" type="button" data-index="${index}" aria-label="${face.text[lang][0]}" aria-pressed="${flippedCards.has(index)}"><span class="value-card-inner"><span class="value-card-face value-card-front"><span class="value-image"><img src="${faceImage(index,lang)}" alt="${face.text[lang][0]}" loading="lazy"></span><span class="value-copy"><span class="value-index">0${index+1}</span><h3>${face.text[lang][0]}</h3><p>${face.text[lang][1]}</p></span><span class="flip-cue"><span>${ui[lang].flip}</span><span class="flip-icon" aria-hidden="true">↻</span></span></span><span class="value-card-face value-card-back"><span><span class="value-index">${ui[lang].today}</span><h3>${face.text[lang][0]}</h3><p>${face.text[lang][1]}</p></span><span class="flip-cue"><span>${ui[lang].back}</span><span class="flip-icon" aria-hidden="true">↺</span></span></span></span></button>`).join('');
 grid.querySelectorAll('.value-card').forEach(card=>card.addEventListener('click',()=>toggleCard(Number(card.dataset.index))));
}

function toggleCard(index){
 if(flippedCards.has(index))flippedCards.delete(index);else flippedCards.add(index);
 current=index;setCubeRotation(faces[index].rotation);showMessage(index);renderGrid();
}

function showMessage(index){
 const face=faces[index],lang=language.value;
 messageCard.classList.add('changing');
 setTimeout(()=>{resultImage.src=faceImage(index,lang);resultImage.alt=face.text[lang][0];resultTitle.textContent=face.text[lang][0];resultDescription.textContent=face.text[lang][1];messageCard.classList.remove('changing')},180);
}

function selectFace(index,scroll=false){
 current=index;setCubeRotation(faces[index].rotation);showMessage(index);renderGrid();
 if(scroll)document.querySelector('.experience').scrollIntoView({behavior:'smooth',block:'center'});
}

function roll(){
 rollButton.disabled=true;const next=Math.floor(Math.random()*faces.length);const target=rotationAngles(faces[next].rotation);
 const xTurns=3+Math.floor(Math.random()*2),yTurns=4+Math.floor(Math.random()*2);
 const directionX=Math.random()>.5?1:-1,directionY=Math.random()>.5?1:-1;
 const x=target.x+directionX*xTurns*360,y=target.y+directionY*yTurns*360;
 dragX=0;dragY=0;
 cube.style.transition=`transform ${rollDuration}ms cubic-bezier(.2,.75,.25,1)`;
 cube.style.transform=`rotateX(${x}deg) rotateY(${y}deg)`;
 setTimeout(()=>{current=next;baseX=target.x;baseY=target.y;cube.style.transition='none';applyCubeTransform();cube.offsetHeight;cube.style.transition='';showMessage(next);renderGrid();rollButton.disabled=false},rollDuration);
}

function setLanguage(){
 const lang=language.value;document.documentElement.lang=visibleCode(language.selectedOptions[0])||lang;localStorage.setItem('livingPeaceSelectorLang',document.documentElement.lang);
 document.querySelectorAll('[data-ui]').forEach(el=>el.textContent=ui[lang][el.dataset.ui]);updateCubeImages(lang);showMessage(current);renderGrid();
}

function updateCubeImages(lang){
 cube.querySelectorAll('img[data-face]').forEach(img=>{img.src=faceImage(Number(img.dataset.face),lang);img.draggable=false});
}

setInitialLanguage();enableCubeDrag();rollButton.addEventListener('click',roll);language.addEventListener('change',setLanguage);setLanguage();
