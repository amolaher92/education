<?php 
class FunctionsVariable
{
	// Define Array 
	public static $myArray = array("A","B","C","E","F","G");
	//Define Boolean constant
	public const BOOL = true;
	//Define String
	public static $myString = "Hello, I am Amol Aher and I have Software Developer";
	//Define Integer,Float,
	public static $myInteger = 777;
	public $myFloat = 123.45;

	public static function getVariables()
	{
		/*Check Array Variable*/
		if( is_array(self::$myArray) ) :
			echo "This is Array Variable\n";
			else : echo "Does not Array Variable\n";
		endif;

		/*Check Boolean Variable*/
		if( is_bool(self::BOOL) ) :
			echo "This is Boolean Variable\n";
			else : echo "Does not Boolean Variable\n";
		endif;

		/*Check String Variable*/
		if( is_string(self::$myString) ) :
			echo "This is String Variable\n";
			else : echo "Does not String Variable\n";
		endif;

		/*Check Integer Variable*/
		if( is_int(self::$myInteger) ) :
			echo "This is Integer Variable first Function\n";
			else : echo "Does not Integer Variable\n";
		endif;
		if( is_integer(self::$myInteger) ) :
			echo "This is Integer Variable Second Function\n";
			else : echo "Does not Integer Variable\n";
		endif;

		/*if( is_float(self::$myFloat) ) :
			echo "This is Float Variable\n";
			else : echo "Does not Float Variable\n";
		endif;*/

	}
	public function PublicVariable()
	{
		echo "This is float Variable ".$this->myFloat."\n";
		echo "#################################################################\n";
	}

}
class CheckVariable
{
	public $simple;

	public function __construct($chekVar)
	{
		$this->simple = $chekVar;
		if( is_array($this->simple) ) :
			echo "This is Array\n";
			var_dump($this->simple);
		elseif ( is_string($this->simple) ) :
			echo "This is String \n";
			var_dump($this->simple);
		elseif( is_int($this->simple) ) :
			echo "This is Integer\n";
			var_dump($this->simple);
		elseif( is_long($this->simple) ) :
			echo "This is Long Integer\n";
			var_dump($this->simple);
		elseif( is_float($this->simple) ) :
			echo "This is Float\n";
			var_dump($this->simple);
		elseif( is_double($this->simple) ) :
			echo "This is Double Integer\n";
			var_dump($this->simple);
		elseif( is_bool($this->simple) ) :
			echo "This is Boolean Value\n";
			var_dump($this->simple);
		elseif( is_object($this->simple) ) :
			echo "This is Object\n";
			var_dump($this->simple);
			else : echo "Enter Correct Variable";
		endif;
	}
}

FunctionsVariable::getVariables();
$check = new FunctionsVariable;
$check->PublicVariable();

$myArray = [1,"2",3.5];
$chekar = new CheckVariable($myArray);