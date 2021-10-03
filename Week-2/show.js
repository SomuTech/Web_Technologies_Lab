function getDatabase() {
    if (typeof (Storage) == "undefined")
        alert("No local Storage");

    else if (window.openDatabase) {
        var db = openDatabase("Student", "1.0", "CSSE Employee Database", 100000);

        db.transaction(function (tx) {
            var tid = document.getElementById('studentTable');
            tx.executeSql("SELECT * FROM student", [],
                function (tx, rs) {
                    for (var i = 0; i < rs.rows.length; i++) {
                        item = rs.rows.item(i);
                        var fname = item['fname'];
                        var lname = item['lname'];
                      //  var gender = item['gender'];
                        var pincode = item['pincode'];
                        var phone = item['phone'];
                        var dob = item['dob'];
                        var email = item['email'];
                        var username = item['username'];
                       // var password = item['password'];
                        tid.innerHTML += "<tr><td>" + fname+" "+ lname + "</td><td>" + pincode +
                         "</td><td>" + phone + "</td><td>" + dob + "</td><td>" + email + "</td><td>" + username + "</td></tr>";
                    }
                });
        });
    }
    else
        alert("Unable to open web sql database");
}   
