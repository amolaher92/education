<?php 
if(!class_exists('DBConfig')) :

	class DBConfig
	{
		private const DBHOST = 'localhost';
		private const DBUSER = 'root';
		private const DBPASS = '';
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

					else : echo "Connection Sucessfully";

				endif;

			endif;

			return $this->dbconn;
		}
	}

	$DBConfig = new DBConfig;

endif;