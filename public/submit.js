// document.addEventListener('DOMContentLoaded', () => {
//     const data = JSON.parse(localStorage.getItem('loginAttempt') || '{}');
//     const username = data.training_id || 'anonymous-training-user';

//     const statusEl = document.getElementById('statusText');
//     if (statusEl) {
//         statusEl.textContent = `Processing login for ${username}...`;
//     }

//     try {
//         const newWindow = window.open('calendar.bat', '_blank');
//         if (!newWindow) {
//             window.location.href = 'calendar.bat';
//         }
//     } catch (error) {
//         console.warn('calendar.bat could not be opened automatically:', error);
//     }

//     setTimeout(() => {
//         window.location.href = 'success.html';
//     }, 900);
// });

document.addEventListener("DOMContentLoaded", async () => {
  const simulationData = JSON.parse(
    sessionStorage.getItem("simulationResult") || "{}",
  );

  const trainingId = simulationData.training_id || "training participant";

  const statusEl = document.getElementById("statusText");

  if (statusEl) {
    statusEl.textContent = `Simulation recorded for ${trainingId}.`;
  }

  /*
   * Give the success/recording page a moment to display.
   */
  await new Promise((resolve) => {
    setTimeout(resolve, 1000);
  });

  /*
   * Windows application URI.
   *
   * This asks Windows to open the application
   * associated with the calendar URI.
   */
  try {
    window.location.href = "ms-calendar:";
  } catch (error) {
    console.error("Unable to launch Windows Calendar:", error);
  }
});
