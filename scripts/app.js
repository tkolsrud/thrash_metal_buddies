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

    echo() {
        console.log("echo");
    }


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
        }
        else {
            newGame.beer--;
            console.log(newGame.beer);
        }
    }

    reduceChops() {
        newGame.chops--;
    }

    increaseCrank() {
        newGame.crank += 3;
        console.log(newGame.crank);
    }

    increaseAge() {
        newGame.age++;
        console.log(newGame.age);
    }
    // // BUTTON METHODS
    drink() {
        newGame.beer++;
        console.log(newGame.beer);
    }

    practice() {
        newGame.chops++;
    }

    trash() {
        newGame.crank -= 5;
    }

    quit() {
        console.log(`${this.name} quit the band`);
    }
}




const newGame = new Game("tom", "33");

$('#drink').on('click', newGame.drink);
$('#practice').on('click', newGame.practice);
$('#trash').on('click', newGame.trash);









const echo = function echo() {
    console.log('echo');
}


