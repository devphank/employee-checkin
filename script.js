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

    // Save to Local Storage
    localStorage.setItem("employeeCheckIn", JSON.stringify(formData));

    alert("Form submitted successfully!");
    console.log("Form Data Saved:", formData);
}

function printForm() {
    window.print();
}
