// Selecionando elementos HTML
let escolha1 = document.querySelector('.escolha1');
let escolha2 = document.querySelector('.escolha2');
const escolhas = document.querySelectorAll('.escolhas div[class^="escolha"]');
const titulo = document.querySelector('.textotroca');
const pergunta = document.querySelector('#pergunta');
const cadeado = document.querySelector('.complemento p')

// Inicializando variáveis
let a = 0;
let confirmacao = false;


function enviarFormulario(event) {
    // Verifica se a tecla pressionada é "Enter" (código 13)
    if (event.keyCode === 13) {
        // Chama a função capturarValor() quando "Enter" é pressionado
        capturarValor();
    }
}

// Função para capturar a resposta do usuário
function capturarValor() {
    let resposta = document.querySelector('#resposta');
    let respostaUsuario = resposta.value.toLowerCase();
    if(respostaUsuario === arrayResposta[a]){
        confirmacao = true;
    }
    resposta.value = "";
    if(confirmacao === true) {
        cadeado.innerText = '✅';
    }
}

// Arrays de informações sobre as ilhas
const arrayIlha = ["Ilha dos Piratas", "Ilha dos Mortos", "Ilha do Tesouro", "Baía do Naufrágio", "Enseada dos Contrabandistas", "Ilha dos Amotinas", "Morro do Mosquete"];
const caminhoilhas = [
    [0 ,arrayIlha[3], arrayIlha[6]],
    [1 ,arrayIlha[6], arrayIlha[3]],
    [2],
    [3, arrayIlha[6], arrayIlha[1]],
    [4, arrayIlha[6], arrayIlha[2]],
    [5, arrayIlha[4], arrayIlha[1]],
    [6, arrayIlha[0], arrayIlha[5]]
];

// Alterando imagem
let imagem = document.querySelector('.trocailha');
const arrayImagens = [  "Imagens/Ilha dos Piratas.png", 
                        "Imagens/Ilha dos Mortos.png", 
                        "Imagens/Ilha do Tesouro.png", 
                        "Imagens/Baía do Naufrágio.png", 
                        "Imagens/Enseada dos Contrabandistas.png", 
                        "Imagens/Ilha dos Amotinas.png", 
                        "Imagens/Morro do Mosquete.png"];

// Função para manipular a interação do usuário com as ilhas (Recursiva)
function algo(event, i = 0) {
    if(confirmacao === true){
        let ilha = event.currentTarget.innerText;
        titulo.innerText = ilha;
        let nomeIlha = ilha;
        
        // Verificando se a ilha é a mesma definida na tag
        if (nomeIlha === arrayIlha[i]) {
            // Atribuindo as ilhas à tag <p>
            escolha1.innerText = caminhoilhas[i][1];
            escolha2.innerText = caminhoilhas[i][2];
            pergunta.innerText = arrayPerguntas[i];

    
            imagem.setAttribute('src', arrayImagens[i]);

            a = i;
            confirmacao = false;
            if(confirmacao === false) {
                cadeado.innerText = '❌';
            } 
        }

        // Incrementando o índice para avançar para a próxima ilha
        i++;

        // Se ainda houver ilhas para percorrer, chamamos a função novamente
        if (i < arrayIlha.length) {
            algo(event, i);
        }
    }
}


// Adicionando evento de clique para cada escolha
escolhas.forEach((item) => {
    item.addEventListener('click', algo);
});

// Arrays de perguntas e respostas
const arrayPerguntas = ['Qual a cor da laranja?', 'Qual a cor da uva?', 'Você ganhou', 'Qual a cor da uva?', 'Qual a cor da uva?', 'Qual a cor da uva?', 'Qual a cor da uva?'];
const arrayResposta = ['laranja', 'laranja', '', 'laranja', 'laranja', 'laranja', 'laranja'];