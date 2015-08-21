/* 
 * index.js
 * Goes with index.html and index.css
 */
$(window).scroll(function(){
    var pos = $(window).scrollTop(),
        level = $('#cover-end').offset().top;
        
    console.log('pos: '+pos + ' | level: '+level);
    if(pos < level) $('#nav').addClass('navbar-transparent');
    else $('#nav').removeClass('navbar-transparent');
});

$('a').click(function(e){ 
    e.preventDefault(); 
    var url = $(this).attr('href'); 
    window.open(url, '_blank');
});
