<?php 
class LoginForm{
	public function signupForm(){
		echo '
		<form method="POST" action="#">
			
		</form>
		';
	}
}
$login = new LoginForm;
$login->signupForm();