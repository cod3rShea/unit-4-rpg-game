$(document).ready(function () {
	// Create the Heros
	var Hero = {
		mario: {
			name: "Mario",
			health: 100,
			attack: 20,
			sprite: "assets/images/sprite/hero1.gif",
		},
		link: {
			name: "Link",
			health: 100,
			attack: 20,
			sprite: "assets/images/sprite/hero2.gif",
		},
	};

	// Creates the Villains
	var Villain = {
		bowser: {
			name: "Bowser",
			health: 80,
			attack: 25,
			sprite: "assets/images/sprite/villain2.gif",
		},
		moblin: {
			name: "Moblin",
			health: 75,
			attack: 25,
			sprite: "assets/images/sprite/villain1.gif",
		},
	};

	selectHero = () => {
		$(".hero1").on("click", () => {
			addHero(Hero.mario);
			removeSelect();
		});

		$(".hero2").on("click", () => {
			addHero(Hero.link);
			removeSelect();
		});
	};

	selectHero();

	addHero = (hero) => {
		let heroName = hero.name;
		let heroHealth = hero.health;
		let heroSprite = hero.sprite;
		let heroOrginalAttackPoint = hero.attack;

		$(".hero-name").html(heroName);
		$(".hero").attr("attack", heroOrginalAttackPoint);
		$(".hero-health .full-health").html(heroHealth);
		$(".hero-health .current-health").html(heroHealth);
		$(".hero-sprite-container").append(
			`<img class='sprite' src='${heroSprite}'/>`
		);

		addVillain(randomVillain());
	};

	//  Selects a random Villain
	randomVillain = () => {
		var listKeys = Object.keys(Villain);
		var randomIndex = Math.floor(Math.random() * listKeys.length);
		var randomObject = Villain[listKeys[randomIndex]];
		return randomObject;
	};

	addVillain = (villain) => {
		let villainName = villain.name;
		let villainHealth = villain.health;
		let villainSprite = villain.sprite;

		$(".villain-name").html(villainName);
		$(".villain-health .full-health").html(villainHealth);
		$(".villain-health .current-health").html(villainHealth);
		$(".villain-sprite-container").append(
			`<img class='sprite' src='${villainSprite}'/>`
		);
		$(".villain-sprite-container").addClass(villainName);
	};

	removeSelect = () => {
		$(".hero-picker").css("display", "none");
		$(".health").css("display", "block");
		$(".player-info").css("display", "block");
	};

	battle = () => {
		let heroName = $(".hero-name").html().toLowerCase();
		let villainName = $(".villain-name").html().toLowerCase();
		let heroStats = Hero[heroName];
		let villainStats = Villain[villainName];

		attack = (heroStats, villainStats) => {
			checkHealthVillain();
			let = heroAttackPoints = heroStats.attack;
			let = villainHealthPoints = $(
				".villain-health .current-health"
			).html();

			heroAttackPoints = Math.floor(Math.random() * heroAttackPoints + 1);
			let criticalAttackPoints = criticalAttack();

			if (criticalAttackPoints > 75) {
				heroAttackPoints += 25;
			}

			villainHealthPoints -= heroAttackPoints;
			$(".villain-health .current-health").html(villainHealthPoints);
			$(".villain-health .health-status").css(
				"width",
				villainHealthPoints + "%"
			);

			$(".hero .sprite").toggleClass("good-attack");
			$(".villain .sprite").removeClass("bad-attack");
			$(".attack-button")
				.css("pointer-events", "none")
				.toggleClass("disabled");
		};

		deffend = (heroStats, villainStats) => {
			checkHealthHero();
			setTimeout(() => {
				$(".hero .sprite").toggleClass("good-attack");
				$(".villain .sprite").toggleClass("bad-attack");
				let = villainAttackPoints = villainStats.attack;
				let = heroHealthPoints = $(
					".hero-health .current-health"
				).html();
				heroAttackPoints = Math.floor(
					Math.random() * heroAttackPoints + 1
				);

				heroHealthPoints -= villainAttackPoints;

				$(".hero-health .current-health").html(heroHealthPoints);

				$(".hero-health .health-status").css(
					"width",
					heroHealthPoints + "%"
				);

				$(".attack-button")
					.css("pointer-events", "unset")
					.toggleClass("disabled");
			}, 3000);
		};

		attack(heroStats, villainStats);
		deffend(heroStats, villainStats);
	};

	function criticalAttack() {
		let criticalChance = Math.floor(Math.random() * 100) + 1;
		return criticalChance;
	}

	checkHealthHero = () => {
		let = heroHealthPoints = $(".hero-health .current-health").html();

		console.log("heroHealthPoints", heroHealthPoints);

		if (heroHealthPoints <= 0) {
			console.log("you lose");
			$(".hero .sprite").html("You Lose");
			$(".attack-button")
				.css("pointer-events", "none")
				.toggleClass("disabled");

			return;
		}
	};

	checkHealthVillain = () => {
		let = villainHealthPoints = $(".villain-health .current-health").html();

		console.log("villainHealthPoints", villainHealthPoints);
		if (villainHealthPoints <= 0) {
			console.log("you win");
			$(".villain .sprite").html("Winner");
			$(".attack-button")
				.css("pointer-events", "none")
				.toggleClass("disabled");
			return;
		}
	};

	$(".attack-button").on("click", () => {
		battle();
	});
});
