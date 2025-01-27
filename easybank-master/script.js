const openButton = document.querySelector(".open");
const sideBar = document.querySelector(".side-bar");
const container = document.querySelector(".nxt");
const pic = document.querySelector(".img2");

openButton.addEventListener('click', () => {
  if (sideBar.style.display === '') {
    sideBar.style.display = 'block';
    openButton.src = './images/icon-close.svg';
    document.querySelector('.img1').style.opacity = '60%';
    document.body.addEventListener('click', (e) => {
      if (!openButton.contains(e.target)) {
        sideBar.style.display = '';
        document.querySelector('img1').style.opacity = '';
        openButton.src = './images/icon-hamburger.svg';
      };
    });
  } else {
    openButton.src = './images/icon-hamburger.svg';
    sideBar.style.display = '';
    document.querySelector('.img1').style.opacity = '';
  };
});