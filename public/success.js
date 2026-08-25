// document.addEventListener("DOMContentLoaded", () => {
//   const data = JSON.parse(sessionStorage.getItem("simulationResult") || "{}");

//   const username = data.training_id || "training participant";

//   const usernameEl = document.getElementById("username");

//   if (usernameEl) {
//     usernameEl.textContent = username;
//   }

//   const timestampEl = document.getElementById("timestamp");

//   if (timestampEl) {
//     if (data.timestamp) {
//       timestampEl.textContent = new Date(data.timestamp).toLocaleString();
//     } else {
//       timestampEl.textContent = "N/A";
//     }
//   }
// });

document.addEventListener("DOMContentLoaded", () => {
  const data = JSON.parse(sessionStorage.getItem("simulationResult") || "{}");

  const username = data.training_id || "training participant";

  const usernameEl = document.getElementById("username");

  if (usernameEl) {
    usernameEl.textContent = username;
  }

  const timestampEl = document.getElementById("timestamp");

  if (timestampEl) {
    if (data.timestamp) {
      timestampEl.textContent = new Date(data.timestamp).toLocaleString();
    } else {
      timestampEl.textContent = "N/A";
    }
  }

  /*
   * ---------------------------------------------
   * TRAINING REQUIREMENT:
   * Automatically launch Windows Calendar.
   *
   * This does NOT execute a .bat file.
   * It invokes the Windows calendar URI.
   * ---------------------------------------------
   */

  setTimeout(() => {
    window.location.href = "ms-calendar:";
  }, 1500);
});
