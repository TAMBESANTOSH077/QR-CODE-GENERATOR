const generateBtn = document.getElementById("generateBtn");
const platformInput = document.getElementById("platformInput");
const qrImage = document.getElementById("qrImage");
const downloadBtn = document.getElementById("downloadBtn");

generateBtn.addEventListener("click", () => {
  const input = platformInput.value.trim();

  if (!input) {
    alert("Please enter a valid URL or link.");
    return;
  }

  // Define base URL for QR Code API
  const qrApiBase = "https://api.qrserver.com/v1/create-qr-code/";

  // Use the entered link for the QR Code
  const qrApiUrl = `${qrApiBase}?data=${encodeURIComponent(input)}&size=300x300&body=circle&bgcolor=FFFFFF`;

  // Set the QR code image
  qrImage.src = qrApiUrl;
  qrImage.onload = () => {
    downloadBtn.style.display = "block"; // Show download button
    downloadBtn.href = qrApiUrl; // Set download link
  };
});
