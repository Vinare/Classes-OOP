"use strict";

var nameValue = document.getElementById("name_id").value;
  var surname_id = document.getElementById("surname_id").value;
  var birth_date_id = document.getElementById("birth_date_id").value;
  var phone_id = document.getElementById("phone_id").value;
  var region_id = document.getElementById("region_id");
  var selectedTown = region_id.options[region_id.selectedIndex].textContent;
  var cathedra_id = document.getElementById("cathedra_id").value;
  var position_id = document.getElementById("position_id").value;
  var faculty_id = document.getElementById("faculty_id").value;
  var course_id = document.getElementById("course_id").value;
  var id = getParam("id");
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
        this.name = _name;
    }
    set surname(_surname) {
        this.surname = _surname;
    }
    set birthday(_birthday) {
        this.birthday = _birthday;
    }
    set phone(_phone) {
        this.phone = _phone;
    }
    set location(_location) {
        this.location = _location;
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

    set faculty(faculty) {
        this.faculty.push(faculty);
    }
    set course(course) {

        this.course.push(course);
    }
}

const student = new Student(nameValue, surname_id, birth_date_id, phone_id, selectedTown, faculty_id, course_id);

console.log(student);

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

    set position(position) {
        this.position.push(position);
    }

    set cathedra(cathedra) {
        this.cathedra.push(cathedra);
    }
}

const teacher = new Teacher();

const btn = document.querySelector('.form-control.btn-primary');

btn.addEventListener('click', () => {
  localStorage.setItem('students', JSON.stringify(student));
});