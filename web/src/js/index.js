var sobreMimBox = document.querySelector(".sobreMimBox");

var isOpenBox = false;

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