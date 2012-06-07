/*
 *     jQuery Animulnav Plugin v. 0.1
 *
 *		Copyright 2012, OPS Activity di Marco Olimpi
 *		Licensed under the GPL Version 2 licenses
 */



(function( $ ){

  $.fn.animulnav = function() {
  	
  	// Find the ul element
    var div = this,
    	ul = this.find('ul'),
    	ulPadding = 15;
    	
    //Get the element width and the last li child
    var divWidth = this.width();
	var lastLi = ul.find('li:last-child');	
    
    //Create the animation
    div.mousemove(function(e){
    	var ulWidth = lastLi[0].offsetLeft + lastLi.outerWidth() + ulPadding;
		var left = (e.pageX - div.offset().left) * (ulWidth-divWidth) / divWidth;
		div.scrollLeft(left);
    });

  };
})( jQuery );
