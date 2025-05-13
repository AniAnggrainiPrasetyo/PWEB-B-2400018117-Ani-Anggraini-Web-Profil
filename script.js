window.addEventListener('load', function () {
  const notif = document.getElementById('welcome-notification');
  notif.textContent = 'Selamat datang di situs ani!';
  notif.style.display ='block';

  // Hilangkan notifikasi setelah 5 detik
  setTimeout(() => {
    notif.style.display = 'none';
  }, 5000);
});
