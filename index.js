const toogle = document.getElementById('toogle');
console.log(toogle);

const navbar = document.getElementById('navbar');
console.log(navbar);


toogle.addEventListener ('click', () => {
  navbar.classList.toggle('sidebar');
  toogle.classList.toggle('toogle-active');
});