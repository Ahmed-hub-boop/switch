function todark(){
    document.getElementById('li').style.display="none";
    document.getElementById('da').style.display="block";
    document.getElementById('ss').style.margin="0 0 0 70%";
    document.querySelector("body").style.background="black"
    document.getElementById('mm').style.background="white";
    document.getElementById('ss').style.background="black";
    document.getElementById('ss').style.color="white";
    document.getElementById('ss').style.transform="rotate(360deg)";
}
function tolight(){
    document.getElementById('li').style.display="block";
    document.getElementById('da').style.display="none";
    document.getElementById('ss').style.margin="0";
    document.querySelector("body").style.background="white"
    document.getElementById('mm').style.background="black";
    document.getElementById('ss').style.background="white";
    document.getElementById('ss').style.color="black";
    document.getElementById('ss').style.transform="rotate(-360deg)";
}