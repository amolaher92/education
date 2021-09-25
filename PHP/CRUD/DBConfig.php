<?php 
if(!class_exists('DBConfig')) :
	class DBConfig
	{
		private const DBHOST = 'localhost';
		private const DBUSER = 'amol';
		private const DBPASS = 'amol123';
		private const DBNAME = 'users';

		private $dsn = 'mysql:host=' . self::DBHOST . '; dbname=' . self::DBNAME .'';

		protected $conn = null;

		public function __construct()
		{
			try
			{
				$this->conn = new PDO($this->dsn, self::DBUSER, self::DBPASS);
				$this->conn->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, 
						PDO::FETCH_ASSOC);
			}
			catch(PDOException $e)
			{
				die('Error' . $e->getMessage());
			}
		}
	}
	$dbconn = new DBConfig;
endif;