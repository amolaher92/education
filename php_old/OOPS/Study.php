<?php
//Simple Class with constructor and distructor
/*
class Study{
	//constrcutor method
	public function __construct(){
		echo "This is Constructor written\n";
	}
	//destructor method
	public function __destruct(){
		echo "This is destructor written\n";
	}
}
$study = new Study();*/

//Simple Access Modifier properties
/*class Study{

	public $public;
	protected $protected;
	private $private = "This is Private Properties";

	public function getName(){
		echo $this->private."\n";	
	}
}
class Exam extends Study{
	
	public function __construct($name){
		$this->protected = $name;
		echo "This is private properties use to inheritance\n";
		$this->getName();
	}
	public function Inheritance(){
		echo $this->public."\n";
		echo $this->protected."\n";

	}
}

$study = new Exam("This is protected properties");
$study->public = "Class Inheritance Study class Properties";
$study->Inheritance();*/

//Simple class to get Constant properties
class Study{
	const SERVER = 'localhost';
	public function __construct(){
		echo self::SERVER."\n";
	}
}
$study = new Study;












