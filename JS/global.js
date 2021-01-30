
function includeJS(incFile) {document.write('<script type="text/javascript" src="' + incFile + '"></script>'); }

includeJS('https://code.jquery.com/jquery-latest.js');


     // MOBILE FULL WIDTH NAV

    var navStatus = 'closed';

    // Animated hamburger button

    function toggleHamburger() {

        $("#hamburger-menu").toggleClass("open");
    }

    function openNav() {
      document.getElementById("mobileNav").style.width = "100%";
      document.getElementsByClassName("overlay")[0].classList.add('blurred');
      document.getElementsByTagName("body")[0].style.overflow = "hidden";
      toggleHamburger();
    }

    function closeNav() {
      document.getElementById("mobileNav").style.width = "0%";
        document.getElementsByClassName("overlay")[0].classList.remove('blurred');
        document.getElementsByTagName("body")[0].style.overflow = "initial";
        toggleHamburger();
        setTimeout( function () {
            hideNav();
        }, 2000);
            
        }

    function hideNav () {
        document.getElementsByTagName("nav")[0].classList.remove('nav-down');
        document.getElementsByTagName("nav")[0].classList.add('nav-up');
        document.getElementById("hamburger-menu").classList.add('d-none');
    }
    

    function toggleNav() {
        if (navStatus == 'open') {
            closeNav();
            navStatus = 'closed';
        }

        else if (navStatus == 'closed') {
            openNav();
            navStatus = 'open';

        }
    }

    // Check if touch device

    function isTouchSupported() {
        var msTouchEnabled = window.navigator.msMaxTouchPoints;
        var generalTouchEnabled = "ontouchstart" in document.createElement("div");
     
        if (msTouchEnabled || generalTouchEnabled) {
            return true;
        }
        return false;
    }

    

    // fixed position mobile fix
    $(window).scroll(function() {

        var scrolledY = $(window).scrollTop();
        
        { if (($(window).width() < 992) && !(isTouchSupported()))
                $('#approach-wrapper2').css('background-position', '00' - scrolledY/4 + 'px');
                // console.log(scrolledY);
        }

        { if (isTouchSupported())
                $('#approach-wrapper2').css('background-position', '0px ' + (100 + (scrolledY / 1.2)) + 'px');
        }

        // console.log(scrolledY);

        // Hide Approach photo credit when scrolled down

        if (scrolledY > 1500) {
            $('.approach-credit').css('display', 'none');
            $('#approach-wrapper2').css('display', 'none');
        }

        else {
            $('.approach-credit').css('display', 'block');
            $('#approach-wrapper2').css('display', 'block');
        }
    });

        // HIDE NAV WHILE SCROLLING DOWN
        var didScroll;
        var lastScrollTop = 0;
        var delta = 5;
        var navbarHeight = $('nav').outerHeight();

        $(window).scroll(function(event){
            didScroll = true;
        });

        setInterval(function() {
            if (didScroll) {
                hasScrolled();
                didScroll = false;
            }
        }, 250);

        function hasScrolled() {
            var st = $(this).scrollTop();
            
            // Make sure they scroll more than delta
            if(Math.abs(lastScrollTop - st) <= delta)
                return;
            
            // If they scrolled down and are past the navbar, add class .nav-up.
            // This is necessary so you never see what is "behind" the navbar.
            if (st > lastScrollTop && st > navbarHeight){
                // Scroll Down
                $('nav').removeClass('nav-down').addClass('nav-up');
                $('#hamburger-menu').addClass('d-none');
                    
            } else {
                // Scroll Up
                if(st + $(window).height() < $(document).height()) {
                    $('nav').removeClass('nav-up').addClass('nav-down');
                    
                    if ($(window).width() < 992) {
                        $('#hamburger-menu').removeClass('d-none');
                    }
                }
            }
            
            lastScrollTop = st;
        }


        //Parallax script
        // $('.img-parallax').each(function(){

        // var scrolledY = $(window).scrollTop();
        //   var img = $(this);
        //   var imgParent = $(this).parent();
        //   function parallaxImg () {
        //     var speed = img.data('speed');
        //     var imgY = imgParent.offset().top;
        //     var winY = $(this).scrollTop();
        //     var winH = $(this).height();
        //     var parentH = imgParent.innerHeight();


        //     // The next pixel to show on screen      
        //     var winBottom = winY + winH;

        //     // If block is shown on screen
        //     if (winBottom > imgY && winY < imgY + parentH) {
        //       // Number of pixels shown after block appear
        //       var imgBottom = ((winBottom - imgY) * speed);
        //       // Max number of pixels until block disappear
        //       var imgTop = winH + parentH;
        //       // Porcentage between start showing until disappearing
        //       var imgPercent = (0 + ((imgBottom / imgTop) * 100)) + (speed * 50);
        //     }
        //     img.css({
        //       top: 0 + '%',
        //       transform: 'translate(0%, ' + imgPercent + '%)'
        //     });
        //     console.log(imgPercent);
        //   }
        //   $(document).on({
        //     scroll: function () {
        //       parallaxImg();
        //     }, ready: function () {
        //       parallaxImg();
        //     }
        //   });
        // });

        // Get current year for copyright

        document.getElementById("current-year").innerHTML = new Date().getFullYear();
