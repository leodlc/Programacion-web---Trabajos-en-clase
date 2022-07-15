function myMove(){
    let id= null;
    const elem=document.getElementById("animate");
    let pos=0;
    clearInterval(id);
    id=setInterval(frame,5)
    function frame(){
        if(pos == 550){
            clearInterval(id)
        }else{
            pos++;
            elem.style.top = pos + "px";
            elem.style.left = pos + "px";
        }
    }

    
}