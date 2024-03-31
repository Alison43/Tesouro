# Projeto - Mapa do Tesouro
### Integrantes: Alison Leal, Breno Nogueira, Davi Sousa Alves, Eduardo Soares
### Objetivo:
O objetivo do Mapa do Tesouro é guiar os aventureiros em uma jornada através de seis ilhas misteriosas, cada uma guardando um enigma desafiador. O caminho para o tesouro está oculto entre essas ilhas, e somente desvendando corretamente os enigmas é possível avançar para a próxima etapa da jornada.
### Regras:
1. Cada ilha apresenta um enigma que deve ser solucionado para prosseguir.
2. Se o enigma não for resolvido corretamente, o aventureiro ficará preso na ilha até encontrar a resposta correta.
3. Ao resolver o enigma, o aventureiro receberá opções para avançar para a próxima ilha, revelando assim o caminho para o tesouro.
4. A jornada requer sagacidade, raciocínio lógico e criatividade para desvendar os mistérios de cada ilha.
### Como funciona
O código JavaScript cria uma experiência interativa em uma página da web, permitindo aos usuários explorar e interagir com ilhas fictícias. Ele começa selecionando elementos HTML relevantes usando document.querySelector() e inicializa variáveis como um contador e uma flag de confirmação para verificar a resposta do usuário. Duas funções de manipulação de eventos, enviarFormulario() e capturarValor(), processam as respostas do usuário, sendo a primeira acionada pela tecla Enter. Os dados das ilhas são representados por dois arrays: arrayIlha para os nomes das ilhas e caminhoilhas para suas conexões. A função algo() atualiza dinamicamente o conteúdo da página conforme o usuário seleciona uma ilha, e eventos de clique são adicionados a cada opção de escolha usando um loop forEach(). Dois arrays, arrayPerguntas e arrayResposta, armazenam perguntas e respostas correspondentes. Em suma, o código demonstra técnicas para manipular o DOM e responder às interações do usuário, destacando o uso do JavaScript para criar experiências envolventes em navegadores web.
### Conclusão:
O Mapa do Tesouro oferece uma jornada repleta de desafios intelectuais e emocionais. Somente os mais astutos e perseverantes serão capazes de desvendar os segredos das ilhas e alcançar o tão cobiçado tesouro. Que a busca pelo conhecimento e pela aventura guie os passos dos destemidos exploradores rumo ao seu destino final.
### Referência 
O site é derivado do projeto CSunplugged Classic está disponível em:

(https://csunplugged.org/en/classic/)

Desenvolvido por Tim Bell, Ian H. Witten e Mike Fellows da University of Canterbury, Nova Zelândia.

Licenciado sob Creative Commons BY-NC-SA 4.0.
