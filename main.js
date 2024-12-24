const form = document.querySelector("#form");
const messageContent = document.querySelector(".messageContent");
const message = document.querySelector(".message");
const messageContainer = document.querySelector(".messageContainer");
const closeBtn = document.querySelector(".closeBtn");
const progressFill = document.querySelector(".progress-fill");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    let content = event.target[0].value;
    let backgroundColor =
        event.target[1].value === "success" ? "#45a049" : "#a43535";
    showPopupMessage(content, backgroundColor);
});
function showPopupMessage(content, backgroundColor) {
    messageContent.innerHTML = content;
    messageContainer.style.backgroundColor = backgroundColor;
    message.style.animation = "swap 5s ease-in-out";
    progressFill.style.animation = "increment 4.8s linear";
    setTimeout(() => {
        removePopupMessage()
    }, 5000);
}
function removePopupMessage() {
    message.style.animation = "";
    progressFill.style.animation = "";
    messageContainer.style.backgroundColor = "";
}
closeBtn.addEventListener("click", () => {
    removePopupMessage()
});