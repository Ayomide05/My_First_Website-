alert("Hello,Welcome To My First Website");
var lightmode = document.getElementById("lightmode");

lightmode.onclick = function(){
    document.body.classList.toggle("dark-theme");
    if(document.body.classList.contains("dark-theme")){
       icon.src = "img/dark.png";
    }
    else{
        icon.src = "img/light.png";
    }
}


