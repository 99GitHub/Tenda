//导航条下拉菜单
$(document).ready(function(){
	$("#family").hover(function(){
		$(".shop_family").slideDown();
	})
	$(".shop_family").hover(function(){
		$(".shop_family").show();
	},function(){
		$(".shop_family").slideUp();
	})
	$("#store").hover(function(){
		$(".online_store").slideDown();
	})
	$(".online_store").hover(function(){
		$(".online_store").show();
	},function(){
		$(".online_store").slideUp();
	})
	$(".header_part li:nth-child(1),.header_part li:nth-child(3)").hover(function(){
		$(".shop_family").slideUp();
	})
	$(".header_part li:nth-child(5),.header_part li:nth-child(7)").hover(function(){
		$(".online_store").slideUp();
	})
	$(document).ready(function(){
		$("#input").click(function(){
			$("#input").addClass("li_on").removeClass("li_input");	
			$("#input").find("input").addClass("input_on");
		})
	})
	
})
//微信,QQ群二维码
$(document).ready(function(){
	$("#weixin").click(function(){
		$(".weixin_box").slideDown();
		$(".qq_box").hide();
	})
	$("#qq").click(function(){
		$(".qq_box").slideDown();
		$(".weixin_box").hide();
	})
	$(".close").click(function(){
		$(".weixin_box").slideUp();
		$(".qq_box").slideUp();
	})
})
//滚动条
$(document).ready(function(){
	$(window).scroll(function(){
	if ($("body").scrollTop() > 200){
		$(".return_top").fadeIn();
	} else{
		$(".return_top").fadeOut();
	}
	})
})
