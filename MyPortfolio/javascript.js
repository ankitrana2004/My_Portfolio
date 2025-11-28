 let btn1 = document.getElementById("contact-form").addEventListener("submit", async function (e) {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);
    
    const response = await fetch("https://formsubmit.co/ankitpratap76509@email.com", {
      method: "POST",
      body: formData,
      headers: {
        'Accept': 'application/json'
      }
    });

    if (response.ok) {
      document.getElementById("form-status").classList.remove("hidden");
      form.reset();
    } else {
      alert("Something went wrong. Please try again.");
    }
  });