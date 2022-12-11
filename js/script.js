// constant variables - data that does not change
const BASE_URL = 'https://api.spacexdata.com/v3/launches';
const API_KEY = 'keyhere';

// state variables - data that changes
let launches;

// cached element references - elements of the DOM we need to touch
const $launches = $('#launches');

// event listeners - capture and respond to events

// functions - code that represents actions taken 
init();

function init() {
    getData();
}

function getData() {
    $.ajax(BASE_URL + '?limit=12')
        .then(function (data) {
            launches = data;
            render();
        }, function (error) {
            console.log(error);
        });
}

function render() {
    const html = launches.map(function(launch) {
        return `
            <article class="card">
                <h1>${launch.mission_name}</h1>
                <p>${launch.launch_year}</p>
            </article>
            `;
    });
    $launches.append(html);
}