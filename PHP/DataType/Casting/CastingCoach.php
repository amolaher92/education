<?php
declare(strict_types=1);

class CastingCoach
{
    protected bool $BoolValue = true;
    protected int $IntValue = 231093;
    protected string $StringValue = "102393";
    protected float $FloatValue = 23.10;
    protected array $ArrayValue = array(1, 2, 3, 4, 5);

    public function __construct()
    {
        echo "All Are type Casting\n";
        $this->IntegerCasting();
        $this->FloatCasting();
        $this->BooleanCasting();
        $this->StringCasting();
        $this->ArrayCasting();
        $this->ObjectCasting();
        $this->UnsetCasting();
        /**
         * (int), (integer) - cast to int
         * (bool), (boolean) - cast to bool
         * (float), (double), (real) - cast to float
         * (string) - cast to string
         * (array) - cast to array
         * (object) - cast to object
         * (unset) - cast to NULL
         */
    }

    public function IntegerCasting()
    {
        echo "Covert Other into  Integer\n";
        var_dump($this->StringValue);
        var_dump((int)$this->StringValue);
        var_dump($this->FloatValue);
        var_dump((int)$this->FloatValue);
    }

    public function FloatCasting()
    {
        echo "Covert Other into  Float\n";
        var_dump($this->IntValue);
        var_dump((float)$this->IntValue);
        var_dump($this->StringValue);
        var_dump((float)$this->StringValue);
    }

    public function BooleanCasting()
    {
    }

    public function StringCasting()
    {
        echo "Covert Other into String\n";
        var_dump($this->StringValue);
        var_dump((string)$this->IntValue);
        var_dump($this->FloatValue);
        var_dump((string)$this->FloatValue);
    }

    public function ArrayCasting()
    {
        echo "Covert Other into Array\n";
        var_dump($this->StringValue);
        var_export((array)$this->StringValue);
        var_dump($this->FloatValue);
        var_dump((array)$this->FloatValue);
    }

    public function ObjectCasting()
    {
    }

    public function UnsetCasting()
    {
    }
}