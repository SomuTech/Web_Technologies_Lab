<!DOCTYPE html>
<html lang="en">
<head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Basic PHP</title>
        <style>
                .container{
                        border: 2px solid black;
                        padding: 10px;
                }
        </style>
</head>
<body>
        <div class="container">
                <h1>Data Types</h1>
                <?php
                        echo "hello<br>";
                        print "master...!<br>";
                        $name = "Somasekhar";
                        $id = "091";
                        $num1 = 565.90;
                        $num2 = 76;
                        echo $num1 + $num2."<br>";
                        echo "$name with id: $id<br>";
                        print '$name with $id<br>';
                        echo 60+9*40-10;
                        echo "<br>my name is: "."somasekhar<br>";

                        // Strings
                        $str = "  Chusi raase vadu pedha sunta...!  ";
                        echo $str;
                        $str = trim($str);
                        echo "<br>";
                        echo substr($str,16);
                        echo "<br>";
                        echo strpos($str,"raase");
                        echo "<br>";
                        echo strtoupper($str);

                ?> 
        </div>
        <br>
        <div class="container">
                <h1>Control Structure</h1>
                <h3>if - else if - else</h3>
                <?php
                        $a = 20; $b = 30; $c = 50;
                        if($c>$a && $c>$b){
                                echo "c is greatest";
                        }
                        else if ($b>$a && $b>$c){
                                echo "b is greatest";
                        }
                        else
                                echo "a is greatest";
                ?>
                <h3>for loop</h3>
                <?php
                        for($i = 0; $i<10; $i++){
                                echo "$i ";
                        }
                ?>
                <h3>foreach loop</h3>
                <?php
                       $arr = array(1,2,3,4,5);
                       foreach($arr as $num)
                                echo "$num ";
                ?>
                <h3>Switch case </h3>
                <?php 
                        switch("A"){
                                case "A":
                                        echo "First Letter";
                                        break;
                                case "B":
                                        echo "Second Letter";
                                        break;
                                case "C":
                                        echo "Third Letter";
                                        break;
                                default:
                                        echo "not matched..!";
                        }
                ?>
                <h3>while loop</h3>
                <?php 
                        $i = 10;
                        while($i>0){
                                echo "number: ".--$i."<br>";
                        }
                ?>
        </div>
        <br>
        <div class="container">
                <h1>Functions</h1>
                <?php
                        function Addition(){
                                $a = 30; $b = 50;
                                return $a+$b;
                        }
                        echo Addition();

                        function Addition1($a,$b){
                                echo "<br>sum is :".$a+$b;
                        }
                        Addition1(10,20);
                ?>
        </div>
        <br>
        <div class="container">
                <h1>Arrays</h1>
                <?php
                        //indexed array
                        $arr =array(10,20,30,40,50);
                        for($i=0; $i<count($arr); $i++)
                                echo "$arr[$i] ";
                        
                        echo $arr[4]; 

                        $arr2[0] = "solo";
                        $arr2[1] = "somu";
                        echo "<br>";
                        //Associative arrays
                        $arr3 =array("fname"=>"Rohith","lname"=>"sharma");
                        echo "$arr3[fname] $arr3[lname]<br>";

                        //Multi Dimensional arrays
                        $arr4 =array(array(10,20,30,40),
                                     array(40,50,60,70),
                                     array(50,70,90,110)
                                );
                        for($r=0; $r<3; $r++){
                                for($c=0; $c<4; $c++){
                                        echo $arr4[$r][$c]." ";
                                }
                                echo "<br>";
                        }
                ?>
        </div>
</body>
</html>

