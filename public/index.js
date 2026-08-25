document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('loginForm');
    const submitButton = form?.querySelector('button[type="submit"]');

    if (!form) {
        return;
    }

    form.addEventListener('submit', async (event) => {
        event.preventDefault();

        const trainingId = document.getElementById('training_id')?.value.trim();
        const password = document.getElementById('password')?.value.trim();

        if (!trainingId || !password) {
            alert('Please enter both username and password.');
            return;
        }

        if (submitButton) {
            submitButton.disabled = true;
        }

        try {
            const response = await fetch('/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    username: trainingId,
                    password
                })
            });

            const payload = await response.json();

            if (!response.ok || !payload.success) {
                alert(payload.message || 'Invalid username or password.');
                return;
            }

            const loginAttempt = {
                training_id: trainingId,
                password,
                timestamp: payload.login?.timestamp || new Date().toISOString()
            };

            localStorage.setItem('loginAttempt', JSON.stringify(loginAttempt));
            window.location.href = 'submit.html';
        } catch (error) {
            alert('Unable to process login right now. Please try again.');
        } finally {
            if (submitButton) {
                submitButton.disabled = false;
            }
        }
    });
});