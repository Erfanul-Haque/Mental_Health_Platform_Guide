document.addEventListener("DOMContentLoaded", () => {
    const userButtons = document.querySelectorAll(".connect-btn");
    const chatWindow = document.getElementById("chat-window");
    const chatTitle = document.getElementById("chat-title");
    const chatMessages = document.getElementById("chat-messages");
    const chatForm = document.getElementById("chat-form");
    const chatInput = document.getElementById("chat-input");
  
    let currentChatUser = null;
  
    // Handle Connect Button
    userButtons.forEach((button) => {
      button.addEventListener("click", () => {
        const username = button.getAttribute("data-username");
        startChat(username);
      });
    });
  
    // Start Chat with Selected User
    const startChat = (username) => {
      currentChatUser = username;
      chatTitle.textContent = `Chat with ${username}`;
      chatMessages.innerHTML = ""; // Clear previous messages
      chatWindow.classList.remove("hidden");
    };
  
    // Handle Sending a Message
    chatForm.addEventListener("submit", (e) => {
      e.preventDefault();
  
      const message = chatInput.value.trim();
      if (message) {
        addMessage("You", message);
        chatInput.value = "";
  
        // Simulate a reply from the other user
        setTimeout(() => {
          addMessage(currentChatUser, "Thanks for your message!");
        }, 1000);
      }
    });
  
    // Add a Message to the Chat
    const addMessage = (sender, message) => {
      const messageElement = document.createElement("p");
      messageElement.innerHTML = `<strong>${sender}:</strong> ${message}`;
      chatMessages.appendChild(messageElement);
  
      // Scroll to the latest message
      chatMessages.scrollTop = chatMessages.scrollHeight;
    };
  });
  