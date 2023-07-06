"use strict";

/* Tarea
 * Objetivos: adquirir herramientas y poner
 * en práctica lo visto en clase
 */

/* Enunciado
--> Leer el README para ver el enunciado
*/

let btnConsultar = document.getElementById('btnConsultar');
let input = document.getElementById("personaje")
let title = document.getElementById("title")
let statusElement = document.getElementById('setStatus');


let inputName = ""
let chapter = ""

let setStatus = document.getElementById("setStatus")
let lastKnowLocation = document.getElementById("lastKnowLocation")
let firstSeenIn = document.getElementById("firstSeenIn")
let image = document.getElementById("image")

btnConsultar.onclick = async () => {

    statusElement.textContent = ''

    async function characterApi() {
        try {
            const response = await fetch(`https://rickandmortyapi.com/api/character/?name=${input.value}`);
            const data = await response.json();

            console.log(data.results);

            // Dependiendo del estado setear el icono
            statusElement.textContent = `${data.results[0].status} - ${data.results[0].species}`

            if (statusElement.textContent.includes('Alive')) {
                statusElement.classList.add('green');
            } else {
                statusElement.classList.add('red');
            }
            //Configuro las variables de la card con los datos de la api
            chapter = data.results[0].episode[0]

            setTimeout(() => {
                title.textContent = data.results[0].name
                lastKnowLocation.textContent = data.results[0].location.name
                image.src = data.results[0].image
            }, 200);

        } catch (error) {
            alert("Error en la API")
            console.log('Error:', "Error en la API");
        }

        try {
            const response1 = await fetch(`${chapter}`);
            const data1 = await response1.json();
            firstSeenIn.textContent = data1.name
        } catch (error) {
            console.error('Error:', error);
            throw error;
        }
    }

    characterApi()
};



