<?php

$spirit = $_GET["spirit"];
$filename = "spirits.JSON";
$json = file_get_contents($filename);
$spirits = json_decode($json, true);

foreach ($spirits as $spiritObject) {
    if($spiritObject["Name"] == $spirit){
        $textTop = $spiritObject["TextTop"];
        $textMid = $spiritObject["TextMid"];
        $largeImg = $spiritObject["ImageLarge"];
        $mediumImg = $spiritObject["ImageMedium"];
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
    <style>
        p{width: 50vw;
        margin-top: 0px;}
    #largeImage{background-image: url(./images/<?php echo $largeImg;?>)}
    #mediumImg{background-image: url(./images/<?php echo $mediumImg;?>);}
    </style>
    <header></header>
    <div id="largeImage" class="parallax"></div>
    <div id="main">
        <div id="mediumImg" class="image"></div>
        <p><?php echo $textTop?></p>
    </div>
    <div id="largeImage" class="parallax"></div>
<script type="module" src="index.js"></script>
</body>
</html>