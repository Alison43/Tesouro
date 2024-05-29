// Selecionando elementos HTML
let escolha1 = document.querySelector('.escolha1');
let escolha2 = document.querySelector('.escolha2');
const escolhas = document.querySelectorAll('.escolhas div[class^="escolha"]');
const titulo = document.querySelector('.TextoTroca');
const pergunta = document.querySelector('#Pergunta');
const cadeado = document.querySelector('.Passe p');
let CaminhoPercorrido = document.querySelector('.dp1');
let CaminhoPercorrido2 = document.querySelector('.dp2');
let CaminhoPercorrido3 = document.querySelector('.dp3');

let Percorrido = [" -"];

Percorrido.push("Ilha dos Piratas");

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

// Função para exibir um relatório do caminho percorrido pelo jogador
function Relatorio() {
    // Seleciona o elemento HTML com a classe 'dnone4' e o armazena em Rnone
    const Rnone = document.querySelector('.DE4');
    // Torna o elemento selecionado visível alterando seu estilo para "flex"
    Rnone.style.display = "flex";

    // Itera sobre o array Percorrido para exibir o relatório do caminho percorrido
    for(i = 1 ; i < Percorrido.length; i++){
        // Verifica se é a primeira iteração do loop
        if(i == 1){
            // Se for a primeira iteração, adiciona o número da ilha e o nome da ilha ao elemento CaminhoPercorrido
            CaminhoPercorrido.innerText = CaminhoPercorrido.innerText + i + Percorrido[0];
            CaminhoPercorrido.innerText = CaminhoPercorrido.innerText + Percorrido[i];
            // Adiciona uma quebra de linha ao final do texto
            CaminhoPercorrido.innerText = CaminhoPercorrido.innerText + '\n';
        } else {
            // Se não for a primeira iteração, adiciona o número da ilha e o nome da ilha ao elemento CaminhoPercorrido
            CaminhoPercorrido.innerText = CaminhoPercorrido.innerText + i + Percorrido[0];
            CaminhoPercorrido.innerText = CaminhoPercorrido.innerText + Percorrido[i];
            // Adiciona uma quebra de linha ao final do texto
            CaminhoPercorrido.innerText = CaminhoPercorrido.innerText + '\n';
        }
    }
    // Desativa o botão com o ID "desaparecer"
    document.getElementById("desaparecer").disabled = true;
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
let imagem = document.querySelector('.TrocaIlha');
const arrayImagens = [  "Imagens/Ilha dos Piratas.png", //0
                        "Imagens/Ilha dos Mortos.png", //1
                        "Imagens/Baleia.png", //2
                        "Imagens/Baía do Naufrágio.png", //3
                        "Imagens/Enseada dos Contrabandistas.png", //4
                        "Imagens/Ilha dos Amotinas.png", //5
                        "Imagens/Morro do Mosquete.png"];//6

// Função para manipular a interação do usuário com as ilhas (Recursiva)
function ManipularIteracao(event, i = 0) {
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
                Percorrido.push("Baleia");
            }else{
                escolha1.innerText = caminhoilhas[i][1];
                escolha2.innerText = caminhoilhas[i][2];
                pergunta.innerText = arrayPerguntas[i];
                Percorrido.push(nomeIlha);
            }

            imagem.setAttribute('src', arrayImagens[i]);

            a = i;
            confirmacao = false;
            if(confirmacao === false) {
                cadeado.innerText = '❌';
            } 
        }

        if(nomeIlha === "Caminho Direito" || nomeIlha === 'Caminho Esquerdo') {
            const tela1 = document.querySelector('.Tela');
            const tela2 = document.querySelector('.DisplayEscondido');
            tela1.style.display = "none"
            tela2.style.display = "flex"

            if(nomeIlha == "Caminho Direito" && Percorrido[Percorrido.length - 1] != "Caminho Direito"){
                Percorrido.push("Caminho Direito");
            }
            if(nomeIlha == "Caminho Esquerdo" && Percorrido[Percorrido.length - 1] != "Caminho Esquerdo"){
                Percorrido.push("Caminho Esquerdo");
            }
            
        }
    }
    
        // Incrementando o índice para avançar para a próxima ilha
        i++;

        // Se ainda houver ilhas para percorrer, chamamos a função novamente
        if (i < arrayIlha.length) {
            ManipularIteracao(event, i);
        }
}

// Adicionando evento de clique para cada escolha
escolhas.forEach((item) => {
    item.addEventListener('click', ManipularIteracao);
});

// Arrays de perguntas e respostas
const arrayPerguntas = ['Qual a cor da laranja?', 'Qual é a primeira coisa que um homem coloca em sua esposa quando se casam?', 'O que passa pela mão da mulher mole, e depois fica duro?', 'Por que o kuririn não gosta de IPhone ?', 'Qual o computador mais comunista que existe?', 'Por que a Inglaterra não pode jogar xadrez?','O que tem 50 pernas mais não anda?'];

const arrayResposta = ['laranja', 'anel', 'esmalte', 'android', 'pc do b', 'rainha', '25 cadeirantes'];