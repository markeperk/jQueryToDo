

$(document).ready(function() {


$('#submit').on('click', function() {
	var name = $('#name').val();
	var markup = '<p class="list-item">' + name + '</p>';
	$('#content').prepend(markup);
	$('#name').val('');
});


$('#content').on('click', '.list-item', function() {
	$(this).remove();
});












//-----------------

// var tyler = $('<p id="tyler"> Tyler H. McGinnis </p>');
// var ean = $('<p id="ean"> Ean H. Platter </p>');
// var dan = $('<p id="dan"> Dan H. Chesler </p>');

// $('#content').append(tyler).css('color', '#fff');
// $('#content').append(ean).css('color', '#fff');
// $('#content').append(dan).css('color', '#fff');

// $('#tyler').on('click', function() {
// 	tyler.remove();
// });

// $('#ean').on('click', function() {
// 	ean.remove();
// });

// $('#dan').on('click', function() {
// 	dan.remove();
// });





//---------------


// $('#content2').hide();

// $('#content').on('mouseenter', function() {
// 	$('#content2').show();
// 	$('.box').css('background', 'red');
// });

// $('#content, #content2').on('mouseleave', function() {
// 	$('#content2').hide();
// 	$('.box').css('background', 'black');
// });

});

