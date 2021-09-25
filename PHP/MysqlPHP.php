<?php 
if(!class_exists('DBConfig')) :
	class DBConfig
	{
		private const DBHOST = 'localhost';
		private const DBUSER = 'amol';
		private const DBPASS = 'amol123';
		private const DBNAME = 'demo';

		protected $dbconn =  null;

		public function __construct()
		{
			if(!isset($this->dbconn)) :
				
				$this->dbconn = new mysqli(self::DBHOST,
											self::DBUSER,
											self::DBPASS,
											self::DBNAME);

				if($this->dbconn === false) :

					echo "Failed to connect database server" . $this->dbconn->connect_error();

					//else : echo "Connection Sucessfully";

				endif;

			endif;

			return $this->dbconn;
		}
		
	}

	//$DBConfig = new DBConfig;

endif;

if(!class_exists('DBUtil')) :

	class DBUtil extends DBConfig
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

if(!class_exists('DBAction')) :

	class DBAction extends DBConfig
	{
		public function Insert($name,$age,$email)
		{
			$sql = "INSERT INTO user(`name`,`age`,`email`)VALUES(?,?,?)";
			
			$stmt = $this->dbconn->prepare($sql);

			$stmt->bind_param("sis",$name,$age,$email);

			$stmt->execute();

			$stmt->close();
		}
	}

endif;