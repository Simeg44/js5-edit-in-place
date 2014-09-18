$(document).on('ready', function() {
  $('.editable').on('click', function() {
  	var content = $(this).text();
  	var strLength = content.length;
  	var height = $(this).height();
  	var width = $(this).width();

  	$(this).hide();
  	$(this).closest(".section").append("<textarea class='edit-box'></textarea>");
  	$('.edit-box').val(content).height(height).width(width);
  	$('.edit-box').focus();
  });


  $(document).on('blur', '.edit-box', function() {
  	var newContent = $('.edit-box').val();

	$(this).closest('.section').find('.editable').text(newContent).show();
  	$('.edit-box').remove();
  	
  	
  });



});