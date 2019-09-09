$( document ).ready(function() {
   
    // Create the Heros
    var Hero = {
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
            addHero(Hero.mario);
            disableClick();
        });

        $('.hero2').on('click', function() {
            addHero(Hero.link);
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
        // adds hero attacked health
        $('.hero-health .attacked-health').html(playerGood.health);
        
        // adds the randon villain
        chooseVillain(randomVillain());
    }

    // disables the hero selection click and hides selection 
    function disableClick() {
        $('.hero-picker').css('display', 'none');
        $('.hero-picker img').css('pointer-events', 'none');
        $('.health').css('display', 'block');
        $('.player-info').css('display', 'block');

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

        function heroAttack() {
            if ( $('.hero-name').html() == "Mario") {
                var heroAttack = Hero.mario.attack;
            } else {
                var heroAttack = Hero.link.attack;
            }
    
             heroAttack = Math.floor((Math.random() * heroAttack) + 1);

                       
            if ( $('.villain-name').html() == "Bowser"  && Villain.bowser.health  > 0) {
                Villain.bowser.health -= heroAttack;
                screenContent();
            } 
            
            if ($('.villain-name').html() == "Bowser" && Villain.bowser.health  < 0) {
                $('.villain-health .attacked-health').html('0');
                $('.villain-sprite-container').css('display', 'none');
            }
            
    
            if ( $('.villain-name').html() == "Moblin"  && Villain.moblin.health  > 0) {
                Villain.moblin.health -= heroAttack;
                screenContent();
            } 
            
            if ($('.villain-name').html() == "Moblin" && Villain.moblin.health  < 0) {
                $('.villain-health .attacked-health').html('0');
                $('.villain-sprite-container').css('display', 'none');
            }

            $('.villain-sprite-container').toggleClass('attack-effect');

            $('.attack-button').css('pointer-events', 'none').toggleClass('disabled');
        }

        heroAttack();

        setTimeout( () => {
            function villainAttack(){

                if ( $('.villain-name').html() == "Bowser") {
                    var villainAttack = Villain.bowser.attack;
                } else {
                    var villainAttack = Villain.moblin.attack;
                }
        
                villainAttack = Math.floor((Math.random() * villainAttack) + 1);
                
                if ( $('.hero-name').html() == "Link"  && Hero.Link.health > 0) {
                    Hero.link.health -= villianAttack;
                    screenContent();
                } 
                
                if ($('.hero-name').html() == "Link" && Hero.link.health < 0) {
                    $('.hero-health .attacked-health').html('0');
                    $('.hero-sprite-container').css('display', 'none');
                }
                
        
                if ( $('.hero-name').html() == "Mario"  && Hero.mario.health > 0) {
                    Hero.mario.health -= villainAttack;
                    screenContent();
                } 
                
                if ($('.hero-name').html() == "Mario" && Hero.mario.health < 0) {
                    $('.hero-health .attacked-health').html('0');
                    $('.hero-sprite-container').css('display', 'none');
                }
            }
            $('.villain-sprite-container').toggleClass('attack-effect');
            $('.attack-button').css('pointer-events', 'unset').toggleClass('disabled');
            villainAttack();
            $('.hero-sprite-container').toggleClass('attack-effect');
        }, 3000);

     

    }
  

function screenContent() {
    if ( $('.villain-name').html() == "Bowser") {
        $('.villain-health .attacked-health').html(Villain.bowser.health);
    }

    if ( $('.villain-name').html() == "Moblin") {
        $('.villain-health .attacked-health').html(Villain.moblin.health);
    }

    if ( $('.hero-name').html() == "Mario") {
        $('.hero-health .attacked-health').html(Hero.mario.health);
    }

    if ( $('.hero-name').html() == "Link") {
        $('.hero-health .attacked-health').html(Hero.link.health );
    }
}

    $('.attack-button').on('click', function(){
        playerAttack();
        $('.hero-sprite-container.attack-effect').removeClass('attack-effect');
    });

});



