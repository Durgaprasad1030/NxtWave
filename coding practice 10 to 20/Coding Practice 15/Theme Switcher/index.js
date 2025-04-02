let bgContainer = document.getElementById('bgContainer');
let heading = document.getElementById('heading');
let themeUserInput = document.getElementById('themeUserInput');

themeUserInput.addEventListener('keydown', function() {
    let InputValue = themeUserInput.value;
    if ((event.key === "Enter" && InputValue === "Dark")) {
        heading.style.color = "#ffffff";
        bgContainer.style.backgroundImage = "url('https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/change-theme-dark-bg.png')";
    } else if ((event.key === "Enter" && InputValue === "Light")) {
        heading.style.color = "#014d40";
        bgContainer.style.backgroundImage = "url('https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/change-theme-light-bg.png')";
    } else if (event.key === "Enter" && InputValue !== "Dark" && InputValue !== "Light") {
        alert("Enter the valid theme");
    }
})