
$.get("../components/navbar.html", function (data) {
    $("#navbar").replaceWith(data);
});
$.get("../components/footer.html", function (data) {
    $("#footer").replaceWith(data);
});

$(document).ready(function () {
    var flavors = ["Original", "Black Sesame", "Churro", "Matcha", "Taro", "Ube", "Chocolate", "Strawberry", "Pistachio"];
    var select = document.getElementById('flavors');
    for (let flavor of flavors) {
        var flavorOption = document.createElement("option");
        flavorOption.value = flavor;
        flavorOption.innerHTML = flavor;
        select.appendChild(flavorOption);
    }
});

function validateInputs() {
    var quantityField = document.getElementById("quantity").value;
    var flavors = document.getElementById("flavors");
    var value = flavors.value;
    var flavor = flavors.options[flavors.selectedIndex].text;

    if (flavor == '-Select-'){
        return "Must select a flavor!";
    }
    else if (isNaN(quantityField)){
        return "Quantity must be a valid number!";
    }
    else if (quantityField <= 0){
        return "Quantity must be greater than 0!";
    }
    else{
        //valid, set errorMsg to empty string to clear previous error
        return "";
    }
}

function addRow() {
    var errorMsg = "";
    errorMsg = validateInputs();
    if (errorMsg == "") {
        var table = document.querySelector("#mochiTable tbody");
        var row = table.insertRow();
        var cell1 = row.insertCell();
        var cell2 = row.insertCell();
        var flavors = document.getElementById("flavors");
        var value = flavors.value;
        cell1.textContent = flavors.options[flavors.selectedIndex].text;
        cell2.textContent = document.getElementById("quantity").value;

        //enable Add To Cart "button"
        document.getElementById('fakeButton').style.backgroundColor = "#db2777";

        //clear selection
        $("#flavors option").prop("selected", function () {
            return this.defaultSelected;
        })
    }
    else{
        alert(errorMsg);
        
    }
    //clear quantity no matter what
    $("#quantity").val(1);
}