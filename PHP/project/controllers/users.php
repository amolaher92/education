<?php 

class Users extends Controller
{
	protected function Index()
	{
		//echo 'Users/Index';
		$viewModel = new Users();
		$this->ReturnView($viewModel->Index(),true);
	} 

	protected function add()
	{
		$viewModel = new Users();
		$this->ReturnView($viewModel->add(),true);	
	}

	protected function register()
	{
		$viewModel = new Users();
		$this->ReturnView($viewModel->register(),true);		
	}

	protected function login()
	{
		$viewModel = new Users();
		$this->ReturnView($viewModel->login(),true);			
	}

	protected function logout()
	{
		$viewModel = new Users();
		$this->ReturnView($viewModel->logout(),true);				
	}
}


 ?>