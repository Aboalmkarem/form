const form = document.querySelector('#form');
const MessageContent = document.querySelector('#popupMessage');
const message = document.querySelector('#popup');
const popupContainer = document.querySelector('.popup-container');
const closePopup = document.querySelector('#closePopup')

form.addEventListener('submit', (event) => {
    event.preventDefault();
    let content = event.target[0].value
    let backgroundColor = event.target[1].value === 'success' ? '#45a049' : "#a43535"
    showPopupMessage(content, backgroundColor)
})

function showPopupMessage(content, backgroundColor) {
    MessageContent.innerHTML = content
    popupContainer.style.backgroundColor = backgroundColor
    message.style.display = 'flex'
}

closePopup.addEventListener('click', () => {
    message.style.display = 'none'
})