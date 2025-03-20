console.log('JavaScript is working!');

// ============================
// Form Submission Handling
// ============================
document.addEventListener('DOMContentLoaded', () => {
  const contactForm = document.getElementById("contactForm");
  if (contactForm) {
    contactForm.addEventListener("submit", function (event) {
      event.preventDefault();
      const successMessage = document.getElementById("successMessage");
      if (successMessage) {
        successMessage.textContent = "Successfully Sent!";
        successMessage.style.display = "block";
        successMessage.style.color = "green";

        // Hide success message after 2 seconds
        setTimeout(() => {
          successMessage.style.display = "none";
        }, 2000);

        // Reset the form
        this.reset();
      }
    });
  }
});

// ============================
// Carousel Initialization
// ============================
document.addEventListener('DOMContentLoaded', function () {
  const myCarousel = document.querySelector('#carouselExampleCaptions');
  if (myCarousel) {
    new bootstrap.Carousel(myCarousel, {
      interval: 2000,
      ride: 'carousel'
    });
  }
});

// ============================
// Blog Scrolling
// ============================
document.addEventListener('DOMContentLoaded', function () {
  const blogContainer = document.getElementById('blog-container');
  const scrollLeftBtn = document.getElementById('scroll-left');
  const scrollRightBtn = document.getElementById('scroll-right');

  if (blogContainer && scrollLeftBtn && scrollRightBtn) {
    function scrollContainer(amount) {
      blogContainer.scrollBy({
        left: amount,
        behavior: 'smooth'
      });
    }
  }
});


// ============================
// Navbar Scroll Behavior
// ============================
document.addEventListener('scroll', function () {
  const navbar = document.querySelector('.navbar');
  if (navbar) {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }
});

// ============================
// Screenshot Prevention (PC)
// ============================
document.addEventListener('keydown', (e) => {
  if (
    e.key === 'PrintScreen' || // Print Screen Key
    (e.ctrlKey && e.key === 'p') || // Ctrl + P
    (e.metaKey && e.key === 'p') || // Cmd + P (Mac)
    (e.ctrlKey && e.shiftKey && e.key === 's') || // Ctrl + Shift + S
    (e.metaKey && e.shiftKey && e.key === 's') // Cmd + Shift + S (Mac)
  ) {
    e.preventDefault();
    alert('It is disabled on this page!');
  }
});

// ============================
// Multi-Finger Detection (Mobile)
// ============================
let touchCount = 0;
document.addEventListener('touchstart', (e) => {
  touchCount = e.touches.length;
  if (touchCount > 2) {
    alert('Screenshots are disabled!');
  }
});

// Reset count on touch end
document.addEventListener('touchend', () => {
  touchCount = 0;
});

// ============================
// Blur Screen on PrintScreen
// ============================
function blurScreen() {
  document.body.style.filter = 'blur(10px)';
  setTimeout(() => document.body.style.filter = '', 1000);
}

document.addEventListener('keydown', (e) => {
  if (e.key === 'PrintScreen') {
    blurScreen();
  }
});

console.log("JavaScript code loaded successfully!");



























// console.log('JavaScript is working!');
// // Form Submission Handling
// document.getElementById("contactForm").addEventListener("submit", function(event) {
//   event.preventDefault(); // Prevent the default form submission behavior

//   // Show the success message
//   const successMessage = document.getElementById("successMessage");
//   successMessage.textContent = "Successfully Sent!";
//   successMessage.style.display = "block";
//   successMessage.style.color = "green"; // Make the message green

//   // Hide the success message after 2 seconds
//   setTimeout(() => {
//       successMessage.style.display = "none";
//   }, 2000);

//   // Optionally, reset the form after submission
//   this.reset();
// });

// // Carousel Initialization
// document.addEventListener('DOMContentLoaded', function() {
//   const myCarousel = document.querySelector('#carouselExampleCaptions');
//   if (myCarousel) {
//     new bootstrap.Carousel(myCarousel, {
//       interval: 2000, // 2 seconds
//       ride: 'carousel'
//     });
//   }
// });

// // Blog Scrolling
// document.addEventListener('DOMContentLoaded', function() {
//   const blogContainer = document.getElementById('blog-container');
//   const scrollLeftBtn = document.getElementById('scroll-left');
//   const scrollRightBtn = document.getElementById('scroll-right');

//   // Function to scroll the container by a specified amount
//   function scrollContainer(amount) {
//     blogContainer.scrollBy({
//       left: amount,
//       behavior: 'smooth'
//     });
//   }

//   // scrollLeftBtn.addEventListener('click', function() {
//   //   scrollContainer(-300); // Scrolls left by 300px
//   // });

//   // scrollRightBtn.addEventListener('click', function() {
//   //   scrollContainer(300); // Scrolls right by 300px
//   // });
// });

// // Preloader
// document.addEventListener('DOMContentLoaded', () => {
//   const preloader = document.getElementById('preloader');
//   const content = document.getElementById('content');
//   const homeSection = document.getElementById('home');

//   window.addEventListener('load', () => {
//     setTimeout(() => {
//       preloader.style.opacity = '0';
//       preloader.style.transition = 'opacity 0.5s ease-in-out';
//       setTimeout(() => {
//         preloader.remove();
//         content.style.display = 'block';
//         homeSection.classList.add('animate'); // Add the animation class after preloader is done
//       }, 500); // Wait for the fade-out transition
//     }, 1000); // Keep the preloader for at least 1 second
//   });
// });


// // Navbar Scroll Behavior
// document.addEventListener('scroll', function() {
//   const navbar = document.querySelector('.navbar');
//   if (window.scrollY > 50) { // Adjust scroll position threshold as needed
//     navbar.classList.add('scrolled');
//   } else {
//     navbar.classList.remove('scrolled');
//   }
// });


// //Scrolling full page down to upward
// AOS.init();
//     // Scroll to Top Button
//     const scrollToTopBtn = document.getElementById("scrollToTopBtn");

//     window.onscroll = function () {
//         if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
//             scrollToTopBtn.style.display = "block";
//         } else {
//             scrollToTopBtn.style.display = "none";
//         }
//     };

//     scrollToTopBtn.onclick = function () {
//         window.scrollTo({ top: 0, behavior: "smooth" });
//     };

    
//     // Disable right-click context menu
//     document.addEventListener('contextmenu', function(e) {
//       e.preventDefault();
//     });

//     // Disable Copy and Paste
//   document.addEventListener('DOMContentLoaded', () => {
//   document.addEventListener('copy', (e) => e.preventDefault());
//   document.addEventListener('paste', (e) => e.preventDefault());
// });


//   // Disable right-click
//   document.addEventListener('contextmenu', (e) => e.preventDefault());

//   // Disable Copy, Paste, Cut, and Screenshot (Attempt)
//   document.addEventListener('keydown', (e) => {
//     // Prevent common screenshot shortcuts
//     if (
//       (e.key === 'PrintScreen') || // PrintScreen button
//       (e.ctrlKey && e.key === 'p') || // Ctrl + P (Print)
//       (e.metaKey && e.key === 'p') || // Cmd + P (Print on macOS)
//       (e.ctrlKey && e.shiftKey && e.key === 's') || // Ctrl + Shift + S (Screenshot on some browsers)
//       (e.metaKey && e.shiftKey && e.key === 's') // Cmd + Shift + S (macOS)
//     ) {
//       e.preventDefault();
//       alert('Screenshots are disabled on this page!');
//     }
//   });
