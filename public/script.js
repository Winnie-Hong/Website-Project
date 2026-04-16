// ===========================
// CARD DATA
// Each card: korean, romanization, english, category
// ===========================
const allCards = [

  // --- GREETINGS ---
  { korean: '안녕하세요', roman: 'Annyeonghaseyo', english: 'Hello', category: 'greetings' },
  { korean: '감사합니다', roman: 'Gamsahamnida', english: 'Thank you', category: 'greetings' },
  { korean: '죄송합니다', roman: 'Joesonghamnida', english: 'I\'m sorry / Excuse me', category: 'greetings' },
  { korean: '네', roman: 'Ne', english: 'Yes', category: 'greetings' },
  { korean: '아니요', roman: 'Aniyo', english: 'No', category: 'greetings' },
  { korean: '괜찮아요', roman: 'Gwaenchanayo', english: 'It\'s okay / I\'m fine', category: 'greetings' },
  { korean: '반갑습니다', roman: 'Bangapseumnida', english: 'Nice to meet you', category: 'greetings' },
  { korean: '안녕히 가세요', roman: 'Annyeonghi gaseyo', english: 'Goodbye (to someone leaving)', category: 'greetings' },
  { korean: '이름이 뭐예요?', roman: 'Ireumi mwoyeyo?', english: 'What\'s your name?', category: 'greetings' },
  { korean: '영어 할 줄 아세요?', roman: 'Yeongeo hal jul aseyo?', english: 'Do you speak English?', category: 'greetings' },
  { korean: '잠깐만요', roman: 'Jamkkanmanyo', english: 'Just a moment', category: 'greetings' },
  { korean: '모르겠어요', roman: 'Moreugeseoyo', english: 'I don\'t know', category: 'greetings' },

  // --- FOOD ---
  { korean: '이거 주세요', roman: 'Igeo juseyo', english: 'This one, please', category: 'food' },
  { korean: '맛있어요', roman: 'Masisseoyo', english: 'It\'s delicious!', category: 'food' },
  { korean: '물 주세요', roman: 'Mul juseyo', english: 'Water, please', category: 'food' },
  { korean: '메뉴 주세요', roman: 'Menyu juseyo', english: 'Menu, please', category: 'food' },
  { korean: '계산서 주세요', roman: 'Gyesanseo juseyo', english: 'Bill, please', category: 'food' },
  { korean: '맵지 않게 해주세요', roman: 'Maepji ange haejuseyo', english: 'Not spicy, please', category: 'food' },
  { korean: '포장해 주세요', roman: 'Pojanghae juseyo', english: 'To go, please', category: 'food' },
  { korean: '채식주의자예요', roman: 'Chaesigjuuijayeyo', english: 'I\'m vegetarian', category: 'food' },
  { korean: '알레르기가 있어요', roman: 'Allereugeuga isseoyo', english: 'I have allergies', category: 'food' },
  { korean: '추천해 주세요', roman: 'Chucheonhae juseyo', english: 'Please recommend something', category: 'food' },
  { korean: '삼겹살', roman: 'Samgyeopsal', english: 'Grilled pork belly', category: 'food' },
  { korean: '김치', roman: 'Gimchi', english: 'Kimchi (fermented vegetables)', category: 'food' },

  // --- TRANSPORT ---
  { korean: '지하철', roman: 'Jihacheol', english: 'Subway', category: 'transport' },
  { korean: '버스', roman: 'Beoseu', english: 'Bus', category: 'transport' },
  { korean: '택시', roman: 'Taeksi', english: 'Taxi', category: 'transport' },
  { korean: '공항', roman: 'Gonghang', english: 'Airport', category: 'transport' },
  { korean: '역', roman: 'Yeok', english: 'Station', category: 'transport' },
  { korean: '어디예요?', roman: 'Eodiyeyo?', english: 'Where is it?', category: 'transport' },
  { korean: '여기 세워 주세요', roman: 'Yeogi sewo juseyo', english: 'Stop here, please', category: 'transport' },
  { korean: '표 주세요', roman: 'Pyo juseyo', english: 'A ticket, please', category: 'transport' },
  { korean: '길을 잃었어요', roman: 'Gireul ireosseoyo', english: 'I\'m lost', category: 'transport' },
  { korean: '얼마예요?', roman: 'Eolmayeyo?', english: 'How much is it?', category: 'transport' },
  { korean: '호텔', roman: 'Hotel', english: 'Hotel', category: 'transport' },
  { korean: '지도', roman: 'Jido', english: 'Map', category: 'transport' },

  // --- SHOPPING ---
  { korean: '얼마예요?', roman: 'Eolmayeyo?', english: 'How much is it?', category: 'shopping' },
  { korean: '깎아 주세요', roman: 'Kkakka juseyo', english: 'Please give a discount', category: 'shopping' },
  { korean: '이거 있어요?', roman: 'Igeo isseoyo?', english: 'Do you have this?', category: 'shopping' },
  { korean: '다른 색 있어요?', roman: 'Dareun saek isseoyo?', english: 'Other colors available?', category: 'shopping' },
  { korean: '카드 돼요?', roman: 'Kadeu dwaeyo?', english: 'Do you accept cards?', category: 'shopping' },
  { korean: '현금', roman: 'Hyeongeum', english: 'Cash', category: 'shopping' },
  { korean: '영수증 주세요', roman: 'Yeongsujeung juseyo', english: 'Receipt, please', category: 'shopping' },
  { korean: '너무 비싸요', roman: 'Neomu bissayo', english: 'Too expensive', category: 'shopping' },
  { korean: '입어봐도 돼요?', roman: 'Ibeobwado dwaeyo?', english: 'Can I try it on?', category: 'shopping' },
  { korean: '그냥 볼게요', roman: 'Geunyang bolgeyo', english: 'Just looking, thanks', category: 'shopping' },
  { korean: '이거 주세요', roman: 'Igeo juseyo', english: 'I\'ll take this one', category: 'shopping' },
  { korean: '봉투 주세요', roman: 'Bongtu juseyo', english: 'A bag, please', category: 'shopping' },

  // --- NUMBERS ---
  { korean: '일', roman: 'Il', english: '1 (Sino-Korean)', category: 'numbers' },
  { korean: '이', roman: 'I', english: '2 (Sino-Korean)', category: 'numbers' },
  { korean: '삼', roman: 'Sam', english: '3 (Sino-Korean)', category: 'numbers' },
  { korean: '사', roman: 'Sa', english: '4 (Sino-Korean)', category: 'numbers' },
  { korean: '오', roman: 'O', english: '5 (Sino-Korean)', category: 'numbers' },
  { korean: '육', roman: 'Yuk', english: '6 (Sino-Korean)', category: 'numbers' },
  { korean: '칠', roman: 'Chil', english: '7 (Sino-Korean)', category: 'numbers' },
  { korean: '팔', roman: 'Pal', english: '8 (Sino-Korean)', category: 'numbers' },
  { korean: '구', roman: 'Gu', english: '9 (Sino-Korean)', category: 'numbers' },
  { korean: '십', roman: 'Sip', english: '10 (Sino-Korean)', category: 'numbers' },
  { korean: '백', roman: 'Baek', english: '100', category: 'numbers' },
  { korean: '천', roman: 'Cheon', english: '1,000', category: 'numbers' },
  { korean: '만', roman: 'Man', english: '10,000', category: 'numbers' },

  // --- EMERGENCY ---
  { korean: '도와주세요!', roman: 'Dowajuseyo!', english: 'Help!', category: 'emergency' },
  { korean: '경찰 불러 주세요', roman: 'Gyeongchal bulleo juseyo', english: 'Call the police, please', category: 'emergency' },
  { korean: '병원에 데려다 주세요', roman: 'Byeongwone deryeoda juseyo', english: 'Take me to the hospital', category: 'emergency' },
  { korean: '응급실', roman: 'Eungeupssil', english: 'Emergency room', category: 'emergency' },
  { korean: '약국', roman: 'Yakguk', english: 'Pharmacy', category: 'emergency' },
  { korean: '아파요', roman: 'Apayo', english: 'I\'m in pain / It hurts', category: 'emergency' },
  { korean: '잃어버렸어요', roman: 'Ireobeolyeosseoyo', english: 'I lost it', category: 'emergency' },
  { korean: '소매치기 당했어요', roman: 'Somaechigi danghaesseoyo', english: 'I was pickpocketed', category: 'emergency' },
  { korean: '대사관이 어디예요?', roman: 'Daesagwani eodiyeyo?', english: 'Where is the embassy?', category: 'emergency' },
  { korean: '구급차 불러 주세요', roman: 'Gugeupcha bulleo juseyo', english: 'Please call an ambulance', category: 'emergency' },
];

