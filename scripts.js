document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Dummy authentication (replace with actual logic)
    if (email === 'admin@hexaware.com' && password === 'password123') {
        alert('Login successful');
        window.location.href = 'dashboard.html';
    } else {
        alert('Invalid credentials');
    }
});
let currentQuestion = 1;

document.querySelector('.navigation button:nth-child(1)').addEventListener('click', function() {
    if (currentQuestion > 1) {
        currentQuestion--;
        loadQuestion(currentQuestion);
    }
});

document.querySelector('.navigation button:nth-child(2)').addEventListener('click', function() {
    currentQuestion++;
    loadQuestion(currentQuestion);
});

document.querySelector('.navigation button:nth-child(3)').addEventListener('click', function() {
    alert('Assessment submitted!');
    window.location.href = 'results.html';
});

function loadQuestion(number) {
    document.querySelector('.question h2').innerText = `Question ${number}`;
    // Load the specific question data based on number
}
