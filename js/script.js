let slides;
let cur = 0;
window.onload = function () {
    slides = document.querySelectorAll('.testemonial');
    
    for (let i = 1; i < slides.length; ++i) {
        slides[i].classList.add('hidden');
    }
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