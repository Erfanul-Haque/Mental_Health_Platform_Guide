const express = require("express");
const app = express();
const PORT = 3000;

// Serve static files from the "public" directory
app.use(express.static("public"));

// Mock Recommendations API
app.get("/api/recommendations", (req, res) => {
  const recommendations = [
    { title: "Mindfulness Meditation", type: "Activity" },
    { title: "Managing Anxiety: Tips & Tricks", type: "Article" },
    { title: "Relaxing Nature Sounds", type: "Audio" },
    { title: "Yoga for Beginners", type: "Activity" },
    { title: "Understanding Stress", type: "Article" }
  ];

  res.json(recommendations);
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
