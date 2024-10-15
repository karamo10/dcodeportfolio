const btnTop = document.getElementById('btnTop');

btnTop.addEventListener('click', function(){
    window.scrollTo({ 
        top: 0,
        behavior: "smooth"
    })
})