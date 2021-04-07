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

const Game = class {
    constructor(name, age) {
        this.name = name;
        this.age = age;

        this.time = 0;
        this.beer = 10;
        this.chops = 10;
        this.crank = 0;
    }

    gameTimer = null
    beerTimer = null
    chopsTimer = null
    crankTimer = null
    ageTimer = null


    // TIMER METHODS
    beerCounter() {
        this.beerTimer = setInterval(this.reduceBeer, 1000);
    }
    chopsCounter() {
        this.chopsTimer = setInterval(this.reduceChops, 1000);

    }

    crankCounter() {
        this.crankTimer = setInterval(this.increaseCrank, 1000);
    }

    ageCounter() {
        this.ageTimer = setInterval(this.increaseAge, 5000);
    }

    // METRIC ALTERATION METHODS
    reduceBeer() {
        if (newGame.beer === 0) {
            clearInterval(newGame.beerCounter);
        } else {
            newGame.beer--;
            console.log(newGame.beer);
        }
    }

    reduceChops() {
        if (newGame.chops === 0) {
            clearInterval(newGame.chopsCounter);
        } else {
            newGame.chops--;
        }
    }

    increaseCrank() {
        if (newGame.crank === 10) {
            clearInterval(newGame.crankCounter);
        } else {
            newGame.crank += 3;
            console.log(newGame.crank);
        }
    }

    increaseAge() {
        newGame.age++;
        console.log(newGame.age);
    }

    // // BUTTON METHODS
    drink() {
        if (newGame.beer < 10) {
            newGame.beer++;
            console.log(newGame.beer);
        }
    }

    practice() {
        if (newGame.chops < 10) {
            newGame.chops++;
        }
    }

    trash() {
        if (newGame.crank > 0) {
            newGame.crank = 0;
        }
    }

    // This will probably end up being part of a conditional that all the other methods are nested into. When the user enters their name and age it could call said method
    quit() {
        if (this.beer === 0 || this.chops === 0 || this.crank === 10) {
            console.log(`${newGame.name} quit the band`);
        }
    }
}

const $canSound = $("#can");



const newGame = new Game("tom", "33");

// $('#drink').on('click', canSound);
$('#drink').on('click', newGame.drink);
$('#practice').on('click', newGame.practice);
$('#trash').on('click', newGame.trash);








const echo = function echo() {
    console.log('echo');
}


