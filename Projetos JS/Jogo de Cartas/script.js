function montarBaralho() {
    const naipes = ['Paus', 'Ouros', 'Copas', 'Espadas'];
    const valores = ['Ás', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Valete', 'Rainha', 'Rei'];
    const baralho = [];

    for(const naipe of naipes){
        for(const value of valores){
            baralho.push([naipe, value]);
        }
    }

    console.log(baralho);
}

function embaralharBaralho() {
    const naipes = ['Paus', 'Ouros', 'Copas', 'Espadas'];
    const valores = ['Ás', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Valete', 'Rainha', 'Rei'];
    const baralho = [];

    for(const naipe of naipes){
        for(const value of valores){
            baralho.push([naipe, value]);
        }
    }

    const cartaAleatória = Math.floor(Math.random() * baralho.length);

    console.log(baralho[cartaAleatória]);
}

montarBaralho();
embaralharBaralho();