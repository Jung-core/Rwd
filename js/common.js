/*! Image Map Resizer (imageMapResizer.min.js ) - v1.0.10 - 2019-04-10
 *  Desc: Resize HTML imageMap to scaled image.
 *  Copyright: (c) 2019 David J. Bradshaw - dave@bradshaw.net
 *  License: MIT
 */

!function(){"use strict";function r(){function e(){var r={width:u.width/u.naturalWidth,height:u.height/u.naturalHeight},a={width:parseInt(window.getComputedStyle(u,null).getPropertyValue("padding-left"),10),height:parseInt(window.getComputedStyle(u,null).getPropertyValue("padding-top"),10)};i.forEach(function(e,t){var n=0;o[t].coords=e.split(",").map(function(e){var t=1==(n=1-n)?"width":"height";return a[t]+Math.floor(Number(e)*r[t])}).join(",")})}function t(e){return e.coords.replace(/ *, */g,",").replace(/ +/g,",")}function n(){clearTimeout(d),d=setTimeout(e,250)}function r(e){return document.querySelector('img[usemap="'+e+'"]')}var a=this,o=null,i=null,u=null,d=null;"function"!=typeof a._resize?(o=a.getElementsByTagName("area"),i=Array.prototype.map.call(o,t),u=r("#"+a.name)||r(a.name),a._resize=e,u.addEventListener("load",e,!1),window.addEventListener("focus",e,!1),window.addEventListener("resize",n,!1),window.addEventListener("readystatechange",e,!1),document.addEventListener("fullscreenchange",e,!1),u.width===u.naturalWidth&&u.height===u.naturalHeight||e()):a._resize()}function e(){function t(e){e&&(!function(e){if(!e.tagName)throw new TypeError("Object is not a valid DOM element");if("MAP"!==e.tagName.toUpperCase())throw new TypeError("Expected <MAP> tag, found <"+e.tagName+">.")}(e),r.call(e),n.push(e))}var n;return function(e){switch(n=[],typeof e){case"undefined":case"string":Array.prototype.forEach.call(document.querySelectorAll(e||"map"),t);break;case"object":t(e);break;default:throw new TypeError("Unexpected data type ("+typeof e+").")}return n}}"function"==typeof define&&define.amd?define([],e):"object"==typeof module&&"object"==typeof module.exports?module.exports=e():window.imageMapResize=e(),"jQuery"in window&&(window.jQuery.fn.imageMapResize=function(){return this.filter("map").each(r).end()})}();

// modal
! function(t) {
    var n = {
            show: !0,
            backdrop: !0,
            backdropClick: !0,
            keyboard: !0,
            autoPosition: !0,
            dialogMarginTop: 20,
            width: null,
            top: null,
            left: null
        },
        o = {
            BACKDROP: "modal-backdrop",
            OPEN: "modal-open",
            FADE: "fade",
            IN: "in"
        },
        i = {
            MODAL: ".modal",
            DIALOG: ".modal-dialog",
            CONTENT: ".modal-content",
            DATA_TOGGLE: '[data-toggle="modal"]',
            DATA_DISMISS: '[data-dismiss="modal"]'
        };
    t.fn.modal = function(e) {
        function s() {
            //var n = t(window).height(),
			var n = t(window).height(),
                o = r.find(i.DIALOG).height(),
                e = n / 2 - o / 2;
            e < g.settings.dialogMarginTop && (e = g.settings.dialogMarginTop), g.settings.top && (e = g.settings.top), t(i.DIALOG).css({
                marginTop: e
            })
        }

        function a() {
            t(document).off("focusin").on("focusin", function(n) {
                f === n.target || t(f).has(n.target).length || f.focus()
            })
        }

        function d() {
            t(document).find("." + o.BACKDROP).length || t(h).appendTo(document.body)
        }

        function c() {
			backdropClickEvt();
            t("." + o.BACKDROP).remove(), h = null
        }

        function u() {
            //t(document.body).addClass(o.OPEN), 
			console.log('open');
			$('.modal').css('overflow','hidden');
			$('body').css('overflow','hidden');
			
			d(), r.show(), g.settings.width && t(i.DIALOG).css({
                width: g.settings.width,
                marginLeft: "auto",
                marginRight: "auto"
            }), t(i.DIALOG).css({
                marginLeft: g.settings.left
            }), g.settings.autoPosition && s(), a(), r.focus()
        }

        function l() {
            t(document.body).removeClass(o.OPEN), c(), r.hide(), t(i.DIALOG).css("margin-top", ""), t(document).off("focusin");
			$('.modal').css('overflow','visible');			
			$('body').css('overflow','visible');
        }
        if (0 === this.length) return this;
        if (this.length > 1) return this.each(function() {
            t(this).modal(e)
        }), this;
        var g = {},
            r = this,
            f = r[0],
            h = null,
            m = function() {
                g.settings = t.extend({}, n, e), r.attr("tabindex", "-1"), g.settings.backdrop ? (h = document.createElement("div"), h.className = o.BACKDROP) : h = null, r.on("click", function(t) {
                    //t.target === t.currentTarget && g.settings.backdrop && g.settings.backdropClick && l()
                    t.target === t.currentTarget && g.settings.backdrop && g.settings.backdropClick && l()

					


                }), g.settings.keyboard && t(document.body).on("keydown", function(t) {
                    27 === t.which && l()
                })
            };
        return m(), g.settings.show ? u() : l(), t(window).bind("resize", function() {
            s()
        }), this
    }, t(document).on("click", i.DATA_TOGGLE, function(n) {
        var o = t(this).attr("data-target");
        "A" === this.tagName && n.preventDefault(), t(o).modal();
    }), t(document).on("click", i.DATA_DISMISS, function() {
		
        t(i.MODAL).modal({
            show: !1
        })
		return false;
    })
}(jQuery);

