// Dinamik Scroll
function scrollToSection(sectionId) {
  document.querySelector(sectionId).scrollIntoView({ behavior: 'smooth' });
}

// Kod Kopyalama İşlevi
function copyCode() {
  const codeBlock = document.querySelector('.code').innerText;
  navigator.clipboard.writeText(codeBlock).then(() => {
    alert('Kod kopyalandı!');
  });
}

