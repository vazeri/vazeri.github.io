//Telly - Responsive Resume & Portfolio Theme v1.0
//Copyright 2014 8Guild.com
//All scripts for Resume Theme

/*On Page Loading*/
var sidebarWrap = $('.sidebar-wrap-left, .sidebar-wrap-right');
var sidebar = $('.sidebar');
var socialLinks = $('.social-links > div > a');
var heading = $('.sidebar h1, .sidebar h3');
$(window).load(function() {
	$('#spinner').fadeOut();
	$('#preloader').delay(300).fadeOut('slow');
	sidebar.width($('.sidebar-wrap-left, .sidebar-wrap-right').width());
	sidebar.height($('.sidebar img').height());
	sidebarWrap.height($('.sidebar').height());
	socialLinks.height($('.social-links > div > a').width());
	setTimeout(function(){heading.addClass('fadeInDown');},200);
});
$(window).resize(function() {
	sidebar.width($('.sidebar-wrap-left, .sidebar-wrap-right').width());
	sidebar.height($('.sidebar img').height());
	sidebarWrap.height($('.sidebar').height());
	socialLinks.height($('.social-links > div a').width());
});

/*Checking if it's touch device we disable some functionality due to inconsistency*/
if (Modernizr.touch) { 
	$('*').removeClass('animated');
}

/*Document Ready*/
$(document).ready(function(e) {
	
	//INTERNAL ANCHOR LINKS SCROLLING (NAVIGATION)
	$('.scroll-up').click(function(){
    $("html, body").animate({ scrollTop: 0 }, 1000, 'easeInOutQuart');
    return false;
	});
	$(".scroll-top-40").click(function(event){		
		event.preventDefault();
		$('html, body').animate({scrollTop:$(this.hash).offset().top - 40}, 1000, 'easeInOutQuart');
	});
	$(".scroll").click(function(event){		
		event.preventDefault();
		$('html, body').animate({scrollTop:$(this.hash).offset().top}, 1000, 'easeInOutQuart');
	});
	
	/*Stucking Navigation Links*/
	$(window).load(function(){
		var navLinks = { 1: 48, 2: 88, 3: 128, 4: 168, 5: 208, 6: 248, 7: 288, 8: 328, 9: 368, 10: 408, 11: 448, 12: 488, 13: 528};
		jQuery.each( navLinks, function( i, val ) {
			$( "#" + i ).scrollToFixed({
				marginTop: val
			});
		});
	});
	
	/*Contact Info Animation*/
	$('#contact-form').waypoint(function(direction) {
		var contacts = $('.contact-details-wrap');
		if(direction === 'down') {
			contacts.removeClass('fadeOutDown');
			contacts.addClass('fadeInUp');
		} else {
			contacts.removeClass('fadeInUp');
			contacts.addClass('fadeOutDown');
		}
	}, { offset: '10%' });
		
	/*Skill Bars Animation*/
	$('.skillset').waypoint(function() {
			$('.indicator').each(function() {
				 var widthAnim = $(this).attr("data-percentage");
				 $(this).css('width', widthAnim + '%');
      });
	}, { offset: '75%' });
	
	/*Swipebox Initialisation*/
	$('.swipebox').swipebox();
	
	/*Feedback Form Validation*/
	$('.contact-form').validate();
	
	/***********Portfolio Filtering**********/
	$('.portfolio-filter a').click(function(e){
			e.preventDefault();
	});
	

	portfolio.init();
	
});/*/Document ready*/


////PORTFOILO FILTERING AND RESPONSIVENESS FUNCTION
var portfolio = (function( $ ) {
  'use strict';

  var $grid = $('.portfolio-items'),
      $filterOptions = $('.portfolio-filter'),
      $sizer = $grid.find('.shuffle__sizer'),

  init = function() {


    // None of these need to be executed synchronously
    setTimeout(function() {
      listen();
      setupFilters();
    }, 100);

    // You can subscribe to custom events. To receive the loading and done events,
    // you must subscribe to them before initializing the plugin, otherwise they will
    // fire before you have subscribed to them
    // shrink, shrunk, filter, filtered, sorted, load, done
    $grid.on('loading.shuffle done.shuffle shrink.shuffle shrunk.shuffle filter.shuffle filtered.shuffle sorted.shuffle layout.shuffle', function(evt, shuffle) {
      // Make sure the browser has a console
      if ( window.console && window.console.log && typeof window.console.log === 'function' ) {
        console.log( 'Shuffle:', evt.type );
      }
    });

    // instantiate the plugin
    $grid.shuffle({
      itemSelector: '.portfolio-item',
      sizer: $sizer
    });

    // Destroy it! o_O
    // $grid.shuffle('destroy');
  },

  // Set up button clicks
  setupFilters = function() {
    var $btns = $filterOptions.children();
    $btns.on('click', function() {
      var $this = $(this),
          isActive = $this.hasClass( 'active' ),
          group = $this.data('group');
					$('.portfolio-filter .active').removeClass('active');
					$this.addClass('active');

      // Filter elements
      $grid.shuffle( 'shuffle', group );
    });

    $btns = null;
  },

  // Re layout shuffle when images load. This is only needed
  // below 768 pixels because the .picture-item height is auto and therefore
  // the height of the picture-item is dependent on the image
  // I recommend using imagesloaded to determine when an image is loaded
  // but that doesn't support IE7
  listen = function() {
    var debouncedLayout = $.throttle( 300, function() {
      $grid.shuffle('update');
    });

    // Get all images inside shuffle
    $grid.find('img').each(function() {
      var proxyImage;

      // Image already loaded
      if ( this.complete && this.naturalWidth !== undefined ) {
        return;
      }

      // If none of the checks above matched, simulate loading on detached element.
      proxyImage = new Image();
      $( proxyImage ).on('load', function() {
        $(this).off('load');
        debouncedLayout();
      });

      proxyImage.src = this.src;
    });

    // Because this method doesn't seem to be perfect.
    setTimeout(function() {
      debouncedLayout();
    }, 500);
  };

  return {
    init: init
  };
}( jQuery ));