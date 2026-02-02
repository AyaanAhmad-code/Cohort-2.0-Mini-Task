let value = [
    {
        dp:"https://images.unsplash.com/photo-1763634048498-6015a61165d7?q=80&w=1970&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        story:"https://plus.unsplash.com/premium_photo-1688572454849-4348982edf7d?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        dp:"https://images.unsplash.com/photo-1540569014015-19a7be504e3a?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        story:"https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        dp:"https://images.unsplash.com/photo-1600180758890-6b94519a8ba6?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cGVyc29uJTIwcG9ydHJhaXR8ZW58MHx8MHx8fDA%3D",
        story:"https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cGVyc29uJTIwcG9ydHJhaXR8ZW58MHx8MHx8fDA%3D"
    },
    {
        dp:"https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHBlcnNvbiUyMHBvcnRyYWl0fGVufDB8fDB8fHww",
        story:"https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHBlcnNvbiUyMHBvcnRyYWl0fGVufDB8fDB8fHww"
    },
    {
        dp:"https://images.unsplash.com/photo-1531123414780-f74242c2b052?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHBlcnNvbiUyMHBvcnRyYWl0fGVufDB8fDB8fHww",
        story:"https://images.unsplash.com/photo-1521119989659-a83eee488004?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHBlcnNvbiUyMHBvcnRyYWl0fGVufDB8fDB8fHww"
    },
    {
        dp:"https://images.unsplash.com/flagged/photo-1595514191830-3e96a518989b?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHBlcnNvbiUyMHBvcnRyYWl0fGVufDB8fDB8fHww",
        story:"https://images.unsplash.com/photo-1521146764736-56c929d59c83?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHBlcnNvbiUyMHBvcnRyYWl0fGVufDB8fDB8fHww"
    },
];

let clutter = ""
value.forEach(function(elem,idx){
    clutter += `<div class="stories">
                <img id="${idx}" src="${elem.dp}" alt="">
            </div>`
});

let storya = document.querySelector('.story');

storya.innerHTML = clutter;

storya.addEventListener('click',function(dets){
    document.querySelector("#full-screen").style.display = "block";
    document.querySelector("#full-screen").style.backgroundImage = `url(${value[dets.target.id].story})`;

    setTimeout(function(){
        document.querySelector("#full-screen").style.display = "none";
    },3000)
});

