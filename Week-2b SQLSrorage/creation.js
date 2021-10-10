function save() {
    if (typeof (Storage) === "undefined")
      alert("No local Storage");
  
    else if (window.openDatabase) {
      var db = openDatabase("Student", "1.0", "CSSE Student Data", 100000);
  
      db.transaction(function (tx) {
        tx.executeSql("CREATE TABLE student(fname text, lname text, pincode number, phone number,dob date,address text,email text,username text,password text)", [],
          function (tx) {
            alert("Student Table created");
          });
      });
  
      db.transaction(function (tx) {
        tx.executeSql("INSERT INTO student(fname,lname, pincode,phone,dob,address,email,username,password) values(?,?,?,?,?,?,?,?,?)",
          [fname.value,lname.value,pincode.value,phone.value,dob.value,address.value,email.value,username.value,password.value],
          function (tx, result) {
            alert("Record Created");
          });
      });
    }
    else
      alert("Unable to open web sql database");
  }
  98