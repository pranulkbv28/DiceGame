let dice = document.getElementById("dice")
let number = document.getElementById("number");
let audio = document.getElementById("dice-audio");

function roll(){
    dice.classList.add("roll-dice");
    number.style.display = "none";
    audio.play();
    setTimeout(() => {
        dice.classList.remove("roll-dice");
        number.innerText = Math.floor(Math.random()*5)+1;
        number.style.display = "unset";
    }, 3000);
}