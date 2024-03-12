// toggle kelas active
const navbarNav=document.querySelector('.navbar-nav');
// ketika di klik tombol menu
document.querySelector('#menu').onclick = () => {
    navbarNav.classList.toggle('active');
};

// klik disembarang tempat bisa menghilangkan menu \\
const hamburger=document.querySelector('#menu');
document.addEventListener('click', function(e) {
    if(!hamburger.contains(e.target) && !navbarNav.contains(e.target)){
        navbarNav.classList.remove('active');
    }
});