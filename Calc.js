jQuery(document).ready(function(){
	var first;

	$(".number").click(function(){
		var number = $("#display").html()+$(this).html();
		
		$("#display").html(number);
	});

	$(".operation").click(function(){

		first = $("#display").html() + $(this).html();
		if(first == ""){
			alert("Introduce un digito antes");
		}
		$("#display").html("");
	});

	$("#equal").click(function(){
		var second = $("#display").html();
		if(second == ""){
			alert("Falta el segundo digito");
		}

		$("#display").html(eval(first+second));
	});

	$("#restart").click(function(){

		$("#display").html("");
	});

	$("#delete").click(function(){
		if($("#display").html() != "Infinity"){
			var number = $("#display").html().substring(0,$("#display").html().length-1);
		}else{
			var number = "";
		}
		

		$("#display").html(number);
	});
});