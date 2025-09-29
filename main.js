// Contact form validation
document.getElementById("contactForm").addEventListener("submit", function(event) {
  event.preventDefault();
  
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  
  if (!name || !email || !message) {
    alert("Please fill in all fields.");
    return;
  }

  if (!/\S+@\S+\.\S+/.test(email)) {
    alert("Please enter a valid email.");
    return;
  }

  alert("Thank you for contacting us, " + name + "! We'll get back to you soon.");
  document.getElementById("contactForm").reset();
});
