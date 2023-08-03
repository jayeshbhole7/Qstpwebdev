var display = document.getElementById('display');

var NoofButtons = document.querySelectorAll(".button").length;

for(var i = 0; i < NoofButtons; i++){
    document.querySelectorAll(".button")[i].addEventListener("click", function(){
        var buttonText = this.innerHTML;
        if(buttonText == "C"){
            display.innerHTML = "";
        }
        else if(buttonText == "="){
            try{
              display.innerText = eval(display.innerHTML);
            } catch {
            display.innerText = "Error"
          }
        }
        else if(buttonText == "DEL"){
          if (display.innerHTML.length > 0){
            display.innerText = display.innerHTML.slice(0, -1);
          }
        }
        else{
            display.innerHTML += buttonText;
        }
    })
}