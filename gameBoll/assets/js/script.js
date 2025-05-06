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

    btnIniciar.onclick = () => {
        jogo.classList.add('fechar');
        jogoPrincipal();
    };
}

function jogoPrincipal() {

    function calcularVelocidadeQueda(massa, resistenciaDoAr) {
        const gravidade = 9.8;
        const velocidade = Math.sqrt((2 * massa * gravidade) / resistenciaDoAr);
        return velocidade.toFixed(2);
    }

    function calcularComportamento(bola, solo, massa) {
        const E_b = bola.elasticidade;
        const C_r = bola.coefRestitucao;
        const ρ_b = bola.densidade;
        const E_s = solo.elasticidade;
        const D_s = solo.dureza;
    
        if (bola.densidade > 2.0 && massa > 3 && solo.dureza < 1) {
            return 'Afunda';
        }
    
        if (massa > 0.4 && bola.elasticidade < 0.3 && solo.dureza >= 1.5) { 
            return 'Quebra';
        }
    
        if (bola.coefRestitucao > 0.10 && massa < 4 && ((bola.elasticidade + solo.elasticidade) >= 0.10)) { 
            return 'Quica';
        }

        return 'Comportamento Indefinido';
    }
    
    const bolas = {
        vidro: { 
            elasticidade: 0.1,  // Aumentada de 0.2 para permitir mais quiques
            coefRestitucao: 0.3, // Aumentada de 0.4
            densidade: 3.5 
        },
        metal: { 
            elasticidade: 0.3, 
            coefRestitucao: 0.6, // Aumentada de 0.2
            densidade: 7.8 
        },
        borracha: { 
            elasticidade: 0.9,  // Aumentada de 0.8
            coefRestitucao: 0.95, // Aumentada de 0.9
            densidade: 1.2 
        }
    };
    
    const solos = {
        borracha: { 
            elasticidade: 0.85, // Aumentada de 0.8
            dureza: 1.8,  // Reduzida de 2.0
        },
        mar: { 
            elasticidade: 0.7,  // Aumentada de 0.6
            dureza: 0.2,   // Aumentada de 0.1
        },
        terra: { 
            elasticidade: 0.3,  // Aumentada de 0.5
            dureza: 1.5,   // Reduzida de 2.0
        }
    };

    const bolaPropriedades = bolas[bola.classList[1]];
    const soloPropriedades = solos[solo.classList[1]];

    console.log(solo.classList[1], bola.classList[1]);
    
    const volume = 2;
    const massa = bolaPropriedades.densidade * volume;
    console.log(massa);
    
    const comportamento = calcularComportamento(bolaPropriedades, soloPropriedades, massa);
    

    let altura = 0;
    let velocidade = parseFloat(calcularVelocidadeQueda(massa, 0.47));
    const amortecimento = 0.8;
    const alturaMaxima = 410;
    const velocidadeMinima = 0.5;

    function animar() {
        altura += velocidade;
        bola.style.top = altura + 'px';
        
        if (altura >= alturaMaxima) {
            altura = alturaMaxima;
            if (comportamento === 'Quica') {
                velocidade = -velocidade * amortecimento * (bolaPropriedades.elasticidade + soloPropriedades.elasticidade) / 2;
                if (Math.abs(velocidade) < velocidadeMinima) {
                    velocidade = 0;
                    console.log('Parou de quicar');
                    return;
                }
            } else if (comportamento === 'Quebra') {
                cancelAnimationFrame(animacaoId);
                bola.classList.add('partido');
                return;
            }else if(comportamento === 'Afunda'){
                velocidade += 0.5; // simula afundar acelerando para baixo
                altura += velocidade;
                if (altura >= alturaMaxima + 50) {
                    bola.style.opacity = 0;
                    cancelAnimationFrame(animacaoId);
                }
            }else {
                velocidade = 0;
                return;
            }
        } else {
            velocidade += 0.5; // aceleração simulada
        }

        animacaoId = requestAnimationFrame(animar);
    }

    animar();
}






