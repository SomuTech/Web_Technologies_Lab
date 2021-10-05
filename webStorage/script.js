function save() {
    if (typeof (Storage) !== "undefined") {
        console.log("jhgfds");
        var user = document.getElementById("username").value;
        var pwd = document.getElementById("password").value;

        var fname = document.getElementById("fname").value;
        var lname = document.getElementById("lname").value;

        //local storage
        localStorage.setItem("key1", user);
        localStorage.setItem("key2", pwd);
        //session storage
        sessionStorage.setItem("key1", fname);
        sessionStorage.setItem("key2", lname);
    }
}
function display(){
    let name = sessionStorage.getItem("key1") + " " + sessionStorage.getItem("key2");
    document.getElementById("name").innerText= name;
    
    document.getElementById("username").innerText = localStorage.getItem("key1");
    document.getElementById("password").innerText = localStorage.getItem("key2");
}