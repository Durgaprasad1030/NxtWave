let imageElement = document.getElementById("image");

let originalImageWidth = 200;

imageElement.style.width = originalImageWidth + 'px';


let warningMessageElement = document.getElementById("warningMessage");
let imageWidthElement = document.getElementById("imageWidth");
imageWidthElement.textContent = originalImageWidth;
let minwidth = 100;
let defaultwisth = 200;
let maxwidth = 300;

let minwidthWarningMgs = "Can't visible. Increse the size of the Image.";
let maxwidthWarningmsgs = "Too big. Decrese the size of the Image.";

function onDecrement() {
    if (defaultwisth <= minwidth) {
        warningMessageElement.textContent = minwidthWarningMgs;
    } else {
        warningMessageElement.textContent = "";
        defaultwisth = defaultwisth - 5;
        originalImageWidth = defaultwisth + 'px';
        imageElement.style.width = originalImageWidth;
        imageWidthElement.textContent = originalImageWidth;
    }
}

function onIncrement() {
    if (defaultwisth >= maxwidth) {
        warningMessageElement.textContent = maxwidthWarningmsgs;
    } else {
        warningMessageElement.textContent = "";
        defaultwisth = defaultwisth + 5;
        originalImageWidth = defaultwisth + 'px';
        imageElement.style.width = originalImageWidth;
        imageWidthElement.textContent = originalImageWidth;
    }
}