<?php

/**
 * Constants are case-sensitive. By convention, constant identifiers are always uppercase.
 * that value cannot change during the execution of the script
 */

//Define constant
define('PI', '3.14');

class MagicConstants
{
    const IPS = "Indian Police Service";

    public function __construct()
    {
        $this->getConstants();
    }

    public function getConstants()
    {
        echo PI . ' and ' . self::IPS;

    }
}
