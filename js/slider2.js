  // Slider(#1)

  if (slides.length < 10) {
   total.textContent =  `0${slides.length}`;
} else {
   total.textContent = slides.length;
}

showSlides(slidesIndex);

function showSlides(n) {
   if (n > slides.length) {
      slidesIndex = 1;
   }

   if (n < 1) {
      slidesIndex = slides.length;
   }

   slides.forEach(item => item.style.display = 'none');
   
   slides[slidesIndex - 1].style.display = 'block';

   if (slides.length < 10) {
      current.textContent =  `0${slidesIndex}`;
   } else {
      current.textContent = slidesIndex;
   }
}

function turnSlide(n) {
   showSlides(slidesIndex += n);
}

prevBtn.addEventListener('click', () => {
   turnSlide(-1);
});

nextBtn.addEventListener('click', () => {
   turnSlide(+1);
});