<?php

class StringData
{
    public function __construct()
    {
        self::GetStringData();
    }

    /**
     * @return void
     */
    public static function GetStringData()
    {
        print("This is simple string with print\n");

        //Escaped characters use in double quotes
        echo("This is simple string with echo\n");

        echo <<<hereDoc
                a,
                b,
                c
                hereDoc;
        echo "\n";
    }
}