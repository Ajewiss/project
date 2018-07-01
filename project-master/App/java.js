function insRow(id="list") {
    var x = document.getElementById("list").insertRow(0);
    var y = x.insertCell(0);
    var z = x.insertCell(1);
    y.innerHTML = z.innerHTML = "New";
}


