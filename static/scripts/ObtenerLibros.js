fetch("https://back-end-trabajo-en-grupo-codo-a-codo.onrender.com/book")
    .then(response => response.json())
    .then(data => {
        console.log(data);
    }).catch((err) => {
        console.log(err);
    })