var credits = 1000;
var input;
var password = [];
var counter = 0;
var rightColor = "#0e5f0b";
var almostColor = "#7d8438";
var wrongColor = "#5f0d00";
var win1 = new Audio();
win1.src = "aud/win1.mp3";


function start() {
    document.getElementById("intro").innerHTML = "Good luck";
    document.getElementById('keypad').style.display='block';
    document.getElementById('login').style.display='block';

    for(var i = 0; i < 5; i++){
        password[i] = Math.floor(Math.random()*10);
    }

    alert('ps = ' + password);
}

function inputNum(n){
    var color = wrongColor;

    for(var i = 0; i < password.length; i++){
        if(n == password[i]){
            color = almostColor;
            credits += 50;
        }
    }
    if(n == password[counter]){
        color = rightColor;
        credits += 100;
    }

    switch(counter) {
        case 0:
            document.getElementById("first").innerHTML = n;
            document.getElementById("first").style.backgroundColor = color;
            counter++;
            break;
        case 1:
            document.getElementById("second").innerHTML = n;
            document.getElementById("second").style.backgroundColor = color;
            counter++;
            break;
        case 2:
            document.getElementById("third").innerHTML = n;
            document.getElementById("third").style.backgroundColor = color;
            counter++;
            break;
        case 3:
            document.getElementById("fourth").innerHTML = n;
            document.getElementById("fourth").style.backgroundColor = color;
            counter++;
            break;
        case 4:
            document.getElementById("fifth").innerHTML = n;
            document.getElementById("fifth").style.backgroundColor = color;
            counter = 0;
            break;
    }
    credits -= 100;
    document.getElementById("credits").innerHTML = credits;

    if(credits <=0) {
        alert('Ну ты и лох. Страница обновляется (пароль как ты понял - тоже)');
        location.reload();
    }
}

function check(){

    var log = document.getElementById("log").value;
    var code = document.getElementById("code").value;
    var requiredCode = 0;
    for(var i = 0; i < password.length; i++) {
        requiredCode += password[i]*Math.pow(10, 4-i);
    }

    if(code == requiredCode){
        win1.play()
        setTimeout(function(){alert('Congratulation! (НА шару выиграл молодец)');}, 2000);
        document.getElementById("winTable").innerHTML = log + " won this game with scores: " + credits;

        localStorage.setItem("username", log);
        localStorage.setItem("credit", credits);
    }
}