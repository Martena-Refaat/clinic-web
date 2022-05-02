function clear_input() {
    $("#date").val('');
    $("#description").val('');
    $("#start_time").val('');
    $("#end_time").val('');
    $("#submit").prop('disabled', true);
}

//new opp
function addRow() {
          
    var date = document.getElementById("date");
    var description = document.getElementById("description");
    var start_time = document.getElementById("start_time");
    var end_time = document.getElementById("end_time");
    var table = document.getElementById("myTableData");
 
    var rowCount = table.rows.length;
    var row = table.insertRow(rowCount);
 

    

    row.insertCell(0).innerHTML= '<input type="button" value = "Delete" onClick="Javacsript:deleteRow(this)">' ;
    localStorage.setItem("description", row.insertCell(1).innerHTML= description.value);  
   localStorage.setItem("start_time",row.insertCell(2).innerHTML= start_time.value);
   localStorage.setItem("end_time", row.insertCell(3).innerHTML= end_time.value);
   localStorage.setItem("date",row.insertCell(4).innerHTML= date.value);

   
 
}
 
function deleteRow(obj) {
      
    var index = obj.parentNode.parentNode.rowIndex;
    var table = document.getElementById("myTableData");
    table.deleteRow(index);
    
}
