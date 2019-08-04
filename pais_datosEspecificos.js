//--------------------------------------------------------------------
let fetch = require('node-fetch');

// Función asíncrona que muestra ciertos datos de determinado país
async function getCountry(countryName) {
    try {
        let response = await fetch(`https://restcountries.eu/rest/v2/name/${countryName}`);
        let country = await response.json();
        // Algunos datos posibles a mostrar
        return `
        País: ${country[0].name},\n
        Capital: ${country[0].capital},
        Región: ${country[0].region},
        Subregión: ${country[0].subregion},\n
        Código numérico: ${country[0].numericCode},
        Nombre nativo: ${country[0].nativeName},
        Idioma nativo: ${country[0].languages[0].nativeName},\n
        Código de moneda: ${country[0].currencies[0].code},
        Moneda: ${country[0].currencies[0].name},
        Símbolo de moneda: ${country[0].currencies[0].symbol}
        `;
    } catch (error) {
        return "Error al consultar el API";
    }
}

// Sólicita el país a consultar
//------------------------------------------------------------------
process.stdout.write('Ingrese el país: ');
process.stdin.on('data', (data) => {
    let pais = data.toString();
    (async function() {
        // Instancia de la función getCountry para
        let country = await getCountry(pais);
        console.log(country); // Mostrar la información

    })();
});
//------------------------------------------------------------------