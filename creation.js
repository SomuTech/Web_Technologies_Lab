function save()
      {

        if(typeof(Storage) === "undefined")
          alert("No local Storage");
        else if(window.openDatabase)          
        {      
          var db = openDatabase("CSSE","1.0","CSSE Employee Database",100000);
          db.transaction(function(tx)
          {
            tx.executeSql("CREATE TABLE EMP(name text,emp_id text,department text,salary text,address text)",[],
              function(tx)
              {
                alert("EMP Table created");
              });
          });

          db.transaction(function(tx){
            
            tx.executeSql("INSERT INTO EMP(name,emp_id,department,salary,address) values(?,?,?,?,?)",
            [name,emp_id,department,salary,address],
                function(tx,result)
		        {
                    alert("Record Created");
                });
            });
        }  
        else
          alert("Unable to open websql database");   
      }