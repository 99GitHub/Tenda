$(document).ready(function(){
	var curindex =0;
	imglen = $(".img_list li").length;
	var autoplayer = setInterval(function(){
		if(curindex < imglen-1){
			curindex ++;    
		}else{      
			curindex = 0;   
		}
		playerto(curindex);},6000)
	function autoplayeragain(){
		autoplayer = setInterval(function(){
			if (curindex < imglen - 1) {
				curindex++;
			} else{
				curindex = 0;
			}
			playerto(curindex);},6000)
	}
	function playerto(num){
		var goLeft = num * 800;    
		$(".img_list").animate({left: "-" + goLeft + "px"},600);     
		$(".indexlist").find("li").removeClass("indexon").eq(num).addClass("indexon");   
	}
	$(".player_left").hover(function(){
		$(".player_right").show();
		$(".player_left").show();
		clearInterval(autoplayer);}
		,function(){
			autoplayeragain();
		})
	$("#prev").click(function(){
		curindex = (curindex > 0) ? (--curindex) : (imglen-1);
		playerto(curindex);
	})
	$(".player_right").hover(function(){
		$(".player_right").show();
		$(".player_left").show();
		clearInterval(autoplayer);}
		,function(){
			autoplayeragain();
		})
	$("#next").click(function(){
		curindex = (curindex < imglen-1) ? (++curindex) : 0;
		playerto(curindex);
	})
	$(".indexlist").find("li").each(function(item){      
		$(this).hover(function(){        
			clearInterval(autoplayer);       
			playerto(item);       
			curindex = item;     
		},function(){        
			autoplayeragain();     
	})
	$(".img_list").find("img").each(function(item){
		$(this).hover(function(){
			$(".player_right").show();
			$(".player_left").show();
		},function(){
			$(".player_right").hide();
			$(".player_left").hide();
		})
	})		
	})
})

$(document).ready(function(){
	$(".shop_top").find("a").each(function(item){
		$(this).click(function(){
			$(this).addClass("on").siblings().removeClass("on");
			showhide(item);
			console.log(item);
		})
	})	
})
function showhide(num){
		$(".shop_text").find("div").hide().eq(num).show();
	}