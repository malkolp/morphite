(()=>{
    const pic       = document.getElementsByClassName('pic')[0];
    const content   = document.getElementsByClassName('content')[0];
    const con_back  = content.nextElementSibling;
    const filter    = 'filter:brightness(0.57) contrast(1.06) hue-rotate(76deg) saturate(1.98) ';

    con_back.setAttribute('class', 'content-back disabled');
    con_back.anchor = true;

    content.addEventListener('click', e=>{
       if (e.target.contentEditable !== 'true') {
           let iter     = 0;
           let inv      = 100;

           con_back.setAttribute('class', 'content-back');
           con_back.setAttribute('style', 'opacity:0');

           let interval = setInterval(()=>{
               if (iter >= 100) {
                   content.setAttribute('class', 'content disabled');
                   clearInterval(interval);
               }
               else {
                   pic.setAttribute('style', filter + 'blur('+ iter + 'px);');
                   content.setAttribute('style', 'opacity:'+ (inv/100));
                   con_back.setAttribute('style', 'opacity:'+ (iter/100));
               }
               inv     -= 2;
               iter    += 2;
           },1);
       }
    });
    con_back.addEventListener('click', e=>{
        if (e.target.anchor) {
            let iter    = 100;
            let inv     = 0;

            content.setAttribute('class', 'content');
            content.setAttribute('style', 'opacity:0');

            let interval = setInterval(()=>{
                if (iter <= 0) {
                    iter    = 0;
                    pic.setAttribute('style', filter + 'blur('+ iter + 'px);');
                    con_back.setAttribute('class', 'content-back disabled');
                    clearInterval(interval);
                }
                else {
                    pic.setAttribute('style', filter + 'blur('+ iter + 'px);');
                    content.setAttribute('style', 'opacity:'+ (inv/100));
                    con_back.setAttribute('style', 'opacity:'+ (iter/100));
                }
                inv     += 2;
                iter    -= 2;
            },1);
        }
    });
})();