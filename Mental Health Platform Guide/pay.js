// JavaScript File: script.js
function makePayment(method, number) {
    const popup = document.getElementById('popup');
    const paymentMethod = document.getElementById('paymentMethod');
    const paymentNumber = document.getElementById('paymentNumber');

    paymentMethod.textContent = `${method} Payment`;
    paymentNumber.textContent = number;

    popup.classList.remove('hidden');
}

function closePopup() {
    const popup = document.getElementById('popup');
    popup.classList.add('hidden');
}

function verifyPayment() {
    const transactionId = document.getElementById('transactionId').value;
    const paymentResult = document.getElementById('paymentResult');

    if (transactionId.trim() === '') {
        alert('Please enter a valid Transaction ID.');
        return;
    }

    paymentResult.textContent = `Transaction ID ${transactionId} is being verified...`;

    // Simulate verification process
    setTimeout(() => {
        paymentResult.textContent = `Transaction ID ${transactionId} has been verified.`;
        closePopup();
    }, 2000);
}
