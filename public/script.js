// Tema değiştirme işlevi
const themeSwitch = document.getElementById('theme-switch');
const body = document.body;

// Varsayılan temayı ayarla (kullanıcı tercihlerini kontrol et)
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
  body.className = savedTheme;
  themeSwitch.checked = savedTheme === 'dark-theme';
}

// Tema değiştirildiğinde güncelle
themeSwitch.addEventListener('change', () => {
  const selectedTheme = themeSwitch.checked ? 'dark-theme' : 'light-theme';
  body.className = selectedTheme;

  // Kullanıcı tercihlerini kaydet
  localStorage.setItem('theme', selectedTheme);
});
