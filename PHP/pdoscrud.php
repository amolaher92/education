<?php 
class database
{
	private const DBBHOST = 'localhost';
	private const DBUSER = 'amol';
	private const DBPASS = 'amol123';
	private const DBNAME = 'demo';

	private $dbh = null;
	private $error = null;
	private $stmt = null;

	public function __construct()
	{
		$dsn = 'mysql:host='. self::DBHOST .';dbname='.self::DBNAME;

		$options = array(
			PDO::ATTR_PERSISTENT => true,
			PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION
		);

		try {
			$this->dbh = new PDO($dsn, self::DBUSER,sefl::DBPASS,$options);
		} catch (PDOException $e) {
			$this->error = $e->getMessage();
		}
	}

	public function query($query)
	{
		$this->stmt = $this->dbh->prepare($query);	
	}
	public function bind($param, $value, $type=null)
	{
		if(is_null($type)) :
			switch(true) :
				case is_int($value) : 
					$type = PDO::PARAM_INT;
					break;
				case is_bool($value) :
					$type = PDO::PARAM_BOOL;
					break;
				case is_null($value) :
					$type = PDO::PARAM_NULL;
					break;
					default :
					$type = PDO::PARAM_STR;
			endswitch;
			$this->stmt->bindValue($param,$value,$type);
		endif;
	}
	public function execute()
	{
		return $this->stmt->execute();
	}

	public function lastInsertId()
	{
		$this->dbh->lastInsertId();
	}

	public function resultSet()
	{
		$this->execute();
		return $this->stmt->fetchAll(PDO::FETCH_ASSOC);
	}
}

/**
 * New File create index.php
 */
$database = new database;
//$database->query('SELECT * FROM users');
//$database->query('SELECT * FROM users WHERE id = :id');
//$databse->bind(':id',2);
//$rows = $database->resultSet();

$post = filter_input_array(INPUT_POST,FILTER_SANITIZE_STRING);
/**
 * Insert Record
 */
if(isset($_GET['submit']))
{	
	$title = $_GET['title'];
	$body = $_GET['pbody'];

	$database->query('INSERT INTO posts (`title`,`body`) VALUES (:title,:body)');
	$database->bind(':title',$title);
	$database->bind(':body',$body);
	$database->execute();
	if($database->lastInsertId()){
		echo '<p>Post Inserted</p>';
	}
}
/**
 * Update records
 */
if(isset($_GET['submit']))
{	$id = $_GET['pid'];
	$title = $_GET['title'];
	$body = $_GET['pbody'];

	$database->query('UPDATE posts SET title=:title, body=:body WHERE id=:id');
	$database->bind(':title',$title);
	$database->bind(':body',$body);
	$database->bind(':id',$id);
	$database->execute();
	if($database->lastInsertId()){
		echo '<p>Post Inserted</p>';
	}
}
/**
 * Delete Records
 */
if(isset($_GET['delete']))
{
	$did = $_GET['did'];
	$database->query('DELETE FROM posts WHERE id=:id');
	$database->bind(':id',$did);
	$database->execute();
}
$database->query('SELECT * FROM users');
$rows = $database->resultSet();
?>
<h1>Add Posts</h1>
<!-- Insert Rcords -->
<form action="<?php $_SERVER['PHP_SELF'] ?>" method="GET">
    <label for="title">Post Title :</label>
    <input type="text" name="title" id="title" placeholder="Enter Title"><br />
    <label for="posts">Post Body</label>
    <textarea name="pbody" id="posts"></textarea><br /><br />
    <input type="submit" name="submit" value="submit" />
</form>
<!-- Update records -->
<form action="<?php $_SERVER['PHP_SELF'] ?>" method="GET">
    <label for="pid">Post Id :</label>
    <input type="text" name="pid" id="pid" placeholder="Post Id"><br /><br />
    <label for="title">Post Title :</label>
    <input type="text" name="title" id="title" placeholder="Enter Title"><br />
    <label for="posts">Post Body</label>
    <textarea name="pbody" id="posts"></textarea><br /><br />
    <input type="submit" name="submit" value="submit" />
</form>
<h1>My Posts</h1>
<!-- Insert and Update Records -->
<div>
    <?php foreach($rows as $row) : ?>
    <div>
        <h1>
            <?php echo $row['title'];?>
        </h1>
        <p>
            <?php echo $row['body'];?>
        </p>
    </div>
    <?php endforeach; ?>
</div>
<!-- Insert, Update and Delete Records -->
<div>
    <?php foreach($rows as $row) : ?>
    <div>
        <h1>
            <?php echo $row['title'];?>
        </h1>
        <p>
            <?php echo $row['body'];?>
        </p>
        <br />
        <form action="<?php $_SERVER['PHP_SELF'] ?>" method="GET">
        	<input type="hidden" name="did" id="did" value="<?php echo $row['title'];?>" />
        	<input type="submit" name="delete" value="Delete" />
        </form>
    </div>
    <?php endforeach; ?>
</div>