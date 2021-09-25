<?php 
require './Database.php';
require './Util.php';

$db = new Database;
$util = new Util;

if(isset($_POST['add'])) :
	$fname = $util->testInput($_POST['fname']);
	$lname = $util->testInput($_POST['lname']);
	$email = $util->testInput($_POST['email']);
	$phone = $util->testInput($_POST['phone']);

	if($db->insert($fname, $lname, $email, $phone)) :
		echo $util->showMessage('success','User Inserted Successfully');
	else : echo $util->showMessage('danger','Somthing went wrong');
	endif;
endif;

if(isset($_GET['read'])) :
	$users = $db->read();
	$output = '';

	if($users) :
		foreach($users as $row) :
			$output .= '<tr>
						<td>' . $row['id'] . '</td>
						<td>' . $row['fname'] . '</td>
						<td>' . $row['lname'] . '</td>
						<td>' . $row['email'] . '</td>
						<td>' . $row['phone'] . '</td>
						<td>
						<a href="#" id="' . $row['id'] . '" class="btn btn-success btn-sm rounded-pill py-0 editLink" data-toggle="modal" data-target="#editUserModal">Edit</a>

						<a href="#" id="' . $row['id'] . '" class="btn btn-danger btn-sm rounded-pill py-0 deleteLink">Delete</a>
						</td>
						</tr>';
		endforeach;
		echo $output;
		else : echo '<tr>
						<td colspan="6">No Users Found in the Database!</td>
					</tr>';
	endif;
endif;

if(isset($_GET['edit'])) :
	
	$id = $_GET['id'];

	$user = $db->readOne($id);

	echo json_encode($user);
endif;

if(isset($_POST['update'])) :
	$id = $util->testInput($_POST['id']);
	$fname = $util->testInput($_POST['fname']);
	$lname = $util->testInput($_POST['lname']);
	$email = $util->testInput($_POST['email']);
	$phone = $util->testInput($_POST['phone']);

	if($db->update($id, $fname, $lname, $email, $phone)) :
			echo $util->showMessage('success', 'User updated successfully');
	else : echo $util->showMessage('danger', 'Something went wrong');
	endif;

endif;

if(isset($_GET['delete'])) :
	$id = $_GET['id'];

	if($db->delete($id)) :
		echo $util->showMessage('success','User Deleted successfully');
		else : echo $util->showMessage('danger','Something went wrong');
	endif;
endif;