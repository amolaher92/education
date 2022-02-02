<?php
$classes = ['Basic', 'IntegerData', 'StringData', 'CallablesFunctions','MagicConstants','SuperGlobals'];
$path = './DataType/';
$extension = '.php';
foreach ($classes as $class) {
    require($path . $class . $extension) ?? die("File Not Found");
}
require('./DataType/Array/ArrayData.php');
require('./DataType/Casting/CastingCoach.php');

$objBasic = new Basic;
$objInt = new IntegerData;
$objString = new StringData;
$objArray = new ArrayData;


echo gettype($objBasic) . "\n";
$i = is_object($objBasic) ?? '';
echo $i === true ? "This is Object\n" : "This is Not Object";

$objCallable = new CallablesFunctions;
$objCallable->ClosureCallback();

var_dump($objBasic instanceof Basic);
var_dump($objInt instanceof Basic);

$objCasting = new CastingCoach;
$objMagicConstant = new MagicConstants;
$objSuperGlobal = new SuperGlobals;