
<?php
$name = $_GET['name'];
?>

<!DOCTYPE html>
<html>
<head>
    <title>Greeting</title>
    <link rel="stylesheet" href="style.css">
</head>

<body>

<div class="container">

<h1>Hello, <?php echo htmlspecialchars($name); ?>!</h1>

<a class="back-btn" href="index.html">Go Back</a>

</div>

</body>
</html>
```