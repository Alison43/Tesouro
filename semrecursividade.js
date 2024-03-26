// Função para manipular a interação do usuário com as ilhas
function algo(event) {
    if(confirmacao === true){
        let ilha = event.currentTarget.innerText;
        titulo.innerText = ilha;
        let nomeIlha = ilha;
        
        // Percorrendo as ilhas
        for(let i = 0; i < arrayIlha.length; i++){
            // Verificando se a ilha é a mesma definida na tag
            if (nomeIlha === arrayIlha[i]) {
                // Atribuindo as ilhas à tag <p>
                escolha1.innerText = caminhoilhas[i][1];
                escolha2.innerText = caminhoilhas[i][2];
                pergunta.innerText = arrayPerguntas[i];
    
                // Alterando imagem
                let imagem = document.querySelector('.trocailha');
                const arrayImagens = ["Imagens/Ilha dos Piratas.png", "Imagens/Ilha dos Mortos.png", "Imagens/Ilha do Tesouro.png", "Imagens/Baía do Naufrágio.png", "Imagens/Enseada dos Contrabandistas.png", "Imagens/Ilha dos Amotinas.png", "Imagens/Morro do Mosquete.png"];
                imagem.setAttribute('src', arrayImagens[i]);

                a = i;
                confirmacao = false;
            }
        }
    }
}