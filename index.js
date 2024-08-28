
function randomValueInRange(start, finish) {
    return Math.random()*finish%finish + start
}

function changeBackground(color, textColor) {
    // selecting divs and body to apply changes to them
    const divs = document.querySelectorAll("div");
    for (const div of divs) {
        div.style.backgroundColor = color
        div.style.color = textColor
    }
    document.body.style.background = color;
}

// Increase this value to make the color change more frequent in range of 100 to 0
const percentageChanceOfTriggering = 60

const chanceOfColoringThePage = (Math.ceil(Math.random() * 100))
// console.log(chanceOfColoringThePage)

let randomRedValue = randomValueInRange(0, 255)
let randomGreenValue = randomValueInRange(0, 255)
let randomBlueValue = randomValueInRange(0, 255)

// Picking up a random color
let color = `rgb(${randomRedValue}, ${randomGreenValue}, ${randomBlueValue})`
// inverting the color of the variable "color" and saving it for the text
let textColor = `rgb(${255-randomRedValue}, ${255-randomGreenValue}, ${255-randomBlueValue})`


if (chanceOfColoringThePage <= percentageChanceOfTriggering) {
    document.addEventListener("DOMContentLoaded", changeBackground(color, textColor))
}
