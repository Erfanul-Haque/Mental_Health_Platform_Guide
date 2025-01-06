document.addEventListener("DOMContentLoaded", () => {
    const groups = {
      1: { name: "Anxiety Support", members: 42 },
      2: { name: "Depression Support", members: 58 },
      3: { name: "Stress Management", members: 35 },
      4: { name: "Mindfulness Practices", members: 28 },
      5: { name: "Parenting Support", members: 19 },
    };
  
    const joinButtons = document.querySelectorAll(".join-btn");
  
    // Handle Join/Unjoin Button Clicks
    joinButtons.forEach((button) => {
      button.addEventListener("click", () => {
        const groupId = button.getAttribute("data-id");
        const memberCountElement = document.querySelector(`.member-count[data-id="${groupId}"]`);
  
        if (button.classList.contains("joined")) {
          // Unjoin the group
          groups[groupId].members -= 1;
          button.classList.remove("joined");
          button.textContent = "Join Group";
        } else {
          // Join the group
          groups[groupId].members += 1;
          button.classList.add("joined");
          button.textContent = "Leave Group";
        }
  
        // Update the member count display
        memberCountElement.textContent = groups[groupId].members;
      });
    });
  });
   