// ===========================
// APP STATE
// ===========================
let deck = [...allCards];    // current filtered deck
let index = 0;               // current card position
let isFlipped = false;       // track flip state
let scoreCorrect = 0;        // cards marked correct
let scoreWrong   = 0;        // cards marked wrong

// ===========================
// DOM ELEMENTS
// ===========================
const card           = document.getElementById('card');
const koreanText     = document.getElementById('korean-text');
const romanText      = document.getElementById('roman-text');
const englishText    = document.getElementById('english-text');
const counter        = document.getElementById('counter');
const categoryLabel  = document.getElementById('category-label');
const frontBadge     = document.getElementById('front-badge');
const backBadge      = document.getElementById('back-badge');
const answerButtons  = document.getElementById('answer-buttons');
const scoreCorrectEl = document.getElementById('score-correct');
const scoreWrongEl   = document.getElementById('score-wrong');

// ===========================
// RENDER CARD
// ===========================
function renderCard() {
  const current = deck[index];

  // Reset flip when moving to a new card
  if (isFlipped) {
    card.classList.remove('flipped');
    isFlipped = false;
  }

  // Update text content
  koreanText.textContent  = current.korean;
  romanText.textContent   = current.roman;
  englishText.textContent = current.english;

  // Format badge label
  const label = current.category.charAt(0).toUpperCase() + current.category.slice(1);
  frontBadge.textContent = label;
  backBadge.textContent  = label;

  // Update counter
  counter.textContent = `${index + 1} / ${deck.length}`;

  // Always hide answer buttons when showing a new card
  answerButtons.classList.add('hidden');
}

