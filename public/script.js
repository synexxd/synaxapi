// Tampilan Popup
  window.onload = function() {
    const popup = document.getElementById('popup');
    const popupBackdrop = document.getElementById('popup-backdrop');


    // Animasi 
    setTimeout(() => {
      popup.classList.add('active');
      popupBackdrop.classList.add('active');
    }, 100); // Delay Animasi
  };

  // Tombol X
  document.getElementById('close-popup').addEventListener('click', function() {
    const popup = document.getElementById('popup');
    const popupBackdrop = document.getElementById('popup-backdrop');

    // Tutup Popup
    popup.classList.remove('active');
    popupBackdrop.classList.remove('active');
  });




// Copy Dari Tag Pre
function copyToClipboard() {
var textToCopy = document.getElementById('codeBlock').innerText;
navigator.clipboard.writeText(textToCopy).then(function() {

    var popup = document.getElementById('copyPopup');
    popup.classList.add('show');
    popup.classList.remove('hide');

    setTimeout(function() {
        popup.classList.add('hide');
        popup.classList.remove('show');
    }, 2000);
}, function(err) {
    console.error('Gagal menyalin teks:', err);
});
}

// Event Tombol Copy
document.getElementById('copyButton').addEventListener('click', copyToClipboard);


  // Animasi Folder
function toggleFolder(folderId, folderElement) {
  const folder = document.getElementById(folderId);
  const icon = folderElement.querySelector('.icon');

  if (folder.classList.contains('open')) {
    folder.classList.remove('open');
    icon.classList.remove('rotated');
  } else {
    folder.classList.add('open');
    icon.classList.add('rotated');
  }
}

document.addEventListener('DOMContentLoaded', function() {


  updateDate();
});
