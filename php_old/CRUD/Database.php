<?php 
	require_once './DBConfig.php';
	 if(!class_exists('Database')) :
	 	class Database extends DBConfig
	 	{
	 		public function insert($fname, $lname, $email, $phone)
	 		{
	 			$sql = 'INSERT INTO users ( fname , lname, email, phone)
	 					VALUES (:fname, :lname, :email, :phone)';
	 			$stmt = $this->conn->prepare($sql);

	 			$stmt->execute([
	 				'fname' => $fname,
	 				'lname' => $lname,
	 				'email' => $email,
	 				'phone' => $phone
	 			]);

	 			return true;
	 		}

	 		public function read()
	 		{
	 			$sql = 'SELECT * FROM users ORDER BY id DESC';

	 			$stmt = $this->conn->prepare($sql);

	 			$stmt->execute();

	 			$result = $stmt->fetchAll();

	 			return $result;
	 		}

	 		public function readOne($id)
	 		{
	 			$sql = 'SELECT * FROM users WHERE id = :id';

	 			$stmt = $this->conn->prepare($sql);

	 			$stmt->execute(['id' => $id]);

	 			$result = $stmt->fetch();

	 			return $result;
	 		}

	 		public function Update($id, $fname, $lname, $email, $phone)
	 		{
	 			$sql = 'UPDATE users SET 
	 					fname = :fname, lname = :lname, email = :email, 
	 					phone = :phone WHERE id = :id';

	 			$stmt = $this->conn->prepare($sql);

	 			$stmt->execute([
	 				'fname' => $fname,
	 				'lname' => $lname,
	 				'email' => $email,
	 				'phone' => $phone,
	 				'id' => $id
	 			]);

	 			return true;
	 		}

	 		public function DeleteOne($id)
	 		{
	 			$sql = 'DELETE FROM users WHERE id = :id';
	 			$stmt = $this->conn->prepare($sql);

	 			$stmt->execute(['id' => $id]);

	 			return true;	 		}

	 	}
	 endif;