let chatbotMsgList = ["Hi", "Hey", "Good Morning", "Good Evening", "How can I help you?", "Thank You"];

let chatContainer = document.getElementById('chatContainer');
let userInput = document.getElementById('userInput');

let sendMsgBtn = document.getElementById('sendMsgBtn');
let c = 0;

sendMsgBtn.onclick = function() {
    let userInputValue = userInput.value;
    let msgToChatChatbotContainer = document.createElement('div');
    msgToChatChatbotContainer.classList.add('msg-to-chatbot-container', "d-flex", "flex=row", 'justify-content-end');
    chatContainer.appendChild(msgToChatChatbotContainer);

    let msgTochatbox = document.createElement('p');
    msgTochatbox.textContent = userInputValue;
    msgTochatbox.classList.add('msg-to-chatbot');
    msgToChatChatbotContainer.appendChild(msgTochatbox);

    let msgfromchatBoxContainer = document.createElement('div');
    msgfromchatBoxContainer.classList.add('msg-from-chatbot-container', 'd-flex', 'flex-row', 'justify-content-start');
    chatContainer.appendChild(msgfromchatBoxContainer);


    let msgfromchatbox = document.createElement('p');
    msgfromchatbox.classList.add("msg-from-chatbot");
    msgfromchatbox.textContent = chatbotMsgList[c];
    msgfromchatBoxContainer.appendChild(msgfromchatbox);
    c = c + 1;

    userInput.value = "";

};