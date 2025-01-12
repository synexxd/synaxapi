// Tema değiştirme
const themeSwitch = document.getElementById('theme-switch');
const body = document.body;

// Kaydedilen tema varsa yükle
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
  body.className = savedTheme;
  themeSwitch.checked = savedTheme === 'dark-theme';
}

// Tema değiştir
themeSwitch.addEventListener('change', () => {
  const selectedTheme = themeSwitch.checked ? 'dark-theme' : 'light-theme';
  body.className = selectedTheme;

  // Tema tercihini kaydet
  localStorage.setItem('theme', selectedTheme);
});

// Kod kopyalama işlevi
function copyCode() {
  const codeBlock = document.getElementById('codeBlock').innerText;
  navigator.clipboard.writeText(codeBlock).then(() => {
    alert('Kod başarıyla kopyalandı!');
  });
}

