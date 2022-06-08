let ubicacionPrincipal=window.pageYOffset;

AOS.init();

window.addEventListener("scroll",function(){
    /* console.log(window.pagepageYOffset) */
    let desplazamientoActual = window.pageYOffset; //100
    if(ubicacionPrincipal >= desplazamientoActual){
        document.getElementsByTagName("nav")[0].style.top = "0px" //200 > 180
    }else{
        document.getElementsByTagName("nav")[0].style.top = "-100px"
    }
    ubicacionPrincipal=desplazamientoActual;
})

//Menu
let enlacesHeader = document.querySelectorAll(".enlaces-header")[0];
let semaforo=true;

document.querySelectorAll(".hamburguer")[0].addEventListener("click",function(){
    if(semaforo){
        document.querySelectorAll(".hamburguer")[0].style.color="#fff";
        semaforo=false;
    }else{
        document.querySelectorAll(".hamburguer")[0].style.color="#000";
        semaforo=true;
    }
    enlacesHeader.classList.toggle("menudos")
})