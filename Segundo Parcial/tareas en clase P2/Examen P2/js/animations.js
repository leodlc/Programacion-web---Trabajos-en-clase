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