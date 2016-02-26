'use strict';
angular.module('kenzanGov')
  .controller('MainCtrl',['$location', function ($location) {
    $('.main-content').children().hide();
    var vm = this;
    vm.name = 'Kenzan';

    var getImgClass = function(img){
      if(img.includes('prov') || img.includes('iden')){
        $("#template").removeClass('ri-other').addClass('prov');
      }else if(img.includes('new') || img.includes('port')){
        $("#template").removeClass('ri-other').addClass('newport');
      }else if(img.includes('west') || img.includes('erl')){
        $("#template").removeClass('ri-other').addClass('westerly');
      }else if(img.includes('black') || img.includes('ston') || img.includes('bla')){
        $("#template").removeClass('ri-other').addClass('blackstone');
      }else {
        return;
      }
    };

    var getStyles = function(nm, cl, msg){
      setTimeout(function(){
        $('.main-content').show().fadeIn('slow');
      }, 100);

      setTimeout(function(){
        $('#k-logo').show();
        $('.main-content').children().show();
        setTimeout(function(){
          $(".main-content > h1").text('Welcome ' + nm).show().css({'color': cl, 'textTransform': 'capitalize', 'margin-top': '-1vh'}).addClass('animated bounceInLeft');
        }, 1000);
        setTimeout(function(){
          $(".main-content > h3").text('Live Coding At KENZAN').show().addClass('animated bounceInRight');
        }, 2000);
        setTimeout(function(){
          $(".main-content > h2").text(msg).css({'color': cl, 'textTransform': 'capitalize'}).show().addClass('animated bounceInUp');
        }, 3000);
      }, 800);

    };

    vm.getData = function(){
      var imgName = $('#img-input').val().toLowerCase(),
          color = $('#color-input').val().toLowerCase(),
          message = $('#msg-input').val().toUpperCase(),
          name = $('#name-input').val();

      console.log(name);

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
  }]);
