let escolha1 = document.querySelector('.escolha1 p');
let escolha2 = document.querySelector('.escolha2 p');


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
    [4, arrayIlha[6], arrayIlha[3]],
    [5, arrayIlha[4], arrayIlha[1]],
    [6, arrayIlha[0], arrayIlha[5]],
]
// console.log(caminhoilhas.ilhaa1);

const textoIlha = document.querySelector('.textotroca');



// function algumacoisa() {
    let nomeIlha = textoIlha.innerText;
    for(let i = 0; i < arrayIlha.length; i++){
            if (nomeIlha === arrayIlha[i]) {
                console.log(arrayIlha[i]);
    
                escolha1.innerText = arrayIlha[3]
                escolha2.innerText = arrayIlha[6]
                
            }
    }

// }


for (const chave in caminhoilhas) {
    // console.log(caminhoilhas[chave]);
}

// Object.keys(caminhoilhas).forEach((ilha) => { 
//     console.log(typeof ilha);
// })
    
//     const ilhasVizinhas = caminhoilhas[ilha];
  
//     ilhasVizinhas.forEach(vizinha => {
//       console.log(`A ilha ${ilha} tem como vizinha a ilha ${vizinha}`);
//     });
//   });