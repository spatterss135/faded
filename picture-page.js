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

// let selectedImages = []

let container = document.querySelector('.container')

for (i=0; i<images.length; i++) {
    let newImage = document.createElement('img')
    newImage.classList.add('img')
    newImage.setAttribute('src', images[i])
    newImage.setAttribute('width', '250px')
    newImage.setAttribute('height', '250px')
    container.append(newImage)
}


let allImages = document.querySelectorAll('.img')
for(i=0;i<allImages.length;i++) 
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

function terrible(e, e1) {
        e.target.src = e1.target.src
        e.target.style.height = '250px'
        e.target.style.width = '250px'
        e.target.style.border = 'none'
}

for (i=0;i<selectedImagesBox.length;i++) {
    selectedImagesBox[i].addEventListener('click', function(e) {
        e.target.style.border = '3px red solid'

            for(i=0;i<allImages.length;i++) {
            allImages[i].addEventListener('click', function(e1) {
                    e.target.src = e1.target.src
                    e.target.style.height = '250px'
                    e.target.style.width = '250px'
                    e.target.style.border = 'none'
                    e1.target.removeEventListener('click', function(e1) {
                        e.target.src = e1.target.src
                        e.target.style.height = '250px'
                        e.target.style.width = '250px'
                        e.target.style.border = 'none'}, true)
            }
            )
    
    
    }
    })
    

}



let leaveButton = document.querySelector('.leave-page')

leaveButton.addEventListener('click', function() {
    if (selectedImages.length>0){
    let serializedImages = JSON.stringify(selectedImages)
    localStorage.setItem('images', serializedImages)
    }
})


