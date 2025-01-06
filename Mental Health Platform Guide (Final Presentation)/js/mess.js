const chatMessages = document.getElementById('chatMessages');

// A simple encryption and decryption function (Base64 for demonstration purposes)
function encryptMessage(message) {
    return btoa(message); // Encoding message using Base64
}

function decryptMessage(encryptedMessage) {
    return atob(encryptedMessage); // Decoding Base64 back to original
}

function sendMessage() {
    const messageInput = document.getElementById('messageInput');
    const message = messageInput.value;

    if (message.trim() === '') return; // Ignore empty messages

    // Encrypt the message (this could be sent to a server in a real application)
    const encryptedMessage = encryptMessage(message);

    // Add the original message to the chat
    const messageElement = document.createElement('p');
    messageElement.textContent = message; // Display only the original message
    chatMessages.appendChild(messageElement);

    // Scroll to the bottom of the chat
    chatMessages.scrollTop = chatMessages.scrollHeight;

    // Clear the input field
    messageInput.value = '';
}
