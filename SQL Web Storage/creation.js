function save() {
  if (typeof (Storage) === "undefined")
    alert("No local Storage");

  else if (window.openDatabase) {
    var db = openDatabase("Employee", "1.0", "CSSE Employee Data", 100000);

    db.transaction(function (tx) {
      tx.executeSql("CREATE TABLE EMP(emp_name text,emp_id text,department text,salary text,address text)", [],
        function (tx) {
          alert("EMP Table created");
        });  
    });

    db.transaction(function (tx) {
      tx.executeSql("INSERT INTO EMP(emp_name,emp_id,department,salary,address) values(?,?,?,?,?)",
        [emp_name.value, emp_id.value, department.value, salary.value, address.value],
        function (tx, result) {
          alert("Record Created");
        });
    });
  }
  else
    alert("Unable to open web sql database");
}