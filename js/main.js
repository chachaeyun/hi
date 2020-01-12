
$(document).ready(function(){
    $(".depth1>li").mouseover(function(){
        $(this).children(".depth2").stop().slideDown();
    });
    $(".depth1>li").mouseleave(function(){
        $(this).children(".depth2").stop().slideUp();
    });
})


$(function(){

    // 카테고리 버튼
    $('.category_btn').click(function(){
      $(this).toggleClass('on');
    })
    $('header, section').click(function(){
      $('.category_btn.on').toggleClass('on');
      return false;
    })
  
    // 카테고리 토글 버튼
    $('.category_btn').click(function(){
      $('#category').slideToggle();
     });
  
    // 다른데 누르면 자동으로 닫히기
    $('header, section').click(function(){
      $('#category').slideUp();
      return false;
    })

    // BX슬라이더
    $('.bx-slider').bxSlider({
      mode: 'horizontal',    
      auto: true,           
      easing: "ease-in-out",  
      pause: 4000,           
      controls: true,        
      pager: true,          
      responsive: false,
      autoHover: true       
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
        $('#f_btn').css('color','#BBBBBB')
        $('#t_btn').css('color','#BBBBBB')
        //위로 올라가는거 막는것
        return false;
      });
    $('#f_btn').click(function(){
        $('#food').addClass('show')
        $('#treat').removeClass('show')
        $('#wear').css('display','none')
        // 색
        $('#f_btn').css('color','#614008')
        $('#w_btn').css('color','#BBBBBB')
        $('#t_btn').css('color','#BBBBBB')
        return false;
      });
    $('#t_btn').click(function(){
        $('#treat').addClass('show')
        $('#food').removeClass('show')
        $('#wear').css('display','none')
        // 색
        $('#t_btn').css('color','#614008')
        $('#f_btn').css('color','#BBBBBB')
        $('#w_btn').css('color','#BBBBBB')
        return false;
      });
    
  });
