document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const messageDiv = document.getElementById('message');

    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form values
        const username = document.getElementById('username').value.trim();
        const password = document.getElementById('password').value.trim();

        // Clear previous messages
        messageDiv.className = '';
        
        // Validate inputs
        if (!username || !password) {
            showMessage('Please fill in all fields', 'error');
            return;
        }

        if (password.length < 6) {
            showMessage('Password must be at least 6 characters long', 'error');
            return;
        }

        // Simulate login process
        simulateLogin(username, password);
    });

    function simulateLogin(username, password) {
        // Show loading message
        showMessage('Logging in...', '');
        
        // Simulate API call with setTimeout
        setTimeout(() => {
            // For demo purposes, accept any valid input
            showMessage('Login successful! Welcome, ' + username, 'success');
            loginForm.reset();
            
            // Redirect to family tree page after a brief delay
            setTimeout(() => {
                window.location.href = 'family-tree.html';
            }, 1000);
        }, 1500);
    }

    function showMessage(message, type) {
        messageDiv.textContent = message;
        messageDiv.className = type;
    }
});
