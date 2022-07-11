var x=150, y=200;

function pos(dx,dy){
    x += 10*dx;
    y += 10*dy;
    obj = document.getElementById("cuadrado");
    obj.style.top= y + "px";
    obj.style.left= x + "px";
}
function hideSquare(){
    if(!document.getElementById) return;
    obj = document.getElementById("cuadrado")
    obj.style.display="none";
}
function showSquare(){
    if(!document.getElementById) return;
    obj = document.getElementById("cuadrado");
    obj.style.display="block";
}