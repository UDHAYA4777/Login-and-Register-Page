
document.getElementById('signInForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
    const signInUsername = document.getElementById('signInUsername').value;
    const signInPassword = document.getElementById('signInPassword').value;
   
    console.log(`Sign In - Username: ${signInUsername}, Password: ${signInPassword}`);
});

document.getElementById('signUpForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
    const signUpUsername = document.getElementById('signUpUsername').value;
    const signUpEmail = document.getElementById('signUpEmail').value;
    const signUpPassword = document.getElementById('signUpPassword').value;
    
    console.log(`Sign Up - Username: ${signUpUsername}, Email: ${signUpEmail}, Password: ${signUpPassword}`);
});


const signUpButton = document.getElementById('sign-up-btn');
const signInButton = document.getElementById('sign-in-btn');
const container = document.querySelector('.container');

signUpButton.addEventListener('click', () => {
    container.classList.add('right-panel-active');
});

signInButton.addEventListener('click', () => {
    container.classList.remove('right-panel-active');
});
