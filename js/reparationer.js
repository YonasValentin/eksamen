// Dette er vores starts indeks på vores array af billeder
var i = 0; 
var images = [];
var time = 3000;

// Vores arrayliste af billede
images[0] = 'images/IMG_1.jpg'
images[1] = 'images/IMG_2.jpg'
images[2] = 'images/IMG_3.jpg'
images[3] = 'images/IMG_4.jpg'
images[4] = 'images/IMG_5.jpg'
images[5] = 'images/IMG_6.jpg'

// Nu vil vi gerne lave en funktion, som skifter vores billeder med starstværdien 0(i)
function changeImg(){
    document.slide.src = images[i];
    if(i < images.length - 1){
        i++
    }
    else {
        i = 0;
    }
    setTimeout("changeImg()", time);
}
window.onload = changeImg;
