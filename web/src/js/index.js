var sobreMimBox = document.querySelector(".sobreMimBox");
var isOpenBox = false;
var carroseul = document.querySelector(".carroseul-container");
let indexCarroseul = 0;
var btnCarroseulItem = document.querySelectorAll(".btn-carroseul-item");
btnCarroseulItem[0].style.backgroundColor = "#ffffffd7";

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

