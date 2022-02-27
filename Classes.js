"use strict";

var name_id = document.getElementById("name_id");
var surname_id = document.getElementById("surname_id");
var birth_date_id = document.getElementById("birth_date_id");
var phone_id = document.getElementById("phone_id");
var region_id = document.getElementById("region_id");
var selectedTown = region_id.options[region_id.selectedIndex].textContent;
var cathedra_id = document.getElementById("cathedra_id");
var cathedra_idValue = cathedra_id.value;
var position_id = document.getElementById("position_id");
var faculty_id = document.getElementById("faculty_id");
var course_id = document.getElementById("course_id");
var selectedValue = document.getElementById("selectBox");

const btn = document.querySelector('.form-control.btn-primary');
const persons = localStorage.getItem('persons') ? JSON.parse(localStorage.getItem('persons')) : []


function changeType() {
    var id = selectedValue.options[selectBox.selectedIndex].value;
    if (id == "1") {
        document.getElementById("facultyContainer").style.display = 'block';
        document.getElementById("courseContainer").style.display = 'block';
        document.getElementById("cathedraContainer").style.display = 'none';
        document.getElementById("positionContainer").style.display = 'none';
    }
    else {
        document.getElementById("facultyContainer").style.display = 'none';
        document.getElementById("courseContainer").style.display = 'none';
        document.getElementById("cathedraContainer").style.display = 'block';
        document.getElementById("positionContainer").style.display = 'block';
    }
}

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

    set name(name) {
        this.name = name;
    }
    set surname(surname) {
        this.surname = surname;
    }
    set birthday(birthday) {
        this.birthday = birthday;
    }
    set phone(phone) {
        this.phone = phone;
    }
    set location(location) {
        this.location = location;
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

    jsonToObject(json) {
        var obj = json;
        this.name = obj["name"];
        this.surname = obj["surname"];
        this.birthday = obj["birthday"];
        this.phone = obj["phone"];
        this.location = obj["location"];
        this.faculty = obj["faculty"];
        this.course = obj["course"];
    }

    set faculty(faculty) {
        this.faculty = faculty;
    }
    set course(course) {
        this.course = course;
    }
}

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

    jsonToObject(json) {
        var obj = json;
        this.name = obj["name"];
        this.surname = obj["surname"];
        this.birthday = obj["birthday"];
        this.phone = obj["phone"];
        this.location = obj["location"];
        this.cathedra = obj["cathedra"];
        this.position = obj["position"];
    }

    set position(_position) {
        this.position = _position;
    }

    set cathedra(_cathedra) {
        this.cathedra = _cathedra;
    }
}

changeType()

btn.addEventListener('click', () => {
    let person;

    if (selectedValue.value === 1) {
        person = new Student(
            name_id.value,
            surname_id.value,
            birth_date_id.value,
            phone_id.value,
            selectedTown,
            faculty_id.value,
            course_id.value
        );
    } else {
        person = new Teacher(
            name_id.value,
            surname_id.value,
            birth_date_id.value,
            phone_id.value,
            selectedTown,
            faculty_id.value,
            course_id.value
        );
    }

    persons.push(person)

    localStorage.setItem('persons', JSON.stringify(persons));
});