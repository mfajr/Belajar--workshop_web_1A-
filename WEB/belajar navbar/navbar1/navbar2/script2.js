let navbarNav=document.querySelector('.navbar-nav');

// ketika user klik hamburger menu \\
document.querySelector('#menu').onclick=()=>{
    navbarNav.classList.toggle('active');
};

// ketika user klik diluar navbar dan hamburger menu, pop up nya kembali \\
let hamburger=document.querySelector('#menu');
document.addEventListener('click', function(e){
    if(!hamburger.contains(e.target) && !navbarNav.contains(e.target)){
        navbarNav.classList.remove('active');
    }
});