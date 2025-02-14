# employee-checkin
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Employee Check-In Form</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 20px;
            padding: 20px;
            background-color: #f4f4f4;
        }
        .container {
            max-width: 600px;
            background: white;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 0 10px rgba(0,0,0,0.1);
        }
        label {
            font-weight: bold;
            display: block;
            margin-top: 10px;
        }
        input, select {
            width: 100%;
            padding: 8px;
            margin-top: 5px;
            border: 1px solid #ccc;
            border-radius: 4px;
        }
        button {
            margin-top: 20px;
            padding: 10px;
            background: #28a745;
            color: white;
            border: none;
            cursor: pointer;
            width: 100%;
        }
        button:hover {
            background: #218838;
        }
    </style>
</head>
<body>

<div class="container">
    <h2>Employee Check-In/Check-Out</h2>
    
    <label for="name">Name:</label>
    <input type="text" id="name" placeholder="First Last">
    
    <label for="position">Position/Title:</label>
    <input type="text" id="position" placeholder="Section/Unit">
    
    <label for="checkin">Check-In Date & Time:</label>
    <input type="datetime-local" id="checkin">
    
    <label for="contact">Primary Contact (Phone/Email):</label>
    <input type="text" id="contact" placeholder="Cell Phone #">
    
    <label for="method">Method of Travel:</label>
    <select id="method">
        <option value="AOV">AOV</option>
        <option value="POV">POV</option>
        <option value="Bus">Bus</option>
        <option value="Air">Air</option>
        <option value="Other">Other</option>
    </select>
    
    <label for="homebase">Home Base:</label>
    <input type="text" id="homebase" placeholder="SJS">
    
    <label for="remarks">Remarks:</label>
    <textarea id="remarks" rows="3" placeholder="Additional notes..."></textarea>
    
    <h3>Check-Out Section</h3>
    
    <label for="checkout">Check-Out Date & Time:</label>
    <input type="datetime-local" id="checkout">
    
    <label for="signature">Prepared By (Signature):</label>
    <input type="text" id="signature" placeholder="Your Name">
    
    <button onclick="submitForm()">Submit</button>
</div>

<script>
    function submitForm() {
        let name = document.getElementById("name").value;
        let position = document.getElementById("position").value;
        let checkin = document.getElementById("checkin").value;
        let contact = document.getElementById("contact").value;
        let method = document.getElementById("method").value;
        let homebase = document.getElementById("homebase").value;
        let remarks = document.getElementById("remarks").value;
        let checkout = document.getElementById("checkout").value;
        let signature = document.getElementById("signature").value;

        if (!name || !position || !checkin || !contact || !method || !homebase || !signature) {
            alert("Please fill out all required fields.");
            return;
        }

        let formData = {
            Name: name,
            Position: position,
            "Check-In": checkin,
            Contact: contact,
            "Method of Travel": method,
            "Home Base": homebase,
            Remarks: remarks,
            "Check-Out": checkout,
            Signature: signature
        };

        console.log("Form Submitted", formData);
        alert("Form submitted successfully!");
    }
</script>

</body>
</html>
