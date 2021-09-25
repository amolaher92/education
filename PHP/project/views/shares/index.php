<div>
	<?php foreach($viewModel as $item) :?>
		<div>
			<h3><?php echo $item['name']; ?></h3>
			<h3><?php echo $item['number'];?></h3>
		</div>
	<?php endforeach; ?>
</div>