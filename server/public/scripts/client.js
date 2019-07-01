$(document).ready(onReady);

let selectedStuffs = {
    inputOne : 0,
    operaTOR : ' ',
    inputTwo : 0,

} // create object to POST to server with user inputs

// onReady function
function onReady(){
    console.log('in onReady');
    $('.operatorBtn').on('click', operatorButton);
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



    }).catch(function (err) {
        alert('Error posting message:', err);
    })
} // end doinMaths

function operatorButton(){
    console.log('clicked', $(this).text(), 'operaTOR button!');
    selectedStuffs.operaTOR = $(this).text(); 
    // .text() method uses text for selected property of 'this'

} // end operatorButton function

function clearButton(){
    console.log('clicked clear button!');
    $('#inputOne').val('');
    doinMaths.operaTOR = ''; // can't set to .val because this is not input field
    $('#inputTwo').val('');
} // clear user input fields for next entry


