function textAnimation() {

    $('.animate').each(function() {
      var $allMsg = $(this);
      var $wordList = $(this).html().split("");
      $(this).html("");
      $.each($wordList, function(idx, elem) {
          var newEL = $("<span/>").text(elem).css({ opacity: 0 });
          newEL.appendTo($allMsg);
          newEL.delay(idx * 70);
          newEL.animate({ opacity: 1 }, 1100);
      });
    });
  
  setTimeout(function() {
    $("#typewriter").typed({
      strings: ["Hi Beautiful", "this is", "robin singh rana"],
      typeSpeed: 100,
      startDelay: 0,
      backSpeed: 60,
      backDelay: 1000,
      loop: true,
      cursorChar: "",
      contentType: 'html'
    });
  }, 2000)
}

$(window).on("load", function() {
    $('.intro').addClass('visible');
    textAnimation();
});