const botonEntrar =
    document.getElementById("botonEntrar");

const segundaPantalla =
    document.getElementById("segundaPantalla");

const botonSiguiente =
    document.getElementById("botonSiguiente");


/* ================================= */
/* AUDIOS */
/* ================================= */

const audioMotor =
    new Audio("sonidos/audio motor.mpeg");

const audioSorpresa =
    new Audio("sonidos/audio sorpresa.mpeg");


/* Configuración */

audioMotor.volume = 0.8;
audioMotor.loop = false;

audioSorpresa.volume = 0.5;
audioSorpresa.loop = true;


/* ================================= */
/* COMENZAR LA CARRERA */
/* ================================= */

botonEntrar.addEventListener(
    "click",
    function () {

        botonEntrar.innerHTML =
            "🏎️ ¡VAMOS! 🏎️";

        /*
        Primero comienza el sonido
        del motor.
        */

        audioMotor.currentTime = 0;

        audioMotor.play()
            .catch(function (error) {

                console.log(
                    "No se pudo reproducir el audio del motor:",
                    error
                );

            });


        /*
        Cuando termine el motor,
        comienza automáticamente
        el audio de la sorpresa.
        */

        audioMotor.addEventListener(
            "ended",
            function () {

                audioSorpresa.currentTime = 0;

                audioSorpresa.play()
                    .catch(function (error) {

                        console.log(
                            "No se pudo reproducir el audio de la sorpresa:",
                            error
                        );

                    });

            },
            { once: true }
        );


        /*
        Después de medio segundo,
        vamos a la pantalla de los carritos.
        */

        setTimeout(function () {

            segundaPantalla.scrollIntoView({
                behavior: "smooth"
            });

        }, 500);

    }
);


/* ================================= */
/* TERCERA PANTALLA */
/* ================================= */

const terceraPantalla =
    document.getElementById("terceraPantalla");


/* ================================= */
/* BOTÓN SIGUIENTE */
/* ================================= */

botonSiguiente.addEventListener(
    "click",
    function () {

        terceraPantalla.scrollIntoView({
            behavior: "smooth"
        });

    }
);
/* ================================= */
/* ABRIR CARTA */
/* ================================= */

const botonAbrirCarta =
    document.getElementById("botonAbrirCarta");

const sobreCerrado =
    document.getElementById("sobreCerrado");

const cartaAbierta =
    document.getElementById("cartaAbierta");


botonAbrirCarta.addEventListener(
    "click",
    function () {

        sobreCerrado.classList.add(
            "ocultar"
        );

        cartaAbierta.classList.add(
            "mostrar"
        );

    }
);
/* ================================= */
/* VOLVER AL INICIO */
/* ================================= */

const botonVolver =
    document.getElementById("botonVolver");

botonVolver.addEventListener(
    "click",
    function () {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }
);