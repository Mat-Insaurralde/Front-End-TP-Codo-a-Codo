// URL base da API
const baseURL = 'https://back-end-trabajo-en-grupo-codo-a-codo.onrender.com/book/';

function obtenerLibros() {
    return fetch(baseURL)

        .then(response => response.json())
        .catch(error => {
            console.error('Error al ingresar al endpoint', error);
        });

   
} 

obtenerLibros()
.then(data=>{console.log( data +"log mati" );})
.catch(   error => console.log(error)
);




fetch(baseURL , {

    method: 'GET',
    mode: 'cors', // asegúrate de que esté en 'cors' y no en 'no-cors'
    headers: {
      'Content-Type': 'application/json'
    }

  })
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));