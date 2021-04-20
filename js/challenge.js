
const commentForm = document.getElementById('comment-form')
const text = document.getElementById('text')
const submit = document.getElementById('submit')
const minus = document.getElementById('minus')
const plus = document.getElementById('plus')
const pause = document.getElementById('pause')
const heart = document.getElementById('heart')
const counter = document.getElementById('counter')
const commentList =document.getElementById('list')
const heartList= document.querySelector('.likes')

const minusCount = () => {
    counter.innerText = parseInt(counter.innerText) -1
}
const plusCount = ()  => {
    counter.innerText = parseInt(counter.innerText) +1
}

const heartCount = () => {
    const hLi= document.createElement('li')
    hLi.innerText = `<3 ${counter.innerTxt}`
    heartList.prepend(hLi)

}
let paused = true
let timer
const pauseCount =() {
    if(paused) {
        pause.innerText = 'pause'
     } else {
         pause.innerText = 'play'
         clearInterval(timer)   

            
    }

}
const comment= (event) => {
    event.preventDefault()
    const input= event.target.querySelector('#comment-input')
    const commentHi= document.createElement('li')
    commentHi.innerText= input.value
    commentList.prepend(commentHi)
    input.value =''



}


minus.addEventListener('click', minusCount)
plus.addEventListener('click', plusCount)
heart.addEventListener('click',heartCount)
pause.addEventListener('click', pauseCount)
commentForm.addEventListener('submit', comment)