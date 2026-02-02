let elem = document.querySelectorAll('.elem');

elem.forEach(function(dets){
    dets.addEventListener('mouseenter',function(){
        dets.childNodes[3].style.opacity = 1;
    });
    dets.addEventListener('mouseleave',function(){
        dets.childNodes[3].style.opacity = 0;
    });
    dets.addEventListener('mousemove',function(detail){
        dets.childNodes[3].style.left = detail.x+"px";
        dets.childNodes[3].style.top = detail.y+"px";
    });
});