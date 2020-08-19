function addItem() {
  var lists = document.getElementById("listItems");
  var inputdata = document.getElementById("inputdata");
  var li = document.createElement("li");

  li.setAttribute("id", inputdata.value);
  li.appendChild(document.createTextNode(inputdata.value));
  lists.appendChild(li);
}
