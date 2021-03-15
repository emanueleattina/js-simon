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

    $('#gioca').click(function () {
        
        for(i = 0; i < 5; i++)
        {   
            $('#num' + i).text(arrRandom[i]);
        }

        // far partire un timer di 30 secondi
        // allo scadere dei 30 secondi i numeri spariscono

        var timer = setInterval(function (){
            var cont = parseInt($('#timer').html());

            if(cont !== 0){
                $('#timer').html(cont - 1);
            } else {
                clearInterval(timer);
                $('#timer').html("tempo scaduto");

                for(i = 0; i < 5; i++)
                {   
                    $('#num' + i).hide();
                }
                $('.simon-content.input input').show();
                $('#invia').show();
                $('#gioca').hide();
            }
        }, 1000);

        // Get value on button click and show alert
        $("#invia").click(function(){

            var arrUtente = [$('#val0').val(), $('#val1').val(), $('#val2').val(), $('#val3').val(), $('#val4').val()];

            console.log(arrUtente);
        });
        

    });

    // l'utente deve scrivere i 5 numeri
    // il software dice quanti e quali numeri sono stati indovinati

});

