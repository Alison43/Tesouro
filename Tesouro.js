let escolhas = document.querySelectorAll('.escolhas a');

// console.log(escolhas);

escolhas.forEach((item) => {
    item.addEventListener('click', clique);
});


function clique(event) {
    event.preventDefault();
    let texto = event.target
    texto.innerText = ilhas.ilha1;
    console.log(texto);
}

// const ilhas = {
//     ilha1: "Ilha dos Piratas",
//     ilha2: "Ilha dos Mortos",
//     ilha3: "Ilha do Tesouro",
//     ilha4: "Baía do Naufrágio",
//     ilha5: "Enseada dos Contrabandistas",
//     ilha6: "Ilha dos Amotinas",
//     ilha7: "Morro do Mosquete"
// };

// const caminhoilhas = {
//     ilhaa1: [ilhas.ilha4, ilhas.ilha7],
//     ilhaa2 : [ilhas.ilha7, ilhas.ilha4],
//     ilhaa3 : [],
//     ilhaa4 : [ilhas.ilha7, ilhas.ilha2],
//     ilhaa5 : [ilhas.ilha1, ilhas.ilha3],
//     ilhaa6 : [ilhas.ilha5, ilhas.ilha2],
//     ilhaa7 : [ilhas.ilha1, ilhas.ilha6],
// }
// console.log(caminhoilhas.ilhaa1);

const arrayIlha = ["Ilha dos Piratas", "Ilha dos Mortos", "Ilha do Tesouro", "Baía do Naufrágio", "Enseada dos Contrabandistas", "Ilha dos Amotinas", "Morro do Mosquete"]
// console.log(arrayIlha[1])

const caminhoilhas = {
    ilhaa1: [arrayIlha[3], arrayIlha[6]],
    ilhaa2: [arrayIlha[6], arrayIlha[3]],
    ilhaa3: [],
    ilhaa4: [arrayIlha[6], arrayIlha[1]],
    ilhaa5: [arrayIlha[6], arrayIlha[3]],
    ilhaa6: [arrayIlha[4], arrayIlha[1]],
    ilhaa7: [arrayIlha[0], arrayIlha[5]],
}
// console.log(caminhoilhas.ilhaa1);

const textoIlha = document.querySelector('.textotroca');
let nomeIlha = textoIlha.innerText;

for(let i = 0; i < arrayIlha.length; i++){
    if (nomeIlha === arrayIlha[i]) {
        console.log(nomeIlha);
    } else {
        console.log("deu ruim");
    }
}


// Object.keys(caminhoilhas).forEach(ilha => {
    
//     const ilhasVizinhas = caminhoilhas[ilha];
  
//     ilhasVizinhas.forEach(vizinha => {
//       console.log(`A ilha ${ilha} tem como vizinha a ilha ${vizinha}`);
//     });
//   });