// ===========================
// FLIP CARD
// ===========================
card.addEventListener('click', () => {
  isFlipped = !isFlipped;
  card.classList.toggle('flipped', isFlipped);

  // Show answer buttons when flipped to English side; hide when flipped back
  answerButtons.classList.toggle('hidden', !isFlipped);
});

// ===========================
// NEXT / PREV
// ===========================
document.getElementById('next-btn').addEventListener('click', () => {
  index = (index + 1) % deck.length;
  renderCard();
});

document.getElementById('prev-btn').addEventListener('click', () => {
  index = (index - 1 + deck.length) % deck.length;
  renderCard();
});

// ===========================
// SHUFFLE
// ===========================
document.getElementById('shuffle-btn').addEventListener('click', () => {
  // Fisher-Yates shuffle
  for (let i = deck.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [deck[i], deck[j]] = [deck[j], deck[i]];
  }
  index = 0;
  renderCard();

  // Quick visual feedback on the button
  const btn = document.getElementById('shuffle-btn');
  btn.textContent = '✓ Shuffled!';
  setTimeout(() => { btn.textContent = '⇄ Shuffle'; }, 1000);
});

// ===========================
// CATEGORY TABS
// ===========================
const categoryLabels = {
  all:       'All Cards',
  greetings: 'Greetings',
  food:      'Food & Dining',
  transport: 'Transport',
  shopping:  'Shopping',
  numbers:   'Numbers',
  emergency: 'Emergency',
};

document.getElementById('tabs').addEventListener('click', (e) => {
  if (!e.target.classList.contains('tab')) return;

  const selected = e.target.dataset.category;

  // Update active tab style
  document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
  e.target.classList.add('active');

  // Filter deck
  deck = selected === 'all'
    ? [...allCards]
    : allCards.filter(c => c.category === selected);

  // Update label and reset to first card
  categoryLabel.textContent = categoryLabels[selected] || selected;
  index = 0;
  renderCard();
});

// ===========================
// RIGHT / WRONG BUTTONS
// ===========================
function updateScore() {
  scoreCorrectEl.textContent = scoreCorrect;
  scoreWrongEl.textContent   = scoreWrong;
}

// Snap to the next card's Korean front with no flip animation
function advanceCard() {
  // 1. Kill the transition so the card jumps instantly to front position
  card.style.transition = 'none';
  card.classList.remove('flipped');
  isFlipped = false;

  // 2. Force the browser to apply the instant reset before re-enabling transition
  card.offsetHeight;

  // 3. Re-enable transition for the user's next flip
  card.style.transition = '';

  // 4. Load the next card (renderCard won't trigger a flip since isFlipped is false)
  index = (index + 1) % deck.length;
  renderCard();
}

document.getElementById('right-btn').addEventListener('click', () => {
  scoreCorrect++;
  updateScore();
  advanceCard();
});

document.getElementById('wrong-btn').addEventListener('click', () => {
  scoreWrong++;
  updateScore();
  advanceCard();
});

document.getElementById('score-reset').addEventListener('click', () => {
  scoreCorrect = 0;
  scoreWrong   = 0;
  updateScore();
});

// ===========================
// KEYBOARD SUPPORT
// ===========================
document.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowRight') document.getElementById('next-btn').click();
  if (e.key === 'ArrowLeft')  document.getElementById('prev-btn').click();
  if (e.key === ' ' || e.key === 'Enter') {
    e.preventDefault();
    card.click();
  }
  // After flipping: 1 = Got it, 2 = Missed it
  if (e.key === '1' && isFlipped) document.getElementById('right-btn').click();
  if (e.key === '2' && isFlipped) document.getElementById('wrong-btn').click();
});

// ===========================
// INIT
// ===========================
renderCard();
