<?php
class FunctionsArray
{
	public $fruitsA = array("A" => "Apple",
							"B" => "Banana",
							"C" => "Cherry",
							"D" => "Dates",
							"E" => "Elderberry",
							"F" => "Finger Lime");
	public $languages = array("Marathi","English","Hindi","Gujrathi","Bangali","Odishi","Urdu");

	public $users = array("Amol","Kiran","Sagar","Komal","John","Cera","Poonam");

	public function __construct()
	{
		echo count($this->users)."\n";
		foreach( $this->fruitsA as $key => $value ) :
			echo $key." ".$value."\n";
		endforeach;
	}
} 
$runtest = new FunctionsArray;                                    
