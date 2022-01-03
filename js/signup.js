document.querySelector('.show1').addEventListener('click', function(){
    document.querySelector('.show1').classList.toggle('newEye')
    if(document.querySelector('.newEye')){
        document.querySelector('.pass1').type="text";
    }else{
        document.querySelector('.pass1').type="password";
    } 
})
