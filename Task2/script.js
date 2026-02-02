let btn = document.querySelector("button");
let h2 = document.querySelector('h2');
let inner = document.querySelector(".inner");
let p = document.querySelector("p");
let value = 0;
btn.addEventListener("click", function(){
    let num = 50 + Math.floor(Math.random()*50);

    btn.style.pointerEvents = 'none'; 

    let int = setInterval(function(){
        value++;
        h2.innerHTML = value+'%';
        inner.style.width = value+'%'
    },num);

    setTimeout(function(){
        clearInterval(int);
        btn.style.opacity = 0.5;
        btn.innerHTML = "Downloaded";
        p.innerHTML = "Successfully Downloaded.";
    },num*100)
})