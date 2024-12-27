document.addEventListener("DOMContentLoaded", () => {
    const topics = {
      1: {
        title: "Managing Stress at Work",
        messages: ["Take breaks often!", "Exercise helps manage stress."]
      },
      2: {
        title: "Tips for Better Sleep",
        messages: ["Avoid caffeine after 6 PM.", "Try meditation before bed."]
      },
      3: {
        title: "How to Overcome Anxiety",
        messages: ["Deep breathing exercises work well.", "Therapy has been helpful for me."]
      },
      4: {
        title: "Healthy Eating Habits for Mental Health",
        messages: ["Eat more whole foods.", "Stay hydrated throughout the day."]
      },
      5: {
        title: "Dealing with Burnout",
        messages: ["Remember to prioritize rest.", "Set clear boundaries at work."]
      },
      6: {
        title: "Daily Journaling for Emotional Resilience",
        messages: ["Journaling every morning helps me reflect.", "Write down what you're grateful for."]
      }
    };
  
    const topicList = document.getElementById("discussion-topics");
    const activeThread = document.getElementById("active-thread");
    const threadTitle = document.getElementById("thread-title");
    const threadContent = document.getElementById("thread-content");
    const messageForm = document.getElementById("message-form");
    const newMessageInput = document.getElementById("new-message");
  
    let currentTopicId = null;
  
    // Show the selected thread
    topicList.addEventListener("click", (e) => {
      if (e.target.classList.contains("view-thread")) {
        currentTopicId = e.target.getAttribute("data-id");
        const topic = topics[currentTopicId];
  
        threadTitle.textContent = topic.title;
        updateThreadContent(topic.messages);
  
        activeThread.classList.remove("hidden");
      }
    });
  
    // Update the thread content
    const updateThreadContent = (messages) => {
      threadContent.innerHTML = "";
      messages.forEach((msg) => {
        const p = document.createElement("p");
        p.textContent = msg;
        threadContent.appendChild(p);
      });
    };
  
    // Post a new message
    messageForm.addEventListener("submit", (e) => {
      e.preventDefault();
  
      const newMessage = newMessageInput.value.trim();
      if (newMessage && currentTopicId) {
        topics[currentTopicId].messages.push(newMessage);
        addMessageToThread("You", newMessage);
        newMessageInput.value = "";
      }
    });
  
    // Add a message to the thread
    const addMessageToThread = (sender, message) => {
      const p = document.createElement("p");
      p.innerHTML = `<strong>${sender}:</strong> ${message}`;
      threadContent.appendChild(p);
  
      // Scroll to the latest message
      threadContent.scrollTop = threadContent.scrollHeight;
    };
  });
  