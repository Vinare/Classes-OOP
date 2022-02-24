"use strict";

function getCards(){
    var func = function() {
            if (this.readyState === 4 && this.status === 200) {
               var obj = JSON.parse(this.responseText);
               addTable(obj);
            }};
    GetAll(func);
}

function DeleteCard(id){
    var func = function() {
            if (this.readyState === 4 && this.status === 200) {
            var myTableDiv = document.getElementById("table_list");
                myTableDiv.innerHTML = "";
                getCards();
            }};
    Delete(id, func);
}

 function addTable(stock) {
    var myTableDiv = document.getElementById("table_list");
    var table = document.createElement('TABLE');
    var tableBody = document.createElement('TBODY');
    table.border = '1px';
    table.appendChild(tableBody);

    var heading = new Array();
    heading[0] = "Cathedra/Faculty";
    heading[1] = "Position/Course";
    heading[2] = "Name";
    heading[3] = "Surname";
    heading[4] = "Birth Date";
    heading[5] = "Phone";
    heading[6] = "Location";
    heading[7] = "Id";
    heading[8] = "Actions";

    var tr = document.createElement('TR');
    tableBody.appendChild(tr);
    for (var i = 0; i < heading.length; i++) {
        var th = document.createElement('TH');
        th.appendChild(document.createTextNode(heading[i]));
        tr.appendChild(th);
    }

    for (var i = 0; i < stock.length; i++) {
        var tr = document.createElement('TR');
        for (var key in stock[i]) {
            var td = document.createElement('TD');
            td.width = "120";
            td.appendChild(document.createTextNode(stock[i][key]));
            tr.appendChild(td);
        }

        var div = document.createElement('div');
        var link = document.createElement("a");
        var linkText = document.createTextNode("Edit ");
        var link2 = document.createElement("a");
        var linkText2 = document.createTextNode(" Delete");
        link.title = "Edit";
        link.href = "index_2.html?id=" + stock[i][key] ;
        link2.href = "javascript:DeleteCard("+ stock[i][key] + ");";
        link2.title = "Delete";

        link.appendChild(linkText);
        link2.appendChild(linkText2);
        div.appendChild(link);
        div.appendChild(link2);
        tr.appendChild(div);
        tableBody.appendChild(tr);
    }
    myTableDiv.appendChild(table);
}
