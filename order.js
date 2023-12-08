var isOrderAdded = false;

function openPopup() {
    document.getElementById("overlay").style.display = "flex";
}

function closePopup() {
    document.getElementById("overlay").style.display = "none";
}

function addItem() {
    var foodItem = document.getElementById("foodItem");
    var quantity = document.getElementById("quantity");

    var orderSummary = document.getElementById("orderSummary");
    var orderTableBody = document.getElementById("orderTableBody");

    var item = document.createElement("p");
    item.textContent = foodItem.value + ": " + "quantity " + quantity.value;
    orderSummary.appendChild(item);

    var tableRow = document.createElement("tr");
    var descriptionCell = document.createElement("td");
    var quantityCell = document.createElement("td");

    descriptionCell.textContent = foodItem.value;
    quantityCell.textContent = quantity.value;

    tableRow.appendChild(descriptionCell);
    tableRow.appendChild(quantityCell);

    orderTableBody.appendChild(tableRow);

    foodItem.value = "";
    quantity.value = "";

    // Automatically submit the order after adding an item
    submitOrder();
}

function submitOrder() {
    var foodItem = document.getElementById("foodItem").value;
    var quantity = document.getElementById("quantity").value;
    var orderData = foodItem + ":" + quantity;

    // Use AJAX to send data to the Arduino (replace with your actual endpoint)
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "http://arduino_ip_address/arduino_endpoint?data=" + orderData, true);
    xhr.send();
}

function resetForm() {
    // Clear order summary
    var orderSummary = document.getElementById("orderSummary");
    orderSummary.innerHTML = "<h2>Order Summary</h2>";

    // Clear order table
    var orderTableBody = document.getElementById("orderTableBody");
    orderTableBody.innerHTML = "";

    // Close the popup
    closePopup();
}

