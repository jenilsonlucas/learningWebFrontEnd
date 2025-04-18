let altura = 0;
let velocidade = 0;
const gravidadeBase = 0.5;
const amortecimento = 0.8;
const alturaMaxima = 410;
const velocidadeMinima = 0.5;
const bola = document.querySelector('.type');
const solo = document.querySelector('.solo');
const soloOp = document.querySelectorAll('.menu-solo li');
const menuSolo = document.querySelector('.menu-solo');
const menuBola = document.querySelector('.menu-bola');
const bolaOp = document.querySelectorAll('.menu-bola li');
const btnIniciar = document.querySelector('.iniciar');
const jogo = document.querySelector('.jogo');
let animacaoId;

soloOp.forEach(option => {
    option.addEventListener('click', () => {
        const texto = option.textContent.toLowerCase().trim();

        solo.classList.add(texto);

        menuSolo.classList.remove('active')
        mostrarMenuBola();
    })
});


function mostrarMenuBola() {
    menuBola.classList.add('active');

    bolaOp.forEach(option => {
        option.addEventListener('click', () => {
            const texto = option.textContent.toLowerCase().trim();

            bola.classList.add(texto);

            menuBola.classList.remove('active');

            iniciarJogo();

        })
    });
}

function iniciarJogo() {
    jogo.classList.remove('fechar');

    btnIniciar.addEventListener('click', () => {
        jogo.classList.add('fechar');

        jogoPrincipal();
    })
}

function jogoPrincipal() {

    if (bola.classList.contains('borracha') && solo.classList.contains('terra')) {

        function borrachaTerra() {

            velocidade += gravidadeBase;
            altura += velocidade;


            if (altura > alturaMaxima) {
                altura = alturaMaxima;
                velocidade = -velocidade * amortecimento;

                if (Math.abs(velocidade) < velocidadeMinima) {
                    velocidade = 0;
                    cancelAnimationFrame(animacaoId);
                    return;
                }
            }

            bola.style.top = altura + 'px';


            animacaoId = requestAnimationFrame(borrachaTerra);
        }

        animacaoId = requestAnimationFrame(borrachaTerra);

    }

    if (bola.classList.contains('borracha') && solo.classList.contains('borracha')) {
        function borrachaTerra() {

            velocidade += gravidadeBase;
            altura += velocidade;


            if (altura > alturaMaxima) {
                altura = alturaMaxima;
                velocidade = -velocidade * amortecimento;

                if (Math.abs(velocidade) < velocidadeMinima) {
                    velocidade = 0;
                    cancelAnimationFrame(animacaoId);
                    return;
                }
            }

            bola.style.top = altura + 'px';


            animacaoId = requestAnimationFrame(borrachaTerra);
        }

        animacaoId = requestAnimationFrame(borrachaTerra);

    }

    if (bola.classList.contains('borracha') && solo.classList.contains('mar')) {
        function borrachaTerra() {

            velocidade += gravidadeBase;
            altura += velocidade;


            if (altura > 800) {
                velocidade = 0;
                cancelAnimationFrame(animacaoId);
                return;
            }

            bola.style.top = altura + 'px';


            animacaoId = requestAnimationFrame(borrachaTerra);
        }

        animacaoId = requestAnimationFrame(borrachaTerra);

    }

    if (bola.classList.contains('metal') && solo.classList.contains('terra')) {
        function borrachaTerra() {

            velocidade += gravidadeBase;
            altura += velocidade;


            if (altura > alturaMaxima) {
                velocidade = 0;
                cancelAnimationFrame(animacaoId);
                return;
            }

            bola.style.top = altura + 'px';


            animacaoId = requestAnimationFrame(borrachaTerra);
        }

        animacaoId = requestAnimationFrame(borrachaTerra);

    }

    if (bola.classList.contains('metal') && solo.classList.contains('borracha')) {
        function borrachaTerra() {

            velocidade += gravidadeBase;
            altura += velocidade;


            if (altura > alturaMaxima) {
                altura = alturaMaxima;
                velocidade = -velocidade * amortecimento;

                if (Math.abs(velocidade) < velocidadeMinima) {
                    velocidade = 0;
                    cancelAnimationFrame(animacaoId);
                    return;
                }
            }

            bola.style.top = altura + 'px';


            animacaoId = requestAnimationFrame(borrachaTerra);
        }

        animacaoId = requestAnimationFrame(borrachaTerra);

    }

    if (bola.classList.contains('metal') && solo.classList.contains('mar')) {
        function borrachaTerra() {

            velocidade += gravidadeBase;
            altura += velocidade;


            if (altura > 800) {
                velocidade = 0;
                cancelAnimationFrame(animacaoId);
                return;
            }

            bola.style.top = altura + 'px';


            animacaoId = requestAnimationFrame(borrachaTerra);
        }

        animacaoId = requestAnimationFrame(borrachaTerra);

    }

    if (bola.classList.contains('vidro') && solo.classList.contains('terra')) {
        function borrachaTerra() {

            velocidade += gravidadeBase;
            altura += velocidade;


            if (altura > alturaMaxima) {
                velocidade = 0;
                cancelAnimationFrame(animacaoId);
                bola.classList.add('partido');
                return;
            }

            bola.style.top = altura + 'px';


            animacaoId = requestAnimationFrame(borrachaTerra);
        }

        animacaoId = requestAnimationFrame(borrachaTerra);


    }


    if (bola.classList.contains('vidro') && solo.classList.contains('borracha')) {
        function borrachaTerra() {

            velocidade += gravidadeBase;
            altura += velocidade;


            if (altura > alturaMaxima) {
                velocidade = 0;
                cancelAnimationFrame(animacaoId);
                bola.classList.add('partido');
                return;
            }

            bola.style.top = altura + 'px';


            animacaoId = requestAnimationFrame(borrachaTerra);
        }

        animacaoId = requestAnimationFrame(borrachaTerra);


    }

    if (bola.classList.contains('vidro') && solo.classList.contains('mar')) {
        function borrachaTerra() {

            velocidade += gravidadeBase;
            altura += velocidade;


            if (altura > 800) {
                velocidade = 0;
                cancelAnimationFrame(animacaoId);
                return;
            }

            bola.style.top = altura + 'px';


            animacaoId = requestAnimationFrame(borrachaTerra);
        }

        animacaoId = requestAnimationFrame(borrachaTerra);

    }
}
