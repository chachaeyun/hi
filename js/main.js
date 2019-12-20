
$(document).ready(function(){
    $(".depth1>li").mouseover(function(){
        $(this).children(".depth2").stop().slideDown();
    });
    $(".depth1>li").mouseleave(function(){
        $(this).children(".depth2").stop().slideUp();
    });
})


$(function(){

    // BX슬라이더
    $('.bx-slider').bxSlider({
      // 여기에 옵션 설정
      mode: 'horizontal',     // 효과설정
      auto: true,             // 자동재생
      easing: "ease-in-out",  // 가속도(timing-function)
      pause: 4000,            // 정지시간(대기)
      controls: true,        // prev, next 표시/비표시
      pager: true,           // 하단 인디케이터 표시/비표시
      responsive: false,
    });
  
  });


  // main.js
$(function(){
    $('#w_btn').click(function(){
        $('#wear').css('display','block')
        $('#food').removeClass('show')
        $('#treat').removeClass('show')
        // 색
        $('#w_btn').css('color','#614008')
        $('#f_btn').css('color','#666')
        $('#t_btn').css('color','#666')
        //위로 올라가는거 막는것
        return false;
      });
    $('#f_btn').click(function(){
        $('#food').addClass('show')
        $('#treat').removeClass('show')
        $('#wear').css('display','none')
        // 색
        $('#f_btn').css('color','#614008')
        $('#w_btn').css('color','#666')
        $('#t_btn').css('color','#666')
        return false;
      });
    $('#t_btn').click(function(){
        $('#treat').addClass('show')
        $('#food').removeClass('show')
        $('#wear').css('display','none')
        // 색
        $('#t_btn').css('color','#614008')
        $('#f_btn').css('color','#666')
        $('#w_btn').css('color','#666')
        return false;
      });
    
  });