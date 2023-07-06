"use strict";

let btnConsultar = document.getElementById('btnConsultar');
let input = document.getElementById("personaje")
let title = document.getElementById("title")
let scriptElement = document.querySelector('.articleModels');
let statusElement = scriptElement.querySelector('.status');
let statusDotElement = scriptElement.querySelector('.status-dot');

let inputName = ""
let chapter = ""
let statusText;

let setStatus = document.getElementById("setStatus")
let lastKnowLocation = document.getElementById("lastKnowLocation")
let firstSeenIn = document.getElementById("firstSeenIn")
let image = document.getElementById("image")

btnConsultar.onclick = async () => {

    async function characterApi() {
        try {
            const response = await fetch(`https://rickandmortyapi.com/api/character/?name=${input.value}`);
            const data = await response.json();

            console.log(data.results);
            chapter = data.results[0].episode[0]

            setTimeout(() => {
                title.textContent = data.results[0].name
                lastKnowLocation.textContent = data.results[0].location.name
                image.src = data.results[0].image
            }, 200);

            statusElement.innerHTML = '';
            statusElement.appendChild(statusDotElement);
            statusElement.appendChild(document.createTextNode(`${data.results[0].status} - ${data.results[0].species}`));

            if (statusElement.textContent.includes('Alive')) {
                statusDotElement.className = 'status-dot ' + "green"
            } else {
                statusDotElement.className = 'status-dot ' + "red"
            }

        } catch (error) {
            alert("Error en la API")
        }

        try {
            const resChapter = await fetch(`${chapter}`);
            const dataChapter = await resChapter.json();
            firstSeenIn.textContent = dataChapter.name
        } catch (error) {
            console.error('Error:', error);
            throw error;
        }
    }

    characterApi()
};



