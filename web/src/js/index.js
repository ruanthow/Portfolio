var sobreMimBox = document.querySelector(".sobreMimBox");
var isOpenBox = false;
var carroseul = document.querySelector(".carroseul-container");
let indexCarroseul = 0;
var navbar = document.querySelector(".nav");
var buttonCloseNavbar = document.querySelector(".buttonCloseNavbar");
var btnCarroseulItem = document.querySelectorAll(".btn-carroseul-item");
var navOptions = document.querySelector(".navOptions");
var buttonOpen = document.querySelector(".buttonOpen");
var allDivsCarroseul = document.querySelectorAll(".imgCarroseul");
var openMenu = document.querySelector(".openMenu");

//menu em mobile com 325px de largura 'refresh'
if(window.innerWidth <= 325){
    openMenu.classList.remove("col-8");
    openMenu.classList.add("col-7");
}


// configs de imagens para telas de diferentes tamanhos
window.addEventListener('resize', ()=>{
    var myWindow = window.innerWidth
    if(myWindow <= 430){
        allDivsCarroseul[0].src = "./src/assets/mobile-themusic.png"
        allDivsCarroseul[1].src = "./src/assets/mobile-locadrive.png"
        allDivsCarroseul[2].src = "./src/assets/mobile-spokebuds.png"
    }

    //menu em mobile com 325px de largura
    if(window.innerWidth <= 325){
        openMenu.classList.remove("col-8");
        openMenu.classList.add("col-7");
    }
})

if(window.innerWidth <= 440){
    allDivsCarroseul[0].src = "./src/assets/mobile-themusic.png"
    allDivsCarroseul[1].src = "./src/assets/mobile-locadrive.png"
    allDivsCarroseul[2].src = "./src/assets/mobile-spokebuds.png"
}
//


// estado inicial do botão do carroseul.
btnCarroseulItem[0].style.backgroundColor = "#ffffffd7";
//

// esconder e mostrar o texto do inicio da pagina 
function hideBoxMe(){
    if(isOpenBox){
        sobreMimBox.style.height = "0px";
        isOpenBox = false;
    }
    else{
        sobreMimBox.style.height = "14.5rem";
        isOpenBox = true;
        
    }
}
//


// função de mudar a cor do botão do carroseul e mudar a imagem.
btnCarroseulItem[0].addEventListener('click', (btn)=>{
    carroseul.scrollLeft = 0;
    btnCarroseulItem[0].style.backgroundColor = "#ffffffd7";
    btnCarroseulItem[1].style.backgroundColor = "#ffffff63";
    btnCarroseulItem[2].style.backgroundColor = "#ffffff63";
    indexCarroseul = 0
})
btnCarroseulItem[1].addEventListener('click', (btn)=>{
    carroseul.scrollLeft = carroseul.offsetWidth;
    btnCarroseulItem[0].style.backgroundColor = "#ffffff63";
    btnCarroseulItem[1].style.backgroundColor = "#ffffffd7";
    btnCarroseulItem[2].style.backgroundColor = "#ffffff63";
    indexCarroseul = 1
})
btnCarroseulItem[2].addEventListener('click', (btn)=>{
    carroseul.scrollLeft = carroseul.offsetWidth * 2
    btnCarroseulItem[0].style.backgroundColor = "#ffffff63";
    btnCarroseulItem[1].style.backgroundColor = "#ffffff63";
    btnCarroseulItem[2].style.backgroundColor = "#ffffffd7";
    indexCarroseul = 2
})

// função de mudar a cor do botão do carroseul e mudar a imagem automaticamente em 5seg.
setInterval(()=>{
    
    if(indexCarroseul == 0){
        carroseul.scrollLeft = 0;
        btnCarroseulItem[0].style.backgroundColor = "#ffffffd7";
        btnCarroseulItem[1].style.backgroundColor = "#ffffff63";
        btnCarroseulItem[2].style.backgroundColor = "#ffffff63";
        indexCarroseul++;
    }
    else if(indexCarroseul == 1){
        carroseul.scrollLeft = carroseul.offsetWidth;
        btnCarroseulItem[0].style.backgroundColor = "#ffffff63";
        btnCarroseulItem[1].style.backgroundColor = "#ffffffd7";
        btnCarroseulItem[2].style.backgroundColor = "#ffffff63";
        indexCarroseul++
    }
    else{
        carroseul.scrollLeft = carroseul.offsetWidth * 2
        btnCarroseulItem[0].style.backgroundColor = "#ffffff63";
        btnCarroseulItem[1].style.backgroundColor = "#ffffff63";
        btnCarroseulItem[2].style.backgroundColor = "#ffffffd7";
        indexCarroseul = 0;
    }
   
},5000)

// função para fazer o navbar ter cor de fundo após a rolangem do scroll
addEventListener('scroll', ()=>{
    if(window.scrollY >= 204){
        navbar.style.backgroundColor = '#141313dc';
    }
    else{
        navbar.style.backgroundColor = 'transparent';
    }
})

//função de fechar o menu em mobile e tablets

buttonCloseNavbar.addEventListener('click', ()=>{
    navOptions.style.width = "0%"
})

buttonOpen.addEventListener('click', ()=>{
    navOptions.style.width = "100%"
})

