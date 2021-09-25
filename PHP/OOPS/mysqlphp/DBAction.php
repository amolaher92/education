<?php 
require './DBConfig.php';
require './DBUtil.php';

$Util = new DBUtil;

if(!class_exists('DBAction')) :

	class DBAction
	{
		public function Insert($name,$age,$email)
		{
			$sql = 'INSERT INTO user(`name`,`age`,`email`)
					VALUES(?,?,?)';

			$stmt = $this->dbconn->prepare($sql);

			$stmt->bind_parma("sis",$name,$age,$email);

			$stmt->execute();

			$stmt->close();
		}
	}

endif;