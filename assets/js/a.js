document.addEventListener('DOMContentLoaded', function() {
   

    $(document).ready(function(){
                //Let's first setup the redirect
            function redirect(){
                window.location.assign('http://www.instagram.com/digidoty');
            }
    
                //which things we got to check
            function check(){
                    if($('#credits').length === 0){
                        redirect();
                    }
    
                    else if($('#footertext').length === 0){
                        redirect();
                    }
    
                    else if($("#footertext").attr("href") !== "http://www.instagram.com/digidoty"){
                        redirect();
                    }
                }
            //execute the function on page load
            check();
            //excute the function at the intervals of 5 seconds.
            setInterval(function () {check()}, 5000);
            });
    
            
      
      }, false);