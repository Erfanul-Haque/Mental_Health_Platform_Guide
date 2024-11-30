// Save Profile
function saveProfile() {
    const username = document.getElementById('username').value;
    const preferences = document.getElementById('preferences').value;
    alert(`Profile Saved!\nUsername: ${username}\nPreferences: ${preferences}`);
  }
  
  // Add Goals
  function addGoal() {
    const goal = document.getElementById('goal').value;
    if (goal) {
      const goalList = document.getElementById('goal-list');
      const li = document.createElement('li');
      li.textContent = goal;
      goalList.appendChild(li);
      document.getElementById('goal').value = '';
    }
  }
  
  // Track Mood
  function trackMood() {
    const mood = document.getElementById('mood').value;
    const note = document.getElementById('mood-note').value;
    if (mood) {
      const moodList = document.getElementById('mood-list');
      const li = document.createElement('li');
      li.textContent = `Mood: ${mood} | Note: ${note}`;
      moodList.appendChild(li);
      document.getElementById('mood').value = '';
      document.getElementById('mood-note').value = '';
    }
  }
  
  // Generate Recommendations
  function generateRecommendations() {
    const recommendations = [
      'Take a 5-minute meditation break.',
      'Go for a short walk.',
      'Write down 3 things you are grateful for.',
      'Listen to your favorite music.',
    ];
    const recommendationsList = document.getElementById('recommendations-list');
    recommendationsList.innerHTML = '';
    recommendations.forEach((rec) => {
      const li = document.createElement('li');
      li.textContent = rec;
      recommendationsList.appendChild(li);
    });
  }
  
