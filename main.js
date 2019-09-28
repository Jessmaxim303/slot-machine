// randomNumber1 = Math.floor(Math.random() * 6);
// randomNumber2 = Math.floor(Math.random() * 6);
// randomNumber3 = Math.floor(Math.random() * 6);

$(document).ready(function() {

    console.log( "ready!" );

		$(".main__game--button").click(function() {
			randomNumber1 = Math.floor(Math.random() * 6);
			randomNumber2 = Math.floor(Math.random() * 6);
			randomNumber3 = Math.floor(Math.random() * 6);
			console.log('game button')
			$("#num__1--h1").toggle();
			$("#num__2--h1").toggle();
			$("#num__3--h1").toggle();

			$("#num__1--h1").text(randomNumber1).fadeIn(2000);
			$("#num__2--h1").text(randomNumber2).fadeIn(2000);
			$("#num__3--h1").text(randomNumber3).fadeIn(2000);

		})


});
