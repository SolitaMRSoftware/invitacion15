////codigo contador 

const $days = document.getElementById('days'),
$hours = document.getElementById('hours'),
$minutes = document.getElementById('minutes'),
$seconds = document.getElementById('seconds');



//fecha futura

const contadorDias = new Date('12 18, 2022 21:00:00').getTime();

let interval = setInterval(function(){
    //obtener fecha actual
    const now = new Date().getTime();

    //obtener las distancias entre ambas fechas
    let distance = contadorDias - now;

    //calcular a dias, horas, minutos, segundos
    let days = Math.floor(distance / (1000 * 60 * 60 *24)) ;
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / (1000));

    //escribir resultados
    $days.innerHTML = days;
    $hours.innerHTML = hours;
    $minutes.innerHTML = minutes;
    $seconds.innerHTML = ('0' + seconds).slice(-2);

   
});



////segundo codigo contador 

const $days2 = document.getElementById('days2'),
$hours2 = document.getElementById('hours2'),
$minutes2 = document.getElementById('minutes2'),
$seconds2 = document.getElementById('seconds2');


//fecha futura

const contadorDias2 = new Date('12 18, 2022 21:00:00').getTime();

let interval2 = setInterval(function(){
    //obtener fecha actual
    const now = new Date().getTime();

    //obtener las distancias entre ambas fechas
    let distance = contadorDias2 - now;

    //calcular a dias, horas, minutos, segundos
    let days2 = Math.floor(distance / (1000 * 60 * 60 *24)) ;
    let hours2 = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes2 = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds2 = Math.floor((distance % (1000 * 60)) / (1000));

    //escribir resultados
    $days2.innerHTML = days2;
    $hours2.innerHTML = hours2;
    $minutes2.innerHTML = minutes2;
    $seconds2.innerHTML = ('0' + seconds2).slice(-2);
});