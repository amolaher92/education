<?php
$Number = 213; //Integer
var_dump($Number);

$String = "Hello Amol"; //string
var_dump($String);

$Bool = true; //Boolean
var_dump($Bool);

$Float = 23.25; //float
var_dump($Float);

#Indexed Array
$myArray = array("A","B","C",1,2);
var_dump($myArray);
print_r($myArray);

#Indexed Array
$myArray1 = [1,2,3,4];
var_dump($myArray1);
print_r($myArray1);

#Associative Array
$newArray = array(
    "A" => "Apple",
    "B" => "Ball",
    "C" => "Cat"
);
var_dump($newArray);
print_r($newArray);

#Associative Array
$newArray1 = [ 1 => "Apple", 2 => "Ball", 3 => "Cat"];
var_dump($newArray1);
print_r($newArray1);

#OOPS
class test{
    function hello(){
        echo "Hello Amol \n";
    }
}

$obj = new test();
var_dump($obj);
$obj->hello();

class testsStatic{
    public static function testStatic(){
        echo "Hello Static World \n";
    }
}
testsStatic::testStatic();

class propertyPublic{
    
    public $name;

    public function setName($name){
        $this->name = $name;
    }

    public function getName(){
        return $this->name;
    }
}

$objName = new propertyPublic();
$objName->setName("Amol");
$objName->getName();
?>
