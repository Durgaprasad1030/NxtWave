let profileDetails = {
    imgSrc: "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/user-profile-img.png",
    name: "RAHUL ATTULURI",
    age: 25
};
let profileContainerE1 = document.getElementById('profileContainer');

let imgContainerE1 = document.getElementById('imgContainer');
imgContainerE1.classList.toggle('img-container');

let imge1 = document.createElement('img');
imge1.src = profileDetails.imgSrc;
imge1.classList.toggle('img');
imgContainerE1.appendChild(imge1);

let headingE1 = document.createElement('h1');
headingE1.textContent = profileDetails.name;
headingE1.classList.toggle('handing');
imgContainerE1.appendChild(headingE1);

let p = document.createElement('p');
p.textContent = 'Age : ' + profileDetails.age;
p.classList.toggle('paragraph');

imgContainerE1.appendChild(p);