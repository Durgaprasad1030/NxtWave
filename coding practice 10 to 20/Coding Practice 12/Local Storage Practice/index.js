let msg = document.getElementById('msg');
let saveBtn = document.getElementById('saveBtn');
let clearBtn = document.getElementById('clearBtn');
let storageKey = 'userInput';

localStorage.getItem(storageKey);

saveBtn.onclick = function() {
    let msgvalue = msg.value;
    localStorage.setItem(storageKey, msgvalue);
}

msg.value = localStorage.getItem(storageKey);

clearBtn.onclick = function() {
    localStorage.removeItem(storageKey);
    msg.value = null;
}