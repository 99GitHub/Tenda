$(document).ready(function(){
	$("#business").hover(function(){
		$(".shop_business").slideDown();
	})
	$(".shop_business").hover(function(){
		$(".shop_business").show();
	},function(){
		$(".shop_business").slideUp();
	})
	$("#solution").hover(function(){
		$(".solution").slideDown();
	})
	$(".solution").hover(function(){
		$(".solution").show();
	},function(){
		$(".solution").slideUp();
	})
	$()
	$(".header_part li:nth-child(1),.header_part li:nth-child(3)").hover(function(){
		$(".shop_business").slideUp();
	})
	$(".header_part li:nth-child(3),.header_part li:nth-child(5)").hover(function(){
		$(".solution").slideUp();
	})
})