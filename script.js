const tabs = [...document.querySelectorAll('[role="tab"]')];
const eras = [
  [
    "HALO",
    "The opening chapter",
    "A LITTLE HALO. THEN EVERYTHING CHANGED.",
    "A brief introduction through Halo. Then Call of Duty happened, and the evenings were accounted for.",
    "The beginning",
    "HALO"
  ],
  [
    "MW2",
    "Modern Warfare 2",
    "THE NUKE YEARS.",
    "MW2 was about getting nukes. The streak, the pressure, and the payoff that made the whole lobby remember your name.",
    "Tactical nukes",
    "MW2"
  ],
  [
    "BLACK OPS",
    "Black Ops",
    "DEMOLITION. NO BREATHING ROOM.",
    "Demolition spawn trapping and plenty of quickscoping. Another obsession. Another reason to stay in the lobby.",
    "Demolition / Quickscoping",
    "BO"
  ],
  [
    "MW3",
    "Modern Warfare 3",
    "MOABS. AND QUICKSCOPES.",
    "The MOAB chase took over. Between the streaks, there was more quickscoping. Another evening that went on longer than planned.",
    "MOABs / Quickscoping",
    "MW3"
  ],
  [
    "BLACK OPS II",
    "The defining era",
    "LEAGUE PLAY. ON REPEAT.",
    "Black Ops II was the one. The M8A1, the competition, the constant pull of another match. He didn’t casually dip into League Play. He grinded it.",
    "Weapon of choice / M8A1",
    "II"
  ],
  [
    "THE 8s",
    "Keeping Black Ops II alive",
    "HIS LOBBY. YOUR NEXT GAME.",
    "The love for BO2 outlasted its release years. Playing 8s, hosting the lobbies, and keeping the competition going with the people who understood it.",
    "Playing & hosting / Black Ops II 8s",
    "8s"
  ],
  [
    "WARZONE",
    "The Warzone years",
    "ONE MORE DROP. SEVERAL HOURS LATER.",
    "An extraordinary amount of time in Warzone. The sessions, the squad, the streams. A whole new era of the same competitive obsession.",
    "Warzone / The long sessions",
    "WZ"
  ]
];
function selectEra(index) {
  const era = eras[index];
  tabs.forEach((tab, i) => { tab.setAttribute('aria-selected', String(i === index)); tab.tabIndex = i === index ? 0 : -1; });
  document.getElementById('era-panel').setAttribute('aria-labelledby', tabs[index].id);
  ['era-label', 'era-title', 'era-copy', 'era-tag', 'era-mark'].forEach((id, i) => { document.getElementById(id).textContent = era[i + 1]; });
}
tabs.forEach((tab, index) => {
  tab.addEventListener('click', () => selectEra(index));
  tab.addEventListener('keydown', event => {
    const destinations = { ArrowRight:(index + 1) % tabs.length, ArrowLeft:(index + tabs.length - 1) % tabs.length, Home:0, End:tabs.length - 1 };
    if (!(event.key in destinations)) return;
    event.preventDefault();
    tabs[destinations[event.key]].focus();
    tabs[destinations[event.key]].click();
  });
});
const viewer = document.getElementById('lightbox');
document.querySelectorAll('[data-image]').forEach(button => {
  button.addEventListener('click', () => {
    document.getElementById('lightbox-image').src = button.dataset.image;
    document.getElementById('lightbox-image').alt = button.querySelector('img').alt;
    document.getElementById('lightbox-caption').textContent = button.dataset.caption;
    viewer.showModal();
  });
});
document.querySelector('.close-lightbox').addEventListener('click', () => viewer.close());
viewer.addEventListener('click', event => { if (event.target === viewer) viewer.close(); });
const knowingLines = ['We know.', 'We don’t <em>know</em>.', 'But we <em>know</em>.'];
let knowingIndex = 0;
document.getElementById('we-know').addEventListener('click', event => {
  knowingIndex = (knowingIndex + 1) % knowingLines.length;
  event.currentTarget.innerHTML = knowingLines[knowingIndex];
});
const videos = [...document.querySelectorAll('video')];
videos.forEach(video => video.addEventListener('play', () => videos.forEach(other => { if (other !== video) other.pause(); })));
