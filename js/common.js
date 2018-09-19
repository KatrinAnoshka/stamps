$(document).ready(function() {

	/* Adaptive menu */
   
        $('.menu__icon').on('click', function(){
           	$('.menu').toggleClass('menu_state_open');
            $('.our-contacts').toggleClass('hidden-div');
        });
     
   	/* Download file */

   	$(".upfile1").click(function () {
    	$(".file1").trigger('click');
	});
	$(".upfile2").click(function () {
    	$(".file2").trigger('click');
	});
	$(".upfile3").click(function () {
    	$(".file3").trigger('click');
	});
	$(".upfile4").click(function () {
    	$(".file4").trigger('click');
	});
	$(".upfile5").click(function () {
    	$(".file5").trigger('click');
	});
	$(".upfile6").click(function () {
    	$(".file6").trigger('click');
	});
	$(".upfile7").click(function () {
    	$(".file7").trigger('click');
	});
	$(".upfile8").click(function () {
    	$(".file8").trigger('click');
	});
	$(".upfile9").click(function () {
    	$(".file9").trigger('click');
	});


	/* Pop-up-form */

	// $(".order-call, .call").click(function() {
	// 	$("#callback h4").html($(this).text());
	// 	$("#callback input[name=formname]").val($(this).text());
	// }).magnificPopup({
	// 	type:"inline",
	// 	mainClass: 'mfp-forms'
	// });


		/*  SUBMENU KLISHE */
	$('.submenu li').click(function(){
		$divId = $(this).attr('target');

		$('.klishe-row').hide(400);
		$('#'+$divId).show(400);

		$('.submenu li').removeClass('active');
		$(this).addClass('active');

	});

});

	/* Flexslider */
   	
   	$(window).load(function(){
        $('.slider-wrap .flexslider').flexslider({
            animation: "slide",
            touch: true,
            start: function(slider){
                $('body').removeClass('loading');
            }
        });
        $('.products .flexslider').flexslider({
		    animation: "slide",
		    touch: true,		
	  	});
	  	$('.review .flexslider').flexslider({
		    animation: "slide",		    
		    touch: true
	  	});
	  	$('.flexslider-clients').flexslider({
		    animation: "slide",
		    touch: true,
		    animationLoop: false,
		    itemWidth: 210,
		    itemMargin: 150
		});
    });


