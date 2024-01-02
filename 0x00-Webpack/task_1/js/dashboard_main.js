import $ from 'jquery';

$(document).ready(function() {
    // Create the paragraph elements
    var $paragraph1 = $('<p>').text('Holberton Dashboard');
    var $paragraph2 = $('<p>').text('Dashboard data for the students');
    var $paragraph3 = $('<p>').attr('id', 'count');
    var $paragraph4 = $('<p>').text('Copyright - Holberton School');

    // Create the button element
    var $button = $('<button>').text('Click here to get started');

    // Append the elements in the specified order
    $('body').append($paragraph1, $paragraph2, $button, $paragraph3, $paragraph4);
});
