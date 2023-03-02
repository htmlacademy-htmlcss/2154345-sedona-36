// Попап

const popup = document.getElementById('popup');
const popupOpen = document.getElementById('popup-open');
const popupClose = document.getElementById('popup-close');

popupOpen.addEventListener('click', function(e){
    e.preventDefault();
    popup.classList.add('active');
})

popupClose.addEventListener('click', function(e){
    e.preventDefault();
    popup.classList.remove('active');
})
