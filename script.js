// carrossel automatico

let count = 1;

document.getElementById("radio1").checked = true;

setInterval( function(){
    nextImage();
}, 6000)

function nextImage(){
    count++;
    if(count > 4){
        count = 1;
    }

    document.getElementById("radio"+count).checked = true;
}

// janela do card ###############

const modal = document.getElementById('modal');
const modalImg = document.getElementById('modal-img');
const modalTitle = document.getElementById('modal-title');
const modalDesc = document.getElementById('modal-description');
const closeModal = document.getElementById('close-modal');

document.querySelectorAll('.card-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault(); 
        modal.style.display = 'flex';
        modalImg.src = this.dataset.img;
        modalTitle.textContent = this.dataset.title;
        modalDesc.textContent = this.dataset.description;
    });
});

closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
});

window.addEventListener('click', function(e) {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});

// modo foto e ilustracao ###########
const ilustracoes = ["images/foto-bg.JPG", "images/foto-bg.JPG", "images/foto-bg.JPG", "images/foto-bg.JPG"];
const fotografias = ["images/artist.jpg", "images/artist.jpg", "images/artist.jpg", "images/artist.jpg"];

const imagensIlustracaoCards = [
    "images/ilust/2.JPG", "images/ilust/4.JPG", "images/ilust/6.JPG", "images/ilust/8.JPG",
    "images/ilust/10.JPG", "images/ilust/12.JPG", "images/ilust/14.JPG", "images/ilust/16.JPG",
    "images/ilust/18.JPG", "images/ilust/20.JPG", "images/ilust/22.JPG", "images/ilust/24.JPG",
    "images/ilust/26.JPG", "images/ilust/28.JPG", "images/ilust/30.JPG", "images/ilust/32.JPG"
];

const imagensFotografiaCards = [
    "images/foto/2.JPG", "images/foto/4.JPG", "images/foto/6.JPG", "images/foto/8.JPG",
    "images/foto/10.JPG", "images/foto/12.JPG", "images/foto/14.JPG", "images/foto/16.JPG",
    "images/foto/18.JPG", "images/foto/20.JPG", "images/foto/22.JPG", "images/foto/24.JPG",
    "images/foto/26.JPG", "images/foto/28.JPG", "images/foto/30.JPG", "images/foto/32.JPG"
];


const botaoModo = document.getElementById('artmode-toggle');
let modoIlustracao = true;

botaoModo.addEventListener('click', () => {
    modoIlustracao = !modoIlustracao;

    document.body.classList.toggle('foto-mode', !modoIlustracao);
    document.querySelector('nav').classList.toggle('foto-mode', !modoIlustracao);
    document.querySelector('.obras').classList.toggle('foto-mode', !modoIlustracao);
    const imagens = document.querySelectorAll(".imgs-slide");

    imagens.forEach((img, i) => {
        img.src = (modoIlustracao) ? ilustracoes[i] : fotografias[i];

    });
    
    const imgsCard = document.querySelectorAll(".card-img");
    const linksCard = document.querySelectorAll(".card-link");
    imgsCard.forEach((img, i) => {
        const novaSrc = modoIlustracao ? imagensIlustracaoCards[i] : imagensFotografiaCards[i];
        img.src = novaSrc;
        if (linksCard[i]) {
            linksCard[i].dataset.img = novaSrc; // atualiza imagem que aparece na modal
        }
    });

    botaoModo.textContent = modoIlustracao ? 'Modo Fotografia' : 'Modo Ilustração';
});
