const welcomeBtn = document.getElementById("welcomeBtn");
const welcomeMessage = document.getElementById("welcomeMessage");

welcomeBtn.addEventListener("click", function() {
welcomeMessage.textContent = "Welcome to Lumen University! Your brightest future begins here. ✨";
}); 

const admissionForm = document.querySelector(".admission-form form");
const submissionMessage = document.querySelector("#submissionMessage");


admissionForm.addEventListener("submit", function(event) {
    event.preventDefault();
    submissionMessage.textContent= "Your application has been submitted successfully! ✨";
});

