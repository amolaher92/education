<?php
/*Simple class object declaration*/
class OOPS{
	public $name;
	protected $surname = "Aher";
	private $father = "Arun";
	const PI = 3.147;
/*
	public function __construct(){
		$this->getName();
	}*/

	/*Public function with public access modifier with properties*/
	public function setName($name){
		$this->name = $name;
	}
	/*public function with Inheritance Access*/
	public function getName(){
		echo "Get public Properties and Protected => ".$this->name." ".$this->surname."\n";
		$this->getConstant();
		$this->getPrivate();

	}
	/*protected function with access modifier with constant properties*/
	protected function getConstant(){
		echo "Get Constant Properties => ".self::PI."\n";
	}
	/*Create private function with private access modifier properties*/
	private function getPrivate(){
		echo "This is Private Properties =>".$this->father."\n";
	}
}
/*class inheritance to extends previous class properties and its methods*/
class InheritanceExample extends OOPS{

	const NAME = "amol";
	public function getSurname(){
		echo "Get Protected Properties => ".strtoupper(self::NAME." ".$this->surname)."\n";
		$this->getName();
	}

}

$oops = new OOPS;
$oops->setName("Hello World");
//$oops->getName();

$InExa = new InheritanceExample;
$InExa->getSurname();
?>