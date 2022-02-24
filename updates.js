"use strict";

 var name_id = document.getElementById("name_id");
  var surname_id = document.getElementById("surname_id");
  var birth_date_id = document.getElementById("birth_date_id");
  var phone_id = document.getElementById("phone_id");
  var region_id = document.getElementById("region_id");
  var cathedra_id = document.getElementById("cathedra_id");
  var position_id = document.getElementById("position_id");
  var faculty_id = document.getElementById("faculty_id");
  var course_id = document.getElementById("course_id");
  var id = getParam("id");


function Save(type){
  var card = CardFromForm(type);
  if(id !== null) Put(id,card);
  else Post(card);
}

function CardFromForm(type){
  if(type === '2'){
      var card = new Teacher(cathedra_id.value, position_id.value);
  }
  else{
      var card = new Students(faculty_id.value, course_id.value);
  }
  var selectedRegion= region_id.options[selectBox.selectedIndex].textContent;
  card.setName(name_id.value);
  card.setSurname(surname_id.value);
  card.setBirth_day(birth_date_id.value);
  card.setPhone(phone_id.value);
  card.setLocation(selectedRegion);
  return card;
}

function FormFromClass(card, type){
  if(type === '0'){
      cathedra_id.value = card.getCathedra();
      position_id.value = card.getPosition();
  }
  else{
      faculty_id.value = card.getFaculty();
      course_id.value = card.getCourse();
  }
  selectedValue.selectedIndex = type;
  name_id.value = card.getName();
  surname_id.value = card.getSurname();
  birth_date_id.value = card.getBirth_day();
  phone_id.value  = card.getPhone();
  region_id.value = card.getLocation();
}

function getParam(name) {
  var param = location.search.split(name + '=')[1];
  return param !== undefined ? param.split('&')[0] : null;
}

function changeType() {
  var id = selectedValue.options[selectBox.selectedIndex].value;
  if(id == "1"){
  document.getElementById("facultyContainer").style.display='block';
  document.getElementById("courseContainer").style.display='block';
  document.getElementById("cathedraContainer").style.display='none';
  document.getElementById("positionContainer").style.display='none';
}
  else{
  document.getElementById("facultyContainer").style.display='none';
  document.getElementById("courseContainer").style.display='none';
  document.getElementById("cathedraContainer").style.display='block';
  document.getElementById("positionContainer").style.display='block';
  }
}

function GetCard(){
  if(id !== null){
    var func = function() {
        if (this.readyState === 4 && this.status === 200) {
          var obj = JSON.parse(this.responseText);
          if(obj["cathedra"] !== undefined) {
               var card = new Teacher();
                card.jsonToObject(obj);
                FormFromClass(card,0);
                changeType();
          }
          else{
              var card = new Students();
               card.jsonToObject(obj);
                FormFromClass(card,1);
                changeType();
          }
         }};
    Get(id, func);
}}
