//sticky menu

$(document).ready(function () {
	var NavY = $('nav').offset().top;

	var stickyNav = function () {
		var ScrollY = $(window).scrollTop();

		if (ScrollY > NavY) {
			$('nav').addClass('sticky');
		} else {
			$('nav').removeClass('sticky');
		}
	};

	stickyNav();

	$(window).scroll(function () {
		stickyNav();
	});
});


//smooth scrolling

$(document).on('click', 'a', function (event) {
	event.preventDefault();
	$('html').animate({
		// scrollTop: $('#about').offset().top
		scrollTop: $($.attr(this, 'href')).offset().top
	}, 800);
	console.log("cos");
});


//show menu


function showMenu() {
	$('.menu button i').toggleClass('icon-menu');
	$('.menu button i').toggleClass('icon-cancel-1');
	$('nav').toggleClass('navClose');
	$('nav').toggleClass('navDisplay');
	$('.social-icon').toggleClass('social-icon-open');
	$('.hamburger-menu').toggleClass('hamburger-menu-none');
}

$('#showMenuBtn').click(showMenu);
$('.hamburger-menu').click(showMenu);


//send email

$(document).ready(function () {
	$("html").on("submit", "#contact_form", function (e) {
		e.preventDefault();
		$("#send_form_status").html('').hide();
		var data = $("#contact_form").serialize();
		$.post("/send_form.php", data, function (res) {
			$("#send_form_status").html(res.msg).show();
			if (res.status == 1) {
				$("#contact_form")[0].reset();
			}
		});
	});
});
