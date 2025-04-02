let recipeObj = {
    title: "Tomato Pasta",
    imgSrc: "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/recipe-img.png",
    ingredients: ["Pasta", "Oil", "Onions", "Salt", "Tomato Pasta Sauce", "Cheese"]
};

let recipeObjE1 = document.getElementById('recipeObj');
let mainHeadingE1 = document.getElementById('mainHeading');

mainHeadingE1.textContent = recipeObj.title;

let imgE1 = document.getElementById('img');
imgE1.src = recipeObj.imgSrc;
let listContainer = document.getElementById('listContainer');

function onAppItems(item) {
    let liE1 = document.createElement('li');
    liE1.textContent = item;
    liE1.style.color = '#ffffff';
    liE1.classList.toggle('listItemms');
    listContainer.appendChild(liE1);
}

for (let i of recipeObj.ingredients) {
    onAppItems(i);
}