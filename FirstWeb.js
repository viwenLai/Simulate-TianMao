function mOver(obj){
  obj.style.border="1px solid #FF3333";
}

function mOut(obj){
  obj.style.border="1px solid #ddd";
}

$(document).ready(function(){
  $("#gotoTop").hide();
  $(function(){
    $(window).scroll(function(){
      if ($(window).scrollTop() > 100) {
        $("#gotoTop").fadeIn(500);
      } else {
        $("#gotoTop").fadeOut(500);
      }
    });
    $("#gotoTop").click(function(){
      $('body,html').animate({
        scrollTop: 0
      },1000);
      return false;
    });
  });
})
