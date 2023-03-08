<?php

$spirit = $_GET["spirit"];
$filename = "spirits.JSON";
$json = file_get_contents($filename);
$spirits = json_decode($json, true);

foreach ($spirits as $spiritObject) {
    if($spiritObject["Name"] == $spirit){
        $text = $spiritObject["Text"];
    }
}

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title><?php echo $spirit?></title>
</head>
<body>
    <header></header>
    
<p><?php echo $text?></p>
<script type="module" src="index.js"></script>
</body>
</html>