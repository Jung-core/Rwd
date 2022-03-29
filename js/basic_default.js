var bodyW = $('body').innerWidth();
$('.gnb-sub-bg').width(bodyW);

$(document).ready(function(){
	/*모바일 높이 문제*/
	document.documentElement.style.setProperty("--vh", window.innerHeight * 0.01 + 'px');	
		$(window).resize(function(){
			document.documentElement.style.setProperty("--vh", window.innerHeight * 0.01 + 'px');	
	});

	$(window).resize(function(){
		var bodyW = $('body').innerWidth();
		$('.gnb-sub-bg').width(bodyW);
	});

	/*top button*/
	if( document.documentElement.scrollHeight > $(window).innerHeight() && $(window).scrollTop() > 0 ){
		$('.top-btn-wrap').show();
	}else{
		$('.top-btn-wrap').fadeOut();
	}
  $(window).scroll(function(){
		if( document.documentElement.scrollHeight > $(window).innerHeight() && $(window).scrollTop() > 0 ){
			$('.top-btn-wrap').fadeIn();
		}else{
			$('.top-btn-wrap').fadeOut();
		}
	});

	/*GNB*/		
	$('.header-menu>ul>li').on('mouseenter',function(){	
		$('.header').addClass('on');	
		var th = $('#G1').innerHeight()+30;		
		$('.header .gnb-sub-bg').stop().animate({height:th+"px"},0);
		var bodyW = $('body').innerWidth();
			$('.gnb-sub-bg').width(bodyW);
	});	

	$('.header-menu>ul>li>a').on('focus',function(){	
		$('.header').addClass('on');		
		var th = $('#G1').innerHeight()+30;		
		$('.gnb-sub-bg').stop().animate({height:th+"px"},0);		
		var bodyW = $('body').innerWidth();
			$('.gnb-sub-bg').width(bodyW);
	});

	$('.header-menu').on('mouseleave', function() {
		$('.header').removeClass('on');	
		$('.header').removeClass('menu_open');
		$('.header .gnb-sub-bg').stop().animate({height:"0px"},0);
		$('.header-menu>ul>li').removeClass('on');
	});

	/*header - 검색 버튼*/
	$('.search-btn').click(function(){
		$('.header-search').stop().fadeToggle(300);
		$('.header-search-bg').stop().fadeToggle(300);
		return false; 
	});
	$('.header-search-close').click(function(){
		$('.header-search').stop().fadeOut(300);
		$('.header-search-bg').stop().fadeOut(300);
	});
	$(document).click(function(e){
		if(!$('.header-search-wrap').is(e.target) && $('.header-search-wrap').has(e.target).length === 0){
				$('.header-search').stop().fadeOut(300);
				$('.header-search-bg').stop().fadeOut(300);
		}
	});	

	/*mobile*/
	var gnbF = 0;
	$('#hamB').click(function(){
		console.log(gnbF);
		if ( gnbF == 1 ){
			$('.header-menu').removeClass('on');
			// $('.dim_bg').removeClass('on');
			$('.search-btn').stop().fadeIn(100);
			$('html, body').css('overflow','visible');
			$('body').removeClass('offScroll');
			// $('body').on('touchmove', function(e){e.preventDefault();e.stopPropagation();});
			$('.lang').fadeOut(200);
			gnbF = 0;			
		}else{
			$('.header-menu').addClass('on');
			// $('.dim_bg').addClass('on');
			$('.search-btn').stop().fadeOut(100);	
			$('body').addClass('offScroll')
			$('body').off('touchmove');
			$('html, body').css('overflow','hidden');
			$('.lang').css('display', 'flex').hide().delay(300).fadeIn(300);
			gnbF = 1;
		}					
	});

	$('.dim_bg').click(function(e){
		if ( gnbF == 1 ){
			$(this).removeClass('on');	
			$('.header-menu').removeClass('on');
			$('.search-btn').stop().fadeIn(100);	
			$('.lang').fadeOut(200);
			$('body').removeClass('offScroll');		
			gnbF = 0;
		}		
	})

	$('.header-menu > ul > li > a').click(function(e){
		if( window.innerWidth <= 1200 ){
			e.preventDefault();
		}
	});

	$('.header-menu > ul > li').click(function(){
		if( window.innerWidth <= 1200 ){
			if($(this).hasClass('active')){									
				$(this).find('.gnb-sub').slideUp(500);					
				$(this).removeClass('active');
			}else{
				$('.gnb-sub').slideUp(500);
				$('.header-menu > ul > li').removeClass('active');
				$(this).find('.gnb-sub').slideDown(500);
				$(this).addClass('active');
			}
		}
	});

	$(window).resize(function(){
		if( window.innerWidth > 1200 ){
			$('.gnb-sub').attr('style','');
			$('.header-menu').removeClass('on');
			$('body').removeClass('offScroll');	
			$('.search-btn').stop().fadeIn(100);	
			$('.lang').show();	
		}
	});

	/*sitemap*/
	$('#sitemapBtn').click(function(){
		$('.sitemap').fadeIn(300);
		$('body').css('overflow','hidden');
		$('.sitemap').find('.navs').find('nav').find('.btn-dep1').eq(0).focus();
	});

	/*modal pop*/
	$('#privacyBtn').click(function(){
		$('#modalTerms').modal();
		$('#modalTerms').css('overflow','hidden');
	});			
	$('#modalTerms .close').click(function(){
		$('#modalTerms').css('overflow','visible');
					$('#privacyBtn').focus();
	});
	$('.modal-backdrop').click(function(){
		$('#modalTerms').css('overflow','visible');
	});

	$('#copyBtn').click(function(){
		$('#modalCopy').modal();
			});

	$('#modalCopy .close').click(function(){
		$('#modalTerms').css('overflow','visible');
		$('#copyBtn').focus();
	});

	/*탑 버튼*/
	$('.top-btn').click(function(){
		$('html,body').animate({scrollTop:0}, 500);
				$('.skip-nav').focus();
	});


})








