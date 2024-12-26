<?php

class ArrayData
{
    protected static array $GetArray;

    public function __construct()
    {
        self::GetAssociativeArrayData();
        self::GetIndexArrayData();
        self::GetIndexArrayIterable();
        self::GetAssociativeArrayIterable();
    }

    public static function GetAssociativeArrayData()
    {
        echo "Get Associative Array Data\n";
        self::$GetArray = array('A' => 'Apple', 'B' => 'Ball', 'C' => 'Cat');
        // self::$GetArray = ['A' => 'Apple', 'B' => 'Ball', 'C' => 'Cat'];
        var_dump(self::$GetArray);
        echo gettype(self::$GetArray) . "\n";
        print_r(self::$GetArray);

        $i = is_array(self::$GetArray) ?? '';
        echo $i === true ? "This is Array\n" : "This is not Array\n";
    }

    public static function GetIndexArrayData()
    {
        echo "Get Index Array Data\n";
        // self::$GetArray = array('Apple', 'Ball', 'Cat');
        self::$GetArray = ['Apple', 'Ball', 'Cat', 25, 35.57, true];
        var_dump(self::$GetArray);
        echo gettype(self::$GetArray) . "\n";
        print_r(self::$GetArray);

        $i = is_array(self::$GetArray) ?? '';
        echo $i === true ? "This is Array\n" : "This is not Array\n";
    }

    public static function GetIndexArrayIterable()
    {
        echo "Get Index Array Iterable Data\n";
        //self::$GetArray = array('Apple', 'Ball', 'Cat');
        self::$GetArray = ['Apple', 'Ball', 'Cat', 25, 35.57, true];
        var_dump(self::$GetArray);
        echo gettype(self::$GetArray) . "\n";
        print_r(self::$GetArray);

        $i = is_array(self::$GetArray) ?? '';
        echo $i === true ? "This is Array\n" : "This is not Array\n";

        foreach (self::$GetArray as $item) {
            echo gettype($item) . " => " . $item . "\n";
        }
    }

    public static function GetAssociativeArrayIterable()
    {
        echo "Get Associative Array Iterable Data\n";
        self::$GetArray = array('A' => 'Apple', 'B' => 'Ball', 'C' => 555, 'D' => 'Doll');
        // self::$GetArray = ['A' => 'Apple', 'B' => 'Ball', 'C' => 'Cat'];
        var_dump(self::$GetArray);
        echo gettype(self::$GetArray) . "\n";
        print_r(self::$GetArray);

        $i = is_array(self::$GetArray) ?? '';
        echo $i === true ? "This is Array\n" : "This is not Array\n";

        foreach (self::$GetArray as $key => $value) {
            echo $key . " => " . gettype($value) . "(" . $value . ")\n";
        }
    }

}