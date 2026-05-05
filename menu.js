document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.fav').forEach(btn => {
    const id = btn.dataset.id;

    if (localStorage.getItem('fav_' + id)) {
      btn.innerHTML = '<i class="fa-solid fa-heart"></i>';
      btn.classList.add('active');
    }

    btn.addEventListener('click', () => {
      const isActive = btn.classList.toggle('active');

      btn.innerHTML = isActive
        ? '<i class="fa-solid fa-heart"></i>'
        : '<i class="fa-regular fa-heart"></i>';

      if (isActive) {
        localStorage.setItem('fav_' + id, true);
      } else {
        localStorage.removeItem('fav_' + id);
      }
    });
  });
});