function incrementValue() {
  var value = parseInt(document.getElementById("number").value, 10);
  value = isNaN(value) ? 0 : value;
  value++;
  document.getElementById("number").value = value;
}

function incrementValue2() {
  var value = parseInt(document.getElementById("number2").value, 10);
  value = isNaN(value) ? 0 : value;
  value++;
  document.getElementById("number2").value = value;
}

function incrementValue3() {
  var value = parseInt(document.getElementById("number3").value, 10);
  value = isNaN(value) ? 0 : value;
  value++;
  document.getElementById("number3").value = value;
}
