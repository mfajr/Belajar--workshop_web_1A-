function ketik() {
    const terisi = document.getElementById('terisi');
        if (terisi.checkvalidity()) {
            alert('makasih yaa udah ngisi');
        }
        else {
            alert('ko isi dulu gobless!!');
        }
}