$(function() {
  let s = false;
  let count = 0;

  $(".boundary").mouseover(function() {
    if (s) {
      count += 1;
      $(".boundary").not(".example").addClass("youlose");
      $("#status").text("you loose!!");
    } else {
      count = 0;
      $(".boundary").not(".example").removeClass("youlose");
    }
  });

  $("#end").mouseover(function() {
    if (s && !count) {
      $("#status").text("you win :]");
    } else {
      $("#status").text("ohh sorry,you loose");
    }
    s = false;
  });

  $("#start").click(function() {
    s = true;
    $(".boundary").removeClass("youlose");
    $("#status").text("Game started");
  });

})
