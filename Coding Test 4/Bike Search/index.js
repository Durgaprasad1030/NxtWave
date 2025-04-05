let searchInputEl = document.getElementById("searchInput");
let searchResults=document.getElementById('searchResults');
let spinner=document.getElementById('spinner');
function createAndAppend(r){
let div=document.createElement('div');
div.classList.add('search-result');
searchResults.appendChild(div);
let bp=document.createElement('p');
let cp=document.createElement('p');
bp.textContent="BikeName: "+r.name;
cp.textContent="City: "+r.city;
div.appendChild(bp);
div.appendChild(cp);
}
function displayResults(searchresults){
    spinner.classList.toggle("d-none");
    for(let i of searchresults){
       createAndAppend(i); 
    }
    
}
function displayResults1(searchresults){
    for(let i of searchresults){
       createAndAppend(i); 
    }
    
}
function searchBikeh(){
        let url="https://apis.ccbp.in/city-bikes?bike_name=";
        let options={
            method: "GET"};
        fetch(url,options)
        .then(function(response){
            return response.json();
        })
        .then(function(jsonData){
            let search_results=jsonData;
            console.log(search_results);
            displayResults1(search_results);
        });
}
searchBikeh();


function searchBike(event){
    
    if(event.key==="Enter"){
        searchResults.textContent="";
        spinner.classList.toggle("d-none");
        let searchInput=searchInputEl.value;
        let url="https://apis.ccbp.in/city-bikes?bike_name=" + searchInput;
        let options={
            method: "GET"
        };
        fetch(url,options)
        .then(function(response){
            return response.json();
        })
        .then(function(jsonData){
            let search_results=jsonData;
            console.log(search_results);
            displayResults(search_results);
        });
        
    }
}

searchInputEl.addEventListener('keydown',searchBike);


