<?php
/*Create Father Class*/
class Father{
	public $surname = array();
	private $father = array();
	protected $name = array();
	public $i;
	public function  __construct($array){
		$this->surname[] = $array;
		foreach ($this->surname as $data) :
			print_r($data);
		endforeach;
		
	}
}

$father = new Father(["Aher","Pagar","Shinde","Pawar"]);

class ForLoop extends Father{
	public function __construct($num){
		for($i = 0; $i < $num ; $i++):
			echo $i."\n";
		endfor;
	}
}
$loop = new ForLoop(10);
