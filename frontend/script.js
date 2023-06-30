

const toggleBtn = document.querySelector('.toggle_btn')
const toggleBtnIcon = document.querySelector('.toggle_btn i')
const dropDownMenu = document.querySelector('.dropdown_menu')
const aboutButton=document.getElementById('about_button');
const logoutButton=document.getElementById('logout_button');
if(aboutButton){
  aboutButton.addEventListener('click',()=>{
      //replace your file name here with the about page
  gotoAbout();     
      
  });
}
if(logoutButton){
  logoutButton.addEventListener('click',()=>{
gotoLogout();
      
  });
}

function gotoAbout(){
  window.location.href='./team.html';
}
function gotoLogout(){
  window.location.href='./signin.html';
}

toggleBtn.onclick = function() {
    dropDownMenu.classList.toggle('open')
    const isOpen = dropDownMenu.classList.contains('open')

    toggleBtn.classList = isOpen
    ? 'fa-solid fa-xmark'
    : 'fa-solid fa-bars'
}


var TrandingSlider = new Swiper('.tranding-slider', {
  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true,
  loop: true,
  slidesPerView: 'auto',
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 2.5,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }
});
var logout=document.querySelector('logoutButton');
if(logout){
  logoutButton.addEventListener('click',()=>{
    alert('hi');
  });
}