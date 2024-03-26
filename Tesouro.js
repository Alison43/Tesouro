let escolha1 = document.querySelector('.escolha1');
let escolha2 = document.querySelector('.escolha2');
const escolhas = document.querySelectorAll('.escolhas div[class^="escolha"]');
const titulo = document.querySelector('.textotroca')
let a = 0;
const pergunta = document.querySelector('#pergunta');

function capturarValor() {
    let resposta = document.querySelector('#resposta');
    let respostaUsuario = resposta.value
    console.log(respostaUsuario)
    if(respostaUsuario === arrayResposta[a]){
        confirmacao = true
    }
    resposta.value = "";
    console.log(a)
}

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

let confirmacao = false;

function algo(event) {
    if(confirmacao === true){
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

                pergunta.innerText = arrayPerguntas[i];
    
                // Alterar imagem
                let imagem = document.querySelector('.trocailha');
    
                const arrayImagens = ["Imagens/Ilha dos Piratas.png", "Imagens/Ilha dos Mortos.png", "Imagens/Ilha do Tesouro.png", "Imagens/Baía do Naufrágio.png", "Imagens/Enseada dos Contrabandistas.png", "Imagens/Ilha dos Amotinas.png", "Imagens/Morro do Mosquete.png"]
                imagem.setAttribute('src', arrayImagens[i]);

                a = i;
                confirmacao = false;

            }
        }
    }
}

escolhas.forEach((item) => {
    item.addEventListener('click', algo);
});

const arrayPerguntas = ['Qual a cor da laranja?', 'Qual a cor da uva?', 'Você ganhou', 'Qual a cor da uva?', 'Qual a cor da uva?', 'Qual a cor da uva?', 'Qual a cor da uva?'];

const arrayResposta = ['laranja', 'laranja', '', 'laranja', 'laranja', 'laranja', 'laranja'];
