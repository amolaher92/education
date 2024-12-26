<?php 
//Start Session
session_start();

//include Config.php
require('config.php');

require('./classes/Bootstrap.php');
require('./classes/Controller.php');
require('./classes/Model.php');

require('./controllers/home.php');
require('./controllers/users.php');

require('./models/homeModel.php');
require('./models/users.php');


$bootstrap = new Bootstrap($_GET);

$controller = $bootstrap->createController();
if($controller)
{
	$controller->executeAction();
}

 ?>	