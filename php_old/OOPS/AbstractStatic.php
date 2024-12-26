<?php
class StaticClass{
	public static $name = "This is Static Properties";
	public static function getName(){
		echo self::$name."\n";
	}
}
echo StaticClass::$name."\n";
echo "This Static Method RUN ";StaticClass::getName();

/*Abtract class methods and Method overloading*/
abstract class Car{

	public $name;
	public function __construct($name){
		$this->name = $name;
	}
	abstract protected function Intro();
}

class Vitro extends Car{

	public function Intro(){
		echo $this->name."\n";
	}
}
$vitro = new Vitro("Volvo");
$vitro->Intro();

class Maruti extends Car{
	public function Intro(){
		echo $this->name."\n";
	}
}
$Maruti = new Maruti("Suzuki");
$Maruti->Intro();