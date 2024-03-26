let escolha1 = document.querySelector('.escolha1');
let escolha2 = document.querySelector('.escolha2');
const escolhas = document.querySelectorAll('.escolhas div[class^="escolha"]');
const titulo = document.querySelector('.textotroca')

// function clique(event) {
//     event.preventDefault();
//     let texto = event.target
//     texto.innerText = ilhas.ilha1;
//     console.log(texto);
// }

const arrayIlha = ["Ilha dos Piratas", "Ilha dos Mortos", "Ilha do Tesouro", "Baía do Naufrágio", "Enseada dos Contrabandistas", "Ilha dos Amotinas", "Morro do Mosquete"]
// console.log(arrayIlha[1])

const caminhoilhas = [
    [0 ,arrayIlha[3], arrayIlha[6]],
    [1 ,arrayIlha[6], arrayIlha[3]],
    [2],
    [3, arrayIlha[6], arrayIlha[1]],
    [4, arrayIlha[6], arrayIlha[2]],
    [5, arrayIlha[4], arrayIlha[1]],
    [6, arrayIlha[0], arrayIlha[5]],
]
// console.log(caminhoilhas.ilhaa1);

const textoIlha = document.querySelector('.textotroca');


function algo(event) {
    let ilha = event.currentTarget.innerText
    console.log(ilha)
    titulo.innerText = ilha
    let nomeIlha = ilha;
    // percorre as ilhas
    for(let i = 0; i < arrayIlha.length; i++){
        // verifica se a ilha é a mesma definicia na tag
        if (nomeIlha === arrayIlha[i]) {
            // atribui as ilhas a tag <p>
            escolha1.innerText = caminhoilhas[i][1]
            escolha2.innerText = caminhoilhas[i][2]

            // Alterar imagem
            let imagem = document.querySelector('.trocailha');

            const arrayImagens = ["Imagens/Ilha dos Piratas.png", "Imagens/Ilha dos Mortos.png", "Imagens/Ilha do Tesouro.png", "Imagens/Baía do Naufrágio.png", "Imagens/Enseada dos Contrabandistas.png", "Imagens/Ilha dos Amotinas.png", "Imagens/Morro do Mosquete.png"]
            imagem.setAttribute('src', arrayImagens[i]);
        }
        
    }
}

escolhas.forEach((item) => {
    item.addEventListener('click', algo);
});


