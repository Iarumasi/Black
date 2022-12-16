$(document).ready(function () {
    if (localStorage.getItem('f-login') == 1) {
        $('.subtitle').html('კეთილი იყოს შენი დაბრუნება');
    } else {
        $('.subtitle').html('კეთილი იყოს შენი მობრძანება');
        localStorage.setItem('f-login', '1');
    }
});