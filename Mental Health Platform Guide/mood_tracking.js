document.addEventListener("DOMContentLoaded", () => {
  const moodForm = document.getElementById("mood_form");
  const moodLog = document.getElementById("mood_log");
  const moodChartCanvas = document.getElementById("mood_chart");

  // Store moods in an array
  const moods = [];
  let moodChart; // Reference to the Chart.js instance

  // Handle form submission
  moodForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const mood = document.getElementById("mood").value;
    const notes = document.getElementById("notes").value;
    const date = new Date().toLocaleDateString();

    if (!mood) {
      alert("Please select a mood.");
      return;
    }

    // Save mood entry
    const moodEntry = { mood, notes, date };
    moods.push(moodEntry);

    // Update the mood log
    updateMoodLog();

    // Update the mood chart
    updateMoodChart();
  });

  // Update the mood log
  const updateMoodLog = () => {
    moodLog.innerHTML = "";

    moods.forEach((entry) => {
      const li = document.createElement("li");
      li.classList.add("mood_log_item");
      li.innerHTML = `
        <strong>${entry.mood}</strong> - ${entry.date}
        <p>${entry.notes}</p>
      `;
      moodLog.appendChild(li);
    });
  };

  // Update the mood chart
  const updateMoodChart = () => {
    const moodCounts = moods.reduce((acc, entry) => {
      acc[entry.mood] = (acc[entry.mood] || 0) + 1;
      return acc;
    }, {});

    const labels = Object.keys(moodCounts);
    const data = Object.values(moodCounts);

    // If the chart already exists, update its data
    if (moodChart) {
      moodChart.data.labels = labels;
      moodChart.data.datasets[0].data = data;
      moodChart.update();
    } else {
      // Create a new chart if it doesn't exist
      moodChart = new Chart(moodChartCanvas, {
        type: "pie",
        data: {
          labels: labels,
          datasets: [
            {
              data: data,
              backgroundColor: ["#4caf50", "#ffcc00", "#f44336"], // Customize colors
            },
          ],
        },
        options: {
          responsive: true,
          plugins: {
            legend: {
              position: "top",
            },
          },
        },
      });
    }
  };
});
