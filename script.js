button.onclick = function(){
  button.style.fontSize = "30px";
  button.style.color = "red";
}
button.oncontextmenu =function(){
  button.style.fontSize = "15px";
  button.style.color = "black";
}
number.onclick = function(){
  number.classList.add("animate");
}
  text.onclick = function(){
    const objP = document.getElementsByTagName("p")[0];
   /* element.textContent = "Click and begin the countdown";*/
    if (objP.textContent == "Click and begin the countdown"){
      objP.textContent = "Кликните и начнет отчет";
    }
    else{
      objP.textContent = "Click and begin the countdown";
    }
  }