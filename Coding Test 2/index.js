let carBrands = ["Benz", "Ferrari", "Audi", "BMW"];

let listContainer=document.getElementById('listContainer');

for (let i of carBrands){
    let li=document.createElement('li');
    li.textContent=i;
    listContainer.appendChild(li);
}