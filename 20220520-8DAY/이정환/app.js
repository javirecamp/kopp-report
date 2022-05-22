document
  .querySelector('.navbar-toggler')
  .addEventListener('click', function () {
    document.querySelectorAll('.list-group')[0].classList.toggle('show');
  });
