<?php
echo "Hello Amol\n";
// class Amol
class Amol{
	/*Properties*/
	public $name = "Hello";

	/*Function*/
	public function __construct(){
		echo $this->name."\n";
	}
}
/*Object*/
$amol = new Amol;
?>