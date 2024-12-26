<?php
define('MAX_VALUE','100');

class MagicConstants
{
    const MIN_VALUE = 10;
    public $PHPArray;
    public function __construct()
    {
        $this->getSimple();
        $this->getFunctions();
        $this->getMethods();
        $this->getClass();
        $this->getDirectory();
        $this->getFileName();
        $this->getPHPConstants();
        //return current line number
        echo __LINE__."\n";
        //shell excuation using backstics
        echo `pwd`;
    }
    
    public function getSimple()
    {
        echo "define max value ". MAX_VALUE ." and constant value ". self::MIN_VALUE."\n";
    }
    
    public function getFunctions()
    {
        //returns only the name of the function    
       echo __FUNCTION__."\n";
    }
    public function getMethods()
    {
        //returns the name of the class alongwith the name of the function
        echo __METHOD__."\n";
    }
    public function getClass()
    {
        //returns the name of the class
        echo __CLASS__." and ".get_class($this)."\n";
    }
    public function getDirectory()
    {
        //returns the directory name
        echo __DIR__."\n";
        
    }
    public function getFileName()
    {
        //returns the absolute path with file name
        echo __FILE__."\n";
    }
    public function getPHPConstants()
    {
        //returns the PHP version constant
        $this->PHPArray = [
                           PHP_VERSION,
                           PHP_MAJOR_VERSION,
                           PHP_MINOR_VERSION,
                           PHP_RELEASE_VERSION,
                           PHP_VERSION_ID,
                           PHP_ZTS,
                           PHP_OS,
                           PHP_OS_FAMILY,
                           PHP_INT_MAX,
                           PHP_INT_MIN,
                           PHP_INT_SIZE,
                           PHP_FLOAT_MAX,
                           PHP_FLOAT_MIN,
                           PHP_FLOAT_DIG,
                           PHP_LOCALSTATEDIR ,
                           PHP_CONFIG_FILE_PATH,
                           PHP_SHLIB_SUFFIX,
                           PHP_PREFIX,
                           PHP_EXTENSION_DIR,
                           DEFAULT_INCLUDE_PATH
                           ];
        print_r($this->PHPArray);
        /*forEach($this->PHPArray as $constant)
        {
            echo $constant."\n";
        }*/
        
    }
}
