// golf game logic


golfHit = (club) =>{

    let direction = ["Left","Right", "Center"];
    let distance = 0;

    if(club === "driver"){
        distance = Math.floor(Math.random()* (250-190 +1)) + 190;
    }

    if(club === "3hybrid"){
        distance = Math.floor(Math.random()* (210-190 +1)) + 190;
    }

    if(club === "4hybrid"){
        distance = Math.floor(Math.random()* (195-180 +1)) + 180;
    }

    if(club === "4iron"){
        distance = Math.floor(Math.random()* (180-120 +1)) + 120;
    }

    if(club === "5iron"){
        distance = Math.floor(Math.random()* (175-110 +1)) + 110;
    }

    if(club === "6iron"){
        distance = Math.floor(Math.random()* (160-100 +1)) + 100;
    }

    if(club === "7iron"){
        distance = Math.floor(Math.random()* (150-90 +1)) + 90;
    }

    if(club === "8iron"){
        distance = Math.floor(Math.random()* (130-60 +1)) + 60;
    }

    if(club === "9iron"){
        distance = Math.floor(Math.random()* (110-40 +1)) + 40;
    }

    if(club === "pw"){
        distance = Math.floor(Math.random()* (100-20 +1)) + 20;
    }

    if(club === "sw"){
        distance = Math.floor(Math.random()* (50-10 +1)) + 10;
    }

    if(club === "chip"){
        distance = Math.floor(Math.random()* (30-3 +1)) + 3;
    }

    console.log(distance)
    $('#yards').text(distance)
}

$("#hit").on('click', function(e){
    e.preventDefault();
    var club = $('#clubs').val();
    golfHit(club);
})