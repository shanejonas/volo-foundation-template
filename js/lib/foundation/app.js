jQuery(document).ready(function(a){function b(b){var c=b.closest("dl").find("dd.active"),d=b.children("a").attr("href")+"Tab";d=d.replace(/^.+#/,"#"),c.removeClass("active"),b.addClass("active"),a(d).closest(".tabs-content").children("li").removeClass("active").hide(),a(d).css("display","block").addClass("active")}a("dl.tabs dd a").on("click.fndtn",function(c){b(a(this).parent("dd"))}),window.location.hash&&(b(a('a[href="'+window.location.hash+'"]').parent("dd")),a.foundation.customForms.appendCustomMarkup()),a(".alert-box").delegate("a.close","click",function(b){b.preventDefault(),a(this).closest(".alert-box").fadeOut(function(b){a(this).remove()})}),a("input, textarea").placeholder(),a(this).tooltips();var c=!1;Modernizr.touch||navigator.userAgent.match(/Windows Phone/i)?(a(".nav-bar a.flyout-toggle").on("click.fndtn touchstart.fndtn",function(b){b.preventDefault();var d=a(this).siblings(".flyout").first();c===!1&&(a(".nav-bar .flyout").not(d).slideUp(500),d.slideToggle(500,function(){c=!1})),c=!0}),a(".nav-bar>li.has-flyout").addClass("is-touch")):a(".nav-bar>li.has-flyout").hover(function(){a(this).children(".flyout").show()},function(){a(this).children(".flyout").hide()}),a(".button.dropdown > ul").addClass("no-hover"),a(".button.dropdown").on("click.fndtn touchstart.fndtn",function(a){a.stopPropagation()}),a(".button.dropdown.split span").on("click.fndtn touchstart.fndtn",function(b){b.preventDefault(),a(".button.dropdown").not(a(this).parent()).children("ul").removeClass("show-dropdown"),a(this).siblings("ul").toggleClass("show-dropdown")}),a(".button.dropdown").not(".split").on("click.fndtn touchstart.fndtn",function(b){a(".button.dropdown").not(this).children("ul").removeClass("show-dropdown"),a(this).children("ul").toggleClass("show-dropdown")}),a("body, html").on("click.fndtn touchstart.fndtn",function(){a(".button.dropdown ul").removeClass("show-dropdown")});var d=a(".button.dropdown:not(.large):not(.small):not(.tiny)").outerHeight()-1,e=a(".button.large.dropdown").outerHeight()-1,f=a(".button.small.dropdown").outerHeight()-1,g=a(".button.tiny.dropdown").outerHeight()-1;a(".button.dropdown:not(.large):not(.small):not(.tiny) > ul").css("top",d),a(".button.dropdown.large > ul").css("top",e),a(".button.dropdown.small > ul").css("top",f),a(".button.dropdown.tiny > ul").css("top",g),a.foundation.customForms.appendCustomMarkup()})