function save(){
    if(typeof(Storage) !== "undefined"){
        var user=document.getElementById("username").value;
        var pwd=document.getElementById("password").value;
        //local storage
        localStorage.setItem("key1",user);
        localStorage.setItem("key2",pwd);
        //session storage
        sessionStorage.setItem("key1",user);
        sessionStorage.setItem("key2",pwd);
    }
}

function display(){
    let answer1 = document.getElementById("firstName");
    let answer2 = document.getElementById("lastName");
    console.log(document.getElementById("fname").value);
    // answer1.innerText = document.getElementById("fname").value;
    // answer2.innerText = document.getElementById("lname").value;
    document.getElementById("username").innerHTML = localStorage.getItem("key1");
    document.getElementById("password").innerHTML = localStorage.getItem("key2");
}