$(function(){
    $('.fa-mug-hot').click(function(){
        $(this).toggleClass('fa-times');
        $('nav').toggleClass('nav-toggle');
    })
    $('nav ul li a').click(function(){
       $('.fa-mug-hot').toggleClass('fa-times');
       $('nav').toggleClass('nav-toggle');
   
    })
   
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
    
    
    
    
   

    window.sr=ScrollReveal();
    sr.reveal('.animate-left',{
    origin:'left',
    duration:1000,
    distance:'25rem',
    delay:300
    }); 
    sr.reveal('.animate-right',{
    origin:'right',
    duration:1000,
    distance:'25rem',
    delay:600
    }); 

    sr.reveal('.animate-top',{
    origin:'top',
    duration:1000,
    distance:'25rem',
    delay:600
}); 

    sr.reveal('.animate-bottom',{
    origin:'bottom',
    duration:1000,
    distance:'25rem',
    delay:600
   }); 


         
        



});