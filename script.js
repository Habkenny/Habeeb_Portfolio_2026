document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contact-form");
  const responseMsg = document.getElementById("form-response");

  form.addEventListener("submit", function (e) {
    e.preventDefault(); // prevent page reload

    const formData = new FormData(form);

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString(),
    })
      .then(() => {
        // Success message
        responseMsg.textContent =
          "Thank you! Your message has been sent successfully. I’ll get back to you soon.";
        responseMsg.classList.remove("d-none", "text-danger");
        responseMsg.classList.add("text-success", "show");

        form.reset();

        // Hide after 5 seconds
        setTimeout(() => {
          responseMsg.classList.remove("show");
        }, 5000);
      })
      .catch((error) => {
        console.error("Form submission error:", error);
        responseMsg.textContent =
          "Oops! Something went wrong. Please try again later.";
        responseMsg.classList.remove("d-none", "text-success");
        responseMsg.classList.add("text-danger", "show");

        setTimeout(() => {
          responseMsg.classList.remove("show");
        }, 5000);
      });
  });
});
