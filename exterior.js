$(document).ready(function () {
  $("#btn-1").click(function () {
    $("#text-1").show();
    $("#text-2").hide();
    $("#text-3").hide();
    $("#text-4").hide();
  });

  $("#btn-2").click(function () {
    $("#text-1").hide();
    $("#text-2").show();
    $("#text-3").hide();
    $("#text-4").hide();
  });

  $("#btn-3").click(function () {
    $("#text-1").hide();
    $("#text-2").hide();
    $("#text-3").show();
    $("#text-4").hide();
  });

  $("#btn-4").click(function () {
    $("#text-1").hide();
    $("#text-2").hide();
    $("#text-3").hide();
    $("#text-4").show();
  });


});

$(document).ready(function () {
  $("#toggle-btn1").click(function () {
    $("#text-toggle1").slideToggle("slow");
  });
  $("#toggle-btn2").click(function () {
    $("#text-toggle2").slideToggle("slow");
  });
  $("#toggle-btn3").click(function () {
    $("#text-toggle3").slideToggle("slow");
  });
  $("#toggle-btn4").click(function () {
    $("#text-toggle4").slideToggle("slow");
  });
  $("#toggle-btn5").click(function () {
    $("#text-toggle5").slideToggle("slow");
  });

});