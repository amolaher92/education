<?php
function MyCallableFunction()
{
    echo "Hello World";
}

class CallablesFunctions
{
    protected static string $hello = "Hello PHP";

    public function __construct()
    {
        $this->FirstCallable();
    }

    public function FirstCallable()
    {
        /**
         * Simple callback
         */
        //call_user_func(array($this, 'SimpleCallback'));
        call_user_func('self::SecondStaticCallable');
    }

    public function SimpleCallback()
    {
        echo self::$hello . "\n";
    }

    public static function SecondStaticCallable()
    {
        echo "Static Class Method\n";
    }

    public static function ClosureCallback()
    {
        $number = range(1, 5);
        $newNumber = array_map(fn($a) => $a * 2, $number);
        print implode(' ', $newNumber);
        echo "\n";
    }
}

/**
 * Simple callback
 */
call_user_func('MyCallableFunction');

/**
 * Static class method callback
 */
call_user_func(array('CallablesFunctions', 'SecondStaticCallable'));
call_user_func('CallablesFunctions::SecondStaticCallable');

/**
 * Object Method callback
 */
$obj = new CallablesFunctions;
call_user_func(array($obj, 'FirstCallable'));

class A
{
    public static function Hello()
    {
        echo "Hello A";
    }

}

class B extends A
{
    public static function Hello()
    {
        echo "Hello B";
    }
}

/**
 * Inheritance Method callback
 */
call_user_func(array('B', 'parent::Hello'));