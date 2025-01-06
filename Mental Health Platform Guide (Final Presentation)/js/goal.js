const presetGoals = [
  "Exercise for 30 minutes daily",
  "Practice mindfulness meditation",
  "Get 8 hours of sleep every night",
  "Reduce screen time by 1 hour",
];

// Function to add a goal from the input field
function addGoalFromInput() {
  const input = document.getElementById("customGoalInput");
  const goal = input.value.trim();

  if (goal) {
    const goalList = document.getElementById("goalList");
    const newGoal = document.createElement("li");
    newGoal.textContent = goal;
    goalList.appendChild(newGoal);
    input.value = ""; // Clear the input field
  }
}

// Function to render the preset goals
function renderPresetGoals() {
  const presetGoalsList = document.getElementById("presetGoalsList");
  presetGoals.forEach(goal => {
    const listItem = document.createElement("li");
    listItem.textContent = goal;
    listItem.classList.add("clickable");
    listItem.onclick = () => addPresetGoal(goal);
    presetGoalsList.appendChild(listItem);
  });
}

// Function to add a preset goal to the goal list
function addPresetGoal(goal) {
  const goalList = document.getElementById("goalList");
  const newGoal = document.createElement("li");
  newGoal.textContent = goal;
  goalList.appendChild(newGoal);
}

// Call renderPresetGoals to populate the preset goal list on page load
renderPresetGoals();
