# index.html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Employee Check-In</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>

<div class="container">
    <h2>Employee Check-In Form</h2>
    
    <label for="name">Name:</label>
    <input type="text" id="name" placeholder="First Last" required>

    <label for="position">Position/Title:</label>
    <input type="text" id="position" placeholder="Your Position" required>

    <label for="contact">Primary Contact (Phone/Email):</label>
    <input type="text" id="contact" placeholder="Cell Phone or Email" required>

    <label for="checkin">Check-In Date & Time:</label>
    <input type="datetime-local" id="checkin" required>

    <label for="travel">Method of Travel:</label>
    <select id="travel">
        <option value="POV">POV</option>
        <option value="AOV">AOV</option>
        <option value="Bus">Bus</option>
        <option value="Air">Air</option>
        <option value="Other">Other</option>
    </select>

    <label for="homebase">Home Base:</label>
    <input type="text" id="homebase" placeholder="Enter Home Base" required>

    <label for="remarks">Remarks (Optional):</label>
    <textarea id="remarks" rows="3" placeholder="Any additional notes..."></textarea>

    <h3>Check-Out</h3>

    <label for="checkout">Check-Out Date & Time:</label>
    <input type="datetime-local" id="checkout" required>

    <label for="signature">Prepared By (Signature):</label>
    <input type="text" id="signature" placeholder="Your Name" required>

    <button onclick="submitForm()">Submit</button>
    <button onclick="printForm()">Print</button>
</div>

<script src="script.js"></script>

</body>
</html>
