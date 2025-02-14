document.getElementById("checkinForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const position = document.getElementById("position").value;
    const checkinTime = document.getElementById("checkinTime").value;
    const contact = document.getElementById("contact").value;
    const travelMethod = document.getElementById("travelMethod").value;
    const homeBase = document.getElementById("homeBase").value;
    const remarks = document.getElementById("remarks").value;

    console.log("Check-in Details:");
    console.log("Name:", name);
    console.log("Position:", position);
    console.log("Check-in Time:", checkinTime);
    console.log("Contact:", contact);
    console.log("Travel Method:", travelMethod);
    console.log("Home Base:", homeBase);
    console.log("Remarks:", remarks);

    alert("Form submitted successfully!");
});
