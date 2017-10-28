// Viewport Checker Animate JS
// v1.0.0 (2017-10-08)
// jQuery Viewport Checker + Animate CSS
// Begin jQuery Viewport Checker + Animate CSS

  // Define Animation Objects
  var animations = [
    {className: '.vpa-bounce', animationClass: 'bounce', hideFirst: false },
    {className: '.vpa-flash', animationClass: 'flash', hideFirst: false },
    {className: '.vpa-pulse', animationClass: 'pulse', hideFirst: false },
    {className: '.vpa-rubber-band', animationClass: 'rubberBand', hideFirst: false },
    {className: '.vpa-shake', animationClass: 'shake', hideFirst: false },
    {className: '.vpa-swing', animationClass: 'swing', hideFirst: false },
    {className: '.vpa-tada', animationClass: 'tada', hideFirst: false },
    {className: '.vpa-wobble', animationClass: 'wobble', hideFirst: false },
    {className: '.vpa-jello', animationClass: 'jello', hideFirst: false },
    {className: '.bounce-in', animationClass: 'bounceIn', hideFirst: true },
    {className: '.bounce-in-left', animationClass: 'bounceInLeft', hideFirst: true },
    {className: '.bounce-in-right', animationClass: 'bounceInRight', hideFirst: true },
    {className: '.bounce-in-down', animationClass: 'bounceInDown', hideFirst: true },
    {className: '.bounce-in-up', animationClass: 'bounceInUp', hideFirst: true },
    {className: '.bounce-out', animationClass: 'bounceOut', hideFirst: false },
    {className: '.bounce-out-left', animationClass: 'bounceOutLeft', hideFirst: false },
    {className: '.bounce-out-right', animationClass: 'bounceOutRight', hideFirst: false },
    {className: '.bounce-out-down', animationClass: 'bounceOutDown', hideFirst: false },
    {className: '.bounce-out-up', animationClass: 'bounceOutUp', hideFirst: false },
    {className: '.fade-in', animationClass: 'fadeIn', hideFirst: true },
    {className: '.fade-in-left', animationClass: 'fadeInLeft', hideFirst: true },
    {className: '.fade-in-right', animationClass: 'fadeInRight', hideFirst: true },
    {className: '.fade-in-up', animationClass: 'fadeInUp', hideFirst: true },
    {className: '.fade-in-down', animationClass: 'fadeInDown', hideFirst: true },
    {className: '.fade-in-left-big', animationClass: 'fadeInLeftBig', hideFirst: true },
    {className: '.fade-in-right-big', animationClass: 'fadeInRightBig', hideFirst: true },
    {className: '.fade-in-down-big', animationClass: 'fadeInDownBig', hideFirst: true },
    {className: '.fade-in-up-big', animationClass: 'fadeInUpBig', hideFirst: true },
    {className: '.fade-out', animationClass: 'fadeOut', hideFirst: false },
    {className: '.fade-out-left', animationClass: 'fadeOutLeft', hideFirst: false },
    {className: '.fade-out-right', animationClass: 'fadeOutRight', hideFirst: false },
    {className: '.fade-out-up', animationClass: 'fadeOutUp', hideFirst: false },
    {className: '.fade-out-down', animationClass: 'fadeOutDown', hideFirst: false },
    {className: '.fade-out-left-big', animationClass: 'fadeOutLeftBig', hideFirst: false },
    {className: '.fade-out-right-big', animationClass: 'fadeOutRightBig', hideFirst: false },
    {className: '.fade-out-down-big', animationClass: 'fadeOutDownBig', hideFirst: false },
    {className: '.fade-out-up-big', animationClass: 'fadeOutUpBig', hideFirst: false },
    {className: '.vpa-flip', animationClass: 'flip', hideFirst: false },
    {className: '.flip-in-x', animationClass: 'flipInX', hideFirst: true },
    {className: '.flip-in-y', animationClass: 'flipInY', hideFirst: true },
    {className: '.flip-out-x', animationClass: 'flipOutX', hideFirst: false },
    {className: '.flip-out-y', animationClass: 'flipOutY', hideFirst: false },
    {className: '.light-speed-in', animationClass: 'lightSpeedIn', hideFirst: true},
    {className: '.light-speed-out', animationClass: 'lightSpeedOut', hideFirst: false },
    {className: '.rotate-in', animationClass: 'rotateIn', hideFirst: true },
    {className: '.rotate-in-down-left', animationClass: 'rotateInDownLeft', hideFirst: true },
    {className: '.rotate-in-down-right', animationClass: 'rotateInDownRight', hideFirst: true },
    {className: '.rotate-in-up-left', animationClass: 'rotateInUpLeft', hideFirst: true },
    {className: '.rotate-in-up-right', animationClass: 'rotateInUpRight', hideFirst: true },
    {className: '.rotate-out', animationClass: 'rotateOut', hideFirst: false },
    {className: '.rotate-out-down-left', animationClass: 'rotateOutDownLeft', hideFirst: false },
    {className: '.rotate-out-down-right', animationClass: 'rotateOutDownRight', hideFirst: false },
    {className: '.rotate-out-up-left', animationClass: 'rotateOutUpLeft', hideFirst: false },
    {className: '.rotate-out-up-right', animationClass: 'rotateOutUpRight', hideFirst: false },
    {className: '.slide-in-left', animationClass: 'slideInLeft', hideFirst: true },
    {className: '.slide-in-right', animationClass: 'slideInRight', hideFirst: true },
    {className: '.slide-in-down', animationClass: 'slideInDown', hideFirst: true },
    {className: '.slide-in-up', animationClass: 'slideInUp', hideFirst: true },
    {className: '.slide-out-left', animationClass: 'slideOutLeft', hideFirst: false },
    {className: '.slide-out-right', animationClass: 'slideOutRight', hideFirst: false },
    {className: '.slide-out-down', animationClass: 'slideOutDown', hideFirst: false },
    {className: '.slide-out-up', animationClass: 'slideOutUp', hideFirst: false },
    {className: '.zoom-in', animationClass: 'zoomIn', hideFirst: true },
    {className: '.zoom-in-left', animationClass: 'zoomInLeft', hideFirst: true },
    {className: '.zoom-in-right', animationClass: 'zoomInRight', hideFirst: true },
    {className: '.zoom-in-down', animationClass: 'zoomInDown', hideFirst: true },
    {className: '.zoom-in-up', animationClass: 'zoomInUp', hideFirst: true },
    {className: '.zoom-out', animationClass: 'zoomOut', hideFirst: false },
    {className: '.zoom-out-left', animationClass: 'zoomOutLeft', hideFirst: false },
    {className: '.zoom-out-right', animationClass: 'zoomOutRight', hideFirst: false },
    {className: '.zoom-out-down', animationClass: 'zoomOutDown', hideFirst: false },
    {className: '.zoom-out-up', animationClass: 'zoomOutUp', hideFirst: false },
    {className: '.vpa-hinge', animationClass: 'hinge', hideFirst: false },
    {className: '.roll-in', animationClass: 'rollIn', hideFirst: true },
    {className: '.roll-out', animationClass: 'rollOut', hideFirst: false },
    {className: '.jack-in-the-box', animationClass: 'jackInTheBox', hideFirst: true }
  ];

  // BEGIN jQUERY VIEWPORT CHECKER + ANIMATE JS Tasks

  // Define the Viewport Checker Animate Function
  function viewportAnimate(animations) {
    console.log(animations.length);
    $.each(animations, function(i, v) {
      console.log(v.className+": "+i);
      // Define Hider Class
      var hideChecker = v.hideFirst;
      var hidden;
      // If Hider = True then Set Hidden Class
      if(hideChecker == true) {hidden = "hidden";} else {hidden = "";}
      // Set jQuery Viewport Checker Based on Animation Child Object Config Settings
      $(v.className).addClass(hidden).viewportChecker({
        classToAdd: 'animated visible '+v.animationClass,
        offset: 200
      });
    }); // end for loop
  } // end Viewport Checker Animate Function

  // Execute the Viewport Checker Animate Function
  viewportAnimate(animations);
