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


let ageInput = null;
let nameInput = null;


/* Game Object */

const newGame = {
    name: nameInput,
    age: ageInput,
    time: 0,
    beer: 100,
    skill: 100,
    rage: 0,

    gameTimer: null,
    beerTimer: null,
    skillTimer: null,
    rageTimer: null,
    ageTimer: null,

    // TIMER METHODS
    beerCounter() {
        this.beerTimer = setInterval(this.reduceBeer, 1500);
    },
    skillCounter() {
        this.skillTimer = setInterval(this.reduceSkill, 3000);

    },

    rageCounter() {
        this.rageTimer = setInterval(this.increaseRage, 3000);
    },

    ageCounter() {
        this.ageTimer = setInterval(this.increaseAge, 5000);
    },

    // METRIC ALTERATION METHODS
    reduceBeer() {
        if (newGame.beer === 0) {
            clearInterval(newGame.beerCounter);
        } else {
            newGame.beer -= 5;
        }
    },

    reduceSkill() {
        if (newGame.skill === 0) {
            clearInterval(newGame.skillCounter);
        } else {
            newGame.skill -= 5;
        }
    },

    increaseRage() {
        if (newGame.rage === 100) {
            clearInterval(newGame.rageCounter);
        } else {
            newGame.rage += 20;
        }
    },

    increaseAge() {
        (newGame.age) += 1;
        return $('#span-age').text(`    ${newGame.age}`);
    },

    // // BUTTON METHODS
    drink() {
        if (newGame.beer < 100) {
            newGame.beer += 10;
            newGame.skill -= 2;

        }
    },

    practice() {
        if (newGame.skill < 100) {
            newGame.skill += 10;
            newGame.beer -= 2;
        }
    },

    trash() {
        if (newGame.rage > 0) {
            newGame.rage = 0;
        }
    },

    // This will probably end up being part of a conditional that all the other methods are nested into. When the user enters their name and age it could call said method
    startGame() {
        newGame.beerCounter();
        newGame.skillCounter();
        newGame.rageCounter();
        newGame.ageCounter();
    },

    // quit() {
    //         if (this.beer === 0 || this.chops === 0 || this.rage === 100) {
    //             console.log(`${newGame.name} quit the band`);
    //         }
    //     },


};





const collectAge = function collectAge() {
    console.log("sanity check");
    newGame.age = $('#input-age').val();
    newGame.age = parseInt(newGame.age);
    $('#span-age').text(`    ${newGame.age}`);
};

const collectName = function collectName() {
    console.log("sanity check");
    newGame.name = $('#input-name').val();
    $('#span-name').text(`    ${newGame.name}`);
}


const beerBar = function beerBar() {
    return $('#beer__bar').css(`width`, `${newGame.beer}%`);
};
const skillBar = function skillBar() {
    return $('#skill__bar').css('width', `${newGame.skill}%`);
};
const rageBar = function rageBar() {
    return $('#rage__bar').css('width', `${newGame.rage}%`);
};
// const updateAge = function updateAge() {
//     return $('#span-age').text(`    ${newGame.age}`);
// }


$("#input-button").on('click', function () {
    collectAge();
    collectName();
    $('#hippy').css("transform", "translatey(0)");
    $("#input-form").remove();

});

$("#input-button").on('click', function () {
    setTimeout(newGame.startGame, 3000);
});


$('#drink').on('click', newGame.drink);
$('#practice').on('click', newGame.practice);
$('#trash').on('click', newGame.trash);


setInterval(beerBar, 100);
setInterval(skillBar, 100);
setInterval(rageBar, 100);





