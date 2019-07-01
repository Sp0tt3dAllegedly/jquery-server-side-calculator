$(document).ready(onReady);

let selectedStuffs = {
    inputOne: 0,
    operator: ' ',
    inputTwo: 0,

} // create object to POST to server with user inputs

// onReady function
function onReady(){
    console.log('in onReady');
    $('.operateBtn').on('click', operateButton);
    $('#clearBtn').on('click', clearButton);
    $('#equalsBtn').on('click', doinMaths);
}

function doinMaths(){
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

function operateButton(){
    console.log('clicked', $(this).text(), 'operaTORMUND button!');
    selectedStuffs.operator = $(this).text(); 
    // .text() method uses text for selected property of 'this'

} // end operateButton function

function clearButton(){
    console.log('clicked clear button!');
    $('#inputOne').val('');
    doinMaths.operator = ''; // can't set to .val because this is not input field
    $('#inputTwo').val('');
} // clear user input fields for next entry

function showMeTheMath() {
     $.ajax({
         type: 'GET',
        url: '/calculations'
     }).then(function (response) {
         
     })
    
}
