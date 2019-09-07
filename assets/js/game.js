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

    // Creates the Villains
    var Villain = {
        bowser: {
            name:"Bowser", 
            health: 75, 
            attack: 25,
            sprite: "assets/images/sprite/villain1.gif",
        },
        moblin: {
            name:"Moblin", 
            health: 75, 
            attack: 25,
            sprite: "assets/images/sprite/villain2.gif",
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
    $('.hero-sprite-container').html('<img src="'+ playerGood.sprite + '">');
    $('.hero-name').html(playerGood.name);
    $('.hero-health .current-health').html(playerGood.health);
    chooseVillain(randomVillain());
}

// disables the hero selection click and hides selection 
function disableClick() {
    $('.hero-picker').css('display', 'none');
    $('.hero-picker img').css('pointer-events', 'none');
   
}



//  chooses a random Villain
function randomVillain() {
    var listKeys = Object.keys(Villain);
    var randomIndex = Math.floor(Math.random() * listKeys.length);
    var randomObject = Villain[listKeys[randomIndex]];
    return randomObject;
}


randomVillain();


console.log(randomVillain());




function chooseVillain(playerBad) {
    $('.villain-sprite-container').html('<img src="'+ playerBad.sprite + '">');
    $('.villain-name').html(playerBad.name);
    $('.villain-health .current-health').html(playerBad.health);
    console.log(playerBad);
}



});



