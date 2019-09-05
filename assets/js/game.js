$( document ).ready(function() {
    
    var hero = {
        mario: {
            name:"mario", 
            health: 100, 
            attack: 20,
            sprite: "assets/images/sprite/hero1.gif",
        },
        link: {
            name:"link", 
            health: 100, 
            attack: 20,
            sprite: "assets/images/sprite/hero2.gif",
        },
    };

console.log(this);

function addHero(player) {
    $('.hero').html('<img src="'+ player.sprite + '">');
}


// function addVillian(player) {
//     $('.villian').html('<img src="'+ player.sprite + '">');
// }

// addVillian(villian);

function disableClick() {
    $('.hero-picker img').click(false);
}

function chooseHero() {
    $('.hero1').on('click', function() {
        addHero(hero.mario);
        disableClick();
        
    });

    $('.hero2').on('click', function() {
        addHero(hero.link);
        disableClick();
    });

}
chooseHero();

    // random Number Generator
    function getRandomInteger(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }
    
    function attack() {

    }




    // // Make a reset Function
    // function resetGame() {
    //     startingNumber = getRandomInteger(18,120);
    //     firstCrystal = getRandomInteger(1,12);
    //     secondCrystal = getRandomInteger(1,12);
    //     thirdCrystal = getRandomInteger(1,12);
    //     fourthCrystal = getRandomInteger(1,12);
    //     totalScore = 0;
        
    //     totalTimesPlayed = wins + losses;
        
    //     $('.score-container').html(totalScore);
    //     $('.currentNumber').html(startingNumber);
    //     $('.total-times-played').html(totalTimesPlayed);
    // }


});



