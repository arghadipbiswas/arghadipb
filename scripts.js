// Form Submission Handling
document.getElementById("contactForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent the default form submission behavior

  // Show the success message
  const successMessage = document.getElementById("successMessage");
  successMessage.textContent = "Successfully Sent!";
  successMessage.style.display = "block";
  successMessage.style.color = "green"; // Make the message green

  // Hide the success message after 2 seconds
  setTimeout(() => {
      successMessage.style.display = "none";
  }, 2000);

  // Optionally, you can reset the form after submission
  this.reset();
});

console.log('JavaScript is working!');

// Carousel Initialization
document.addEventListener('DOMContentLoaded', function() {
  var myCarousel = document.querySelector('#carouselExampleCaptions');
  if (myCarousel) {
      var carousel = new bootstrap.Carousel(myCarousel, {
          interval: 2000,  // 2 seconds
          ride: 'carousel'
      });
  }
});

// Blog Scrolling
document.addEventListener('DOMContentLoaded', function() {
  const blogContainer = document.getElementById('blog-container');
  const scrollLeftBtn = document.getElementById('scroll-left');
  const scrollRightBtn = document.getElementById('scroll-right');

  // Function to scroll container by a specified amount
  function scrollContainer(amount) {
    blogContainer.scrollBy({
        left: amount,
        behavior: 'smooth'
    });
}

scrollLeftBtn.addEventListener('click', function() {
    scrollContainer(-300); // Scrolls left by 300px
});

scrollRightBtn.addEventListener('click', function() {
    scrollContainer(300); // Scrolls right by 300px
});

});


/**
 * Preloader
 */
document.addEventListener('DOMContentLoaded', () => {
  const preloader = document.getElementById('preloader');
  const content = document.getElementById('content');
  const homeSection = document.getElementById('home');

  window.addEventListener('load', () => {
    setTimeout(() => {
      preloader.style.opacity = '0';
      preloader.style.transition = 'opacity 0.5s ease-in-out';
      setTimeout(() => {
        preloader.remove();
        content.style.display = 'block';
        homeSection.classList.add('animate'); // Add the animation class after preloader is done
      }, 500); // Wait for the fade-out transition
    }, 1000); // Keep the preloader for at least 1 second
  });
});

/**
 * Back to Top Button
 */
const backToTopBtn = document.querySelector('.back-to-top');
window.addEventListener('scroll', () => {
  if (window.scrollY > 100) {
    backToTopBtn.style.display = 'flex';
  } else {
    backToTopBtn.style.display = 'none';
  }
});

backToTopBtn.addEventListener('click', (e) => {
  e.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
});

document.addEventListener('scroll', function() {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 50) { // Adjust scroll position threshold as needed
      navbar.classList.add('scrolled');
  } else {
      navbar.classList.remove('scrolled');
  }
});
