$( document ).ready(function() {
    // Create the Heros
    var hero = {
        mario: {
            name:"Mario", 
            health: 100, 
            attack: 20,
            sprite: "assets/images/sprite/hero1.gif",
        },
        link: {
            name:"Link", 
            health: 100, 
            attack: 20,
            sprite: "assets/images/sprite/hero2.gif",
        },
    };

    // Creates the Villians
    var villian = {
        bowser: {
            name:"Bowser", 
            health: 75, 
            attack: 25,
            sprite: "assets/images/sprite/villian1.gif",
        },
        moblin: {
            name:"Moblin", 
            health: 75, 
            attack: 25,
            sprite: "assets/images/sprite/villian2.gif",
        },
    };



// Allow you to select the hero
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

//  adds hero to the front-end based on click.
function addHero(playerGood) {
    $('.hero').html('<img src="'+ playerGood.sprite + '">');
    $('.hero-name').html(playerGood.name);
}


// disables the hero selection click and hides selection 
function disableClick() {
    $('.hero-picker').css('display', 'none');
    $('.hero-picker img').css('pointer-events', 'none');
   
}



//  chooses a random Villian
function randomVillian() {
    var listKeys = Object.keys(villian);
    var randomIndex = Math.floor(Math.random() * listKeys.length);
    var randomObject = villian[listKeys[randomIndex]];
    return randomObject;
}


randomVillian();


console.log(randomVillian());




function chooseVillian(playerBad) {
    $('.villian').html('<img src="'+ playerBad.sprite + '">');
    $('.villan-name').html(playerBad.name);
    console.log(playerBad);
}
chooseVillian(randomVillian());


});



