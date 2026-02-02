let img = document.querySelector('.photo');
let like = document.querySelector('#love');
let love = document.querySelector('#like');
let btn = document.querySelector('button');
let book = document.querySelector('#book');

img.addEventListener('dblclick',function(){

    like.style.opacity = 1;
    like.style.transform = 'translate(-50%, -50%) scale(1) rotate(0deg)';
    love.style.color = 'transparent';
    love.classList.remove('ri-heart-3-line');
    love.classList.add('ri-heart-3-fill');
    check=1;

    setTimeout(function(){
        like.style.transform = 'translate(-50%, -400%) rotate(60deg)';
    },600);
    setTimeout(function(){
        like.style.opacity = 0;
    },800);
    setTimeout(function(){
        like.style.transform = 'translate(-50%, -50%) scale(1) rotate(-60deg)'
    },1000);
})
let flag = 0;
btn.addEventListener('click',function(){
    if(flag===0){
        btn.innerHTML = 'Following';
        flag = 1;
    }else{
        btn.innerHTML = 'Follow';
        flag = 0;
    }
})
check=0;
love.addEventListener('click',function(){
    if(check===0){
        love.style.color = 'transparent';
        love.classList.remove('ri-heart-3-line');
        love.classList.add('ri-heart-3-fill');
        check=1;
    }else{
        love.style.color = 'black';
        love.classList.remove('ri-heart-3-fill');
        love.classList.add('ri-heart-3-line');
        check=0;
    }
})
val = 0;
book.addEventListener('click',function(){
    if(val===0){
        book.classList.remove('ri-bookmark-line');
        book.classList.add('ri-bookmark-fill');
        val = 1;
    }else{
        book.classList.remove('ri-bookmark-fill');
        book.classList.add('ri-bookmark-line');
        val = 0;
    }
})