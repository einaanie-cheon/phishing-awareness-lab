document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("loginForm");

  if (!form) {
    return;
  }

  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const trainingId = document.getElementById("training_id")?.value.trim();

    if (!trainingId) {
      alert("Please enter your training ID.");

      return;
    }

    const button = form.querySelector(".sign-in-button");

    if (button) {
      button.disabled = true;

      button.textContent = "SIGNING IN...";
    }

    try {
      const response = await fetch("/api/simulation", {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          training_id: trainingId,
        }),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.message || "Simulation failed.");
      }

      // Store ONLY harmless simulation
      // information for the success page.

      sessionStorage.setItem(
        "simulationResult",
        JSON.stringify({
          training_id: data.trainingId,

          timestamp: data.timestamp,
        }),
      );

      window.location.href = "success.html";
    } catch (error) {
      console.error(error);

      alert(
        "The training simulation could not be completed. Please try again.",
      );

      if (button) {
        button.disabled = false;

        button.textContent = "SIGN IN";
      }
    }
  });
});
