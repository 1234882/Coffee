$(function(){
   
   $('.dot1').click(function(){
       $('.v1').css('display','block');
       $('.v2').css('display','none');
       $('.v3').css('display','none');
   
   });
   $('.dot2').click(function(){
       $('.v2').css('display','block');
       $('.v1').css('display','none');
       $('.v3').css('display','none');
   
   });
   $('.dot3').click(function(){
       $('.v3').css('display','block');
       $('.v1').css('display','none');
       $('.v2').css('display','none');
   
   });
   
   
   
   })