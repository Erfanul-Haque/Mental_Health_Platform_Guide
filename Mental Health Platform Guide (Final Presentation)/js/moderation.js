document.addEventListener("DOMContentLoaded", () => {
    const reportInput = document.getElementById("report-input");
    const submitReportButton = document.getElementById("submit-report");
    const reportsList = document.getElementById("reports-list");
  
    // Handle Report Submission
    submitReportButton.addEventListener("click", () => {
      const reportContent = reportInput.value.trim();
  
      if (!reportContent) {
        alert("Please describe the issue before submitting.");
        return;
      }
  
      // Add the report to the moderation dashboard
      addReport(reportContent);
      reportInput.value = ""; // Clear the textarea
      alert("Your report has been submitted. Thank you!");
    });
  
    // Add a report to the Moderation Dashboard
    const addReport = (content) => {
      const li = document.createElement("li");
      li.innerHTML = `
        <span>${content}</span>
        <div>
          <button class="approve-btn">Approve</button>
          <button class="reject-btn">Reject</button>
        </div>
      `;
  
      // Handle Approve and Reject Actions
      const approveButton = li.querySelector(".approve-btn");
      const rejectButton = li.querySelector(".reject-btn");
  
      approveButton.addEventListener("click", () => {
        alert("Content approved and marked safe.");
        li.remove();
      });
  
      rejectButton.addEventListener("click", () => {
        alert("Content rejected and removed.");
        li.remove();
      });
  
      reportsList.appendChild(li);
    };
  });
  