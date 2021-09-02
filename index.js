const pictures = [
    './assets/1.jpg',
    './assets/2.jpg',
    './assets/3.jpg',
    './assets/4.jpg',
    './assets/5.jpg',
    './assets/6.jpg'
]

let serializedImages = localStorage.getItem('images');
let images;
if (serializedImages === null) {
    images = pictures
    console.log('Hi')
}
else {
    images = JSON.parse(serializedImages)
    console.log('Hey Buddy')
}

let photoPage = document.querySelector('.picture-selector')
photoPage.addEventListener('click', function() {
    localStorage.clear()
})





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

let styleChoice = 'fadeout 1s'
let delayTime = 750
let fadeOption = document.getElementById('fade')
fadeOption.addEventListener('click', function() {
    styleChoice = 'fadeout 1s'
    delayTime = 750
    setTimeout(function() {
        options.style.visibility = 'collapse'
    }, 250)
})

let noneOption = document.getElementById('none')
noneOption.addEventListener('click', function() {
    styleChoice = 'none'
    delayTime = 0
    setTimeout(function() {
        options.style.visibility = 'collapse'
    }, 250)
})

let slideOption = document.getElementById('slide')
slideOption.addEventListener('click', function() {
    styleChoice = 'slider 1s'
    delayTime = 750
    setTimeout(function() {
        options.style.visibility = 'collapse'
    }, 250)
    
})

nextButton.addEventListener('click', function() {
    frontImage.style.animation = styleChoice;
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
            lastImage.setAttribute('src', images[z])
            frontImage.style.animation = 'none';
        }, delayTime)
    
    for (bub=0;bub<bubbles.length;bub++) {
        bubbles[bub].textContent =  '○'
        }
    bubbles[x].textContent = '●'

    console.log(x,y,z)
    }
    )

prevButton.addEventListener('click', function() {
    frontImage.style.animation = styleChoice;
    backImage.style.animation = styleChoice;

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
    }, delayTime)
    
    
    for (bub=0;bub<bubbles.length;bub++) {
        bubbles[bub].textContent =  '○'
        }
    bubbles[x].textContent = '●'
    console.log(x,y,z)
}
)

for (x1=0; x1<bubbles.length;x1++) {
    bubbles[x1].addEventListener('click', function(e) {
        let bubbleIndex = Number(String(e.target.id).slice(-1))
        for (x2=0; x2<bubbles.length;x2++) {
            bubbles[x2].textContent = '○'}
        e.target.textContent = '●'
        y = bubbleIndex
        backImage.setAttribute('src', images[y])
        frontImage.style.animation = styleChoice;
        x = bubbleIndex
        y = x+1
        z = x-1
        if (y===images.length) {
            y = 0
        }
        if (z<0) {
            z=images.length-1
        }
        setTimeout(function() {
            frontImage.setAttribute('src', images[x])
            backImage.setAttribute('src', images[y])
            lastImage.setAttribute('src', images[z])
            frontImage.style.animation = 'none';
        }, delayTime)
        
    
    })
}


let styleButton = document.querySelector('.transitions')
let options = document.querySelector('.transition-options')
styleButton.addEventListener('click', function() {
    let optionStyles = window.getComputedStyle(options)
    if (optionStyles.getPropertyValue('visibility') === 'collapse') {
        
        options.style.visibility = 'visible'
    }
    else {
        options.style.visibility = 'collapse'
    }
    
})



