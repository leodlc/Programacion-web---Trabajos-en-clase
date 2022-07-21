(function(){
    const sliders= [...document.querySelectorAll('.slider__body3')];
    const arrowNext=document.querySelector('#next3');
    const arrowBefore= document.querySelector('#before3');
    let value;
    arrowNext.addEventListener('click',()=>changePosition(1));
    arrowBefore.addEventListener('click',()=>changePosition(-1));
    function changePosition(change){
        const currentElement = Number(document.querySelector('.slider__body3--show3').dataset.id);

        value=currentElement;
        value+= change;
        if(value === 0 || value == sliders.length+1){
            value = value=== 0? sliders.length: 1;

        }
        sliders[currentElement-1].classList.toggle('slider__body3--show3');
        sliders[value-1].classList.toggle('slider__body3--show3');
    }
})()