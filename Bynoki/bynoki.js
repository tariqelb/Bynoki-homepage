
$(document).ready(function()
{
       
    /* menu bar dropdown produit*/
    
    $(".dropdown1").click(function(){
        $(this).find(".secondary-menu1").slideToggle("fast");
    });
        /* menu bar dropdown produit click out closing */
        $(document).on("click", function(event)
        {
            var $trigger = $(".dropdown1 ");
            if($trigger !== event.target && !$trigger.has(event.target).length)
            {
                $(".secondary-menu1").slideUp("fast");
            }            
        });       
        /* end menu bar dropdown produit click out closing */

    /* end menu bar dropdown produit*/

    /* menu bar dropdown2 collection */
    $(".dropdown2").click(function(){
        $(this).find(".secondary-menu2").slideToggle("fast");
    });

        /* menu bar dropdown2 collection click out closing */    
        $(document).on("click", function(event)
        {
            var $trigger = $(".dropdown2 ");
            if($trigger !== event.target && !$trigger.has(event.target).length)
            {
                $(".secondary-menu2").slideUp("fast");
            }            
        }); 
        /* end menu bar dropdown2 collection click out closing */ 

    /* end menu bar dropdown2 collection */

    /* toggle mobile dropdown */
    $(function() 
    {
        $(".toggle").unbind().click( function()
        {
            
            if ($(".menu-div").hasClass("active")) 
            {
                $(".menu-div").removeClass("active");
                /*$(".menu-div").slideUp("fast");*/
            }
            else 
            {
                $(".menu-div").addClass("active");
                /*$(".menu-div").slideToggle("fast");*/
            }
        
        })
    }); 
    /* end toggle mobile dropdown */
});




/* slide image start */
        
var slide_index = 1;  
displaySlides(slide_index);  
function nextSlide(n) {  
    displaySlides(slide_index += n);  
}  

function currentSlide(n) {  
    displaySlides(slide_index = n);  
}  

function displaySlides(n) {  
    var i;  
    var slides = document.getElementsByClassName("showSlide");  
    if (n > slides.length) { slide_index = 1 }  
    if (n < 1) { slide_index = slides.length }  
    for (i = 0; i < slides.length; i++) {  
        slides[i].style.display = "none";  
    }
    slides[slide_index - 1].style.display = "block";  
}  
/* slide image end */

/* start video slider */
function videoUrl(vid) 
{
    document.getElementById('video-slider').src = vid;
}
/* end video slider */

/* start next video function */
video_count = 1;
videoPlayer = document.getElementById("video-slider");

function run(){
        video_count++;
        if (video_count == 6) video_count = 1;
        var nextVideo = "./video/video"+video_count+".mp4";
        videoPlayer.src = nextVideo;
        videoPlayer.play();
};
/* end vides slider */