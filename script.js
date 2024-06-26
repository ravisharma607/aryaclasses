
// // -------------- Toggle Icon --------------
const iconImg = document.querySelector('.toggle_icon img');
const ulList = document.querySelector('.nav-links');
const crossImg = document.querySelector('.toggle_icon img');

const menuIconSrc = './image/menu.png';
const closeIconSrc = './image/close.png';

iconImg.addEventListener('click',(event)=>{
  ulList.classList.toggle('active')

  if(ulList.classList.contains('active')){
    iconImg.src = closeIconSrc;
  }
  else{
    iconImg.src = menuIconSrc;
  }
  event.stopPropagation();
})

    // Close the menu when clicking outside of it
    document.addEventListener('click', (event) => {
      if (!ulList.contains(event.target) && !iconImg.contains(event.target)) {
        ulList.classList.remove('active');
        iconImg.src = menuIconSrc;
      }
    });



let slideIndex = 0;
let loopCount = 0;  // Counter to keep track of the number of loops
const maxLoops = 100;  // Maximum number of loops

showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");

  // Hide all slides
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  // Increment slideIndex
  slideIndex++;

  // Reset slideIndex if it exceeds the number of slides (infinite loop condition)
  if (slideIndex > slides.length) {
    slideIndex = 1;
    loopCount++;  // Increment the loop counter each time we complete a loop
  }

  // Stop the slideshow after 100 loops
  if (loopCount >= maxLoops) {
    return;
  }

  // Remove "active" class from all dots
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  // Display the current slide and add "active" class to the corresponding dot
  slides[slideIndex - 1].style.display = "block";
  dots[(slideIndex - 1) % 5].className += " active";  // Loop through five dots

  // Set a timeout to show the next slide after 2 seconds
  setTimeout(showSlides, 4000);  // Change image every 2 seconds
}