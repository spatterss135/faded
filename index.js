const images = [
    './assets/1.jpg',
    './assets/2.jpg',
    './assets/3.jpg',
    './assets/4.jpg',
    './assets/5.jpg',
    './assets/6.jpg'
]
let x = 0
let y = 1
let z = images.length-1
const backImage = document.querySelector('.back-image')
const frontImage = document.querySelector('.front-image')
const lastImage = document.querySelector('.last-image')
const bubbles = document.querySelectorAll('.bubble')

let nextButton = document.querySelector('.next')
let prevButton = document.querySelector('.previous')


frontImage.setAttribute('src', images[x])
backImage.setAttribute('src', images[y])
lastImage.setAttribute('src', images[z])
bubbles[x].textContent =  '●'


nextButton.addEventListener('click', function() {
    frontImage.style.animation = 'fadeout 1s ';
    x++
    y++
    z++
    if (x===images.length) {
       x = 0}
    else if (y===images.length) {
        y = 0}
    else if (z===images.length) {
        z = 0}
        
    setTimeout(function() {
            frontImage.setAttribute('src', images[x])
            backImage.setAttribute('src', images[y])
            frontImage.style.animation = 'none';
        }, 750)
    
    for (bub=0;bub<bubbles.length;bub++) {
        bubbles[bub].textContent =  '○'
        }
    bubbles[x].textContent = '●'

    console.log(x,y,z)
    }
    )

prevButton.addEventListener('click', function() {
    frontImage.style.animation = 'fadeout 1s ';
    backImage.style.animation = 'fadeout 1s ';

    if (x===0) {
        x = images.length-1
        y--
        z--
    }
    else if (y===0){
        y = images.length-1
        x--
        z--
    }
    else if (z===0) {
        z = images.length-1
        x--
        y--
    }
    else {
        x--
        y--
        z--
    } 
    
    setTimeout(function() {
        frontImage.setAttribute('src', images[x])
        backImage.setAttribute('src', images[y])
        lastImage.setAttribute('src', images[z])
        frontImage.style.animation = 'none';
        backImage.style.animation = 'none';
    }, 750)
    
    
    for (bub=0;bub<bubbles.length;bub++) {
        bubbles[bub].textContent =  '○'
        }
    bubbles[x].textContent = '●'
    console.log(x,y,z)
}
)


