var yerOverlay={dom:{},init:function(){jQuery("body").append('<div class="yeroverlay-wrap"><div class="yeroverlay-box"><div class="yeroverlay-content">');yerOverlay.dom.wrap=jQuery(".yeroverlay-wrap");yerOverlay.dom.box=jQuery(".yeroverlay-box");yerOverlay.dom.cont=jQuery(".yeroverlay-content");yerOverlay.dom.wrap.on("click",function(e){yerOverlay.dom.wrap.fadeOut(100);e.stopPropagation()});yerOverlay.dom.box.on("click",function(e){e.stopPropagation()})},zoom:function(){},selector:function(){},form:function(e){typeof e=="undefined"&&(e={});typeof e.path=="undefined"&&(e.path="/");typeof e.selector=="undefined"&&(e.selector="#overlay");yerOverlay.dom.wrap.fadeIn(200);yerOverlay.dom.box.hide();yerOverlay.dom.cont.load(e.path+" "+e.selector,function(){yerOverlay.fitboxsize();yerOverlay.dom.box.fadeIn(200,function(){yerOverlay.formsubmit(e);yerOverlay.closebtn()})})},formsubmit:function(e){yerOverlay.dom.cont.find("form").submit(function(t){t.preventDefault();jQuery(this).css("opacity",.3).find('input[type="submit"]').parent().css("visibility","hidden");var n=jQuery(this),r=n.attr("action");jQuery.post(r+"?ajax=y",n.serialize(),function(t){var n=jQuery(t).find(e.selector);yerOverlay.dom.cont.children().fadeOut(200,function(){jQuery(this).parent().empty().append(n).children().css("opacity",0);yerOverlay.fitboxsize();yerOverlay.dom.cont.children().hide().css("opacity",1).fadeIn(200);yerOverlay.formsubmit(e);yerOverlay.closebtn()})})})},fitboxsize:function(){var e=parseInt(yerOverlay.dom.box.css("padding-top"),10),t=parseInt(yerOverlay.dom.box.css("padding-bottom"),10),n=parseInt(yerOverlay.dom.box.css("margin-top"),10),r=parseInt(yerOverlay.dom.box.css("margin-bottom"),10),i=yerOverlay.dom.box.height(),s=yerOverlay.windowsize(),o=i+e+t+n+r;s.height<o&&yerOverlay.dom.cont.height(s.height-n-r);window.onresize=function(){jQuery(".yeroverlay-box").height(i+e+t);yerOverlay.fitboxsize()}},windowsize:function(){var e={};if(window.innerWidth){e.width=window.innerWidth;e.height=window.innerHeight}else if(document.documentElement&&document.documentElement.clientWidth){e.width=document.documentElement.clientWidth;e.height=document.documentElement.clientHeight}else if(document.body.clientWidth){e.width=document.body.clientWidth;e.height=document.body.clientHeight}return e},closebtn:function(){yerOverlay.dom.box.append('<div class="yeroverlay-close">');yerOverlay.dom.close=yerOverlay.dom.box.find(".yeroverlay-close");yerOverlay.dom.close.on("click",function(e){yerOverlay.dom.wrap.fadeOut(100);e.stopPropagation()})}};