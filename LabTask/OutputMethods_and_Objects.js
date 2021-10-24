//functions and checkboxes
console.log("jhgsdg");
document.write("<br> Document.write() method");
document.getElementById("head").innerText = "Javascript Functions and Check Boxes";
document.getElementsByClassName("content").innerHTML = "content";
console.log("console.log() to get output in console")

function func1() {
    alert("function worked");
}

function func2() {
    var res = prompt("Your response:");
    document.getElementById("res").innerHTML = res;
}

function func3() {
    var res = confirm("Waiting for your response");
    if (res == true)
        res = "yes";
    else
        res = "no";
    document.getElementById("res1").innerHTML = res;
}

document.getElementById("head-1").innerHTML = "Javascript Events";
function show() {
    var fname = document.getElementById("fname").value;
    var lname = document.getElementById("lname").value;
    document.getElementById("name").innerHTML = fname + lname;
}

function show2() {
    document.getElementById("color").style.color = "red";
}
function show3() {
    document.getElementById("color").style.color = "black";
}
function show4() {
    var data = document.getElementById("input");
    document.getElementById("data").innerHTML = data.value;
}

//js objects
//object creation - 1
var student = {
    name: "Somasekhar",
    id: "1591",
    dept: "csse",
    sec: 'B'
};
document.getElementById("student").innerHTML = "student " + student.name + " belongs to " + student.dept;
//object creation -2
var student1 = {}
student1.name = "Dhana";
student1.id = "1595";
student1.dept = "cse";
document.getElementById("student").innerHTML = "student " + student1.name + " belongs to " + student1.dept;
//object creation - 3
var student2 = new Object();
student2.name = "Ganesh",
    student2.id = "15B4",
    student2.dept = "ece"
document.getElementById("student").innerHTML = "student " + student2.name + " belongs to " + student2.dept;

//objects containing functions
var student = {
    fname: "Somu",
    lname: "Tech",
    name: function () {
        return this.fname + this.lname;
    }
}
document.getElementById("student").innerHTML = student.name();

//objects containing inner objects
var student = {
    fname: "Somu",
    lname: "Tech",
    full_details: {
        id: "1591",
        dept: "csse"
    }
}
console.log(student.full_details.id)
document.getElementById("student").innerHTML = student.full_details.id();

