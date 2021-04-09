// console.log("[app.js] is loaded");

/* Variables */

let $hippy = $('#hippy');
let ageInput = null;
let nameInput = null;
const trashFx = new Audio('https://freesound.org/data/previews/171/171996_112577-lq.mp3');
const drinkFx = new Audio('https://freesound.org/data/previews/61/61392_792945-lq.mp3');
const practiceFx = new Audio('https://freesound.org/data/previews/1/1401_838-lq.mp3');
const songFX = new Audio('./audio/angelofdeath.mp3');




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
    transformTimer: null,

    // TIMER METHODS
    beerCounter() {
        this.beerTimer = setInterval(this.reduceBeer, 500);
    },
    skillCounter() {
        this.skillTimer = setInterval(this.reduceSkill, 500);

    },
    rageCounter() {
        this.rageTimer = setInterval(this.increaseRage, 500);
    },
    ageCounter() {
        this.ageTimer = setInterval(this.increaseAge, 5000);
    },
    transformCounter() {
        this.transformTimer = setInterval(this.transform, 1000);
    },

    // METRIC ALTERATION METHODS
    reduceBeer() {
        if (newGame.beer <= 0) {
            clearInterval(newGame.skillTimer);
            clearInterval(newGame.beerTimer);
            clearInterval(newGame.rageTimer);
            clearInterval(newGame.transformTimer);
            setTimeout(pauseSong, 300);
            return $('#quit-beer').show();
        } else {
            newGame.beer -= 2;
        }
    },
    reduceSkill() {
        if (newGame.skill <= 0) {
            clearInterval(newGame.skillTimer);
            clearInterval(newGame.beerTimer);
            clearInterval(newGame.rageTimer);
            clearInterval(newGame.transformTimer);
            setTimeout(pauseSong, 300);
            return $('#quit-skill').show();
        } else {
            newGame.skill -= 2;
        }
    },
    increaseRage() {
        if (newGame.rage === 100) {
            clearInterval(newGame.skillTimer);
            clearInterval(newGame.beerTimer);
            clearInterval(newGame.rageTimer);
            clearInterval(newGame.transformTimer);
            setTimeout(pauseSong, 300);
            return $('#quit-rage').show();
        } else {
            newGame.rage += 1;
        }
    },
    increaseAge() {
        (newGame.age) += 1;
        return $('#span-age').text(`    ${newGame.age}`);
    },
    transform() {
        if (newGame.time < 40) {
            newGame.time++;
            console.log(newGame.time);
        } else {
            clearInterval(newGame.transformCounter);
            $('#hippy').addClass('flash');
            $('#hippy').fadeOut(3000);
            setTimeout(function () { $('#metalhead').css('opacity', '100'); }, 1000);
            setTimeout(playSong, 500);
            setTimeout(function () { $('#message').text('Shreds!!!'); }, 4000);
            return setTimeout(backTransition, 4000);
        }
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

    //  Button Animations
    practiceDance() {
        $('.buddy').addClass('animate__bounce animate__faster');
        setTimeout(function () { $('.buddy').removeClass('animate__bounce animate__faster'); }, 1000);
    },

    trashDance() {
        $('.buddy').addClass('animate__wobble animate__faster');
        setTimeout(function () { $('.buddy').removeClass('animate__wobble animate__faster'); }, 1000);
    },

    beerDance() {
        $('.buddy').addClass('animate__pulse animate__faster');
        setTimeout(function () { $('.buddy').removeClass('animate__pulse animate__faster'); }, 1000);
    },

    // Sound Effects
    playDrink() {
        drinkFx.play();
    },

    playTrash() {
        trashFx.play();
    },

    playPractice() {
        practiceFx.play();
    },

    playSong() {
        songFX.play();
    },

    // Start/End Game Methods
    startGame() {
        newGame.beerCounter();
        newGame.skillCounter();
        newGame.rageCounter();
        newGame.ageCounter();
        newGame.transformCounter();
    },

};




/* Functions */

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
};
const beerBar = function beerBar() {
    return $('#beer__bar').css(`width`, `${newGame.beer}%`);
};
const skillBar = function skillBar() {
    return $('#skill__bar').css('width', `${newGame.skill}%`);
};
const rageBar = function rageBar() {
    return $('#rage__bar').css('width', `${newGame.rage}%`);
};
const backTransition = function backTransition() {
    $('#demon-throne').css("opacity", "100");
};
const playSong = function playSong() {
    songFX.play();
}
const pauseSong = function pauseSong() {
    songFX.pause();
}


/* Event Listeners */

$('#trash').on('click', newGame.trashDance);
$('#practice').on('click', newGame.practiceDance);
$('#drink').on('click', newGame.beerDance);
$('#drink').on('click', newGame.playDrink);
$('#trash').on('click', newGame.playTrash);
$('#practice').on('click', newGame.playPractice);
$('#drink').on('click', newGame.drink);
$('#practice').on('click', newGame.practice);
$('#trash').on('click', newGame.trash);
$("#input-button").on('click', function () {
    collectAge();
    collectName();
    $hippy.css("transition", "2s linear")
    $hippy.css("transform", "translatey(0%)");
    $hippy.css("opacity", "100");
    $("#input-form").remove();
    $("#message").text('is a Hippy...')
    setTimeout(newGame.startGame, 2000);
});

/* Metric Bar Updaters */

setInterval(beerBar, 100);
setInterval(skillBar, 100);
setInterval(rageBar, 100);







