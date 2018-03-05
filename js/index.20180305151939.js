(function(d){var h=[];d.loadImages=function(a,e){"string"==typeof a&&(a=[a]);for(var f=a.length,g=0,b=0;b<f;b++){var c=document.createElement("img");c.onload=function(){g++;g==f&&d.isFunction(e)&&e()};c.src=a[b];h.push(c)}}})(window.jQuery);
$.fn.hasAttr = function(name) { var attr = $(this).attr(name); return typeof attr !== typeof undefined && attr !== false; };


$(document).ready(function() {
r=function(){dpi=window.devicePixelRatio;$('.js').attr('src', (dpi>1) ? 'images/fg-1478.jpg' : 'images/fg-739.jpg');
$('.js-2').attr('src', (dpi>1) ? 'images/result-1532-2.jpg' : 'images/result-766-2.jpg');
$('.js-3').attr('src', (dpi>1) ? 'images/app1-1546.jpg' : 'images/app1-773.jpg');
$('.js-4').attr('src', (dpi>1) ? 'images/app1-1546-2.jpg' : 'images/app1-773-2.jpg');};
if(!window.HTMLPictureElement){r();}
(function(){$('a[href^="#"]').each(function(){$(this).click(function(){var t=this.hash.length>1?$('[name="'+this.hash.slice(1)+'"]').offset().top:0;return $("html, body").animate({scrollTop:t},400),!1})})})();

});