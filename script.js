window .addEventListener('DOMContentLoaded', function(){
    const menuBtn = document.querySelector('.header-menu')
    const navigation = document.querySelector('.header-nav')

    menuBtn.addEventListener('click', () =>{
        menuBtn.classList.toggle('active')
        navigation.classList.toggle('active')
    })
})