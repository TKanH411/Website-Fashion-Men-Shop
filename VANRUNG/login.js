
const loginForm = document.getElementById("login-form");
loginForm.addEventListener("submit", handleSubmit);
// Simulated database of users
const users = [
{ username: "admin", password: "123" },
{ username: "user2", password: "password2" },
{ username: "user3", password: "password3" },
];

// Function to handle form submission
function handleSubmit(event) {
event.preventDefault();
const username = loginForm.elements.username.value;
const password = loginForm.elements.password.value;

// Validate username and password
const user = users.find(
(user) => user.username === username && user.password === password
);

if (user) {
alert("Login successful!");
// Redirect to the homepage
window.location.href = "shop.html"; // Change 'homepage.html' to your actual homepage URL
} 
else {
alert("Invalid username or password. Please try again.");
}

// Clear the form fields after submission
loginForm.reset();
}

// Event listener for form submission
loginForm.addEventListener("submit", handleSubmit);





const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
    container.classList.add('right-panel-active');
});

signInButton.addEventListener('click', () => {
    container.classList.remove('right-panel-active');
});



