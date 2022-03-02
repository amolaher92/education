<?php
$classes = ['Basic', 'IntegerData', 'StringData', 'CallablesFunctions', 'MagicConstants'];
$path = './DataType/';
$extension = '.php';
foreach ($classes as $class) {
    require($path . $class . $extension);
}
require('./DataType/Array/ArrayData.php');
require('./DataType/Casting/CastingCoach.php');

$objBasic = new Basic;
$objInt = new IntegerData;
$objString = new StringData;
$objArray = new ArrayData;


echo gettype($objBasic) . "\n";
$i = !is_object($objBasic) ?? '';
echo $i === false ? "This is Object\n" : "This is Not Object\n";

$objCallable = new CallablesFunctions;
$objCallable->ClosureCallback();

var_dump($objBasic instanceof Basic);
var_dump($objInt instanceof Basic);

$objCasting = new CastingCoach;

$objConstant = new MagicConstants;