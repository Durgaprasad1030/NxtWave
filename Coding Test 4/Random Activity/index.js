let getActivityBtn=document.getElementById('getActivityBtn');
let activityName=document.getElementById('activityName');
let activityType=document.getElementById('activityType');
let activityImg=document.getElementById('activityImg');
let spinner=document.getElementById('spinner');
let url="https://apis.ccbp.in/random-activity";
let options={
    method:"GET"
}
getActivityBtn.onclick=function(){
   spinner.classList.remove("d-none");
   
    fetch(url,options)
    .then(function(response) {
    return response.json();
  })
  .then(function(jsonData){
       spinner.classList.add('d-none');
      activityName.textContent=jsonData.activity;
      activityType.textContent=jsonData.type;
      activityImg.src=jsonData.image;
  })
    
}