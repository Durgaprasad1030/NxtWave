let yourFavourite=document.getElementById('yourFavourite');
let luck=document.getElementById('luck');
let varanasi=document.getElementById('varanasi');
let agra=document.getElementById('agra');
let button=document.getElementById('button');
let myfrom=document.getElementById('myfrom');

myfrom.addEventListener('submit',function(event){
   event.preventDefault();
});

let formData={
    name:"Your favourite place is: Agra"
};
button.onclick=function(){
    yourFavourite.textContent=formData.name;
}
let yourFavouritevalue="Your favourite place is: ";
luck.addEventListener('change',function(event){
formData.name=yourFavouritevalue+event.target.value;
});

varanasi.addEventListener('change',function(event){
formData.name=yourFavouritevalue+event.target.value;
});

agra.addEventListener('change',function(event){
formData.name=yourFavouritevalue+event.target.value;
});






 
