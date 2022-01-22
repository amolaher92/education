<?php 
class FunctionsString
{
	public $myString = "Hello, I am Amol";
	public $position = "PHPOLD Web Developer";
	public $first = "amol";
	public $words = "software developer";
	public $marray = array(1,2,3,4,5,6);
	public $larray = array("A","B","C","D");
	public $html = '<a href="www.google.com"> Google.com<a>';

	public function __construct()
	{
		/*check string length*/
		echo "String length is ".strlen($this->myString)."\n";
		
		/*String to Upper*/
		echo strtoupper($this->position)."\n";
		
		/*String to lower*/
		echo strtolower($this->position)."\n";
		
		/*word first character upper-case*/
		echo ucfirst($this->first)."\n";
		
		/*Each word first character upper-case*/
		echo ucwords($this->words)."\n";
		
		/*word first character lower-case*/
		echo lcfirst($this->position)."\n";
		
		/*String to array conversion with 2 arguments*/
		print_r (explode(" ",$this->words));
		
		/*Array to string conversion*/
		echo implode("/", $this->marray)."\n";

		/*Remove character both side of string*/
		echo trim($this->myString)."\n";

		/*Remove left side character of string*/
		echo ltrim($this->myString, "Hello , ")."\n";

		/*Remove right side character of string*/
		echo rtrim($this->myString, "Amol")."\n";

		/*Convert character to HTML entities*/
		echo htmlentities($this->html)."\n";

		/*htmlspecial character*/
		echo htmlspecialchars($this->html)."\n";

		/*Join array with character*/
		echo join("+",$this->larray)."\n";

		/*encrypt the string*/
		echo md5($this->first)."\n";
		echo sha1($this->first)."\n";

		/*String replace with character argument*/
		echo str_replace("PHPOLD", "LAMP", $this->position)."\n";
		echo str_ireplace("Hello", "Hi", $this->myString)."\n";

		/*String reapeat multiple times*/
		echo str_repeat($this->first, 10)."\n";

		/*Randomly shuffles all the characters string*/
		echo str_shuffle($this->first)."\n";

		/*Words count in the string */
		echo str_word_count($this->position)."\n";

		/*Split string into array*/
		print_r(str_split($this->first));

		/*Compare 2 string*/
		echo strcmp($this->words, $this->first)."\n";

		/*positiom of the given argument in the string*/
		echo strpos($this->words,"a")."\n";

		/*Reverse the string*/
		echo strrev($this->first)."\n";

		/*Create substring*/
		echo substr($this->position,8)."\n";
	}

}

$chek = new FunctionsString;