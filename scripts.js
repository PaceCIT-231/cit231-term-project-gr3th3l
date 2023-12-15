// Function to validate the form
function validateForm() {
  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var plantType = document.getElementById('plantType').value;
  var quantity = document.getElementById('quantity').value;
  var shippingAddress = document.getElementById('shippingAddress').value;

  // Simple validation, you can customize this based on your needs
  if (!name || !email || !plantType || !quantity || !shippingAddress) {
    alert('Please fill out all fields in the form.');
    return false;
  }

  // Additional validation logic can be added here

  return true;
}

// Function to toggle dark mode
function toggleDarkMode() {
  document.body.classList.toggle('dark-mode');
}

// Function to handle form submission
function handleFormSubmission(event) {
  event.preventDefault();

  // Your form submission logic here

  // Example: Call the validateForm function
  if (validateForm()) {
    // Your logic after successful form validation
    console.log('User is placing an order for exotic plants.');

    const userName = document.getElementById('name').value;
    const userEmail = document.getElementById('email').value;
    const plantType = document.getElementById('plantType').value;
    const quantity = document.getElementById('quantity').value;
    const shippingAddress = document.getElementById('shippingAddress').value;

    // Customize the purchase details
    let purchaseDetails = `Dear ${userName},\n\n`;
    purchaseDetails += `Thank you for placing an order with Rare Blossoms!\n\n`;
    purchaseDetails += `Order Summary:\n`;
    purchaseDetails += `Plant Type: ${plantType}\n`;
    purchaseDetails += `Quantity: ${quantity}\n\n`;
    purchaseDetails += `Total Amount: $${calculateTotalAmount(quantity).toFixed(2)}\n\n`;
    purchaseDetails += `Shipping Address:\n${shippingAddress}\n\n`;
    purchaseDetails += `Your order will be processed soon.\n\n`;
    purchaseDetails += `Best regards,\nThe Rare Blossoms Team`;

    // Display a confirmation popup
    if (confirm(purchaseDetails)) {
      // Clear the form after confirmation
      document.getElementById('plantOrderForm').reset();
    }
  }
}

// Function to calculate total amount based on quantity and plant type (you can customize this)
function calculateTotalAmount(quantity) {
  // Add your logic for calculating the total amount
  // ...

  // For example, a simple calculation based on quantity
  const plantPrice = 10; // Replace with your plant price
  return quantity * plantPrice;
}

// Event listener for form submission
var plantOrderForm = document.getElementById('plantOrderForm');
if (plantOrderForm) {
  plantOrderForm.addEventListener('submit', handleFormSubmission);
}

// Event listener for dark mode button
var darkModeButton = document.getElementById('darkModeButton');
if (darkModeButton) {
  darkModeButton.addEventListener('click', toggleDarkMode);
}
