<?php 
if(!class_exists("AutoLoad")) :
	class Autoload
	{
		public function __construct()
		{
			return spl_autoload_register(function($className){
				include $className.".php";
			});
		}
	}
	$autoload = new Autoload;
endif;