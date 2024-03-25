let escolhas = document.querySelectorAll('.escolhas a');

console.log(escolhas);

escolhas.forEach((item) => {
    item.addEventListener('click', clique);
});

function clique(event) {
    event.preventDefault();
    console.log(event.target.innerText);
}
