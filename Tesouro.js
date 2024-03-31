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
    if(respostaUsuario.includes(arrayResposta[a])) {
        confirmacao = true;
    } 
    if(a == 4){
        if(respostaUsuario.includes('pcdob')){
        confirmacao = true;
        }
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
const arrayImagens = [  "Imagens/Ilha dos Piratas.png", //0
                        "Imagens/Ilha dos Mortos.png", //1
                        "Imagens/Baleia.png", //2
                        "Imagens/Baía do Naufrágio.png", //3
                        "Imagens/Enseada dos Contrabandistas.png", //4
                        "Imagens/Ilha dos Amotinas.png", //5
                        "Imagens/Morro do Mosquete.png"];//6

// Função para manipular a interação do usuário com as ilhas (Recursiva)
function algo(event, i = 0) {
    if(confirmacao === true){
        let ilha = event.currentTarget.innerText;
        titulo.innerText = ilha;
        let nomeIlha = ilha;

        
        // Verificando se a ilha é a mesma definida na tag
        if (nomeIlha === arrayIlha[i]) {

            // Atribuindo as ilhas à tag <p>
            if (nomeIlha === 'Ilha do Tesouro') {
                titulo.innerText = "Baleia"
                escolha1.innerText = "Caminho Esquerdo";
                escolha2.innerText = "Caminho Direito";
                pergunta.innerText = arrayPerguntas[i];
            }else{
                escolha1.innerText = caminhoilhas[i][1];
                escolha2.innerText = caminhoilhas[i][2];
                pergunta.innerText = arrayPerguntas[i];
            }


            imagem.setAttribute('src', arrayImagens[i]);

            a = i;
            confirmacao = false;
            if(confirmacao === false) {
                cadeado.innerText = '❌';
            } 
        }

        if(nomeIlha === "Caminho Direito" || nomeIlha === 'Caminho Esquerdo') {
            const tela1 = document.querySelector('.tela');
            const tela2 = document.querySelector('.dnone');
            tela1.style.display = "none"
            tela2.style.display = "flex"
        }
    }
    
        // Incrementando o índice para avançar para a próxima ilha
        i++;

        // Se ainda houver ilhas para percorrer, chamamos a função novamente
        if (i < arrayIlha.length) {
            algo(event, i);
        }
}

// Adicionando evento de clique para cada escolha
escolhas.forEach((item) => {
    item.addEventListener('click', algo);
});

// Arrays de perguntas e respostas
const arrayPerguntas = ['Qual a cor da laranja?', 'Qual é a primeira coisa que um homem coloca em sua esposa quando se casam?', 'O que passa pela mão da mulher mole, e depois fica duro?', 'Por que o kuririn não gosta de IPhone ?', 'Qual o computador mais comunista que existe?', 'Por que a Inglaterra não pode jogar xadrez?','O que tem 50 pernas mais não anda?'];

const arrayResposta = ['laranja', 'O anel', 'esmalte', 'android', 'pc do b', 'rainha', '25 cadeirantes'];