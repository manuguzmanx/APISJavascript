document.addEventListener('visibilitychange', () => {
    if(document.visibilityState === 'visible') {
        console.log('Ejecutar la fn para reproducir el video');
    } else {
        console.log('Pausa el video');
    }
});