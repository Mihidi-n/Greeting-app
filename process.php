
<?php

$name = $_POST['username'];

header("Location: greeting.php?name=" . urlencode($name));

exit();

?>

