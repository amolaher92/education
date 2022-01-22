<?php 
class homeModel extends Model
{
	public function Index()
	{
		$this->query('SELECT * FROM users');
		$rows = $this->resultSet();
		//print_r($rows);
		return $rows;
	}
} 
