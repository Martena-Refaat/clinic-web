let logoutBtn = document.querySelector("#logout");
logoutBtn.addEventListener("click", function () {
    localStorage.clear();
    setTimeout(() => {
      window.location = "signup.html";
    }, 1500);
  });
  //new patient

  function addRow() {
          
    var myName = document.getElementById("name");
    var date = document.getElementById("date");
    var phonenum = document.getElementById("phone-num");
    var email = document.getElementById("email");
    var age = document.getElementById("age");
    var table = document.getElementById("myTableData");
 
    var rowCount = table.rows.length;
    var row = table.insertRow(rowCount);
 

    setTimeout(() => {
      window.location = "newbook.html";
    }, 1500);


    row.insertCell(0).innerHTML= '<input type="button" value = "Delete" onClick="Javacsript:deleteRow(this)">' ;
    localStorage.setItem("name", row.insertCell(1).innerHTML= myName.value);  
   localStorage.setItem("birdthdate",row.insertCell(2).innerHTML= date.value);
   localStorage.setItem("phone", row.insertCell(3).innerHTML= phonenum.value);
   localStorage.setItem("email",row.insertCell(4).innerHTML= email.value);
   localStorage.setItem("age", row.insertCell(5).innerHTML= age.value);

   
 
}
 
function deleteRow(obj) {
      
    var index = obj.parentNode.parentNode.rowIndex;
    var table = document.getElementById("myTableData");
    table.deleteRow(index);
    
}















 

