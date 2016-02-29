'use strict';
angular.module('kenzanGov')
.controller('MainCtrl',['$location', function ($location) {
  $('.main-content').children().hide();
  var vm = this;
  vm.name = 'Kenzan';
  vm.getData = function(){
      var imgName = $('#img-input').val().toLowerCase(),
          color = $('#color-input').val().toLowerCase(),
          message = $('#msg-input').val(),
          name = $('#name-input').val();

      if(!!imgName && !!color && !!message && !!name){
        $location.path('/template');
        setTimeout(function(){
          getImgClass(imgName);
          getStyles(name, color, message);
        }, 50);
      }else{
        alert('Please fill in all the fields.')
      }
    };

  var getImgClass = function(img){
      if(img== 'providence' || img.includes('prov') || img.includes('iden')){
        $("#template").removeClass('ri-other').addClass('prov');
      }else if(img== 'westerly' || img.includes('west') || img.includes('erl')){
        $("#template").removeClass('ri-other').addClass('westerly');
      }else if(img== 'newport' || img.includes('new') || img.includes('port')){
        $("#template").removeClass('ri-other').addClass('newport');
      }else if(img== 'blackstone' || img.includes('black') || img.includes('ston') || img.includes('bla')){
        $("#template").removeClass('ri-other').addClass('bkstone');
      }else {
        return;
      }
    };
  var getStyles = function(nm, cl, msg){
      setTimeout(function(){
        $('.main-content').show().fadeIn('slow');
      }, 100);

      setTimeout(function(){
        var name, message, color;
        $('#k-logo').show();
        $('.main-content').children().show();
        setTimeout(function(){
          var elm = $(".main-content > h1")
          elm.text('Welcome ' + nm).show().css({'color': cl, 'textTransform': 'capitalize', 'margin-top': '-1vh'}).addClass('animated bounceInLeft');
          name = elm[0].innerText;
        }, 1000);
        setTimeout(function(){
          $(".main-content > h3").text('Live Coding At Kenzan').show().addClass('animated bounceInRight');
        }, 2000);
        setTimeout(function(){
          $(".main-content > h2").text(msg).css({'color': cl, 'textTransform': 'capitalize'}).show().addClass('animated bounceInUp');
          color = cl;
          message = msg;
          generateSpeech(name)
        }, 3000);
      }, 800);
    };
  var generateSpeech = function (elm){
      var elmClass = $('#template').attr('class'), place;
      if(elmClass.includes('prov')){
        place = 'Providence';
      }else if(elmClass.includes('newport')){
        place = 'Newport';
      }else if(elmClass.includes('bkstone')){
        place = 'blackstone';
      }else if(elmClass.includes('west')){
        place = 'westerly';
      }else{
        place = 'rhode island'
      }
      var messageString = elm + ' that picture of  '+ place + ' looks great. The kenzan team is very happy to have you here.';
      new Promise(function executor(success, fail){
        var msg = new SpeechSynthesisUtterance(messageString);
        msg.rate = .92;
        msg.voice = 'Veena';
        msg.onEnd = function(){
          success(event);
        };
        speechSynthesis.speak(msg);
      });
    };
}]);
