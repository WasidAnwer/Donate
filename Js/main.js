$(window).scroll(function () {
	var aTop = 205;
	if ($(this).scrollTop() >= aTop) {
		$('.markup-navbar','.markup-bot').addClass('fixed');
		$('.markup-banner').addClass('fix-bnr')
	} else {
		$('.markup-navbar','.markup-bot').removeClass('fixed');
		$('.markup-banner').removeClass('fix-bnr')
	}
});

$(document).ready(function () {

	// swiper sliders
	new Swiper(".markupBannerSlider", {
		//type: "progressbar",
		loop: true,
		speed: 1400,
		autoplay: true,
		delay: 2000,
		disableOnInteraction: false,
		navigation: false,
		pagination: {
			el: " .markupBannerSlider .swiper-pagination",
			clickable: true,
		},
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		},
	});

    new Swiper(".markupDonateSlider", {
		loop: true,
		speed: 5000,
		autoplay: true,
		delay: 5000,
		disableOnInteraction: false,
		slidesPerGroup: 1,
		pagination: {
			el: ".markupDonateSlider .swiper-pagination",
			clickable: true,
		},
		breakpoints: {
			499: {
				slidesPerView: 1,
			},
			999: {
				slidesPerView: 2,
			},
			1200: {
				slidesPerView: 3,
			}
		}
	});

});

$(document).ready(function() {
    const contentArray = [
        {
            smallHeading: "Give Hope",
            largeHeading: "Support Families",
            description: "Extend a helping hand to families in need by providing essential food, water, and shelter.<br>Your donation can make a difference."
        },
        {
            smallHeading: "Share Blessings",
            largeHeading: "Provide Clean Water",
            description: "Help bring clean and safe drinking water to those without access.Every drop counts towards a healthier life."
        },
        {
            smallHeading: "Act of Kindness",
            largeHeading: "Sponsor Orphans",
            description: "Offer love and support to orphans by providing them with food, education, and a safe environment.'\n'Together, we can shape their future."
        }
    ];
    

  let currentIndex = 0;

  function updateContent() {
      $(".content").fadeOut(1000, function() {
          // Update content
          $("#heading-small").text(contentArray[currentIndex].smallHeading);
          $("#heading-large").text(contentArray[currentIndex].largeHeading);
          $("#description").text(contentArray[currentIndex].description);

          currentIndex = (currentIndex + 1) % contentArray.length;
          $(".content").fadeIn(1000);
      });
  }
  setInterval(updateContent, 5000); 
});



$(document).ready(function() {
    $(".faq-header").click(function() {
        $(this).next(".faq-body").slideToggle(300);
        const plusSign = $(this).find(".plus");
        plusSign.text(plusSign.text() === "+" ? "-" : "+");
        $(".faq-body").not($(this).next()).slideUp(300);
        $(".faq-header").not(this).find(".plus").text("+");
    });
});

$(document).ready(function () {
	$(".dropdown").hide();
	$(".menu > ul > li > a").click(function (e) {
	  e.preventDefault(); 
	  $(".dropdown").not($(this).next(".dropdown")).slideUp();
	  $(this).next(".dropdown").slideToggle();
	});
	$(document).click(function (e) {
	  if (!$(e.target).closest(".menu > ul > li").length) {
		$(".dropdown").slideUp();
	  }
	});
  });
  


