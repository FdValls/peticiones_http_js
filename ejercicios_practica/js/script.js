"use strict";

/* Tarea
 * Objetivos: adquirir herramientas y poner
 * en práctica lo visto en clase
 */

/* Enunciado
    --> Leer el README para ver el enunciado
*/

async function characterApi() {
    try {
        const response = await fetch('https://rickandmortyapi.com/api/character/?name=baby wizard');
        const data = await response.json();
        return data.results
    } catch (error) {
        console.log('Error:', error);
    }
}

const dataApi = characterApi();

dataApi.then(result => {
    console.log("asd")
    console.log(result);
})
    .catch(error => {
        console.log('Ocurrió un error:', error);
    });



