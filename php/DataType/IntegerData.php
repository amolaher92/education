<?php

class IntegerData
{
    public static int $Decimal;
    public static int $HexDecimal;
    public static int $OctalDecimal;
    public static int $BinaryDecimal;
    public static float $FloatDecimal;

    public function __construct()
    {
        self::GetDecimal();
        self::GetHexDecimal();
        self::GetOctalDecimal();
        self::GetBinaryDecimal();
        self::GetFloatDecimal();
    }

    public static function GetDecimal()
    {
        self::$Decimal = 2147483647;
        var_dump(self::$Decimal);
        ?>
        <?= gettype(self::$Decimal) . "\n" ?>
        <?php
        echo is_int(self::$Decimal) ? "The Value is Integer\n" : "The Value doesn't Integer\n";
    }

    public static function GetHexDecimal()
    {
        self::$HexDecimal = 0xA;
        var_dump(self::$HexDecimal);
        ?>
        <?= gettype(self::$HexDecimal) . "\n" ?>
        <?php
        echo is_int(self::$HexDecimal) ? "The Value is Hex Integer\n" : "The Value doesn't Hex Integer\n";
    }

    public static function GetOctalDecimal()
    {
        self::$OctalDecimal = 0123;
        var_dump(self::$OctalDecimal);
        ?>
        <?= gettype(self::$OctalDecimal) . "\n" ?>
        <?php
        echo is_int(self::$OctalDecimal) ? "The Value is Octal Integer\n" : "The Value doesn't Octal Integer\n";
    }

    public static function GetBinaryDecimal()
    {
        self::$BinaryDecimal = 0b110;
        var_dump(self::$BinaryDecimal);
        ?>
        <?= gettype(self::$BinaryDecimal) . "\n" ?>
        <?php
        echo is_int(self::$BinaryDecimal) ? "The Value is Binary Integer\n" : "The Value doesn't Binary Integer\n";

    }

    public static function GetFloatDecimal()
    {
        self::$FloatDecimal = 2.5E1;
        var_dump(self::$FloatDecimal);
        ?>
        <?= gettype(self::$FloatDecimal) . "\n" ?>
        <?php
        echo is_float(self::$FloatDecimal) ? "The Value is Float Integer\n" : "The Value doesn't Float Integer\n";
    }
}