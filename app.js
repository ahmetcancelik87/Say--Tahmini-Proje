<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Guess The Number Let's Play </title>
    <link rel="stylesheet" href="css.css">
</head>
<body>
    <div class="container">
        <h2>Guess The Number </h2>
        <h4>(From 1 to  100)</h4>
        
        <input type="text" placeholder="Let's Guess" id="guess"><br><br> 
        <button onclick="play()"> <span class="spn">Guess</span></button> <br>
        <p id="g1">Number of Guess :  </p>
        <p id="g2">Guessed Numbers are : Unavaible </p>
        <p id="g3"></p>

    </div>
    <script src="app.js"></script>
</body>
</html>