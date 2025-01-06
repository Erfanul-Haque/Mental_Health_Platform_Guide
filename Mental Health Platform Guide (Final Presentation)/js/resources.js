document.addEventListener("DOMContentLoaded", () => {
    const resources = [
      {
        id: 1,
        title: "Understanding Anxiety",
        description: "An in-depth guide to understanding and managing anxiety.",
        category: "articles",
        link: "https://example.com/understanding-anxiety"
      },
      {
        id: 2,
        title: "Self-Care Planner",
        description: "A customizable planner to help you prioritize self-care.",
        category: "tools",
        link: "https://example.com/self-care-planner"
      },
      {
        id: 3,
        title: "Mindfulness Techniques",
        description: "Learn simple mindfulness techniques for daily practice.",
        category: "articles",
        link: "https://example.com/mindfulness-techniques"
      },
      {
        id: 4,
        title: "Daily Mood Tracker",
        description: "Track your mood and identify patterns over time.",
        category: "tools",
        link: "https://example.com/daily-mood-tracker"
      },
      {
        id: 5,
        title: "Managing Stress",
        description: "Effective tips and strategies for stress management.",
        category: "articles",
        link: "https://example.com/managing-stress"
      }
    ];
  
    const resourceGrid = document.getElementById("resource-grid");
    const filterButtons = document.querySelectorAll(".filter-btn");
  
    // Function to display resources
    const displayResources = (filter) => {
      resourceGrid.innerHTML = ""; // Clear current resources
      const filteredResources = filter === "all"
        ? resources
        : resources.filter(resource => resource.category === filter);
  
      filteredResources.forEach(resource => {
        const resourceCard = document.createElement("div");
        resourceCard.classList.add("resource-card");
        resourceCard.innerHTML = `
          <h3>${resource.title}</h3>
          <p>${resource.description}</p>
          <a href="${resource.link}" target="_blank">Access Resource</a>
        `;
        resourceGrid.appendChild(resourceCard);
      });
    };
  
    // Initial display of all resources
    displayResources("all");
  
    // Event listeners for filter buttons
    filterButtons.forEach(button => {
      button.addEventListener("click", () => {
        const category = button.getAttribute("data-category");
        displayResources(category);
      });
    });
  });
  