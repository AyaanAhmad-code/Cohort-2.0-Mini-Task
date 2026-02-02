let cursor = document.querySelector('img');

addEventListener('mousemove',function(dets){
    document.body.style.setProperty("--x",dets.clientX + 'px');
    document.body.style.setProperty("--y",dets.clientY + 'px');

    cursor.style.top = dets.y + 'px';
    cursor.style.left = dets.x + 'px';
})