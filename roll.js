var diceEvent = document.querySelector(".rolldice");

diceEvent.addEventListener("click", diceRoll);
document.addEventListener("keydown",function(){
      diceRoll()
});

function diceRoll() {

  var setDice = document.querySelectorAll(".roll-container");
  var randomNumber = Math.floor(Math.random() * 6) + 1;

  document.querySelector(".img1").setAttribute("src", "images/dice"+randomNumber+".png");
  diceEvent.classList.add("rolldiceclicked");

  setTimeout(function(){
    diceEvent.classList.remove("rolldiceclicked");
  }, 100);

  for (i = 0; i < setDice.length; i++) {
    setDice[i].classList.add("animation");
  }

  setTimeout(function() {
    for (i = 0; i < setDice.length; i++) {
      setDice[i].classList.remove("animation");
    }
  }, 1000);
}

//Changes message when using mobile
if(screen.width < 769){
  document.querySelector('h1').innerHTML = 'Tap button to roll';
}
