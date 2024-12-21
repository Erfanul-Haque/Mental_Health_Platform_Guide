// Sample JavaScript Code for Mental Health Goal Setting

// 1. Customizable Goals
let customGoals = [];
function addCustomGoal(goal) {
  customGoals.push({ goal, progress: 0 });
  console.log(`Custom goal added: ${goal}`);
}

// Example usage:
addCustomGoal("Practice mindfulness daily");

// 2. Preset Goals
const presetGoals = [
  "Meditate for 10 minutes daily",
  "Journal thoughts for 5 days a week",
  "Take a 15-minute walk daily",
  "Read a book for 20 minutes",
  "Practice gratitude by listing 3 things you're thankful for",
  "Spend 30 minutes in nature",
  "Disconnect from devices for 1 hour",
  "Practice deep breathing exercises",
  "Drink 8 glasses of water daily",
  "Sleep for at least 7 hours"
];
function selectPresetGoal(index) {
  if (index >= 0 && index < presetGoals.length) {
    customGoals.push({ goal: presetGoals[index], progress: 0 });
    console.log(`Preset goal selected: ${presetGoals[index]}`);
  } else {
    console.log("Invalid preset goal index.");
  }
}

// Example usage:
selectPresetGoal(0);

// 3. Progress Tracking
function updateProgress(goalIndex, progress) {
  if (goalIndex >= 0 && goalIndex < customGoals.length) {
    customGoals[goalIndex].progress = progress;
    console.log(`Progress updated for goal: ${customGoals[goalIndex].goal}`);
  } else {
    console.log("Invalid goal index.");
  }
}

// Example usage:
updateProgress(0, 50); // 50% progress

// 4. Reminders and Notifications
function setReminder(goalIndex, time) {
  if (goalIndex >= 0 && goalIndex < customGoals.length) {
    console.log(
      `Reminder set for goal '${customGoals[goalIndex].goal}' at ${time}.`
    );
    // Example: Setting a real notification (for browsers that support notifications)
    setTimeout(() => {
      alert(`Reminder: ${customGoals[goalIndex].goal}`);
    }, time);
  } else {
    console.log("Invalid goal index.");
  }
}

// Example usage:
setReminder(0, 5000); // Reminder in 5 seconds

// 5. SMART Goals Framework
function addSmartGoal(goal, measurable, achievable, relevant, timeBound) {
  const smartGoal = {
    goal,
    measurable,
    achievable,
    relevant,
    timeBound,
    progress: 0,
  };
  customGoals.push(smartGoal);
  console.log(`SMART goal added: ${goal}`);
}

// Example usage:
addSmartGoal(
  "Reduce screen time",
  "Track daily usage to under 3 hours",
  true,
  true,
  "Within 2 months"
);

// 6. Interactive Checklists
function createChecklist(goalIndex, items) {
  if (goalIndex >= 0 && goalIndex < customGoals.length) {
    customGoals[goalIndex].checklist = items.map((item) => ({
      item,
      completed: false,
    }));
    console.log(
      `Checklist created for goal: ${customGoals[goalIndex].goal}`
    );
  } else {
    console.log("Invalid goal index.");
  }
}
function markChecklistItem(goalIndex, itemIndex) {
  if (
    goalIndex >= 0 &&
    goalIndex < customGoals.length &&
    customGoals[goalIndex].checklist &&
    itemIndex >= 0 &&
    itemIndex < customGoals[goalIndex].checklist.length
  ) {
    customGoals[goalIndex].checklist[itemIndex].completed = true;
    console.log(
      `Item '${customGoals[goalIndex].checklist[itemIndex].item}' marked as completed.`
    );
  } else {
    console.log("Invalid checklist item index.");
  }
}

// Example usage:
createChecklist(0, ["Wake up early", "Drink water", "Stretch"]);
markChecklistItem(0, 1);
