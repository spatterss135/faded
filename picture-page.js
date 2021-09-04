const images = [
    './assets/1.jpg',
    './assets/2.jpg',
    './assets/3.jpg',
    './assets/4.jpg',
    './assets/5.jpg',
    './assets/6.jpg',
    './assets/7.jpg',
    './assets/8.jpg'
]

let selectedImages = []

let container = document.querySelector('.container')

// Create the photo library to choose from
for (let i=0; i<images.length; i++) {
    let newImage = document.createElement('img')
    newImage.classList.add('img')
    newImage.setAttribute('src', images[i])
    newImage.setAttribute('width', '250px')
    newImage.setAttribute('height', '250px')
    container.append(newImage)
}

// Create a hover effect to know what image you are moused over
let allImages = document.querySelectorAll('.img')
for(let i=0;i<allImages.length;i++) 
{
    allImages[i].addEventListener('mouseover', function(e) {
        e.target.style.border = '3px red solid'
    }
    )
    allImages[i].addEventListener('mouseleave', function(e) {
        e.target.style.border = 'none'
    }
    )

    // allImages[i].addEventListener('click', function(e) {
    //     if (selectedImages.length<6) {
    //         selectedImages.push(e.target.src)
    //     }
        
    // }
    // )
}

let selectedImagesBox = document.querySelectorAll('.selected')

function selectPhotoSlot(e) {
        slot = e.target
        slot.style.border = '3px red solid'
        for(let i=0;i<allImages.length;i++) {
            allImages[i].addEventListener('click', selectSlotImage) 
        } }                   

function selectSlotImage(e) {
    slot.src = e.target.src
    if (selectedImages.length < 6){
        selectedImages.push(slot.src)
    }
    slot.style.height = '250px'
    slot.style.width = '250px'
    slot.style.border = 'none'
    for(let i=0;i<allImages.length;i++) {
        allImages[i].removeEventListener('click', selectSlotImage)
}}

for (let i=0;i<selectedImagesBox.length;i++) {
    selectedImagesBox[i].addEventListener('click', selectPhotoSlot)
}

            
   




let leaveButton = document.querySelector('.leave-page')

leaveButton.addEventListener('click', function() {
    if (selectedImages.length>0){
    let serializedImages = JSON.stringify(selectedImages)
    localStorage.setItem('images', serializedImages)
    }
})


