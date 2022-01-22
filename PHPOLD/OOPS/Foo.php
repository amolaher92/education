<?php 
if(!class_exists("Foo")) :
	class Foo
	{
		public $name;
		public function __construct($username)
		{
			$this->name = $username;
			echo "User Name is => ".$this->name."\n";
		}
	}
endif;