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
        $smallImg = $spiritObject["ImageSmall"];
        $bottomImg = $spiritObject["ImageBottom"];
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
    #largeImg{background-image: url(./images/<?php echo $largeImg;?>)}
    #mediumImg{background-image: url(./images/<?php echo $mediumImg;?>);}
    #smallImg{background-image: url(./images/<?php echo $smallImg;?>);}
    #bottomImg{background-image: url(./images/<?php echo $bottomImg;?>);
                min-height: 100vh;}
    </style>
    <header></header>
    <div id="largeImg" class="parallax"></div>
    <h1><?php echo $spirit ?></h1>
    <div id="main">
        <div id="mediumImg" class="image"></div>
        <p><?php echo $textTop?></p>
    </div>
    <div id="largeImg" class="parallax"></div>
    <div id="main">
        <p><?php echo $textMid?></p>
        <div id="smallImg" class="image"></div>
    </div>
    <div id="bottomImg" class="parallax"></div>
<script type="module" src="index.js"></script>
</body>
</html>