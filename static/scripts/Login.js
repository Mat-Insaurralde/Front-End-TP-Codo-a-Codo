

document.getElementById('login-values').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;


    const errorMessage = document.getElementById('errorMessage');

    fetch('https://back-end-trabajo-en-grupo-codo-a-codo.onrender.com/auth/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
    }) 

    .then(response => response.json())

    .then(data => {

        if (data.auth == true) {
            // Redirigir a la página principal o dashboard
            window.location.href = '../index.html';
        } else {
            errorMessage.textContent = data.message || 'Credenciales incorrectas';
        }
    })

    .catch(error => {
        errorMessage.textContent = 'Ocurrió un error. Por favor, intenta nuevamente.';
        console.error('Error:', error);
    });
});