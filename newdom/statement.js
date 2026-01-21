
const ageinput = document.getElementById("ageinput")
const checkTinubuage = document.getElementById("checkTinubuage")
const ageMessage = document.getElementById("ageMessage")


checkTinubuage.addEventListener("click", () => {
const age = Number(ageinput.value)



if (age >= 18 ) {
    ageMessage.textContent = "You can vote";
    ageMessage.style.color = "white";
    ageMessage.style.fontSize = "15px";
    ageMessage.style.backgroundColor = "black"
    
} else {
    ageMessage.textContent = "You are not eligible to vote"
    ageMessage.style.color = "white";
    ageMessage.style.backgroundColor = "red"

}

})