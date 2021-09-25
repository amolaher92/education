<?php 

class Home extends Controller
{
	protected function Index()
	{
		//echo 'Home/Index';
		$view = new homeModel();
		$this->ReturnView($view->Index(),true);
	} 
}


 ?>