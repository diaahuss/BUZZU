// Initialize EmailJS with the provided API Key
emailjs.init("sz2ImWOwFnVKy4qrF");

// Helper function to clear input fields
function resetFields() {
  document.querySelectorAll("input").forEach(input => input.value = "");
}

// Form submission for rewards
document.getElementById("submit-reward-btn").addEventListener("click", () => {
  const name = document.getElementById("name-display").value;
  const email = document.getElementById("email-display").value;
  const voucherCode = document.getElementById("voucher-code").value;
  const walletAddress = document.getElementById("wallet-address").value;
  const businessName = document.getElementById("business-name").value;
  const businessEmail = document.getElementById("business-email").value;

  if (name && email && voucherCode && walletAddress && businessName && businessEmail) {
    // Send email using EmailJS
    emailjs.send("service_4b371jn", "template_y0f3pw9", {
      customerName: name,
      customerEmail: email,
      voucherCode: voucherCode,
      walletAddress: walletAddress,
      businessName: businessName,
      businessEmail: businessEmail,
    })
    .then(response => {
      alert("Reward Submitted Successfully! Email sent.");
      resetFields();
      document.getElementById("rewards-screen").classList.add("hidden");
      document.getElementById("transaction-screen").classList.remove("hidden");

      // Populate transaction screen with the submitted data
      document.getElementById("transaction-name").textContent = name;
      document.getElementById("transaction-email").textContent = email;
      document.getElementById("transaction-voucher-code").textContent = voucherCode;
      document.getElementById("transaction-wallet").textContent = walletAddress;
      document.getElementById("transaction-business-name").textContent = businessName;
      document.getElementById("transaction-business-email").textContent = businessEmail;
    }, error => {
      alert("Email sending failed!");
    });
  } else {
    alert("Please fill all the fields.");
  }
});
