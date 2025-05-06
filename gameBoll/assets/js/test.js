function jogoPrincipal() {
    const bolaPropriedades = bolas[bola.classList[1]];
    const soloPropriedades = solos[solo.classList[1]];
    const volume = 0.1;
    const massa = bolaPropriedades.densidade * volume;
    const comportamento = calcularComportamento(bolaPropriedades, soloPropriedades, massa);

    let altura = 0;
    let velocidade = 2;
    const amortecimento = 0.8;
    const alturaMaxima = 410;
    const velocidadeMinima = 0.5;

    function animar() {
        if (comportamento === 'Afunda') {
            // Fase de queda até o chão
            if (altura < alturaMaxima) {
                altura += velocidade;
            } 
            // Fase de afundamento após tocar o solo
            else {
                altura += 1; // afunda lentamente
                bola.style.top = altura + 'px';

                if (altura >= alturaMaxima + 50) {
                    bola.style.opacity = 0;
                    console.log('Afundou.');
                    cancelAnimationFrame(animacaoId);
                    return;
                }
            }
        } else {
            // Física normal: quicar, parar, quebrar
            altura += velocidade;

            if (altura >= alturaMaxima) {
                altura = alturaMaxima;
                velocidade = -velocidade * amortecimento;

                if (Math.abs(velocidade) < velocidadeMinima) {
                    console.log(`Comportamento final: ${comportamento}`);
                    cancelAnimationFrame(animacaoId);
                    return;
                }
            } else {
                velocidade += 0.5; // aceleração gravitacional
            }
        }

        bola.style.top = altura + 'px';
        animacaoId = requestAnimationFrame(animar);
    }

    animar();
}
