let greeting = '{"greetText":"Wishing that the new year will bring joy, love, peace, and happiness to you.","from":"Rahul","to":"Varakumar"}';

let parsedGreeting = JSON.parse(greeting);

let fromGreet = document.getElementById('fromGreet');
fromGreet.textContent = "From: " + parsedGreeting.from;

let toGreet = document.getElementById('toGreet');
toGreet.textContent = 'To: ' + parsedGreeting.to;

let greetText = document.getElementById('greetText');
greetText.textContent = parsedGreeting.greetText;