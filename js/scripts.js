const mario = document.querySelector('.mario') ;/*  pegando a img mario lá do html */
const pipe = document.querySelector('.pipe');
const clouds = document.querySelector('.clouds');
const gameOver = document.querySelector('.game-over');

const jump = () =>{/*  função de pular */
    
    mario.classList.add('jump');/*  adicionando a classe jump na img do mario */

    
    setTimeout(() => {

        mario.classList.remove('jump');
    },500)
}

/*  botão play, quando clicar refresh na pagina */
gameOver.addEventListener("click", () => {
    location.reload();
})

const loop =  setInterval(() => {

    const pipePosition = pipe.offsetLeft;/*  pega o valor do left */
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px','');/* pegando o estilo que foi computado na img do mario */
    const cloudsPosition = window.getComputedStyle(clouds).left;
    

    if (pipePosition <= 80 && pipePosition > 0 && marioPosition < 70) {/* verifica se o mario encostou no tubo */
        
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;
        
        mario.src = './imgs/mario-lose.png';
        mario.style.width = '55px';
        mario.style.marginLeft = '35px'

        clouds.style.animation = 'none';
        clouds.style.left = `${cloudsPosition}`;

        gameOver.style.display = 'flex';

        clearInterval(loop)
    }
}, 10)  


document.addEventListener('keydown', jump);/*  add um escutador de evento para quando pressionar uma tecla chamar a função jump */