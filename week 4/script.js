function validateForm()
{
    var fname = document.getElementById("fname").value;
    var exp = /^[A-Za-z]+$/; 
    if(fname==null || fname==" ")
        alert("First Name can't be Empty!");
    else if(! fname.match(exp))
        alert("First Name must be in Alphabets");

    var lname = document.getElementById("lname").value;
    if(lname==null || lname==" ")
        alert("Lat Name can't be Empty!");
    else if(! lname.match(exp))
        alert("Last Name must be in Alphabets");

    var username = document.getElementById("username").value;
    var exp = /^[A-Za-z0-9_]+$/; 
    if(username==null || username==" ")
        alert("Username can't be Empty!");
    else if(! username.match(exp))
        alert("UserName should be in Alphabets, Numbers and _");
}