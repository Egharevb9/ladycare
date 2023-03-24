const nav = document.querySelector("#myNav");
window.onscroll = () => {
    if(window.scrollY > 300){
        nav.classList.add('nav-scroll')
    }else{
        nav.classList.remove('nav-scroll')
    }
}

