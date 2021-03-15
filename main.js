$(document).ready(function () {

    numeroRandom(0, 99);



    // generare 5 numeri casuali da 1 a 99
    function numeroRandom(min, max) {
        var numero = Math.floor(Math.random() * max) + min;
        return numero;
    }

    var arrRandom = [];

    for(i = 0; i < 5; i++)
    {  
        arrRandom.push(numeroRandom(0, 99));
    }
    console.log(arrRandom);

    $('.gioca').click(function () {
        for(i = 0; i < 5; i++)
        {   
            $('#num' + i).text(arrRandom[i]);
        }

        // far partire un timer di 30 secondi

        var timer = setInterval(function (){
            var cont = parseInt($('#timer').html());

            if(cont !== 0){
                $('#timer').html(cont - 1);
            } else {
                clearInterval(timer);
                $('#timer').html("tempo scaduto");

                for(i = 0; i < 5; i++)
                {   
                    $('#num' + i).html('<input type="text" id="fname" name="fname" placeholder="?" style="height: 50px; width: 70px; font-size: 32px; background: #3e5e79; border-color: #fff; border-radius: 10px;">')
                }
            }

        }, 1000);
        

    });

    
    // allo scadere dei 30 secondi i numeri spariscono
    // l'utente deve scrivere i 5 numeri
    // il software dice quanti e quali numeri sono stati indovinati

    

});

