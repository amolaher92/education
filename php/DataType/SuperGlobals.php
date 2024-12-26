<?php
class SuperGlobals
{
    public function __construct()
    {
        $this->GetPostGlobal();
    }
    
    public static function GetPostGlobal()
    {
        #This is HTTP Post Variable
        /**
         *@var $_POST
         */
       // echo 'Hello'.$_POST[$this->user]. '!';
    }
}
?>
