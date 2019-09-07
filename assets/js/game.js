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
            health: 80, 
            attack: 25,
            sprite: "assets/images/sprite/villain2.gif",
        },
        moblin: {
            name:"Moblin", 
            health: 75, 
            attack: 25,
            sprite: "assets/images/sprite/villain1.gif",
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
        //adds hero sprite
        $('.hero-sprite-container').html('<img class="sprite" src="'+ playerGood.sprite + '">');
        // adds hero name
        $('.hero-name').html(playerGood.name);
        // adds heros health
        $('.hero-health .current-health').html(playerGood.health);
        
        // adds the randon villain
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

    function chooseVillain(playerBad) {
        $('.villain-sprite-container').html('<img class="sprite" src="'+ playerBad.sprite + '">');
        $('.villain-name').html(playerBad.name);
        $('.villain-health .current-health').html(playerBad.health);
        $('.villain-health .attacked-health').html(playerBad.health);
    }

    function playerAttack() {
        
        if ( $('.hero-name').html() == "Mario") {
            var heroAttack = hero.mario.attack;
        } else {
            var heroAttack = hero.link.attack;
        }

         heroAttack = Math.floor((Math.random() * heroAttack) + 1);
        
         if ( $('.villain-name').html() == "Bowser"  && Villain.bowser.health  > 0) {
            Villain.bowser.health -= heroAttack;
            screenContent();
        } 
        
        if ($('.villain-name').html() == "Bowser" && Villain.bowser.health  < 0) {
            $('.villain-health .attacked-health').html('0');
        }
        

        setTimeout( () => {
            
 
        });

    }
  

function screenContent() {
    if ( $('.villain-name').html() == "Bowser") {
        $('.villain-health .attacked-health').html(Villain.bowser.health );
    }
}

    $('.attack-button').on('click', function(){
        playerAttack();
    });

});



