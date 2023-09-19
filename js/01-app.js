const notificarBtn = document.querySelector('#notificar');

notificarBtn.addEventListener('click', () => {
    Notification
        .requestPermission()
        .then( resultado => {
            console.log(`Resultado: ${resultado}`);
        })
});

const verNotificacion = document.querySelector('#verNotificacion');

verNotificacion.addEventListener('click', () => {
    if(Notification.permission === 'granted') {
        const notificacion = new Notification('Esta es la notificación!', {
            icon: 'img/ccj.png',
            body: 'Código con Manu :)'
        });

        notificacion.onclick = function () {
            window.open('https://www.codigoconjuan.com');
        }
    }
});