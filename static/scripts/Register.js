

document.getElementById('register-values').addEventListener('submit', function(event) {
    event.preventDefault();
    

    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const password1= document.getElementById('password1').value;
    const password2= document.getElementById('password2').value;
    const telefono = document.getElementById('telefono').value;
    const fechaNac = document.getElementById('fechaNac').value;
   
    const errorMessage = document.getElementById('errorMessage');


    fetch('https://back-end-trabajo-en-grupo-codo-a-codo.onrender.com/auth/register', { 
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ nombre, email,telefono, password1 ,password2, fechaNac })
    }) 
 
    .then(response => response.json())

    .then(data => {

        if (data.auth == true) {
            // Redirigir a la página principal o dashboard
            window.location.href = '../index.html';

        } else {
           // errorMessage.textContent = data.message || 'Credenciales incorrectas';
            console.log(data.message); 
        }
    })

    .catch(error => {
        //errorMessage.textContent = 'Ocurrió un error. Por favor, intenta nuevamente.';
        console.error('Error:', error);
    });
});

