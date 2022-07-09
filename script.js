const toggleSwitch = document.querySelector('input[type="checkbox"]');
const nav = document.querySelector('#nav');
const toggleIcon = document.querySelector('#toggle-icon');
const image1 = document.querySelector('#image1');
const image2 = document.querySelector('#image2');
const image3 = document.querySelector('#image3');
const textBox = document.querySelector('#text-box');

// Dark or Light images
function imageMode(color) {
    image2.src = `img/undraw_feeling_proud_${color}.svg`;
    image1.src = `img/undraw_proud_coder_${color}.svg`;
    image3.src = `img/undraw_conceptual_idea_${color}.svg`;
}

function toggleDarkLightMode(isLight) {
    nav.style.backgroundColor = isLight
      ? 'rgb(255 255 255 / 50%)'
      : 'rgb(0 0 0 / 50%)';
    textBox.style.backgroundColor = isLight
      ? 'rgb(0 0 0  / 50%)'
      : 'rgb(255 255 255 / 50%)';
    toggleIcon.children[0].textContent = isLight ? 'Light Mode' : 'Dark Mode';
    isLight
      ? toggleIcon.children[1].classList.replace('fa-moon', 'fa-sun')
      : toggleIcon.children[1].classList.replace('fa-sun', 'fa-moon');
    isLight ? imageMode('light') : imageMode('dark');
}

function switchTheme(event) {
    if (event.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        toggleDarkLightMode(false);
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
        toggleDarkLightMode(true);
    }
};

toggleSwitch.addEventListener('change', switchTheme);

// Check local storage for theme
const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);

    if (currentTheme === 'dark') {
        toggleSwitch.checked = true;
        toggleDarkLightMode(false);
    }
}