document.addEventListener("DOMContentLoaded", () => {
    const container = document.querySelector(".recommendations");
  
    // Mock API call for fetching recommendations
    const fetchRecommendations = () => {
      return [
        { title: "Mindfulness Meditation", type: "Activity" },
        { title: "Managing Anxiety: Tips & Tricks", type: "Article" },
        { title: "Relaxing Nature Sounds", type: "Audio" },
        { title: "Yoga for Beginners", type: "Activity" },
        { title: "Understanding Stress", type: "Article" }
      ];
    };
  
    // Load and render recommendations
    const loadRecommendations = () => {
      const recommendations = fetchRecommendations();
  
      // Clear existing recommendations in the container
      container.innerHTML = "";
  
      // Add recommendations dynamically
      recommendations.forEach((rec) => {
        const card = document.createElement("div");
        card.classList.add("recommendation-card");
  
        card.innerHTML = `
          <h3>${rec.title}</h3>
          <p>Type: ${rec.type}</p>
          <button>View Details</button>
        `;
  
        container.appendChild(card);
      });
    };
  
    loadRecommendations();
  });
  