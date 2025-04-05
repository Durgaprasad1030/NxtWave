let countries = {
    paris: "France",
    london: "United Kingdom",
    newYork: "USA",
    newDelhi: "India"
};

let Capital=document.getElementById('Capital');
let Country=document.getElementById('Country');

Capital.addEventListener('change',function(){
    let c=Capital.value;
    Country.textContent=countries[c];
    Country.classList.add('p');
})