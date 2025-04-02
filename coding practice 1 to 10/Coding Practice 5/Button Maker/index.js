let bgColorInputElement = document.getElementById('bgColorInput');
let fontColorInputElement = document.getElementById('fontColorInput');
let fontSizeInputElement = document.getElementById('fontSizeInput');
let fontWeightInputElement = document.getElementById('fontWeightInput');
let paddingInputElement = document.getElementById('paddingInput');
let borderRadiusInputElement = document.getElementById('borderRadiusInput');
let customButtonElement = document.getElementById('customButton');

function applybtn() {
    let bgColorInputvalue = bgColorInputElement.value;
    let fontColorInputvalue = fontColorInputElement.value;
    let fontSizeInputvalue = fontSizeInputElement.value;
    let fontWeightInputvalue = fontWeightInputElement.value;
    let paddingInputvalue = paddingInputElement.value;
    let borderRadiusvalue = borderRadiusInputElement.value;

    customButtonElement.style.backgroundColor = bgColorInputvalue;
    customButtonElement.style.color = fontColorInputvalue;
    customButtonElement.style.fontSize = fontSizeInputvalue;
    customButtonElement.style.fontWeight = fontWeightInputvalue;
    customButtonElement.style.padding = paddingInputvalue;
    customButtonElement.style.borderRadius = borderRadiusvalue;
}