var mywindow = $(window);
var mypos = mywindow.scrollTop();
var up = false;
var newscroll;
mywindow.scroll(function () {
    newscroll = mywindow.scrollTop();
    if (newscroll > mypos && !up) {
        $('.footer').stop().slideToggle();
        up = !up;
        console.log(up);
    } else if(newscroll < mypos && up) {
        $('.footer').stop().slideToggle();
        up = !up;
    }
    mypos = newscroll;
});

$(function(){
  
  $('.awesome-form .input-group input').focusout(function(){
    
    var text_val = $(this).val();
    
    if(text_val === "") {
      
      $(this).removeClass('has-value');
      
    } else {
      
      $(this).addClass('has-value');
      
    }
    
  });
  
});

$(document).on("scroll", function () {
	if ($(document).scrollTop() > 10) {
		$("header").addClass("small");
	} else {
		$("header").removeClass("small");
	}
});

$(function(){
  
  $('.awesome-form .input-group input').focusout(function(){
    
    var text_val = $(this).val();
    
    if(text_val === "") {
      
      $(this).removeClass('has-value');
      
    } else {
      
      $(this).addClass('has-value');
      
    }
    
  });
  
});

$(document).on("scroll", function () {
	if ($(document).scrollTop() > 10) {
		$(".post-sec").addClass("resize");
	} else {
		$(".post-sec").removeClass("resize");
	}
});

/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}