<?php

class Basic
{
    protected static string $types;
    protected static string $variableRules;
    protected static string $scalarType;
    protected static string $compoundType;
    protected static string $specialType;
    protected static bool $Right = true;
    protected static bool $Wrong = false;

    public function __construct()
    {
        self::TheRules();
        self::TheShortHand();
        self::AllDataTypes();
        self::checkBoolean();
        $this->VariableReference();
    }

    /**
     * @return void
     */
    public static function TheRules()
    {
        echo "Hello Amy\n";

        self::$variableRules = 'Variable declared with dollar sign($).';
        echo self::$variableRules . "\n";
        self::$variableRules = 'First character start with [a-zA-Z_] and then other character from [a-zA-Z_0-9].';
        echo self::$variableRules . "\n";
        self::$variableRules = 'No space and no special character are allowed. This is a object so you do not assign $this.';
        echo self::$variableRules . "\n";

        //Single line comment
        /**
         * Multiple line comment
         */
    }

    /**
     * @return void
     */
    public static function TheShortHand()
    {
        ?>
        <?= "Short Hand Tag\n" ?>
        <?php
    }

    /**
     * @return void
     */
    public static function AllDataTypes()
    {
        self::$types = 'PHP supports ten primitive types.';
        self::$types = 'Four Scalar types';
        self::$scalarType = 'bool|int|float|string';
        self::$types = 'Four Compound types';
        self::$compoundType = 'array|object|callable|iterable';
        self::$types = 'two Special types';
        self::$specialType = 'resource|NULL';

        //get data type
        var_dump(self::$scalarType);
        echo gettype(self::$scalarType) . "\n";
        if (is_string(self::$specialType)) :
            echo "value is string\n";
        else: echo 'value is null';
        endif;

        $check = is_string(self::$compoundType) ?? '';
        echo $check === true ? "line is string\n" : "line is not string\n";

    }

    /**
     * @return void
     */
    public static function checkBoolean()
    {
        //get data type
        var_dump(self::$Right);
        $i = is_bool(self::$Right) ?? '';
        echo $i === true ? "The Boolean Value is True\n" : "The Boolean Value is False\n";

        //get data type
        var_dump(self::$Wrong);
        $i = is_bool(self::$Wrong) ?? '';
        echo $i === true ? "The Boolean Value is False\n" : "The Boolean Value is True\n";
    }

    public function VariableReference()
    {
        echo "Variable Reference\n";
        $a = 'hello';
        $$a = 'World';
        echo $a . " " . $hello . "\n";
    }
}

?>

