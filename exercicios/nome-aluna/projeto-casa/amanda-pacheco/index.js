const secButtons = document.getElementById('sec-buttons');
const secCards = document.getElementById('sec-cards')
const main = document.querySelector('main')
main.insertAdjacentHTML('beforebegin', '<h1>Escolha um Digimon!</h1>');
// beforebegin - antes do elemento
// afterbegin - Dentro do elemento, antes de seu primeiro filho (childNode)
// beforeend - Dentro do elemento, após seu último filho (childNode) 
// afterend - Após o elemento.

function createCards(elemento) {
    return `
        <div class="card">
        <img class="img-card"src= ${elemento.img} alt="imagem do digimon">
        <h2 class= "title">${elemento.name}</h2>
        <h3 class= "subtitle">${elemento.level}</h3>
        </div> `
}
async function getDigimons() {
    try {
        const response = await fetch(`https://digimon-api.vercel.app/api/digimon`)
        const dado = await response.json()
        dado.map((digimon) => {
            const button = document.createElement('button');
            button.innerText = digimon.name;
            secButtons.appendChild(button);

            button.addEventListener('click', () => {
                dado.map((digimon) => {
                    if (button.innerText === digimon.name) {
                        secCards.innerHTML = createCards(digimon);
                    }
                });
            });
        });
    }
    catch (err) {
        console.error("Capturou um erro: ", err)
    }
}
getDigimons()