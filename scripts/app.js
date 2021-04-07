console.log("[app.js] is loaded");

/*
Step 1.
    create the game class and game object
Step 2.
    write in the button methods
        - 

Step 3.
    write in the timer methods
Step 4.
    Work on jquery and animations
 */



const echo = function echo() {
    console.log('echo');
}



const Game = class {
    constructor(name, age) {
        this.name = name;
        this.age = age;

        this.time = 0;
        this.beer = 100;
        this.skill = 100;
        this.rage = 0;
    }

    gameTimer = null
    beerTimer = null
    skillTimer = null
    rageTimer = null
    ageTimer = null

    // TIMER METHODS
    beerCounter() {
        this.beerTimer = setInterval(this.reduceBeer, 1000);
    }
    skillCounter() {
        this.skillTimer = setInterval(this.reduceSkill, 1000);

    }

    rageCounter() {
        this.rageTimer = setInterval(this.increaseRage, 1000);
    }

    ageCounter() {
        this.ageTimer = setInterval(this.increaseAge, 5000);
    }

    // METRIC ALTERATION METHODS
    reduceBeer() {
        if (newGame.beer === 0) {
            clearInterval(newGame.beerCounter);
        } else {
            newGame.beer -= 10;
        }
    }

    reduceSkill() {
        if (newGame.skill === 0) {
            clearInterval(newGame.skillCounter);
        } else {
            newGame.skill -= 10;
        }
    }

    increaseRage() {
        if (newGame.rage === 100) {
            clearInterval(newGame.rageCounter);
        } else {
            newGame.rage += 20;
        }
    }

    increaseAge() {
        newGame.age++;
        console.log(newGame.age);
    }

    // // BUTTON METHODS
    drink() {
        if (newGame.beer < 100) {
            newGame.beer += 10;
            newGame.skill -= 10;

        }
    }

    practice() {
        if (newGame.skill < 100) {
            newGame.skill += 10;
            newGame.beer -= 10;
        }
    }

    trash() {
        if (newGame.rage > 0) {
            newGame.rage = 0;
        }
    }

    // This will probably end up being part of a conditional that all the other methods are nested into. When the user enters their name and age it could call said method
    quit() {
        if (this.beer === 0 || this.chops === 0 || this.rage === 100) {
            console.log(`${newGame.name} quit the band`);
        }
    }
}



const newGame = new Game("tom", "33");

$('#drink').on('click', newGame.drink);
$('#practice').on('click', newGame.practice);
$('#trash').on('click', newGame.trash);

const beerBar = function beerBar() {
    return $('#beer__bar').css(`width`, `${newGame.beer}%`);
};

const skillBar = function skillBar() {
    return $('#skill__bar').css('width', `${newGame.skill}%`);
}

const rageBar = function rageBar() {
    return $('#rage__bar').css('width', `${newGame.rage}%`);
}

setInterval(beerBar, 100);
setInterval(skillBar, 100);
setInterval(rageBar, 100);



