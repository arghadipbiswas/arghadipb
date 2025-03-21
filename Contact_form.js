// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAFjWvsc1SLN2k3jETvxja3ambTSljRkSU",
    authDomain: "my-portfolio-contact-for-e9979.firebaseapp.com",
    databaseURL: "https://my-portfolio-contact-for-e9979-default-rtdb.firebaseio.com",
    projectId: "my-portfolio-contact-for-e9979",
    storageBucket: "my-portfolio-contact-for-e9979.firebasestorage.app",
    messagingSenderId: "735054216982",
    appId: "1:735054216982:web:8d3e740fba85f34ea05a37"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  // reference your database
var contactFormDB = firebase.database().ref("contactForm");

document.getElementById("contactForm").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  var name = getElementVal("name");
  var email = getElementVal("email");
  var phone = getElementVal("phone");
  var message = getElementVal("message");

  saveMessages(name, email, phone, message);
    // console.log(name, email, phone, message);

    //alert "successfully sent"
    document.addEventListener("DOMContentLoaded", function () {
        const contactForm = document.getElementById("contactForm");
        const successMessage = document.getElementById("successMessage");
      
        if (contactForm) {
          contactForm.addEventListener("submit", function (event) {
            event.preventDefault(); // Prevent form submission
      
            // Show the success message below the send button
            successMessage.style.display = "block";
      
            // Remove the message after 3 seconds
            setTimeout(() => {
              successMessage.style.display = "none";
            }, 3000);
      
            // Reset the form
            contactForm.reset();
          });
        }
      });
      
}

const saveMessages = (name, email, phone, message) => {
  var newContactForm = contactFormDB.push();

  newContactForm.set({
    name: name,
    email: email,
    phone: phone,
    message: message,
  });
};

const getElementVal = (id) => {
  return document.getElementById(id).value;
};