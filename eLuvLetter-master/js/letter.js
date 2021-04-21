
var aparted = false;

$("#open").click(function(){
	
	if(!aparted)
	{
		var typed = new Typed('.letter', {
			strings: ["^1000Dear&nbsp;&nbsp;DuDu", 
				"<p style='float:left; display:block;'>亲爱的肚肚宝宝</p><br><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;在见到你之前其实我不相信一见钟情，^300见到你的那一晚，^200心跳的厉害，^600很久没有那种触电的感觉了，^600认识你让我感觉心还活着。^600始于颜值并非虚言，^200你很美，我很喜欢。<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;喜欢和你在一起的每一刻， 每一天，^600说话，对视，拥抱，亲吻，^300熟悉、舒服、热烈，^300一如我看到你对生活情感的态度，能持本心，能安己身，理智又充满激情，^600似江流，似阔海，我很喜欢。<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;我想做你最后一个男朋友，^600这样你的后半生就会只属于我，^300这是我对你的信任和对爱的寄托。<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;相识，相知，相恋，相爱，^600携手余生。<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;没有山盟海誓，^300只有相濡以沫。<br><br><p style='float:right; display:block;'>^1000爱你的^200大猪蹄子</p>"],
			typeSpeed: 100,
			backSpeed: 50
		});
		
		$('#open').find("span").eq(0).css('background-position', "0 -150px");
		
		aparted = true;
		
		var music = document.getElementById('music2');		
		if (music.paused)
		{
			music.play();
			$('#music_btn2').css("opacity", "1"); 
		}
	}
	
});

function playPause() 
{
    var music = document.getElementById('music2');
    var music_btn = $('#music_btn2');
	
    if (music.paused)
	{
        music.play();
		music_btn.css("opacity", "1"); 
    }
    else
	{
        music.pause();
		music_btn.css("opacity", "0.2"); 
    }	
}


window.onload = function () 
{	

	var currentUrl = window.location.href;
	var firstIndex = currentUrl.indexOf("#");	
	if (firstIndex <= 0) window.location.href = currentUrl + "#contact";

	$('#music2').attr('src', bgmsrc);

	document.addEventListener('touchstart',function (event) { if(event.touches.length > 1) event.preventDefault(); });
	
	var lastTouchEnd = 0;
	
	document.addEventListener('touchend',function (event) {
		
		var now = (new Date()).getTime();
		if(now - lastTouchEnd <= 300) event.preventDefault();
		lastTouchEnd = now;
		
	}, false);
	
	document.addEventListener('gesturestart', function (event) { event.preventDefault(); });

	$('body').css('opacity', '1');
	$('#jsi-cherry-container').css('z-index', '-99');
	
}
