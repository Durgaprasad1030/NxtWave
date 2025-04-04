let seasonSmallImageElement = document.getElementById("seasonSmallImage");
let seasonMediumImageElement = document.getElementById("seasonMediumImage");

let springSmallImage = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/seasons-switcher-spring-xs-img.png";
let springMediumImage = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/seasons-switcher-spring-md-img.png";
let summerSmallImage = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/seasons-switcher-summer-xs-img.png";
let summerMediumImage = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/seasons-switcher-summer-md-img.png";
let autumnSmallImage = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/seasons-switcher-autumn-xs-img.png";
let winterSmallImage = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/seasons-switcher-winter-xs-img.png";

function changeSeasonToSpring() {
    seasonSmallImageElement.src = springSmallImage;
    seasonMediumImageElement.src = springSmallImage;
}

function changeSeasonTosummer() {
    seasonSmallImageElement.src = summerSmallImage;
    seasonMediumImageElement.src = summerSmallImage;
}

function changeSeasonToautumn() {
    seasonSmallImageElement.src = autumnSmallImage;
    seasonMediumImageElement.src = autumnSmallImage;
}

function changeSeasonTowinter() {
    seasonSmallImageElement.src = winterSmallImage;
    seasonMediumImageElement.src = winterSmallImage;
}