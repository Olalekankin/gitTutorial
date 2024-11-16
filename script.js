const btn = document.getElementById('btn')
const content = document.getElementsByClassName('content')
console.log(content)

btn.addEventListener('click', ()=> {
 content[0].classList.toggle('val')
})