function main() {
  $('.skillset').hide();
  $('.skillset').fadeIn(1000);
  
  $('.projects').hide();
  
  $('.projects-button').on('click', function() {
		$(this).next().slideToggle(400);
    //$(this).slideToggle(400);
    $(this).toggleClass('active');
    $(this).text('Hi!!.. Hello world!');
	});
}

$(document).ready(main);