function imageEdit(){
    var blurValue = document.getElementById("blur").value
    var brightnessValue = document.getElementById("brightness").value
    var constrastValue = document.getElementById("contrast").value
    var grayscaleValue = document.getElementById("grayscale").value
    var hueValue = document.getElementById("hue").value
    var invertValue = document.getElementById("invert").value
    var opacityValue = document.getElementById("opacity").value
    var saturateValue = document.getElementById("saturate").value
    var sepiaValue = document.getElementById("sepia").value

    document.getElementById("image").style.filter=`blur(${blurValue}px) brightness(${brightnessValue}%)
     contrast(${constrastValue}%) grayscale(${grayscaleValue}%) hue-rotate(${hueValue}deg)
      invert(${invertValue}%)
    opacity(${opacityValue}%) saturate(${saturateValue}%) sepia(${sepiaValue}%)`

    var rotatex = document.getElementById("rotatex").value
    var rotatey = document.getElementById("rotatey").value
    var rotatez = document.getElementById("rotatez").value
    var scalex = document.getElementById("scalex").value
    var scaley = document.getElementById("scaley").value
    var skewx = document.getElementById("skewx").value
    var skewy = document.getElementById("skewy").value
    var translateX = document.getElementById("translateX").value
    var translateY = document.getElementById("translateY").value

    document.getElementById("image").style.transform=`rotate(${rotatez}deg) rotatex(${rotatex}deg) 
    rotatey(${rotatey}deg) scaleX(${scalex})scaleY(${scaley})skewX(${skewx}deg) skewY(${skewy}deg)
    translateX(${translateX}px) translateY(${translateY}px)`

}


//Gallary image code:
var allimg=document.images;
function allImgTags(){
  for(i=0;i<=allimg.length;i++)
  {
    allimg[i].src=`./Assets/images/${i}.jpg`
    allimg[i].style.width="300px"
    allimg[i].style.height="300px"
    allimg[i].addEventListener("click",function(){
      document.getElementById("bigImage").style.display="flex"
    })
  }
}
allImgTags()

var globalSrc;

function passSrc(urlOfimg){
  document.getElementById("bigimg").style.backgroundImage=`url(${urlOfimg})`
  globalSrc=urlOfimg;
}

function closewindow(){
    document.getElementById("bigImage").style.display="none"
    document.getElementById("screen").style.display="none"
}

function openEditWindow(){
    document.getElementById("screen").style.display="flex"
    document.getElementById("image").style.backgroundImage=`url(${globalSrc})`
}