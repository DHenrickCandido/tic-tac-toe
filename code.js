var c1 = 2;
var c2 = 2;
var c3 = 2;
var c4 = 2;
var c5 = 2;
var c6 = 2;
var c7 = 2;
var c8 = 2;
var c9 = 2;
var jogandoO = true;
var jogandoX = false;
var jogO = 0;
var jogX = 1;

function ganhou() {
    if (c1 == c2 && c2 == c3){
        if (c1 == 0){
            $("#1, #2, #3").css('background-color', '#0deb18');
            alert ("Jogador O ganhou");
            c1 = 7;c2 = 7;c3 = 7;c4 = 7;c5 = 7;c6 = 7;c7 = 7;c8 = 7;c9 = 7;
        } if(c1 == 1){
            $("#1,#2,#3").css('background-color', '#0deb18');
            alert ("Jogador X ganhou");
            c1 = 7;c2 = 7;c3 = 7;c4 = 7;c5 = 7;c6 = 7;c7 = 7;c8 = 7;c9 = 7;
        }
    }

    if (c4 == c5 && c5 == c6){
        if (c4 == 0){
            $("#4, #5, #6").css('background-color', '#0deb18');
            alert ("Jogador O ganhou");
            c1 = 7;c2 = 7;c3 = 7;c4 = 7;c5 = 7;c6 = 7;c7 = 7;c8 = 7;c9 = 7;
        }  if (c4 == 1){
            $("#4, #5, #6").css('background-color', '#0deb18');
            alert ("Jogador X ganhou");
            c1 = 7;c2 = 7;c3 = 7;c4 = 7;c5 = 7;c6 = 7;c7 = 7;c8 = 7;c9 = 7;
        }
    }

    if (c7 == c8 && c8 == c9){
        if (c7 == 0){
            $("#7, #8, #9").css('background-color', '#0deb18');
            alert ("Jogador O ganhou");
            c1 = 7;c2 = 7;c3 = 7;c4 = 7;c5 = 7;c6 = 7;c7 = 7;c8 = 7;c9 = 7;
        } else if (c7 == 1){
            $("#7, #8, #9").css('background-color', '#0deb18');
            alert ("Jogador X ganhou");
            c1 = 7;c2 = 7;c3 = 7;c4 = 7;c5 = 7;c6 = 7;c7 = 7;c8 = 7;c9 = 7;
        }
    }   
    
    if (c1 == c4 && c4 == c7){
        if (c1 == 0){
            $("#1, #4, #7").css('background-color', '#0deb18');
            alert ("Jogador O ganhou");
            c1 = 7;c2 = 7;c3 = 7;c4 = 7;c5 = 7;c6 = 7;c7 = 7;c8 = 7;c9 = 7;
        } else if (c1 == 1){
            $("#1, #4, #7").css('background-color', '#0deb18');
            alert ("Jogador X ganhou");
            c1 = 7;c2 = 7;c3 = 7;c4 = 7;c5 = 7;c6 = 7;c7 = 7;c8 = 7;c9 = 7;
        }

    }
    
    if (c2 == c5 && c5 == c8){
        if (c2 == 0){
            $("#2, #5, #8").css('background-color', '#0deb18');
            alert ("Jogador O ganhou");
            c1 = 7;c2 = 7;c3 = 7;c4 = 7;c5 = 7;c6 = 7;c7 = 7;c8 = 7;c9 = 7;
        } else if (c2 == 1){
            $("#2, #5, #8").css('background-color', '#0deb18');
            alert ("Jogador X ganhou");
            c1 = 7;c2 = 7;c3 = 7;c4 = 7;c5 = 7;c6 = 7;c7 = 7;c8 = 7;c9 = 7;
        }

    }
    
    if (c3 == c6 && c6 == c9){
        if (c3 == 0){
            $("#3, #6, #9").css('background-color', '#0deb18');
            alert ("Jogador O ganhou");
            c1 = 7;c2 = 7;c3 = 7;c4 = 7;c5 = 7;c6 = 7;c7 = 7;c8 = 7;c9 = 7;
        } else if (c3 == 1){
            $("#3, #6, #9").css('background-color', '#0deb18');
            alert ("Jogador X ganhou");
            c1 = 7;c2 = 7;c3 = 7;c4 = 7;c5 = 7;c6 = 7;c7 = 7;c8 = 7;c9 = 7;
        }
    }
    
    if (c1 == c5 && c5 == c9){
        if (c1 == 0){
            $("#1, #5, #9").css('background-color', '#0deb18');
            alert ("Jogador O ganhou");
            c1 = 7;c2 = 7;c3 = 7;c4 = 7;c5 = 7;c6 = 7;c7 = 7;c8 = 7;c9 = 7;
        } else if (c1 == 1){
            $("#1, #5, #9").css('background-color', '#0deb18');
            alert ("Jogador X ganhou");
            c1 = 7;c2 = 7;c3 = 7;c4 = 7;c5 = 7;c6 = 7;c7 = 7;c8 = 7;c9 = 7;
        }
    } 
    
    if (c3 == c5 && c5 == c7){
        if (c3 == 0){
            $("#3, #5, #7").css('background-color', '#0deb18');
            alert ("Jogador O ganhou");
            c1 = 7;c2 = 7;c3 = 7;c4 = 7;c5 = 7;c6 = 7;c7 = 7;c8 = 7;c9 = 7;
        } else if (c3 == 1){
            $("#3, #5, #7").css('background-color', '#0deb18');
            alert ("Jogador X ganhou");
            c1 = 7;c2 = 7;c3 = 7;c4 = 7;c5 = 7;c6 = 7;c7 = 7;c8 = 7;c9 = 7;
        }
    }

}

