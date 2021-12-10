const toggleBtn = document.querySelector('.toggle');
const r = document.querySelector(':root');

function darkmode() {
  r.style.setProperty('--bg', 'hsl(230, 17%, 14%)');
  r.style.setProperty('--top-bg-pattern', 'hsl(232, 19%, 15%)');
  r.style.setProperty('--card-bg', 'hsl(228, 28%, 20%)');
  r.style.setProperty('--card-bg-hover', 'hsl(228, 26%, 27%)');
  r.style.setProperty('--text-1', 'hsl(228, 34%, 66%)');
  r.style.setProperty('--text-2', 'hsl(0, 0%, 100%)');
  toggleBtn.style.background =
    'linear-gradient(to right, hsl(210, 78%, 56%),hsl(146, 68%, 55%))';
}

function lightMode() {
  r.style.setProperty('--bg', 'hsl(0, 0%, 100%)');
  r.style.setProperty('--top-bg-pattern', 'hsl(225, 100%, 98%)');
  r.style.setProperty('--card-bg', 'hsl(227, 47%, 96%)');
  r.style.setProperty('--card-bg-hover', 'hsl(232, 33%, 91%)');
  r.style.setProperty('--text-1', 'sl(228, 12%, 44%)');
  r.style.setProperty('--text-2', 'hsl(hsl(230, 17%, 14%)');
  toggleBtn.style.background = 'hsl(230, 22%, 74%)';
}

toggleBtn.addEventListener('click', () => {
  toggleBtn.classList.toggle('darkmode');

  if (toggleBtn.classList.contains('darkmode')) {
    darkmode();
  } else {
    lightMode();
  }
});
