const form = document.querySelector("#form");
const popup = document.querySelector(".popup");
const progressFill = document.querySelector(".progress-fill");

let messages = [];
form.addEventListener("submit", (event) => {
    event.preventDefault();
    let content = event.target[0].value;
    let backgroundColor =
        event.target[1].value === "success" ? "#45a049" : "#a43535";
    if (content !== "") {
        addMessage(content, backgroundColor);
    } else {
        addMessage("message cannot be empty", "#a43535");
    }
});

function showNewMessage(message) {
    popup.innerHTML += `
            <div id='${message.id}'>
                <div class="message" id='m${message.id}'>
                <div class="messageContainer" style='background-color: ${message.backgroundColor}'>
                    <p class="messageContent">${message.content}</p>
                    <span class="closeBtn" onclick='removeMessage(${message.id})'>&times;</span>
                    <div class="progress">
                        <div class="progress-fill" id='p${message.id}'></div>
                    </div>
                </div>
                </div>
            </div>
        `;
}

const addMessage = (content, backgroundColor) => {
    const newMessage = {
        id: Date.now(),
        content: content,
        backgroundColor: backgroundColor,
        messageRef: null,
        progressRef: null,
        progress: 100,
        progressInterval: null,
        timeout: null,
    };
    messages = [...messages, newMessage];
    showNewMessage(newMessage);

    newMessage.messageRef = document.getElementById(`m${newMessage.id}`);
    newMessage.progressRef = document.getElementById(`p${newMessage.id}`);
    newMessage.progressInterval = setInterval(() => {
        newMessage.progress -= 0.25;
        newMessage.progressRef.style.width = `${newMessage.progress}%`;
        console.log(newMessage.progress);
        
    }, 20);
    newMessage.timeout = setTimeout(() => {
        if (newMessage.messageRef) {
            newMessage.messageRef.style.transform = "translateX(0)";
        }
        setTimeout(() => {
            if (newMessage.messageRef) {
                newMessage.messageRef.style.transform = "translateX(30rem)";
            }
            clearInterval(newMessage.progressInterval);
        }, 7800);
    }, 100);

    setTimeout(() => {
        removeMessage(newMessage.id);
    }, 8000);
};
function removeMessage(id) {
    messages = messages.filter((message) => message.id !== id);
    document.getElementById(id).remove();
}
