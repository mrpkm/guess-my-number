'use strict';
/*
document.querySelector('.check').addEventListener('click', function () {
    document.querySelector('.message').textContent = ` you gass this number ` + document.querySelector('.guess').value;
    console.log(document.querySelector('.guess').value);
})
*/

// short doing the text 
const displayMessge = function (message) {
    document.querySelector('.message').textContent = message;
}

//this is score number
let score = 20;

let hightscore = 0;

//randam number
let secretNumber = Math.trunc(Math.random() * 20) + 1;



//function of click btn
document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    //console.log(guess, typeof guess);
    //

    //no number
    if (!guess) {
        // document.querySelector('.message').textContent = '⛔no number';
        displayMessge('⛔no number')

        //player win
    } else if (guess === secretNumber) {
        // document.querySelector('.message').textContent = '🎉 correct number';
        displayMessge('🎉 correct number')
        //secort number
        document.querySelector('.number').textContent = secretNumber;

        document.querySelector('body').style.backgroundColor = '#60b347';

        document.querySelector('.number').style.width = '30rem';

        if (score > hightscore) {
            hightscore = score;
            document.querySelector('.highscore').textContent = hightscore;
        }

    } else if (guess !== secretNumber) {
        if (score > 0) {
            // document.querySelector('.message').textContent = guess > secretNumber ? '📈 too high' : '📉too low';
            displayMessge(guess > secretNumber ? '📈 too high' : '📉too low')
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            // document.querySelector('.message').textContent = '😭 you lose the game'
            displayMessge('😭 you lose the game')
        }


    }
});

//else if (guess > secretNumber) {
// }

//     } else if (guess < secretNumber) {
//         if (score > 0) {
//             document.querySelector('.message').textContent = '📉 too low';
//             score--;
//             document.querySelector('.score').textContent = score;
//         } else {
//             document.querySelector('.message').textContent = '😭 you lose the game'
//         }

//     }

// });



document.querySelector('.again').addEventListener('click', function () {

    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    // document.querySelector('.message').textContent = 'Start guessing...';
    displayMessge('Start guessing...')

    document.querySelector('.score').textContent = score;

    document.querySelector('.number').textContent = '?';

    document.querySelector('.guess').value = '';


    document.querySelector('body').style.backgroundColor = '#222';

    document.querySelector('.number').style.width = '15rem';


})