"use strict"

const backgroundSwitch = document.getElementById("moon");
backgroundSwitch.onclick = ()=>{
    document.body.classList.toggle("dark-theme");
    if ( document.body.classList.contains("dark-theme")) {
   backgroundSwitch.src = "images/bulb.png";
}else{
   backgroundSwitch.src = "images/moon.png";
}
};


