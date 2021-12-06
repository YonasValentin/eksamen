// Dette er vores starts indeks på vores array af billeder
var i = 0; 
var images = [];
var time = 3000;

// Vores arrayliste af billede
images[0] = 'billeder/i1.jpg'
images[1] = 'billeder/i2.jpg'
images[2] = 'billeder/i3.jpg'
images[3] = 'billeder/i4.jpg'

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
