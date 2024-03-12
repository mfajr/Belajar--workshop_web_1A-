// document.title = 'fikri gobles'
// const body = document.body
// const btn1 = document.getElementById('btn1')
// const btn2 = document.getElementById('btn2')

// const defaultText='Klik saya 1'
// btn1.textContent= defaultText

// btn1.style.border='none'
// btn1.style.padding='8px' 
// btn1.style.fontSize='24px'
// btn1.style.backgroundColor='tomato'

// btn2.style.border='none'
// btn2.style.padding='8px' 
// btn2.style.fontSize='24px'
// btn2.style.backgroundColor='tomato'

// function clickButton() {
//     btn1.style.background ='aqua'
//     btn2.style.background = 'aqua'
//     const newText = document.createElement('p')
//     newText.textContent = 'Halo Bung! apa kabaar?'
//     body.append(newText)
// }

// function ubahText(){
//     btn1.textContent = 'haha hihihi'
//     btn2.textContent = 'haha hihihi'
//     const name = document.createElement('p')
//     name.textContent='Muhammad Fajar'
//     body.append(name)
// }

// function oriText(){
//     btn1.textContent= defaultText
//     btn1.style.background='tomato'
// }

document.title = 'Belajar yaa!'
const body     = document.body
const btn1     = document.getElementById('btn1')
const btn2     = document.getElementById('btn2')
const bewarna  = document.getElementById('bewarna')


btn1.style.border          = 'none'
btn1.style.backgroundColor = 'tomato'
btn1.style.fontSize        = '24px'
btn1.style.padding         = '8px'
btn1.style.margin          = '10px'
btn2.style.border          = 'none'
btn2.style.backgroundColor = 'tomato'
btn2.style.fontSize        = '24px'
btn2.style.padding         = '8px'
btn2.style.margin          = '10px'

function masuk(){
    const textMasuk = document.getElementById('bewarna')
    textMasuk.textContent = 'Muhammad Fajar'
    body.append(textMasuk)
}

function keluar(){
    const textMasuk = document.getElementById('bewarna')
    textMasuk.textContent = 'Muhammad Fajar'
    textMasuk.style.color = 'tomato'
    body.append(textMasuk)
}