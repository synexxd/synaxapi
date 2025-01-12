// Tema Değiştirme İşlevi
const themeSwitch = document.getElementById('theme-switch');
const body = document.body;

// Kaydedilen Tema
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
  body.className = savedTheme;
  themeSwitch.checked = savedTheme === 'dark-theme';
}

// Tema Değişikliği
themeSwitch.addEventListener('change', () => {
  const selectedTheme = themeSwitch.checked ? 'dark-theme' : 'light-theme';
  body.className = selectedTheme;
  localStorage.setItem('theme', selectedTheme);
});

// Kod Kopyalama
function copyCode() {
  const codeBlock = document.querySelector('.code-block').innerText;
  navigator.clipboard.writeText(codeBlock).then(() => {
    alert('Kod başarıyla kopyalandı!');
  });
}

// Scroll İşlevi
function scrollToSection(sectionId) {
  document.querySelector(sectionId).scrollIntoView({ behavior: 'smooth' });
}
