


/*
(function($){
	$(document).ready(function() {	

		// Scroll to Top
		jQuery('.scrolltotop').click(function(){
			jQuery('html').animate({'scrollTop' : '0px'}, 400);
			return false;
		});
		
		jQuery(window).scroll(function(){
			var upto = jQuery(window).scrollTop();
			if(upto > 500) {
				jQuery('.scrolltotop').fadeIn();
			} else {
				jQuery('.scrolltotop').fadeOut();
			}
		});



		





		
		
	});
})(jQuery);

*/



    // calculator design starts here

	var resultField = $("#result");


		function insertNumber(number){

			// alert(number);

			var existingNumbers = resultField.val();
	        resultField.val(existingNumbers + number)


		}



		function clearResult() {
			
				resultField.val('')


		}


		function calculate() {

			var result = eval(resultField.val())

			resultField.val(result)


		}


		function deleteNumber() {
			var presentValue = resultField.val();
			if(presentValue!=''){
				resultField.val(resultField.val().slice(0, -1));
			}

		}










    // calculator design ends here





