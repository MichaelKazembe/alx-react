import $ from 'jquery';

$(document).ready(function() {
    // Create three different paragraphs
    var paragraph1 = $('<p>').text('Holberton Dashboard');
    var paragraph2 = $('<p>').text('Dashboard data for the students');
    var paragraph3 = $('<p>').text('Copyright - Holberton School');

    // Append the paragraphs to the page body
    $('body').append(paragraph1, paragraph2, paragraph3);
});
