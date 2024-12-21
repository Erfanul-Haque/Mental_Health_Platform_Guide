document.addEventListener("DOMContentLoaded", () => {
    const anonymousLoginForm = document.querySelector("#anonymousLoginForm");
  
    anonymousLoginForm.addEventListener("submit", (e) => {
      e.preventDefault();
  
      // Gather form data
      const name = document.querySelector("#name").value;
      const age = document.querySelector("#age").value;
      const preferences = document.querySelector("#preferences").value;
  
      // Simple validation (optional)
      if (!name || !age) {
        alert("Please fill in your name and age.");
        return;
      }
  
      // Store user data in sessionStorage (optional)
      sessionStorage.setItem("name", name);
      sessionStorage.setItem("age", age);
      sessionStorage.setItem("preferences", preferences);
  
      // Redirect to the new page
      window.location.href = "goal.html";
    });
  });
  