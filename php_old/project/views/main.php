<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>Shareboard</title>
</head>
<body>
	<ul>
		<li><a href="<?php echo ROOT_URL; ?>">Home</a></li>
		<li><a href="<?php echo ROOT_URL; ?>users">Users</a></li>
		<li><a href="<?php echo ROOT_URL; ?>shares">Shares</a></li>
	</ul>
	<ul>
		<?php if(isset($_SESSION['is_logged_in'])) :?>
		<li><a href="<?php echo ROOT_URL; ?>">Welcome <?php echo $_SESSION['user_data']['name'];?></a></li>
		<li><a href="<?php echo ROOT_URL; ?>users/logout">logout</a></li>	
	<?php else : ?>
		li><a href="<?php echo ROOT_URL; ?>users/login">login</a></li>
		<li><a href="<?php echo ROOT_URL; ?>users/register">register</a></li>
		<?php endif;?>
		<
	</ul>
	<?php Messages::display(); ?>
<?php require($view); ?>
</body>
</html>