const form = document.querySelector("#form");
const popup = document.querySelector(".popup");

let messages = [];
form.addEventListener("submit", (event) => {
    event.preventDefault();
    let content = event.target[0].value;
    let backgroundColor =
        event.target[1].value === "success" ? "#45a049" : "#a43535";
    if (content !== '') {
        addMessage(content, backgroundColor);
    } else {
        addMessage('message cannot be empty', '#a43535');
    }
});

function showNewMessage(messages) {
    popup.innerHTML = messages.map(
        (message) => `
            <div>
                <div class="message">
                <div class="messageContainer" style='background-color: ${message.backgroundColor}'>
                    <p class="messageContent">${message.content}</p>
                    <span class="closeBtn" onclick='removeMessage(${message.id})'>&times;</span>
                    <div class="progress">
                        <div class="progress-fill"></div>
                    </div>
                </div>
                </div>
            </div>
        `
    ).join('')   
}

function addMessage(content, backgroundColor) {
    const newMessage = {
        id: Date.now(),
        content: content,
        backgroundColor: backgroundColor,
    };
    messages = [...messages, newMessage];
    showNewMessage(messages);
    setTimeout(() => {
        removeMessage(newMessage.id);
    }, 5001);
}
function removeMessage(id) {
    messages = messages.filter((message) => message.id !== id);
    showNewMessage(messages)
}
