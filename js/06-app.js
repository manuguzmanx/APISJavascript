const salida = document.querySelector('#salida');
const microfono = document.querySelector('#microfono');

microfono.addEventListener('click', ejecutarSpeechAPI);

function ejecutarSpeechAPI () {
    const SpeechRecognition = webkitSpeechRecognition;
    const recognition = new SpeechRecognition();

    recognition.lang = 'es';
    recognition.start();

    recognition.onstart = function () {
        salida.classList.add('mostrar');
        salida.textContent = 'Escuchando...';
    }

    recognition.onspeechend = function () {
        salida.textContent = 'Se dejó de grabar...';
        recognition.stop();
    }

    recognition.onresult = function (e) {
        console.log(e.results[0][0]);

        const { confidence, transcript } = e.results[0][0];
        const speech = document.createElement('P');
        speech.innerHTML = `Grabado: ${transcript}`;

        const seguridad = document.createElement('P');
        seguridad.innerHTML = `Seguridad: ${confidence}`;

        salida.appendChild(speech);
        salida.appendChild(seguridad);
    }
}