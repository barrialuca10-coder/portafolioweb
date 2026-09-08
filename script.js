document.addEventListener('DOMContentLoaded', () => {
    const formulario = document.getElementById('contactForm');

    if (!formulario) {
        console.error('No se encontró el elemento #contactForm');
        return;
    }

    formulario.addEventListener('submit', async (e) => {
        e.preventDefault();

        const nombre = document.getElementById('nombre').value;
        const asunto = document.getElementById('asunto').value;
        const mensaje = document.getElementById('mensaje').value;

        try {
            const respuesta = await fetch('http://localhost:3000/api/contacto', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ nombre, asunto, mensaje })
            });

            const resultado = await respuesta.json();

            if (respuesta.ok) {
                alert('¡Mensaje enviado con éxito!');
                formulario.reset();
            } else {
                alert('Error: ' + resultado.error);
            }
        } catch (error) {
            console.error('Error al conectar con el servidor:', error);
            alert('No se pudo conectar con el servidor backend.');
        }
    });
});