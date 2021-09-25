<?php 
class Bootstrap
{
	private $controller;
	private $action;
	private $request;

	public function __construct($request)
	{
		$this->request = $request;
		if($this->request['controller'] == "")
		{
			$this->controller = 'home';
		}
		else{
			$this->controller = $this->request['controller'];
		}
		if($this->request['action'] == "")
		{
			$this->action = 'index';
		}
		else{
			$this->action = $this->request['action'];
		}

		// echo $this->controller;
		// echo $this->action;
	}

	public function createController()
	{
		//check controller class
		if(class_exists($this->controller))
		{
			$parents = class_parents($this->controller);

			//check extends
			if(in_array('Controller', $parents))
			{
				if(method_exists($this->controller, $this->action))
				{
					return new $this->controller($this->action,$this->request);
				}else{
					//Method  doesn't exists
					echo '<h1>Method Does not exists </h1>';
					return;
				}
			}else{
				//base controller  doesn't exists
				echo '<h1>Base Controller Does not exists </h1>';
				return;
			}
		}else{
			//controller class  doesn't exists
			echo '<h1>Controller class Does not exists </h1>';
			return;
		}
	}
}
