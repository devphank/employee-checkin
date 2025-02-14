# employee-checkin
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Employee Check-In</title>
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
        input, select, textarea {
            width: 100%;
            padding: 8px;
            margin-top: 5px;
            border: 1px solid #ccc;
            border-radius: 4px;
        }
        button {
            margin-top: 20px;
            padding: 10px;
            background: #007bff;
            color: white;
            border: none;
            cursor: pointer;
            width: 100%;
        }
        button:hover {
            background: #0056b3;
        }
    </style>
</head>
<body>

<div class="container">
    <h2>Employee Check-In Form</h2>
    
    <label for="name">Name:</label>
    <input type="text" id="name" placeholder="First Last">

    <label for="position">Position/Title:</label>
    <input type="text" id="position" placeholder="Your Position">

    <label for="contact">Primary Contact (Phone/Email):</label>
    <input type="text" id="contact" placeholder="Cell Phone or Email">

    <label for="checkin">Check-In Date & Time:</label>
    <input type="datetime-local" id="checkin">

    <label for="travel">Method of Travel:</label>
    <select id="travel">
        <option value="POV">POV</option>
        <option value="AOV">AOV</option>
        <option value="Bus">Bus</option>
        <option value="Air">Air</option>
        <option value="Other">Other</option>
    </select>

    <label for="homebase">Home Base:</label>
    <input type="text" id="homebase" placeholder="Enter Home Base">

    <label for="remarks">Remarks (Optional):</label>
    <textarea id="remarks" rows="3" placeholder="Any additional notes..."></textarea>

    <h3>Check-Out</h3>

    <label for="checkout">Check-Out Date & Time:</label>
    <input type="datetime-local" id="checkout">

    <label for="signature">Prepared By (Signature):</label>
    <input type="text" id="signature" placeholder="Your Name">

    <button onclick="submitForm()">Submit</button>
    <button onclick="printForm()">Print</button>
</div>

<script>
    function submitForm() {
        let name = document.getElementById("name").value;
        let position = document.getElementById("position").value;
        let contact = document.getElementById("contact").value;
        let checkin = document.getElementById("checkin").value;
        let travel = document.getElementById("travel").value;
        let homebase = document.getElementById("homebase").value;
        let remarks = document.getElementById("remarks").value;
        let checkout = document.getElementById("checkout").value;
        let signature = document.getElementById("signature").value;

        if (!name || !position || !contact || !checkin || !homebase || !signature) {
            alert("Please fill out all required fields.");
            return;
        }

        let formData = {
            Name: name,
            Position: position,
            Contact: contact,
            "Check-In": checkin,
            "Method of Travel": travel,
            "Home Base": homebase,
            Remarks: remarks,
            "Check-Out": checkout,
            Signature: signature
        };

        // Store in Local Storage
        localStorage.setItem("employeeCheckIn", JSON.stringify(formData));

        alert("Form submitted successfully!");
        console.log("Form Data Saved:", formData);
    }

    function printForm() {
        window.print();
    }
</script>

</body>
</html>
