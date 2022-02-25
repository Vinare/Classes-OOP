"use strict";

var name_id = document.getElementById("name_id");
  var surname_id = document.getElementById("surname_id");
  var birth_date_id = document.getElementById("birth_date_id");
  var phone_id = document.getElementById("phone_id");
  var region_id = document.getElementById("region_id");
  var selectedTown = region_id.options[region_id.selectedIndex].textContent;
  var cathedra_id = document.getElementById("cathedra_id");
  var position_id = document.getElementById("position_id");
  var faculty_id = document.getElementById("faculty_id");
  var course_id = document.getElementById("course_id");
//   var id = getParam("id");
var selectedValue = document.getElementById("selectBox");


class Human {
    constructor(name, surname, birthday, phone, location) {
        this._name = name;
        this._surname = surname;
        this._birthday = birthday;
        this._phone = phone;
        this._location = location;
    }

    sayHello() {
        console.log(`Привет! Меня зовут  ${this._name}`);
    }

    get name() {
        return this._name;
    }
    get surname() {
        return this._surname;
    }
    get birthday() {
        return this._birthday;
    }
    get phone() {
        return this._phone;
    }
    get location() {
        return this._location;
    }
    get ID() {
        return this._humanId;
    }

    set name(_name) {
        this.name = this._name;
    }
    set surname(_surname) {
        this.surname = this._surname;
    }
    set birthday(_birthday) {
        this.birthday = this._birthday;
    }
    set phone(_phone) {
        this.phone = this._phone;
    }
    set location(_location) {
        this.location = this._location;
    }
}   

class Student extends Human {
    constructor(name, surname, birthday, phone, location, faculty, course) {
        super(name, surname, birthday, phone, location);

        this._faculty = faculty;
        this._course = course;
    }
    
    get faculty() {
        return this._faculty;
    }

    get course() {
        return this._course;
    }

    set faculty(_faculty) {
        this.faculty = this._faculty;
    }
    set course(_course) {
        this.course = this._course;
    }
}

const student1 = new Student(name_id.value, surname_id.value, birth_date_id.value, phone_id.value, selectedTown, faculty_id.value, course_id.value);

console.log(student1);

class Teacher extends Human {
    constructor(name, surname, birthday, phone, location, cathedra, position) {
    super(name, surname, birthday, phone, location);

    this._cathedra = cathedra;
    this._position = position;
    }

    get position() {
        return this._position;
    }
    get cathedra() {
        return this._cathedra;
    }

    set position(_position) {
        this.position = _position;
    }

    set cathedra(_cathedra) {
        this.cathedra = _cathedra;
    }
}

const teacher1 = new Teacher();

const btn = document.querySelector('.form-control.btn-primary');

btn.addEventListener('click', () => {
  localStorage.setItem('students', JSON.stringify(student1));
});