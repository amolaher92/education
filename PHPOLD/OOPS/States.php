<?php 
class State{
	public $states = array(
				"ANDRA PRADESH" => "AP",
				"ARUNACHAL PRADESH" => "AR",
				"ASSAM" => "AS",
				"BIHAR" => "BR",
				"CHHATTISGARH" => "CG",
				"GOA" => "GA",
				"GUJRAT" => "GJ",
				"HARYANA" => "HR",
				"HIMACHAL PRADESH" => "HP",
				"JAMMU AND KASHMIR" => "JK",
				"JHARKHAND" => "JH",
				"KARNATAKA" => "KA",
				"KERALA" => "KL",
				"MADYA PRADESH" => "MP",
				"MAHARASHTRA" => "MH",
				"MANIPUR" => "MN",
				"MEGHALAYA" => "ML",
				"MIZORAM" => "MZ",
				"NAGALAND" => "NL",
				"ODISHA" => "OD",
				"PUNJAB" => "PB",
				"RAJASTHAN" => "RJ",
				"SIKKIM" => "SK",
				"TAMILNADU" => "TN",
				"TELANGANA" => "TS",
				"UTTAR PRADESH" => "UP",
				"UTTARAKHAND" => "UK",
				"WEST BENGAL" => "WB"
			);
	public $ustates = array(
				"ANDAMAN AND NICOBAR ISLAND" => "AN",
				"CHNADIGARH" => "CH",
				"DADRA AND NAGAR HAVELI" => "DN",
				"DAMAN AND DIU" => "DD",
				"DELHI" => "DL",
				"LAKSHADWEEP" => "LD",
				"LADAKH" => "LA",
				"PONDICHERRY" => "PY"
			);
	public $capitals = array(
				"AP" => "AMARAVATI",
				"AR" => "ITANAGAR",
				"AS" => "DISPUR",
				"BR" => "PATANA",
				"CG" => "RAIPUR",
				"GA" => "PANAJI",
				"GJ" => "GANDHINAGAR",
				"HR" => "CHNADIGARH",
				"HP" => "SHIMLA",
				"JK" => "SRINAGAR",
				"JH" => "RANCHI",
				"KA" => "BENGALURU",
				"KL" => "THIRUVANANTHAPURAM",
				"MP" => "BHOPAL",
				"MH" => "MUMBAI",
				"MN" => "IMPHAL",
				"ML" => "SHILONG",
				"MZ" => "AIZAWL",
				"NL" => "KOHIMA",
				"OD" => "BHUWANESHWAR",
				"PB" => "CHNADIGARH",
				"RJ" => "JAIPUR",
				"SK" => "GANGTOK",
				"TN" => "CHENNAI",
				"TS" => "HYDERABAD",
				"UP" => "LUCKNOW",
				"UK" => "DEHRADUN",
				"WB" => "KOLKATA"
			);
	public $ucapitals = array(
				"AN" => "PORT BLAIR",
				"CH" => "CHNADIGARH",
				"DN" => "SILVASSA",
				"DD" => "DAMAN",
				"DL" => "DELHI",
				"LD" => "KAVARATTI",
				"LA" => "LEH",
				"PY" => "PUDUCHERRY"
			);
	public function __construct(){

		foreach($this->states as $key => $value) :
			foreach($this->capitals as $k => $v) :
				if($value === $k) :
					echo "State of ".$key." and capital is ".$v."\n";
				endif;
			endforeach;
		endforeach;

		echo count($this->states)." States\n";

		foreach($this->ustates as $key => $value) :
			foreach($this->ucapitals as $k => $v) :
				if($value === $k) :
					echo "State of ".$key." and capital is ".$v."\n";
				endif;
			endforeach;	
		endforeach;

		echo count($this->ustates)." teriterry States\n";
	} 
}
$states = new State;