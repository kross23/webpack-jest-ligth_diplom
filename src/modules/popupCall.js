const popupCall = ()=>{
    const abtn = document.querySelectorAll('a.call-btn');//a.call-btn'
    const popupCall = document.querySelector('.popup-call');

    const step = () => {
        let nt = popupCall.style.opacity;
        nt = parseFloat(nt);
        nt += 0.08;
        popupCall.style.opacity = `${nt}`;
        if (nt < 1 ) {
            requestAnimationFrame(step);
        }
    };
    abtn.forEach((elem)=>{
        elem.addEventListener('click',()=>{
            popupCall.classList.add('popup-active');
            if (document.body.clientWidth > 768) {
                popupCall.style.opacity = `0`;
                requestAnimationFrame(step);
            } else {
                popap.style.opacity = `1`;
            }
            
        });

    });
        
    popupCall.addEventListener('click',(event)=>{
        let target = event.target;
       
         if(target.classList.contains('popup-close')){
            popupCall.classList.remove('popup-active');
            console.log('popupCall');
        } else {
            target = target.closest('.popup-content');
            console.log('target',target);
        }
        if (!target) {
            popupCall.classList.remove('popup-active');
        }          
    })
}
export default popupCall;
