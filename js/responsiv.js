$(function (){
   isNavBarOneHidden = true;
   $('body > header .nav_one .mobile_icon img').click(function (){
       if(isNavBarOneHidden){
           $('body > header .nav_one .nav_bar').fadeIn("slow"); 
           isNavBarOneHidden = false;
       }
        else{
            $('body > header .nav_one .nav_bar').fadeOut("slow"); 
           isNavBarOneHidden = true;
        }
   });
   
   isNavBarThreeHidden = true;
   $('#mobile_nav img').click(function (){
       if(isNavBarThreeHidden){
           $('body > header .nav_three').fadeIn("slow"); 
           isNavBarThreeHidden = false;
       }
        else{
            $('body > header .nav_three').fadeOut("slow"); 
           isNavBarThreeHidden = true;
        }
   });
});
