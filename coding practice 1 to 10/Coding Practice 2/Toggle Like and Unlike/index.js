let puppyimgElement = document.getElementById("puppyImage");
let likeiconElement = document.getElementById("likeIcon");
let likebuttonElement = document.getElementById('likeButton');
let isLiked = false

function onClickLikeButton() {
    if (isLiked === false) {
        puppyimgElement.src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/white-puppy-liked-img.png";
        likeiconElement.style.color = "#096d72";
        likebuttonElement.style.backgroundColor = "#096d72";
        likebuttonElement.style.color = "#fff";
        isLiked = true;
    } else {
        puppyimgElement.src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/white-puppy-img.png";
        likeiconElement.style.color = "#cbd2d9";
        likebuttonElement.style.backgroundColor = "#cbd2d9";
        likebuttonElement.style.color = "#9aa5b1";
        isLiked = false;
    }
}