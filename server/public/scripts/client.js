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
    doinMaths.inputOne = $('#inputOne').val();
    doinMaths.inputTwo = $('#inputTwo').val();
    console.log('we gonna do this here maths:', selectedStuffs);
    
} // end doinMaths

function operatorButton(){
    console.log('clicked', $(this).text(), 'operaTOR button!');
    selectedStuffs.operaTOR = $(this).text();

} // end operatorButton function

function clearButton(){
    console.log('clicked clear button!');
    $('#inputOne').val('');
    doinMaths.operaTOR = '';
    $('#inputTwo').val('');
} // clear user input fields for next entry


