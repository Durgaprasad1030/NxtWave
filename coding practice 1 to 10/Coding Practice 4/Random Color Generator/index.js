let bgColorsArray = ["#e75d7c", "#b16cef", "#53cca4", "#efc84d", "#628ef0", "#184b73", "#883e7f", "#ed048b"];
let btnElement = document.getElementById('button');
let containerElement = document.getElementById('bgContainer');

function onClick() {
    let numberOfBG = bgColorsArray.length;
    let randomColorIndex = Math.ceil(Math.random() * numberOfBG);
    if (numberOfBG === randomColorIndex) {
        numberOfBG = randomColorIndex - 1;
    }

    containerElement.style.backgroundColor = bgColorsArray[randomColorIndex];

}