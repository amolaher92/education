<?php 
class Users extends Model
{
	public function Index()
	{
		$this->query('SELECT * FROM users');
		$rows = $this->resultSet();
		//print_r($rows);
		return $rows;
	}

	public function add()
	{

		//Sanitize the POST
		$post = filter_input_array(INPUT_POST,FILTER_SANITIZE_STRING);

		if($post['submit'])
		{
			//echo "SUBMITTED";
			//Insert Query
			$this->query('INSERT INTO users (`name`,`city`,`number`) VALUES(:name,:city,:numb)');
			$this->bind(':name',$_POST['name']);
			$this->bind(':city',$_POST['city']);
			$this->bind(':numb',$_POST['numb']);

			$this->execute();

			//Verify
			if($this->lastInsertId())
			{
				header('Location:'.ROOT_URL.'users');
			}
		}	
	}

	public function register()
	{
		//Sanitize the POST
		$post = filter_input_array(INPUT_POST,FILTER_SANITIZE_STRING);

		$passowrd = md5($_POST['password']);

		if($post['submit'])
		{

			if($post['name'] == '' || $post['email'] == '' || $post['password'] == '' )
			{
				Messages::setMsg('Please filled in all Fields','error');
				return;
			}
			//echo "SUBMITTED";
			//Insert Query
			$this->query('INSERT INTO users (`name`,`city`,`number`) VALUES(:name,:city,:numb)');
			$this->bind(':name',$_POST['name']);
			$this->bind(':city',$_POST['city']);
			$this->bind(':numb',$_POST['numb']);

			$this->execute();

			//Verify
			if($this->lastInsertId())
			{
				header('Location:'.ROOT_URL.'users');
			}
		}	
	}

	public function login()
	{
		//Sanitize the POST
		$post = filter_input_array(INPUT_POST,FILTER_SANITIZE_STRING);

		$passowrd = md5($_POST['password']);

		if($post['submit'])
		{
			//echo "SUBMITTED";
			//Compare login
			$this->query('SELECT * FROM users WHERE email = :email AND password = :password');
			$this->bind(':name',$_POST['name']);
			$this->bind(':city',$_POST['city']);

			$row = $this->single();

			if($row)
			{
				//echo "Logged in";
				$_SESSION['is_logged_in'] = true;
				$_SESSION['user_data'] = array(
					"id" => $row['id'],
					"name" => $row['name'],
					"email" => $row['email']
				);
				header('Location:'. ROOT_URL.'shares');
			}
			else{
				//echo "Incorrect Login";
				Messages::setMsg('Incorrec Login','error');
			}

			return;
		}	
	}

	public function logout()
	{
		unset($_SESSION['is_logged_in']);
		unset($_SESSION['user_data']);
		session_destroy();
		//Redirect
		header('Location:'. ROOT_URL);
	}	
} 