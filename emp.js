var arr1 = [];

function addItem() {
  var lists = document.getElementById("listItems");
  var inputdata = "👉 " + document.getElementById("inputdata").value;
  var li = document.createElement("li");

  //   alert("'jfhjd");
  arr1.push(inputdata);
  console.log(arr1);
  if (inputdata === "") {
    alert("Enter the Text First");
  } else {
    li.setAttribute("id", inputdata);
    li.appendChild(document.createTextNode(inputdata));
    lists.appendChild(li);
    arr1.push(inputdata);
    // console.log(arr1);
  }
}