function backdropClickEvt() {	
}

//AOS
$(function() {
  AOS.init({
    duration: 1200
  });

  $('.js-load-more').on('click', function() {
    var $content = $(this).next('.js-more-content');
    
    $content.animate({
      height: 750,
    }, 500);
  });

  onElementHeightChange(document.body, function(){
    AOS.refresh();
  });
});

function onElementHeightChange(elm, callback) {
    var lastHeight = elm.clientHeight
    var newHeight;
    
    (function run() {
        newHeight = elm.clientHeight;      
        if (lastHeight !== newHeight) callback();
        lastHeight = newHeight;

        if (elm.onElementHeightChangeTimer) {
          clearTimeout(elm.onElementHeightChangeTimer); 
        }

        elm.onElementHeightChangeTimer = setTimeout(run, 200);
    })();
}



//?????????
var loadingYn = 'Y';
var subMenuViewYn = 'N';


//* LNB Navigation */
function activeLNB(id, cnt, n) {
	for(num=1; num<=parseInt(cnt); num++) {
		$("#Um"+num).removeClass("current"); 
		$("#Lm"+num).css("visibility", "hidden"); 
		$("#Lm"+num).css("display", "none"); 
	}
	$("#Um"+n).addClass("current"); 
	$("#"+id).css("visibility", "visible"); //?????? ID??? ??????
	$("#"+id).css("display", "block"); //?????? ID??? ??????
}

function onblueLNB(id) {
	$("#"+id).css("visibility", "hidden");
	$("#"+id).css("display", "none");
}   
/*????????? ????????? ???*/


/*?????? DropDown style*/

//* LNB Navigation */
function activeLNB1(id, cnt, n) {
	$("#Um"+n).addClass("current"); 
 
	for(num=1; num<=parseInt(cnt); num++) {
		if (subMenuViewYn=='N') {
			$("#Lm1"+num).show().animate({height:'200px'},300); 
		}
	}
	if (subMenuViewYn=='N') {
		$('#subMenuBg').slideDown(300);
		$('#lnb1').height('240');
		$('#subMenuBgBottom').css('display','block');
		$('.dimmed').show();
	}
	subMenuViewYn='Y';
	$('#showYn').text(subMenuViewYn);

}

function onblueLNB1(cnt, n) {
	$("#Um"+n).addClass("current"); 
	for(num=1; num<=parseInt(cnt); num++) {
		if (subMenuViewYn=='Y') {
			$("#Lm1"+num).animate({height:'0px'},100); 
		}
	}
	if (subMenuViewYn=='Y') {
		$('#subMenuBg').slideUp(100);
		$('#lnb1').animate({height:'71px'},100);
		$('#subMenuBgBottom').css('display','none');
		$('.dimmed').hide();
	}
	subMenuViewYn='N';
	$('#showYn').text(subMenuViewYn);

}  
/*???????????? style ???*/
function activeLNBM(id, cnt) {
	for(num=1; num<=parseInt(cnt); num++) {
		$("#Lm"+num).css("visibility", "visible"); 
	}
}
function activeLNBM1(id, cnt) {
	for(num=1; num<=parseInt(cnt); num++) {
		$("#Lm1"+num).css("visibility", "visible"); 
	}
}

/* image rollover */
$(document).ready(function() {
   $("img.rollover").mouseover(function() {
	 $(this).attr("src", $(this).attr("src").replace("_off","_on")); 
   });
   $("img.rollover").mouseout(function() {
	 $(this).attr("src", $(this).attr("src").replace("_on", "_off"));
   }); 
});



function getCookie(strName) {
	var strArg = new String(strName + "=");	
	var nArgLen, nCookieLen, nEnd;
	var i = 0, j;	
	nArgLen    = strArg.length;
	nCookieLen = document.cookie.length;	
	if(nCookieLen > 0) {	
		while(i < nCookieLen) {		
			j = i + nArgLen;			
			if(document.cookie.substring(i, j) == strArg) {			
				nEnd = document.cookie.indexOf (";", j);				
				if(nEnd == -1) nEnd = document.cookie.length;				
				return unescape(document.cookie.substring(j, nEnd));			 
			}			
			i = document.cookie.indexOf(" ", i) + 1;
			if (i == 0) break;
		}
	}	
	return("");
}

