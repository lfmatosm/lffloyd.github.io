function dynamicReveal() {
  let dynamicReveals = document.querySelectorAll('.reveal');
  let scroll = document.documentElement.scrollTop || document.body.scrollTop;
  const windowHeight = window.innerHeight; //viewport height
  for (const dynamicReveal of dynamicReveals) {
    if (scroll > windowHeight/3) {
      dynamicReveal.classList.add('active');
    } else {
      dynamicReveal.classList.remove('active');
    }
  }
}

window.addEventListener('scroll', dynamicReveal);
dynamicReveal();

let themeColors = ['white', '#2e2e33'];

function getTheme() {
  let theme = localStorage.getItem('theme');
  return theme ? theme : 'light';
}

function setIcons() {
  let theme = getTheme();
  let elems = document.querySelectorAll('.icon');
  const validIcons = ['daynight', 'email', 'github', 'twitter', 'scholar', 'cnpq', 'linkedin', 'home'];
  for (const elem of elems) {
    for (const validIcon of validIcons) {
      if (!elem.classList.contains(validIcon)) continue;
      let isLight = theme === 'light';
      let img = document.createElement('img');
      img.src = `./static/icons/${validIcon}_${isLight ? 'light' : 'dark'}.png`;
      img.alt = validIcon;
      elem.replaceChildren(img);
      break;
    }
  }
}

setIcons();

function setLinks() {
  let theme = getTheme();
  let elems = document.querySelectorAll('a');
  for (const elem of elems) {
    elem.classList.remove('light', 'dark');
    elem.classList.add(theme);
  }
}

setLinks();

function setTheme() {
  let theme = getTheme();
  let elems = document.querySelectorAll('.themed');
  for (const elem of elems) {
    elem.classList.remove('light', 'dark');
    elem.classList.add(theme);
  }
}

setTheme();

function switchTheme() {
  let theme = getTheme();
  let nextTheme = theme === 'light' ? 'dark' : 'light';
  localStorage.setItem('theme', nextTheme);
  setTheme();
  setIcons();
  setLinks();
}

