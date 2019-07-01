$(document).ready(onReady);

// establish variables for client side

let selectedStuffs = {
    inputOne: 0,
    operator: ' ',
    inputTwo: 0,

} // create object to POST to server with user inputs

// onReady function
function onReady() {
    console.log('in onReady');
    $('.operateBtn').on('click', operateButton);
    $('#clearBtn').on('click', clearButton);
    $('#equalsBtn').on('click', doinMaths);
    mathHistory(); // bit of magicks that keeps the history on the DOM ;)
}

function doinMaths() {
    console.log('clicked equals button!');
    selectedStuffs.inputOne = $('#inputOne').val();
    selectedStuffs.inputTwo = $('#inputTwo').val();
    console.log('we gonna do this here maths:', selectedStuffs);
    $.ajax({
        type: 'POST',
        url: '/calculations',
        data: selectedStuffs,
    }).then(function (response) {
        console.log('Back from POST with:', response);
    })

    showMeTheMath(); // answer import ie. showing us 'the math'
    mathHistory(); // display log of past math performed by user(s)

} // end doinMaths

function operateButton() {
    console.log('clicked', $(this).text(), 'operaTORMUND button!');
    selectedStuffs.operator = $(this).text();
    // .text() method uses text for selected property of 'this'

} // end operateButton function

function clearButton() {
    console.log('clicked clear button!');
    $('#inputOne').val('');
    selectedStuffs.operator = ''; // can't set to .val because this is not input field
    $('#inputTwo').val('');
    $('#display').empty();
    $('#display').append('SURVEY SAYS...');

} // clear user input fields for next entry

function showMeTheMath() {
    $.ajax({
        type: 'GET',
        url: '/calculations'
    }).then(function (response) {
        let el = $('#display');
        el.empty();
        el.append(response.answer); // remember that extra property added
        // over on the server file? here it is in use
    })

}

function mathHistory() {

    $.ajax({
        type: 'GET',
        url: '/math-history'
    }).then(function (response) {
        // console.log(response);
        let el = $('#historyDiv');
        el.empty();
        for (let i = 0; i < response.length; i++) {
            el.append(`<li>${response[i].inputOne} 
            ${response[i].operator} ${response[i].inputTwo} 
            = ${response[i].answer}</li>`);
        }
    })
}