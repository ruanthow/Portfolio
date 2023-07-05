var sobreMimBox = document.querySelector(".sobreMimBox");
var isOpenBox = false;
var carroseul = document.querySelector(".carroseul-container");
let indexCarroseul = 0;
var navbar = document.querySelector(".nav");

var btnCarroseulItem = document.querySelectorAll(".btn-carroseul-item");

// estado inicial do botão do carroseul.
btnCarroseulItem[0].style.backgroundColor = "#ffffffd7";


// esconder e mostrar o texto do inicio da pagina 
function hideBoxMe(){
    if(isOpenBox){
        sobreMimBox.style.height = "0px";
        isOpenBox = false;
    }
    else{
        sobreMimBox.style.height = "250px";
        isOpenBox = true;
    }
}



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

addEventListener('scroll', ()=>{
    if(window.scrollY >= 204){
        navbar.style.backgroundColor = '#141313dc';
    }
    else{
        navbar.style.backgroundColor = 'transparent';
    }
})