$(document).ready(function(){
    $("button").click(function(){
        c1 = 2;c2 = 2;c3 = 2;c4 = 2;c5 = 2;c6 = 2;c7 = 2;c8 = 2;c9 = 2;
        $("img").fadeOut();
        $("#1, #2, #3, #4, #5, #6, #7, #8, #9").css('background-color', '#ffffff');
        jogandoO = true;
        jogandoX = false;
     });

$("#1").click(function(){
    if (c1 == 2 && jogandoO && !jogandoX)
    {
        c1 = jogO;
        $("#1").prepend('<img id="theImg" src="O.png" />');
        jogandoO = false;
        jogandoX = true;
    } 
    else if (c1 == 2 && jogandoX && !jogandoO)
    {
        c1 = jogX;
        $("#1").prepend('<img id="theImg" src="X.png" />');
        jogandoO = true;
        jogandoX = false;
    }
    else if (c1 == 1 || c1 == 0){
        alert("Ja foi escolhido");
    }
    ganhou();
});

$("#2").click(function(){
    if (c2 == 2 && jogandoO && !jogandoX)
    {
        c2 = jogO;
        $("#2").prepend('<img id="theImg" src="O.png" />');
        jogandoO = false;
        jogandoX = true;
    } 
    else if (c2 == 2 && jogandoX && !jogandoO)
    {
        c2 = jogX;
        $("#2").prepend('<img id="theImg" src="X.png" />');
        jogandoO = true;
        jogandoX = false;
    }
    else if (c1 == 1 || c1 == 0){
        alert("Ja foi escolhido");
    }
    ganhou();
});

$("#3").click(function(){
    if (c3 == 2 && jogandoO && !jogandoX)
    {
        c3 = jogO;
        $("#3").prepend('<img id="theImg" src="O.png" />');
        jogandoO = false;
        jogandoX = true;
    } 
    else if (c3 == 2 && jogandoX && !jogandoO)
    {
        c3 = jogX;
        $("#3").prepend('<img id="theImg" src="X.png" />');
        jogandoO = true;
        jogandoX = false;
    }
    else if (c1 == 1 || c1 == 0){
        alert("Ja foi escolhido");
    }
    ganhou();
});

$("#4").click(function(){
    if (c4 == 2 && jogandoO && !jogandoX)
    {
        c4 = jogO;
        $("#4").prepend('<img id="theImg" src="O.png" />');
        jogandoO = false;
        jogandoX = true;
    } 
    else if (c4 == 2 && jogandoX && !jogandoO)
    {
        c4 = jogX;
        $("#4").prepend('<img id="theImg" src="X.png" />');
        jogandoO = true;
        jogandoX = false;
    }
    else if (c1 == 1 || c1 == 0){
        alert("Ja foi escolhido");
    }
    ganhou();
});

$("#5").click(function(){
    
    if (c5 == 2 && jogandoO && !jogandoX)
    {
        c5 = jogO;
        $("#5").prepend('<img id="theImg" src="O.png" />');
        jogandoO = false;
        jogandoX = true;
    } 
    else if (c5 == 2 && jogandoX && !jogandoO)
    {
        c5 = jogX;
        $("#5").prepend('<img id="theImg" src="X.png" />');
        jogandoO = true;
        jogandoX = false;
    }
    else if (c1 == 1 || c1 == 0){
        alert("Ja foi escolhido");
    }
    ganhou();
});

$("#6").click(function(){
    
    if (c6 == 2 && jogandoO && !jogandoX)
    {
        c6 = jogO;
        $("#6").prepend('<img id="theImg" src="O.png" />');
        jogandoO = false;
        jogandoX = true;
    } 
    else if (c6 == 2 && jogandoX && !jogandoO)
    {
        c6 = jogX;
        $("#6").prepend('<img id="theImg" src="X.png" />');
        jogandoO = true;
        jogandoX = false;
    }
    else if (c1 == 1 || c1 == 0){
        alert("Ja foi escolhido");
    }
    ganhou();
});

$("#7").click(function(){
    
    if (c7 == 2 && jogandoO && !jogandoX)
    {
        c7 = jogO;
        $("#7").prepend('<img id="theImg" src="O.png" />');
        jogandoO = false;
        jogandoX = true;
    } 
    else if (c7 == 2 && jogandoX && !jogandoO)
    {
        c7 = jogX;
        $("#7").prepend('<img id="theImg" src="X.png" />');
        jogandoO = true;
        jogandoX = false;
    }
    else if (c1 == 1 || c1 == 0){
        alert("Ja foi escolhido");
    }
    ganhou();
});

$("#8").click(function(){
    
    if (c8 == 2 && jogandoO && !jogandoX)
    {
        c8 = jogO;
        $("#8").prepend('<img id="theImg" src="O.png" />');
        jogandoO = false;
        jogandoX = true;
    } 
    else if (c8 == 2 && jogandoX && !jogandoO)
    {
        c8 = jogX;
        $("#8").prepend('<img id="theImg" src="X.png" />');
        jogandoO = true;
        jogandoX = false;
    }
    else if (c1 == 1 || c1 == 0){
        alert("Ja foi escolhido");
    }
    ganhou();
});

$("#9").click(function(){
    
    if (c9 == 2 && jogandoO && !jogandoX)
    {
        c9 = jogO;
        $("#9").prepend('<img id="theImg" src="O.png" />');
        jogandoO = false;
        jogandoX = true;
    } 
    else if (c9 == 2 && jogandoX && !jogandoO)
    {
        c9 = jogX;
        $('#9').prepend('<img id="theImg" src="X.png" />');
        jogandoO = true;
        jogandoX = false;
    }
    else if (c1 == 1 || c1 == 0){
        alert("Ja foi escolhido");
    }
    ganhou();
});
});