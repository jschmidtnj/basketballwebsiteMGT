$(document).ready(function(){
	$(window).on("scroll",function(){
  	var wn = $(window).scrollTop();
    if(wn > 2000){
    	$(".navbar").css("background","rgba(255,255,255,.5)");
    }
    else{
    	$(".navbar").css("background","rgba(255,255,255,1)");
    }
  });
});
