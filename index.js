 for(var i=0;i<3;i++) {
    var div=document.querySelectorAll("div .music")[i];

    div.addEventListener("click",function(){
        var text=this.innerText;
        Music(text);
        Animation(text);
    
    });
 }
  
function Music(text){

  switch(text){
    case "music1":
        var audio=new Audio("kobitar_gan.mp3");
        audio.play();
        break;
    case "music2":
        var audio=new Audio("mayabee.mp3");
        audio.play();
        break;
    case "music3":
        var audio=new Audio("nithur mono.mp3");
        audio.play();
        break;
  }
}
function Animation(text){
    let Music=document.querySelector("."+text);
    Music.classList.add("animation");
    setTimeout(function(){
        Music.classList.remove("animation");
    },1000);
}

