<?php 
require './DBConfig.php';

if(!class_exists('DBUtil')) :

	class DBUtil
	{
		public function isEmpty($data)
		{
			if(!empty($data)) :

				$data = trim($data);
				$data = stripcslashes($data);
				$data = htmlspecialchars($data);
				$data = strip_tags($data);
				$data = $this->dbconn->real_escape_string($data);

				return $data;

				else : echo "Please insert valid data";
			
			endif;
		}
		
		public static function isAgeValid($data)
		{
			if(preg_match("/[0-9]+$/", $data)) :
				
				return true;

			endif;
			
			return false;
		}
		public function isEmailValid($data)
		{
			if(filter_var($data, FILTER_VALIDATE_EMAIL)) :
			
				return true;
			
			endif;

			return false;
		}
	}

endif;