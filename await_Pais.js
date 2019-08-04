//------------------------------------------------------------------
let fetch = require('node-fetch');

//Función getCountry, muestra la información dentro de la API
function getCountry(countryName) {
    // URL de la API
    fetch(`https://restcountries.eu/rest/v2/name/${countryName}`)
        .then(response => {
            return response.json();
        })
        .then(response => {
            console.log(response);
        })
        .catch(err => console.log("Error ", err))
};
//------------------------------------------------------------------

// Solicitar el país
process.stdout.write('Ingrese el país: ');
process.stdin.on('data', (data) => {
    let pais = data.toString();

    // Llamar a la función getCountry
    getCountry(pais);
});
//------------------------------------------------------------------