function setCookie( name, value, expiredays ) {
	var todayDate = new Date();
	todayDate.setDate( todayDate.getDate() + expiredays );
	document.cookie = name + "=" + escape( value ) + "; path=/; expires=" + todayDate.toGMTString() + ";"
}

function deleteCookie(cookieName){
    var expireDate = new Date();
    expireDate.setDate(expireDate.getDate() - 1);
    document.cookie = cookieName + "= " + "; expires=" + expireDate.toGMTString();
}

function closeWinPop(getID, dd){ 
	if ($('#popWin'+getID).is(':checked') == true) {
		setCookie('WP'+getID, "done" ,dd );
	}
	window.close();
}
function closeLayerPop(getID, dd){ 
	if ($('#popLayer'+getID).is(':checked') == true) {
		setCookie('LP'+getID, "done" ,dd );
	}
	$("#layer_popup"+getID).hide();
	$(".popupBg").hide();
	$('body').css('overflow-y', 'auto');
}


//????????? ?????? ??????
function openLayer(IdName, tpos, lpos){
	$('#bgClose').css('height', $(document).height()+'px');
	$('#bgClose').css('display', 'block');

	var pop = document.getElementById(IdName);
	var scrollPos = ($(document).scrollTop());
	pop.style.display = "block";
	if (tpos=='') {
		var iHeight = ($(window).height() - $('#'+IdName).outerHeight())/2;
		pop.style.top = (iHeight+scrollPos) + "px";
	} else {
		pop.style.top = tpos + "px";
	}
	if (lpos=='') {
		var iWidth = ($(window).width() - $('#'+IdName).outerWidth())/2;
		pop.style.left = iWidth + "px";
	} else {
		pop.style.left = lpos + "px";
	}
}

//????????? ?????? ??????
function closeLayer(IdName){
	var pop = document.getElementById(IdName);
	pop.style.display = "none";
	$('#bgClose').css('display', 'none');
}

function layerPopViewEnd(v) {
	openLayer('popView','','');
}

//????????? ????????????
function centerLayer(divid) {
	var pop = document.getElementById(divid);
	var scrollPos = ($(document).scrollTop());

	var iHeight = ($(window).height() - $('#'+divid).outerHeight())/2;
	var iWidth = ($(window).width() - $('#'+divid).outerWidth())/2;
	pop.style.top = (iHeight+scrollPos) + "px";
	pop.style.left = iWidth + "px";
}

function fnOpenLayer(IdName){
	$('#'+IdName).show();
	var posTop = ($(window).height() - $('#'+IdName+' .pop_contents').height())/2;
	var posLeft = ($(window).width() - $('#'+IdName+' .pop_contents').width())/2;

	$('#'+IdName+' .pop_contents').css({'top':posTop+'px' , 'left':posLeft+'px'});
	$('body').css('overflow','hidden');
}
function fnCloseLayer(IdName){
	$('#'+IdName).hide();
	$('body').css('overflow','auto');
}






// //???????????? ??????
// function getVersionIE () { 
// 	var word; 
// 	var version = "N/A"; 

// 	var agent = navigator.userAgent.toLowerCase(); 
// 	var name = navigator.appName; 

// 	// IE old version ( IE 10 or Lower ) 
// 	if ( name == "Microsoft Internet Explorer" ) word = "msie "; 

// 	else { 
// 		// IE 11 
// 		if ( agent.search("trident") > -1 ) word = "trident/.*rv:"; 

// 		// IE 12  ( Microsoft Edge ) 
// 		else if ( agent.search("edge/") > -1 ) word = "edge/"; 
// 	} 

// 	var reg = new RegExp( word + "([0-9]{1,})(\\.{0,}[0-9]{0,1})" ); 

// 	if (  reg.exec( agent ) != null  ) version = RegExp.$1 + RegExp.$2; 
// 	return version; 
// } 


// function alertJs(msg, f, callFun, funData) {
// 	var param='';
// 	if (f!='') {
// 		alertBoxFocus(msg, f)
// 	} else {
// 		alertBox(msg, callFun, funData);
// 	}
// }

// function goUrl(v) {
// 	location.href=v.url;
// }

// //alert??? ?????? ??????
// function alertBox(txt, callbackMethod, jsonData){
//     modal({
//         type: 'alert',
//         title: '??????',
//         text: txt,
//         callback: function(result){
//             if(callbackMethod){
//                 callbackMethod(jsonData);
//             }
//         }
//     });
// }
 
// function alertBoxFocus(txt, obj){
//     modal({
//         type: 'alert',
//         title: '??????',
//         text: txt,
//         callback: function(result){
//             $('#'+obj).focus();
// 			$(window).scrollTop($('#'+obj).offset().top - 250);
//         }
//     });
// }
 
    
// function confirmBox(txt, callbackMethod, jsonData){
//     modal({
//         type: 'confirm',
//         title: '??????',
//         text: txt,
//         callback: function(result) {
//             if(result){
//                 callbackMethod(jsonData);
//             }
//         }
//     });
// }
 




