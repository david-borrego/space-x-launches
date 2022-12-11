alert('js is loaded');
// constant variables - data that does not change

// state variables - data that changes

// cached element references - elements of the DOM we need to touch

// event listeners - capture and respond to events

// functions - code that represents actions taken 

function getData() {
    $.ajax('https://api.spacexdata.com/v3/launches')
        .then(function (data) {
            console.log(data);
        }, function (error) {
            console.log(error);
        });
}