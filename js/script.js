let slides;
let cur = 0;
window.onload = function () {
    slides = document.querySelectorAll('.testemonial');
    slides[cur].classList.remove('hidden');
}


function next(next) {
  slides[cur].classList.add('hidden');
  if(next) {
    ++cur;
  } else {
    --cur;
  }
   
  if(cur === slides.length) {
    cur = 0;
  }
  if(cur === -1) {
    cur = slides.length - 1;
  }
  slides[cur].classList.remove('hidden');
    
}