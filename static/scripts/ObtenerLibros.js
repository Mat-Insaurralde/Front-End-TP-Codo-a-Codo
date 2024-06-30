// URL base da API
const baseURL = 'https://back-end-trabajo-en-grupo-codo-a-codo.onrender.com/book/';

function obtenerLibros() {
    return fetch(baseURL)

        .then(response => response.json())
        .catch(error => {
            console.error('Error al ingresar al endpoint', error);
        });

   
} 

console.log(obtenerLibros().then(data=>{data}));
