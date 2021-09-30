function getDatabase() {
    if (typeof (Storage) == "undefined")
        alert("No local Storage");

    else if (window.openDatabase) {
        var db = openDatabase("Employee", "1.0", "CSSE Employee Database", 100000);

        db.transaction(function (tx) {
            var tid = document.getElementById('employeeTable');
            tx.executeSql("SELECT * FROM EMP", [],
                function (tx, rs) {
                    for (var i = 0; i < rs.rows.length; i++) {
                        item = rs.rows.item(i);
                        var emp_name = item['emp_name'];
                        var emp_id = item['emp_id'];
                        var department = item['department'];
                        var salary = item['salary'];
                        var address = item['address'];
                        tid.innerHTML += "<tr><td>" + emp_name + "</td><td>" + emp_id + "</td><td>" + department + "</td><td>" + salary + "</td><td>" + address + "</td></tr>";
                    }
                });
        });
    }
    else
        alert("Unable to open web sql database");
}   